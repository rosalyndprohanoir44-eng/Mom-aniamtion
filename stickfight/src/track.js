// Actors and their timelines. An actor is a list of clips (keyframed moves
// with run/walk cycles, ragdoll flights); poses blend across clip changes.
// Everything is evaluated from scene time, so any frame can be drawn directly.
import { BASE, mix, solveLeg, joints } from './rig.js';
import { POSES, runPose, walkPose, flailPose, lyingPose } from './poses.js';
import { E, lerp, clamp, TAU } from './util.js';

export const GRAVITY = 9.5;
export const OFF = 0.1799;
export const BEAT = 0.5454682;
/** time of beat k of the song */
export const b = (k) => OFF + BEAT * k;

/**
 * Scene-time warp. stops: [t, freeze, recover] hit-stops that catch up again;
 * slows: [t0, t1, rate] slow motion that leaves a permanent lag.
 * Authoring happens in song time; W() maps it to scene time.
 */
export function makeWarp(stops, slows) {
  const S = [...stops].sort((a, c) => a[0] - c[0]);
  return (t) => {
    let w = t;
    for (const [t0, t1, rate] of slows) {
      if (t <= t0) continue;
      w -= (Math.min(t, t1) - t0) * (1 - rate);
    }
    for (const [th, dur, rec] of S) {
      if (t < th) break;
      if (t < th + dur) { w -= t - th; continue; }
      if (t < th + dur + rec) { const k = (t - th - dur) / rec; w -= dur * (1 - k) * (1 - k); }
    }
    return w;
  };
}

function libPose(name) {
  if (typeof name !== 'string') return name || {};
  const p = POSES[name];
  if (!p) throw new Error('unknown pose ' + name);
  return p;
}

const PASS = ['x', 'dir', 'rot', 'lean', 'head', 'aB', 'aF', 'lB', 'lF', 'scale', 'view', 'club'];

function resolvePose(prev, spec, scale = 1) {
  const src = libPose(spec.p);
  const o = { ...prev };
  if (spec.p) {
    o.fB = null; o.fF = null;
    for (const k in src) o[k] = Array.isArray(src[k]) ? [...src[k]] : src[k];
    if (src.y != null) o.h = src.y;
    // library rotations are targets modulo a full turn: pick the nearest
    // equivalent so flips keep going the same way (explicit spec.rot is absolute)
    const target = src.rot ?? 0;
    o.rot = target + TAU * Math.round(((prev.rot || 0) - target) / TAU);
    if (!('view' in src)) o.view = 'side';
  }
  for (const k of PASS) if (k in spec) o[k] = Array.isArray(spec[k]) ? [...spec[k]] : spec[k];
  if ('h' in spec) o.h = spec.h;
  if ('dh' in spec) o.h += spec.dh;
  if ('dlean' in spec) o.lean += spec.dlean;
  if ('dhead' in spec) o.head += spec.dhead;
  // feet: offsets relative to the pelvis become world x at this key
  const fB = 'fB' in spec ? spec.fB : src.fB, fF = 'fF' in spec ? spec.fF : src.fF;
  if (spec.p || 'fB' in spec) o.fB = fB != null ? o.x + o.dir * fB * scale : null;
  if (spec.p || 'fF' in spec) o.fF = fF != null ? o.x + o.dir * fF * scale : null;
  if (spec.plantB && prev.fB != null) o.fB = prev.fB;
  if (spec.plantF && prev.fF != null) o.fF = prev.fF;
  const probe = { ...o, y: o.h * scale, scale };
  if (o.fB != null) o.lB = solveLeg(probe, [o.fB, 0]);
  if (o.fF != null) o.lF = solveLeg(probe, [o.fF, 0]);
  return o;
}

/** the same pose seen facing the other way (a 2D turn): feet/legs relabelled front<->back */
function turned(p, dir) {
  return { ...p, dir, fB: p.fF, fF: p.fB, lB: p.lF, lF: p.lB };
}

function cycle(kind, phase, opts) {
  return kind === 'run' ? runPose(phase - Math.floor(phase), 1, !!opts.ninja) : walkPose(phase - Math.floor(phase), opts.menace || 0);
}

/**
 * Keyframed clip. frames: [{t, p:'pose', x, dir, h, jump, ease, ...}]
 * A frame with cycle:'run'|'walk' moves from the previous key to its x with a gait.
 * bob: beat-synced bounce while holding (enemy crowds).
 */
export function keyClip(frames, start = {}, seed = 0, scale = 1) {
  const full = [];
  let prev = { ...BASE(), h: 0.49, view: 'side', ...start };
  for (const f of frames) {
    let pose;
    let cyc = null;
    if (f.cycle) {
      const x0 = prev.x, x1 = f.x ?? prev.x;
      const dir = f.dir ?? (x1 >= x0 ? 1 : -1);
      const L = (f.stride || (f.cycle === 'run' ? 1.05 : 0.62)) * scale;
      cyc = { kind: f.cycle, x0, x1, dir, L, opts: f };
      const c = cycle(f.cycle, Math.abs(x1 - x0) / L, f);
      pose = { ...prev, ...c, x: x1, dir, h: c.y, rot: TAU * Math.round((prev.rot || 0) / TAU), view: 'side', fB: null, fF: null };
    } else {
      pose = resolvePose(prev, f, scale);
    }
    full.push({
      t: f.t, pose, cyc,
      ease: f.ease || (f.cycle ? E.linear : E.inOutSine),
      jump: f.jump || 0, linearX: !!f.jump || !!f.linearX, lift: f.lift ?? 0.09,
      bob: f.bob ?? 0,
    });
    prev = pose;
  }
  for (let i = 1; i < full.length; i++) if (full[i].t < full[i - 1].t - 1e-9) throw new Error(`keys out of order at ${full[i].t}`);
  const t0 = full[0].t, t1 = full[full.length - 1].t;
  const find = (t) => {
    let lo = 1, hi = full.length - 1;
    while (lo < hi) {
      const m = (lo + hi) >> 1;
      if (full[m].t < t) lo = m + 1; else hi = m;
    }
    return lo;
  };
  const fn = (t) => {
    let p;
    if (t <= t0) p = { ...full[0].pose };
    else if (t >= t1) p = { ...full[full.length - 1].pose };
    else {
      const i = find(t);
      const A = full[i - 1], B = full[i];
      const span = Math.max(1e-6, B.t - A.t);
      const u = (t - A.t) / span;
      if (B.cyc) {
        const c = B.cyc;
        const x = lerp(c.x0, c.x1, u);
        const g = cycle(c.kind, Math.abs(x - c.x0) / c.L, c.opts);
        p = { ...B.pose, ...g, x, dir: c.dir, h: g.y, fB: null, fF: null };
        const bl = Math.min(0.14, span * 0.35);
        if (t - A.t < bl) {
          const k = E.smooth((t - A.t) / bl);
          const q = mix(A.pose, p, k);
          q.h = lerp(A.pose.h, p.h, k);
          p = q;
        }
      } else {
        const k = B.ease(u);
        // turning around: flip at the start of the move instead of halfway through it
        const side = (q) => !q.view || q.view === 'side';
        const Ap = A.pose.dir !== B.pose.dir && side(A.pose) && side(B.pose) ? turned(A.pose, B.pose.dir) : A.pose;
        p = mix(Ap, B.pose, k);
        p.h = lerp(A.pose.h, B.pose.h, k);
        if (B.linearX) p.x = lerp(A.pose.x, B.pose.x, u);
        if (B.jump) p.h += 4 * B.jump * u * (1 - u);
        for (const f of ['fB', 'fF']) {
          if (Ap[f] != null && B.pose[f] != null) {
            const d = Math.abs(B.pose[f] - Ap[f]);
            if (d > 0.05) p[f + 'y'] = Math.sin(Math.PI * k) * B.lift * Math.min(1, d / 0.35);
          }
        }
        const bob = A.bob;
        if (bob) {
          const ph = (t - OFF) / BEAT;
          p.h -= bob * (1 - Math.abs(Math.sin(Math.PI * ph)));
          p.head += bob * 1.5 * Math.sin(Math.PI * 2 * ph);
        }
      }
    }
    // breathing on grounded poses
    if (p.fB != null || p.fF != null) {
      p.h += Math.sin(t * 2.4 + seed) * 0.005;
      p.lean += Math.sin(t * 2.4 + seed + 0.6) * 0.012;
    }
    return p;
  };
  return { t0, t1, fn, blend: 0.1, frames: full };
}

/**
 * Ballistic flight + bounce + slide, pre-simulated so any time can be sampled.
 * start: {t, x, y (pelvis world), vx, vy, spin, rot}
 */
export function simulateFlight(start, groundAt, opts = {}) {
  const dt = 1 / 240;
  let { x, y, vx, vy, spin } = start;
  let rot = start.rot || 0;
  let t = start.t;
  const samples = [];
  const contacts = [];
  let resting = false, restRot = null, bounces = 0;
  const g = opts.gravity || GRAVITY;
  const maxT = start.t + (opts.maxDur || 8);
  const lift = opts.restH ?? 0.05;
  let n = 0;
  while (t < maxT) {
    if (!resting) {
      vy -= g * dt;
      x += vx * dt;
      y += vy * dt;
      rot += spin * dt;
      const gy = groundAt(x, t) + lift;
      if (y <= gy && vy < 0) {
        y = gy;
        const impact = -vy;
        contacts.push({ t, x, y: gy - lift, speed: Math.hypot(vx, impact), vx, impact });
        bounces++;
        if (restRot == null) {
          const cand = [Math.PI / 2, -Math.PI / 2].map((c) => c + TAU * Math.round((rot - c) / TAU));
          restRot = Math.abs(cand[0] - rot) < Math.abs(cand[1] - rot) ? cand[0] : cand[1];
        }
        if (impact > 1.6 && bounces < 3) {
          vy = impact * 0.3;
          vx *= 0.62;
          spin *= 0.4;
        } else {
          vy = 0;
          resting = true;
        }
      }
    } else {
      const f = 5.5 * dt;
      vx = Math.abs(vx) <= f ? 0 : vx - Math.sign(vx) * f;
      x += vx * dt;
      y = groundAt(x, t) + lift;
      rot += (restRot - rot) * Math.min(1, dt * 12);
    }
    if (bounces > 0 && !resting) rot += (restRot - rot) * Math.min(1, dt * 2.5);
    if (n++ % 2 === 0) samples.push([t, x, y, rot, vx, vy]);
    if (resting && vx === 0 && Math.abs(restRot - rot) < 0.01) {
      samples.push([t + dt, x, y, restRot, 0, 0]);
      break;
    }
    t += dt;
  }
  const end = samples[samples.length - 1];
  return { samples, contacts, restRot, t0: start.t, tEnd: end[0], end, dt: samples[1][0] - samples[0][0] };
}

export function sampleSim(sim, t) {
  const S = sim.samples;
  if (t <= S[0][0]) return S[0];
  const last = S[S.length - 1];
  if (t >= last[0]) return last;
  const i = Math.min(S.length - 1, Math.max(1, Math.ceil((t - S[0][0]) / sim.dt)));
  const a = S[i - 1], c = S[i];
  const k = clamp((t - a[0]) / (c[0] - a[0] || 1));
  return a.map((v, j) => v + (c[j] - v) * k);
}

export function ragdollClip(sim, seed, dir) {
  const firstContact = sim.contacts.length ? sim.contacts[0].t : Infinity;
  const side = Math.sin(sim.restRot ?? -Math.PI / 2) > 0 ? 1 : -1;
  return {
    t0: sim.t0, t1: Infinity, blend: 0.12, sim,
    fn: (t) => {
      const s = sampleSim(sim, t);
      const u = t - sim.t0;
      const speed = Math.hypot(s[4], s[5]);
      const settle = clamp((t - firstContact) / 0.3);
      const fl = flailPose(u, seed, speed);
      const twitch = t > sim.tEnd ? Math.max(0, 1 - (t - sim.tEnd) / 1.2) * Math.sin(t * 26) * 0.5 : 0;
      const ly = lyingPose(seed, side, twitch);
      const p = mix({ ...BASE(), ...fl }, { ...BASE(), ...ly }, settle);
      p.x = s[1];
      p.y = s[2];
      p.h = null;
      p.rot = s[3];
      p.dir = dir;
      p.fB = null;
      p.fF = null;
      p.view = 'side';
      p.airborne = true;
      return p;
    },
  };
}

let SEED = 1;
export class Actor {
  constructor(name, opts = {}) {
    this.name = name;
    this.kind = opts.kind || 'enemy';
    this.clips = [];
    this.sims = [];
    this.appear = opts.appear ?? -Infinity;
    this.ashAt = opts.ashAt ?? Infinity;
    this.scale = opts.scale || 1;
    this.thick = opts.thick || 1;
    this.weapon = opts.weapon || null;
    this.seed = opts.seed ?? (SEED++ * 7.31) % 97;
    this.tone = opts.tone || null;
  }
  add(clip) {
    this.clips.push(clip);
    this.clips.sort((a, c) => a.t0 - c.t0);
    return this;
  }
  clipAt(t) {
    const C = this.clips;
    let i = 0;
    for (let k = 0; k < C.length; k++) if (C[k].t0 <= t) i = k;
    return i;
  }
  rawPose(t) {
    const C = this.clips;
    const i = this.clipAt(t);
    const cur = C[i];
    let p = cur.fn(t);
    if (i > 0 && cur.blend > 0 && t < cur.t0 + cur.blend) {
      const pa = C[i - 1].fn(t), pb = p;
      const k = E.inOutSine((t - cur.t0) / cur.blend);
      p = mix(pa, pb, k);
      if (pa.h != null && pb.h != null) p.h = lerp(pa.h, pb.h, k);
      else {
        p.h = null;
        p.y = lerp(pa.y ?? pa.h ?? 0.47, pb.y ?? pb.h ?? 0.47, k);
        p._mixH = [pa.h, pb.h, k];
      }
    }
    return p;
  }
  pose(t, groundAt) {
    const p = { ...this.rawPose(t) };
    if (p.h != null) p.y = p.h * this.scale + groundAt(p.x, t);
    else if (p._mixH) {
      // blending keyed <-> ragdoll: resolve keyed height against the ground
      const [ha, hb, k] = p._mixH;
      const ga = groundAt(p.x, t);
      const ya = ha != null ? ha * this.scale + ga : p.y, yb = hb != null ? hb * this.scale + ga : p.y;
      p.y = lerp(ya, yb, k);
    }
    p.scale = (p.scale ?? 1) * this.scale;
    p.thick = this.thick;
    return p;
  }
  joints(t, groundAt) {
    return joints(this.pose(t, groundAt), (x) => groundAt(x, t));
  }
  /** knock the actor into a ragdoll flight at time t */
  knock(t, { vx = 0, vy = 3, spin = -4, seed, restH }, groundAt) {
    const p = this.pose(t, groundAt);
    const sim = simulateFlight({ t, x: p.x, y: p.y, vx, vy, spin, rot: p.rot || 0 }, groundAt, { restH });
    this.add(ragdollClip(sim, seed ?? this.seed, p.dir));
    this.sims.push(sim);
    return sim;
  }
}

/**
 * Caught in a storm: the body is pulled into a rising spiral around cx.
 * o: {cx, r1, y1, w (rad/s), spin, rise (s)}; starts from the pose at t0.
 */
export function orbitClip(t0, start, o, seed) {
  const r0 = Math.abs(start.x - o.cx);
  const phase = start.x >= o.cx ? 0 : Math.PI;
  return {
    t0, t1: Infinity, blend: 0.25,
    fn: (t) => {
      const age = Math.max(0, t - t0);
      const k = E.inOutSine(clamp(age / (o.rise ?? 1.1)));
      const ang = phase + age * o.w * (0.35 + 0.65 * k) * (o.ccw ? -1 : 1);
      const r = lerp(r0, o.r1, k);
      const fl = flailPose(age, seed, 6);
      const p = { ...BASE(), ...fl };
      p.x = o.cx + Math.cos(ang) * r;
      p.y = lerp(start.y, o.y1, k) + Math.sin(age * 2.7 + seed) * 0.12 * k;
      p.h = null;
      p.rot = (start.rot || 0) * (1 - k) + age * (o.spin ?? 3);
      p.dir = start.dir ?? 1;
      p.depth = Math.sin(ang) * k;
      p.scale = 1 - p.depth * 0.1;
      p.fB = null;
      p.fF = null;
      p.airborne = true;
      p.view = 'side';
      return p;
    },
  };
}
