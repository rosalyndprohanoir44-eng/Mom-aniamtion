// Story builder for the smooth engine. Everything is authored in song time
// (bars/beats at 140 BPM). build() creates the scene-time warp (smooth
// hit-stops and slow motion), converts the actors' keys to spline tracks,
// runs the deferred world/effect events and returns what the renderer needs.
import { Actor, keyTrack, makeWarp } from './track.js';
import { World } from './ground.js';
import { City, bindCity } from './city.js';
import { FX } from './fx.js';
import { Skills } from './skills.js';
import { makeCamera, LAYERS } from './camera.js';
import { E, clamp, lerp, noise } from './util.js';

const val = (o) => (typeof o === 'function' ? o() : o);

export class Story {
  constructor({ duration, bpm = 140 }) {
    this.duration = duration;
    this.bpm = bpm;
    this.beatLen = 60 / bpm;
    this.stops = [];
    this.slows = [];
    this.world = new World();
    this.city = new City();
    bindCity(this.city);
    this.fx = new FX();
    this.sk = new Skills();
    // effects that happen in the mid building layer (drawn with its transform)
    this.midWorld = new World();
    this.midFx = new FX();
    this.midSk = new Skills();
    this.fighters = [];
    this.q = [];
    this.late = [];
    this.camKeys = [];
    this.shakes = [];
    this.punches = [];
    this.caps = [];
    this.callouts = [];
    this.flashes = [];
    this.lbKeys = [[0, 0]];
    this.fadeKeys = [[0, 0]];
    this.skyKeys = [];
    this.tintKeys = [];
    this.focus = [];
    this.sfx = [];
    this.props = [];
    this.held = [];
    this.blows = [];
    this.vs = null;
    this.end = null;
    this.poster = 0;
    this.W = (t) => t;
  }
  /** song time of bar b (0-based), beat k */
  bar(b, k = 0) { return (b * 4 + k) * this.beatLen; }
  T(t) { return this.W(t); }
  /** smooth hit-stop: time dips to ~0 for `hold` then catches up over `rec` */
  stop(t, hold = 0.06, rec = 0.14) { this.stops.push([t, hold, rec]); }
  slow(t0, t1, rate, ramp = 0.15) { this.slows.push([t0, t1, rate, ramp]); }

  // ------------------------------------------------------------ actors
  fighter(name, o = {}) {
    const f = new Fighter(this, name, o);
    this.fighters.push(f);
    return f;
  }

  // ------------------------------------------------------------ deferred world / fx (song time)
  at(fn) { this.q.push(fn); }
  crater(t, x, R, o = {}) { this.q.push(() => this.world.addCrater(this.T(t), val(x), R, o)); }
  crack(t, x, d, ang, len, o = {}) { this.q.push(() => this.world.addCrack(this.T(t), val(x), d, ang, len, undefined, o.grow ?? 0.25, o.width ?? 1)); }
  debris(t, o) { this.late.push(() => { const v = val(o); (v.layer === 'mid' ? this.midWorld : this.world).addDebris(this.T(t), v); }); }
  dust(t, o) { this.late.push(() => { const v = val(o); (v.layer === 'mid' ? this.midWorld : this.world).addDust(this.T(t), v); }); }
  hole(t, block, x, y, r) { this.q.push(() => this.city.addHole(block, this.T(t), x, y - (block.y0 || 0), r)); }
  breakAt(t, block, x, y, r) { this.q.push(() => this.city.addBreak(block, this.T(t), x, y - (block.y0 || 0), r)); }
  collapse(t, block, cutY, x0, x1, dir) { this.q.push(() => this.city.addCollapse(block, this.T(t), cutY - (block.y0 || 0), x0, x1, dir)); }
  spark(t, o) { this.late.push(() => { const v = val(o); (v.layer === 'mid' ? this.midFx : this.fx).spark(this.T(t), v); }); }
  burst(t, o) { this.late.push(() => { const v = val(o); (v.layer === 'mid' ? this.midFx : this.fx).burst(this.T(t), v); }); }
  wisps(t, o) { this.late.push(() => this.fx.gust(this.T(t), val(o))); }
  // skills (positions may be functions evaluated after the tracks exist)
  packet(t0, t1, p0, p1, o = {}) {
    this.late.push(() => this.sk.packet(this.T(t0), this.T(t1), val(p0), val(p1), { ...o, tEnd: o.tEnd != null ? this.T(o.tEnd) : undefined, stick: o.stick }));
  }
  seal(t0, t1, at, R) { this.late.push(() => this.sk.seal(this.T(t0), this.T(t1) - this.T(t0), at, R)); }
  number(t0, t1, from, to, digit, o) { this.late.push(() => this.sk.number(this.T(t0), this.T(t1) - this.T(t0), val(from), val(to), digit, o)); }
  aura(t0, t1, f, pal) { this.late.push(() => this.sk.aura(this.T(t0), this.T(t1), (tau) => f.J(tau), pal, f)); }
  beam(t0, t1, o) { this.late.push(() => this.sk.beam(this.T(t0), this.T(t1), o)); }
  clash(t0, t1, at, R) { this.late.push(() => this.sk.clash(this.T(t0), this.T(t1), at, R)); }
  bolt(t, from, to, o = {}) { this.late.push(() => (o.layer === 'mid' ? this.midSk : this.sk).bolts2(this.T(t), val(from), val(to), o)); }
  orb(t0, t1, at, R) { this.late.push(() => this.sk.orb(this.T(t0), this.T(t1), at, R)); }
  dome(t, x, R, o) { this.late.push(() => this.sk.dome(this.T(t), val(x), R, o)); }
  blast(t, x, y, R, o = {}) { this.late.push(() => this.sk.blast(this.T(t), val(x), val(y), R, { ...o, life: o.life != null ? this.T(t + o.life) - this.T(t) : undefined })); }
  shatter(t, x, y, n, o = {}) { this.late.push(() => (o.layer === 'mid' ? this.midSk : this.sk).shatter(this.T(t), val(x), val(y), n, o)); }
  tag(t0, t1, at, label) { this.late.push(() => this.sk.tag(this.T(t0), this.T(t1), at, label)); }
  after(fn) { this.late.push(fn); }
  /** hawker table etc.: {kind, x, t0, t1, ...} drawn in the fight plane */
  prop(o) { this.props.push(o); }
  /** something carried in a fighter's front hand (song times) */
  hold(f, t0, t1, kind = 'plate') { this.held.push({ f, t0, t1, kind }); }

  // ------------------------------------------------------------ presentation (song time)
  cam(t, o) { this.camKeys.push({ t, ...o }); return this; }
  cut(t, o) { this.camKeys.push({ t, ...o, cut: true }); return this; }
  /** camera keys sampled from fn(t) (after build), box-smoothed over +-smooth */
  follow(t0, t1, fn, o = {}) {
    const step = o.step ?? 0.1, sm = o.smooth ?? 0.12;
    this.late.push(() => {
      for (let t = t0; t <= t1 + 1e-6; t += step) {
        const acc = { x: 0, y: 0, z: 0, r: 0 };
        const n = 5;
        for (let i = 0; i < n; i++) {
          const v = fn(t + (i / (n - 1) - 0.5) * 2 * sm);
          acc.x += v.x / n; acc.y += v.y / n; acc.z += Math.log(v.z) / n; acc.r += (v.r ?? 0) / n;
        }
        this.camKeys.push({ t, x: acc.x, y: acc.y, z: Math.exp(acc.z), r: acc.r, _f: 1 });
      }
    });
  }
  shake(t, amp, dur = 0.35, freq = 22) { this.shakes.push({ t, amp, dur, freq, seed: this.shakes.length * 3.7 + 1 }); }
  punch(t, amt = 0.06) { this.punches.push({ t, amt }); }
  /** screen flash: kind 'neg' | 'white' | 'red' | 'gold' | 'purple'; frames at 60 fps */
  flash(t, kind = 'neg', frames = 2) { this.flashes.push({ t, kind, dur: frames / 60 }); }
  impact(t, seq = [['neg', 2], ['red', 2], ['neg', 1]]) {
    let at = t;
    for (const [k, n] of seq) { this.flash(at, k, n); at += n / 60; }
  }
  say(t0, t1, who, text, o = {}) { this.caps.push({ t0, t1, who, text, ...o }); }
  callout(t, who, zh, en, o = {}) { this.callouts.push({ t, who, zh, en, seed: this.callouts.length + 3, ...o }); }
  letterbox(t, v) { this.lbKeys.push([t, v]); }
  fade(t, v) { this.fadeKeys.push([t, v]); }
  sky(t, top, bottom) { this.skyKeys.push([t, top, bottom]); }
  tint(t, col, a) { this.tintKeys.push([t, col, a]); }
  /** radial focus lines toward a point (fn(t) -> world [x, y] in the fight plane) */
  speed(t0, t1, fn, o = {}) { this.focus.push({ t0, t1, fn, ...o }); }
  sound(t, type, gain = 1) { this.sfx.push({ t, type, gain }); }

  /**
   * a blow: f's limb meets the target at song time t. With align (default) the
   * attacker's keys within +-win of t are shifted in x so the limb lands on the
   * target point (the shift is reported by the checker).
   */
  blow(t, f, limb, target, part = 'chest', o = {}) {
    const b = { t, f, limb, target, part, align: o.align ?? true, win: o.win ?? 0.16, dx: 0, gap: o.gap ?? 0.04, ...o };
    this.blows.push(b);
    return () => this.blowPoint(b);
  }
  targetPoint(target, part, t) {
    if (Array.isArray(target)) return target;
    if (typeof target === 'function') return target();
    const J = target.Js(t);
    const m = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
    if (part === 'head') return [J.head[0], J.head[1]];
    if (part === 'chest') return m(J.neck, J.pelvis, 0.3);
    if (part === 'belly') return m(J.neck, J.pelvis, 0.7);
    if (part === 'legs') return m(J.kneeB, J.kneeF, 0.5);
    if (part === 'shin') return m(m(J.kneeF, J.footF, 0.5), m(J.kneeB, J.footB, 0.5), 0.5);
    if (part === 'guard') return m(J.handB, J.handF, 0.5);
    if (part === 'fist') return [J.handF[0], J.handF[1]];
    if (part === 'foot') return [J.footF[0], J.footF[1]];
    return [J[part][0], J[part][1]];
  }
  blowPoint(b) {
    const J = b.f.Js(b.t);
    return [J[b.limb][0], J[b.limb][1]];
  }

  // ------------------------------------------------------------ build
  build() {
    this.W = makeWarp(this.stops, this.slows, this.duration + 5);
    for (const f of this.fighters) f.build();
    for (const f of this.fighters) {
      // align this fighter's blows onto their targets, then rebuild it
      const mine = this.blows.filter((b) => b.f === f && b.align);
      if (!mine.length) continue;
      for (const b of mine) {
        const L = this.blowPoint(b);
        const T = this.targetPoint(b.target, b.part, b.t);
        const side = Math.sign(T[0] - b.f.Js(b.t - 0.1).pelvis[0]) || 1;
        b.dx = T[0] - L[0] - side * b.gap;
        b.dy = T[1] - L[1];
      }
      // freeze every key's resolved x, then shift the keys around each blow
      for (const fr of f.frames) {
        if (fr._rx == null) continue;
        fr.x = fr._rx;
        delete fr.dx;
      }
      for (const fr of f.frames) {
        // weighted average of the nearby blows' shifts (overlapping windows don't add up)
        let dx = 0, wsum = 0;
        for (const b of mine) {
          const u = Math.abs(fr.t - b.t);
          if (u > b.win) continue;
          const w = u <= b.win * 0.5 ? 1 : 1 - (u - b.win * 0.5) / (b.win * 0.5);
          dx += b.dx * w;
          wsum += w;
        }
        if (wsum > 0) fr.x += dx / Math.max(1, wsum);
      }
      f.build();
    }
    for (const fn of this.q) fn();
    for (const fn of this.late) fn();
    for (const f of this.fighters) f.finish();
    // camera: carry missing fields forward, drop sampled keys that collide with authored ones
    this.camKeys.sort((a, b) => a.t - b.t || (a.cut ? 1 : 0) - (b.cut ? 1 : 0));
    let prev = { x: 0, y: 1, z: 200, r: 0 };
    for (const k of this.camKeys) {
      for (const f of ['x', 'y', 'z', 'r']) if (k[f] == null) k[f] = prev[f];
      prev = k;
    }
    const keys = [];
    for (const k of this.camKeys) {
      const last = keys[keys.length - 1];
      if (last && Math.abs(last.t - k.t) < 1e-4 && !k.cut) { if (!k._f) keys[keys.length - 1] = k; continue; }
      keys.push(k);
    }
    this.camera = makeCamera(keys, this.shakes, this.punches);
    this.cuts = keys.filter((k) => k.cut).map((k) => k.t);
    return this;
  }

  // ------------------------------------------------------------ queries used by the renderer
  lb(t) { return keyed(this.lbKeys, t); }
  fadeAt(t) { return keyed(this.fadeKeys, t); }
  skyAt(t) {
    const K = this.skyKeys;
    if (!K.length) return ['#ffffff', '#f4f1ea'];
    let i = 0;
    while (i + 1 < K.length && K[i + 1][0] <= t) i++;
    if (t <= K[0][0]) return [K[0][1], K[0][2]];
    const A = K[i], B = K[Math.min(K.length - 1, i + 1)];
    if (A === B || t >= B[0]) return [A[1], A[2]];
    const k = E.inOutSine((t - A[0]) / (B[0] - A[0]));
    return [mixHex(A[1], B[1], k), mixHex(A[2], B[2], k)];
  }
  tintAt(t) {
    const K = this.tintKeys;
    if (!K.length) return null;
    let i = -1;
    for (let k = 0; k < K.length; k++) if (K[k][0] <= t) i = k;
    if (i < 0) return null;
    const A = K[i], B = K[i + 1];
    let a = A[2], col = A[1];
    if (B && t > A[0]) {
      const k = E.inOutSine(clamp((t - A[0]) / (B[0] - A[0])));
      a = lerp(A[2], B[2], k);
      col = k < 0.5 ? A[1] : B[1];
      if (A[2] === 0) col = B[1];
      if (B[2] === 0) col = A[1];
    }
    return a > 0.002 ? [col, a] : null;
  }
  flashAt(t) {
    for (const f of this.flashes) if (t >= f.t && t < f.t + f.dur) return f.kind;
    return null;
  }
}

function keyed(K, t) {
  const s = [...K].sort((a, b) => a[0] - b[0]);
  if (t <= s[0][0]) return s[0][1];
  for (let i = 1; i < s.length; i++) {
    if (t < s[i][0]) {
      const k = E.inOutSine((t - s[i - 1][0]) / (s[i][0] - s[i - 1][0]));
      return lerp(s[i - 1][1], s[i][1], k);
    }
  }
  return s[s.length - 1][1];
}

function hex(c) { const n = parseInt(c.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
export function mixHex(a, b, k) {
  const A = hex(a), B = hex(b);
  return '#' + A.map((v, i) => Math.round(lerp(v, B[i], k)).toString(16).padStart(2, '0')).join('');
}

/** a character: keys in song time, converted to a smooth scene-time track */
export class Fighter {
  constructor(S, name, o) {
    this.S = S;
    this.name = name;
    this.kind = o.kind || 'sg';
    this.o = o;
    this.a = new Actor(name, { scale: o.scale ?? 1, seed: o.seed });
    this.frames = [];
    this.faceKeys = [[-1e9, { eye: 'normal' }]];
    this.ghostWin = [];
    this.appearT = o.appear ?? -1e9;
    this.goneT = o.gone ?? 1e9;
    this.start = { x: o.x ?? 0, dir: o.dir ?? 1 };
    this.tone = o.tone || null;
  }
  at(t, p, o = {}) { this.frames.push({ ...o, t, p: p || undefined }); return this; }
  run(t, x, o = {}) { this.frames.push({ ...o, t, cycle: 'run', x }); return this; }
  walk(t, x, o = {}) { this.frames.push({ ...o, t, cycle: 'walk', x }); return this; }
  /** ballistic hop/flight to a key: linear x/h plus a parabola of height `jump` */
  arc(t, p, o = {}) { this.frames.push({ interp: 'linear', ...o, t, p: p || undefined }); return this; }
  face(t, eye, mouth) { this.faceKeys.push([t, { eye, mouth }]); return this; }
  /** 6-7 gesture speed (bobs per second) from song time t on */
  rate(t, hz) { (this.rates ||= []).push([t, hz]); return this; }
  ghost(t0, t1) { this.ghostWin.push([t0, t1]); return this; }
  /** comet trail (song times) */
  trail(t0, t1, col) { (this.trails ||= []).push([t0, t1, col]); return this; }
  build() {
    const S = this.S;
    const fr = this.frames.map((k) => {
      const o = { ...k, t: S.T(k.t), _src: k };
      // positions may depend on other fighters that were built earlier
      for (const f of ['x', 'h', 'dx', 'dh', 'gy', 'yaw']) if (typeof o[f] === 'function') o[f] = o[f]();
      return o;
    }).sort((a, b) => a.t - b.t);
    if (!fr.length) fr.push({ t: -1, p: 'stand' });
    if (fr[0].x == null) fr[0].x = this.start.x;
    if (fr[0].dir == null && fr[0].yaw == null && !fr[0].front) fr[0].dir = this.start.dir;
    const start = { x: fr[0].x, dir: this.start.dir, ...(this.o.start || {}) };
    const tr = keyTrack(fr, start, this.a.scale);
    for (const k of tr.keys) k.f._src._rx = k.pose.x;
    this.a.setTrack(tr);
    this.FK = this.faceKeys.map(([t, f]) => [S.T(t), f]).sort((a, b) => a[0] - b[0]);
    this.ghostT = this.ghostWin.map(([a, b]) => [S.T(a), S.T(b)]);
    if (this.rates) {
      // integrate the bob frequency so speed changes never jump the phase
      const R = [[-1e9, 140 / 60], ...this.rates.map(([t, hz]) => [S.T(t), hz])].sort((a, b) => a[0] - b[0]);
      const acc = [0];
      for (let i = 1; i < R.length; i++) acc.push(acc[i - 1] + R[i - 1][1] * (R[i][0] - Math.max(R[i - 1][0], -10)));
      this.a.phase = (tau) => {
        let i = R.length - 1;
        while (i > 0 && R[i][0] > tau) i--;
        return 2 * Math.PI * (acc[i] + R[i][1] * (tau - Math.max(R[i][0], -10)));
      };
    }
    this.appear = S.T(this.appearT);
    this.gone = S.T(this.goneT);
  }
  finish() {}
  /** joints at scene time tau */
  J(tau) { return this.a.joints(tau, this.S.world.groundAt.bind(this.S.world)); }
  /** joints at song time t (for authoring positions of effects) */
  Js(t) { return this.J(this.S.T(t)); }
  P(t, key = 'pelvis') {
    if (['chest', 'belly', 'legs', 'shin', 'guard', 'fist', 'foot'].includes(key)) return this.S.targetPoint(this, key, t);
    const j = this.Js(t)[key];
    return [j[0], j[1]];
  }
  faceAt(tau) {
    let f = this.FK[0][1];
    for (const [t, v] of this.FK) if (t <= tau) f = v;
    return f;
  }
  ghostAt(tau) {
    let v = 0;
    for (const [a, b] of this.ghostT) {
      if (tau < a || tau > b + 0.12) continue;
      v = Math.max(v, Math.min(clamp((tau - a) / 0.05), 1 - clamp((tau - b) / 0.12)));
    }
    return v;
  }
  visible(tau) { return tau >= this.appear && tau < this.gone; }
}

export { LAYERS, noise };
