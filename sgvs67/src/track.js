// Smooth character tracks. Keys are resolved to full poses and every numeric
// channel is interpolated with a monotone cubic spline (continuous velocity,
// no overshoot), so motion flows through keyframes instead of stopping at each.
// Turning is a yaw rotation, runs ramp their speed in and out, and hit-stops
// are smooth dips in the flow of time that are paid back right after.
import { BASE, joints } from './rig3.js';
import { POSES, runPose, walkPose } from './poses.js';
import { E, lerp, clamp, TAU, pchipTangents, hermite } from './util.js';

// ------------------------------------------------------------------ time warp
/**
 * events: {stop: [t, hold, rec]} dips the time rate to ~0 for `hold` then
 * catches up over `rec`; {slow: [t0, t1, rate, ramp]} slow motion that is not
 * caught up. Returns W(song time) -> scene time, precomputed at 1 kHz.
 */
export function makeWarp(stops, slows, T1 = 200) {
  const res = 1 / 1000, n = Math.ceil(T1 / res) + 2;
  const rate = new Float64Array(n).fill(1);
  const win = (t, a, rise, hold, fall) => {
    if (t < a || t > a + rise + hold + fall) return 0;
    if (t < a + rise) return E.smooth((t - a) / rise);
    if (t < a + rise + hold) return 1;
    return E.smooth(1 - (t - a - rise - hold) / fall);
  };
  for (const [t0, t1, r, ramp = 0.15] of slows) {
    for (let i = Math.floor((t0 - 0.001) / res); i < n && i * res <= t1 + ramp; i++) {
      if (i < 0) continue;
      const t = i * res;
      const w = Math.min(E.smooth(clamp((t - t0) / ramp)), E.smooth(clamp((t1 + ramp - t) / ramp)));
      rate[i] *= lerp(1, r, w);
    }
  }
  for (const [ts, hold, rec] of stops) {
    const rise = 0.008, fall = 0.035;
    let debt = 0;
    for (let i = Math.floor(ts / res); i < n; i++) {
      const t = i * res;
      if (t > ts + rise + hold + fall) break;
      const w = win(t, ts, rise, hold, fall);
      const d = rate[i] * w * 0.97;
      rate[i] -= d;
      debt += d * res;
    }
    // pay the time back with a smooth bump so later events stay in sync
    const r0 = ts + rise + hold + fall;
    const c = debt / (rec * 2 / Math.PI);
    for (let i = Math.floor(r0 / res); i < n && i * res <= r0 + rec; i++) {
      const u = (i * res - r0) / rec;
      if (u >= 0 && u <= 1) rate[i] += c * Math.sin(Math.PI * u);
    }
  }
  const W = new Float64Array(n);
  for (let i = 1; i < n; i++) W[i] = W[i - 1] + ((rate[i - 1] + rate[i]) / 2) * res;
  const f = (t) => {
    if (t <= 0) return t;
    const x = t / res;
    const i = Math.floor(x);
    if (i >= n - 1) return W[n - 1] + (t - (n - 1) * res);
    return W[i] + (W[i + 1] - W[i]) * (x - i);
  };
  f.inverse = (tau) => {
    if (tau <= 0) return tau;
    let lo = 0, hi = n - 1;
    if (tau >= W[hi]) return (n - 1) * res + (tau - W[hi]);
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (W[m] <= tau) lo = m; else hi = m; }
    return (lo + (tau - W[lo]) / Math.max(1e-9, W[hi] - W[lo])) * res;
  };
  return f;
}

// ------------------------------------------------------------------ keys
// gy = ground level under the actor (rooftops), lay = depth layer (0 = fight
// plane, 1 = the mid building layer), vis = visibility
const CH = ['x', 'h', 'd', 'rot', 'lean', 'head', 'headYaw', 'yaw', 'aBz', 'aFz', 'lBz', 'lFz', 'scale', 'g67', 'club', 'aura', 'gy', 'lay', 'vis'];
const ARR = ['aB', 'aF', 'lB', 'lF'];

function libPose(name) {
  if (typeof name !== 'string') return name || {};
  const p = POSES[name];
  if (!p) throw new Error('unknown pose ' + name);
  return p;
}

/** nearest angle to `ref` that is equivalent to `a` mod 2PI */
const near = (a, ref) => a + TAU * Math.round((ref - a) / TAU);

function resolve(prev, spec, scale) {
  const src = libPose(spec.p);
  const o = { ...prev, aB: [...prev.aB], aF: [...prev.aF], lB: [...prev.lB], lF: [...prev.lF] };
  if (spec.p) {
    const b = BASE();
    for (const k of ['aBz', 'aFz', 'lBz', 'lFz', 'headYaw']) o[k] = b[k];
    o.fB = null; o.fF = null;
    for (const k in src) {
      if (k === 'y') o.h = src.y;
      else if (Array.isArray(src[k])) o[k] = [...src[k]];
      else if (k !== 'front' && k !== 'rot') o[k] = src[k];
    }
    const target = src.rot ?? 0;
    o.rot = near(target, prev.rot || 0);
  }
  for (const k of ['x', 'd', 'rot', 'lean', 'head', 'headYaw', 'scale', 'g67', 'club', 'aura', 'aBz', 'aFz', 'lBz', 'lFz', 'gy', 'lay', 'vis']) if (k in spec) o[k] = spec[k];
  for (const k of ARR) if (k in spec) o[k] = [...spec[k]];
  if ('h' in spec) o.h = spec.h;
  if ('dh' in spec) o.h += spec.dh;
  if ('dx' in spec) o.x = prev.x + spec.dx;
  if ('drot' in spec) o.rot = prev.rot + spec.drot;
  if ('dlean' in spec) o.lean += spec.dlean;
  if ('dhead' in spec) o.head += spec.dhead;
  // facing: explicit yaw wins; dir / front choose the nearest equivalent,
  // and a half turn goes through the camera-facing view unless turn: 'back'
  if ('yaw' in spec) o.yaw = spec.yaw;
  else {
    let target = null;
    if (src.front || spec.front) target = Math.PI / 2 + (spec.back ? Math.PI : 0);
    if ('dir' in spec) target = spec.dir > 0 ? 0 : Math.PI;
    if (src.front && 'dir' in spec) target = Math.PI / 2;
    if (target != null) {
      let y = near(target, prev.yaw);
      if (Math.abs(Math.abs(y - prev.yaw) - Math.PI) < 1e-6) {
        // exactly half a turn: pass through the front (PI/2 mod 2PI) by default
        const mid = (prev.yaw + y) / 2;
        const facesCam = Math.sin(mid) > 0;
        if (facesCam === (spec.turn === 'back')) y = prev.yaw * 2 - y;
      }
      o.yaw = y;
    }
  }
  o.dir = Math.cos(o.yaw) >= 0 ? 1 : -1;
  // planted feet: offsets from the pelvis along the facing direction
  const fwdX = Math.cos(o.yaw);
  const sc = scale * (o.scale ?? 1);
  const fB = 'fB' in spec ? spec.fB : src.fB, fF = 'fF' in spec ? spec.fF : src.fF;
  if (spec.p || 'fB' in spec) o.fB = fB != null ? o.x + fwdX * fB * sc : null;
  if (spec.p || 'fF' in spec) o.fF = fF != null ? o.x + fwdX * fF * sc : null;
  if (spec.air) { o.fB = null; o.fF = null; }
  if (spec.plantB && prev.fB != null) o.fB = prev.fB;
  if (spec.plantF && prev.fF != null) o.fF = prev.fF;
  return o;
}

/** fill FK leg angles for planted keys (so IK <-> FK segments blend) */
function legAnglesAt(o, scale) {
  const sc = scale * (o.scale ?? 1);
  const p = { ...BASE(), ...o, y: o.h * sc, scale: sc };
  const J = joints(p, () => 0);
  if (o.fB != null) o.lB = [...J.legAngB];
  if (o.fF != null) o.lF = [...J.legAngF];
}

function cyclePose(kind, phase, opts) {
  const ph = phase - Math.floor(phase);
  return kind === 'run' ? runPose(ph, 1, !!opts.ninja) : walkPose(ph, opts.menace || 0);
}

/**
 * Smooth key track. frames: [{t, p:'pose', x, dir|yaw, h, jump, interp, ...}]
 * cycle:'run'|'walk' on a frame = travel from the previous key with a gait.
 */
export function keyTrack(frames, start = {}, scale = 1) {
  const K = [];
  let prev = { ...BASE(), h: 0.49, fB: null, fF: null, g67: 0, club: 0, aura: 0, gy: 0, lay: 0, vis: 1, ...start };
  if (start.dir != null && start.yaw == null) prev.yaw = start.dir > 0 ? 0 : Math.PI;
  for (const f of frames) {
    let pose;
    if (f.cycle) {
      pose = resolve(prev, { ...f, p: undefined }, scale);
      const c = cyclePose(f.cycle, 0, f);
      pose = {
        ...pose, ...c, h: f.axis === 'y' ? pose.h : c.y, fB: null, fF: null, lB: [...c.lB], lF: [...c.lF], aB: [...c.aB], aF: [...c.aF],
        rot: 'rot' in f ? f.rot : near(0, prev.rot || 0),
      };
    } else {
      pose = resolve(prev, f, scale);
    }
    legAnglesAt(pose, scale);
    K.push({ t: f.t, pose, f });
    prev = pose;
  }
  K.sort((a, b) => a.t - b.t);
  const n = K.length;
  const ts = K.map((k) => k.t);
  // spline tangents per channel
  const tang = {};
  const val = (k, c) => {
    if (c.length === 3 && (c[2] === '0' || c[2] === '1') && ARR.includes(c.slice(0, 2))) return k.pose[c.slice(0, 2)][+c[2]];
    return k.pose[c] ?? 0;
  };
  const chans = [...CH, ...ARR.flatMap((a) => [a + '0', a + '1'])];
  for (const c of chans) tang[c] = pchipTangents(ts, K.map((k) => val(k, c)));
  // feet: splines over each run of consecutive planted keys
  for (const f of ['fB', 'fF']) {
    tang[f] = new Float64Array(n);
    let i = 0;
    while (i < n) {
      if (K[i].pose[f] == null) { i++; continue; }
      let j = i;
      while (j + 1 < n && K[j + 1].pose[f] != null) j++;
      const sub = pchipTangents(ts.slice(i, j + 1), K.slice(i, j + 1).map((k) => k.pose[f]));
      for (let q = i; q <= j; q++) tang[f][q] = sub[q - i];
      i = j + 1;
    }
  }
  const find = (t) => {
    let lo = 0, hi = n - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (ts[m] <= t) lo = m; else hi = m; }
    return lo;
  };
  const fn = (t) => {
    if (t <= ts[0]) return { ...K[0].pose };
    if (t >= ts[n - 1]) return { ...K[n - 1].pose };
    const i = find(t);
    const A = K[i], B = K[i + 1];
    const hs = Math.max(1e-6, B.t - A.t);
    const s = clamp((t - A.t) / hs);
    const mode = B.f.interp || 'spline';
    const ch = (c) => {
      const y0 = val(A, c), y1 = val(B, c);
      if (mode === 'linear') return lerp(y0, y1, s);
      if (mode === 'step') return s < 1 ? y0 : y1;
      if (mode === 'ease') return lerp(y0, y1, E.inOutSine(s));
      // 'in': accelerate into the key (strikes land at full speed), 'out': burst away from it
      if (mode === 'in') return lerp(y0, y1, s * s * (1.6 - 0.6 * s));
      if (mode === 'out') return lerp(y0, y1, 1 - (1 - s) * (1 - s) * (1.6 - 0.6 * (1 - s)));
      return hermite(y0, y1, tang[c][i], tang[c][i + 1], hs, s);
    };
    const p = { ...A.pose };
    for (const c of CH) p[c] = ch(c);
    for (const a of ARR) p[a] = [ch(a + '0'), ch(a + '1')];
    // feet: spline while planted at both ends, lifted in an arc when stepping
    for (const f of ['fB', 'fF']) {
      if (A.pose[f] != null && B.pose[f] != null) {
        p[f] = mode === 'spline' ? hermite(A.pose[f], B.pose[f], tang[f][i], tang[f][i + 1], hs, s) : lerp(A.pose[f], B.pose[f], s);
        const dd = Math.abs(B.pose[f] - A.pose[f]);
        if (dd > 0.04) p[f + 'y'] = Math.sin(Math.PI * s) * Math.min(0.1, dd * 0.35) * scale;
      } else p[f] = null;
    }
    if (B.f.jump) p.h += 4 * B.f.jump * s * (1 - s);
    // travelling gait between A and B, speed ramped in and out
    if (B.f.cycle) {
      const r = Math.min(B.f.ramp ?? 0.22, hs / 3);
      const vert = B.f.axis === 'y';
      const sc = scale * (p.scale ?? 1);
      // vertical runs (up a wall) travel in body heights (h), otherwise in x
      const D = vert ? (B.pose.h - A.pose.h) * sc : B.pose.x - A.pose.x;
      const V = D / (hs - r);
      const tt = t - A.t;
      // distance travelled with smoothstep speed ramps at both ends
      const ramp = (u) => u * u * u * (1 - u / 2); // integral of 3u^2-2u^3 (times r)
      let dist;
      if (tt < r) dist = V * r * ramp(tt / r);
      else if (tt > hs - r) dist = D - V * r * ramp((hs - tt) / r);
      else dist = V * r * 0.5 + V * (tt - r);
      if (vert) p.h = A.pose.h + dist / sc;
      else p.x = A.pose.x + dist;
      const stride = (B.f.stride || (B.f.cycle === 'run' ? 1.05 : 0.62)) * sc;
      const g = cyclePose(B.f.cycle, Math.abs(dist) / stride + (B.f.phase0 || 0), B.f);
      const w = Math.min(E.smooth(clamp(tt / r)), E.smooth(clamp((hs - tt) / r)));
      const mixA = (a, b) => lerp(a, b, w);
      if (!vert) p.h = mixA(p.h, g.y);
      p.lean = mixA(p.lean, g.lean);
      p.head = mixA(p.head, g.head);
      for (const a of ARR) p[a] = [mixA(p[a][0], g[a][0]), mixA(p[a][1], g[a][1])];
      if (w > 0.02) { p.fB = null; p.fF = null; }
      if (p.fB == null && A.pose.fB != null && B.pose.fB == null) p.fB = null;
    }
    p.dir = Math.cos(p.yaw) >= 0 ? 1 : -1;
    return p;
  };
  return { t0: ts[0], t1: ts[n - 1], fn, keys: K };
}

// ------------------------------------------------------------------ actors
let SEED = 1;
export class Actor {
  constructor(name, opts = {}) {
    this.name = name;
    this.scale = opts.scale || 1;
    this.thick = opts.thick || 1;
    this.seed = opts.seed ?? (SEED++ * 7.31) % 97;
    this.track = null;
    this.overrides = [];
  }
  setTrack(tr) { this.track = tr; }
  rawPose(t) { return this.track.fn(t); }
  pose(t, groundAt) {
    const p = { ...this.rawPose(t) };
    for (const o of this.overrides) if (t >= o.t0 && t <= o.t1) o.fn(p, t);
    // 6-7 gesture: palms bob up and down in turn, one bob per beat (140 BPM)
    if (p.g67 > 0.001) {
      const w = Math.sin(this.phase ? this.phase(t) : TAU * (140 / 60) * t);
      p.aB = [p.aB[0] + 0.12 * w * p.g67, p.aB[1] + 0.5 * w * p.g67];
      p.aF = [p.aF[0] - 0.12 * w * p.g67, p.aF[1] - 0.5 * w * p.g67];
      p.h += 0.012 * Math.abs(w) * p.g67;
    }
    // breathing
    p.h += Math.sin(t * 2.3 + this.seed) * 0.004;
    p.lean += Math.sin(t * 2.3 + this.seed + 0.6) * 0.01;
    const s = (p.scale ?? 1) * this.scale;
    // on a rooftop (gy > 0) the ground is flat; on the plaza it has craters
    const gy = p.gy || 0;
    p.ground = gy > 0.001 ? () => gy : (x) => groundAt(x, t);
    p.y = p.h * s + p.ground(p.x);
    p.scale = s;
    p.thick = this.thick;
    return p;
  }
  joints(t, groundAt) {
    const p = this.pose(t, groundAt);
    return joints(p, p.ground);
  }
}
