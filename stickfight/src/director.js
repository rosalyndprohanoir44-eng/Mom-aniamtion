// Story builder. Everything is authored in song time; build() creates the
// scene-time warp (hit-stops, slow motion), converts every event, builds the
// actors, simulates knock-backs in time order (so craters exist before bodies
// land in them) and returns the data the renderer needs.
import { Actor, keyClip, makeWarp, orbitClip, simulateFlight, b } from './track.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { E, clamp, lerp, keys, noise } from './util.js';

export { b };

const val = (o) => (typeof o === 'function' ? o() : o);

export class Story {
  constructor({ duration }) {
    this.duration = duration;
    this.stops = [];
    this.slows = [];
    this.world = new World();
    this.fx = new FX();
    this.girl = new Actor('girl', { kind: 'girl', scale: 0.94, seed: 3 });
    this.gk = [];
    this.foes = [];
    this.geoQ = [];
    this.fxQ = [];
    this.later = [];
    this.camKeys = [];
    this.shakes = [];
    this.shocks = [];
    this.faceKeys = [[-1, { eye: 'soft', blush: 0 }]];
    this.subs = [];
    this.callouts = [];
    this.ghostWin = [];
    this.windSmearWin = [];
    this.noSmearWin = [];
    this.lbKeys = [[0, 0]];
    this.fadeKeys = [[0, 0]];
    this.sfx = [];
    this.title = { t0: 99, tStamp: 99, tSub: 99, tOut: 99, kanji: '', en: '' };
    this.seal = { t: 1e9, x: 0.86, y: 0.8 };
    this.flowerWin = [-1, 1e9];
    this.poster = 0;
    this.W = (t) => t;
  }
  T(t) { return this.W(t); }
  stop(t, dur = 0.08, rec = 0.1) { this.stops.push([t, dur, rec]); }
  slow(t0, t1, rate) { this.slows.push([t0, t1, rate]); }

  // ------------------------------------------------------------ girl
  g(t, p, o = {}) { this.gk.push({ ...o, t, p: p || undefined }); return this; }
  gRun(t, x, o = {}) { this.gk.push({ ...o, t, cycle: 'run', x }); return this; }
  gWalk(t, x, o = {}) { this.gk.push({ ...o, t, cycle: 'walk', x }); return this; }
  face(t, eye, blush = 0, mouth) { this.faceKeys.push([t, { eye, blush, mouth }]); return this; }
  ghost(t0, t1) { this.ghostWin.push([t0, t1]); }
  windSmear(t0, t1) { this.windSmearWin.push([t0, t1]); }
  noSmear(t0, t1) { this.noSmearWin.push([t0, t1]); }
  foe(opts = {}) { const f = new Foe(this, opts); this.foes.push(f); return f; }

  // ------------------------------------------------------------ deferred world / fx (song time)
  crater(t, x, R, o = {}) { this.geoQ.push(() => this.world.addCrater(this.T(t), x, R, o)); }
  crack(t, x, d, ang, len, o = {}) { this.geoQ.push(() => this.world.addCrack(this.T(t), x, d, ang, len, undefined, o.grow ?? 0.25, o.width ?? 1)); }
  debris(t, o) { this.fxQ.push(() => this.world.addDebris(this.T(t), val(o))); }
  dust(t, o) { this.fxQ.push(() => this.world.addDust(this.T(t), val(o))); }
  gust(t, o) { this.fxQ.push(() => this.world.addGust(this.T(t), { ...val(o), dur: (val(o).dur ?? 0.8) })); }
  windVortex(t0, t1, x, strength = 2, radius = 1.2) { this.fxQ.push(() => this.world.vortices.push({ t0: this.T(t0), t1: this.T(t1), x, strength, radius })); }
  prop(t, o) { this.later.push(() => this.world.addProp({ ...val(o), t: this.T(t), gone: o.gone != null ? this.T(o.gone) : Infinity })); }
  rock(t, o) { this.fxQ.push(() => { const v = val(o); this.world.addRock({ ...v, t: this.T(t), gone: v.gone != null ? this.T(v.gone) : undefined }); }); }
  spark(t, o) { this.later.push(() => this.fx.spark(this.T(t), val(o))); }
  wisps(t, o) { this.later.push(() => this.fx.gust(this.T(t), val(o))); }
  wisp(t, o) { this.later.push(() => this.fx.wisp(this.T(t), val(o))); }
  slash(t, o) { this.later.push(() => this.fx.slash(this.T(t), val(o))); }
  vortex(t, o) {
    this.later.push(() => {
      const v = val(o);
      this.fx.vortex(this.T(t), { ...v, life: this.T(t + (v.life ?? 1.4)) - this.T(t) });
    });
  }
  burst(t, o) { this.later.push(() => this.fx.burst(this.T(t), val(o))); }
  motes(t, o) { this.later.push(() => this.fx.motes2(this.T(t), val(o))); }
  impact(t, o) { this.fx.impact(t, o); }
  speedLines(t, t1, o) { this.later.push(() => this.fx.speedLines(this.T(t), { ...val(o), t1: this.T(t1) })); }
  after(fn) { this.later.push(fn); }
  /** knock every body lying within R of x at time t (thrown by a blast) */
  shockwave(t, x, R, power = 4, o = {}) { this.shocks.push({ t, x, R, power, ...o }); }

  // ------------------------------------------------------------ presentation (song time)
  cam(t, o, ease = E.inOutSine) { this.camKeys.push({ t, ...o, ease }); return this; }
  cut(t, o) { this.camKeys.push({ t, ...o, cut: true }); return this; }
  /** camera following fn(t) -> {x,y,z}, sampled after build */
  track(t0, t1, fn, step = 1 / 30) {
    this.later.push(() => {
      for (let t = t0; t <= t1 + 1e-6; t += step) this.camKeys.push({ t, ...fn(t), ease: E.linear });
    });
  }
  shake(t, amp, dur = 0.35, freq = 24) { this.shakes.push({ t, amp, dur, freq, seed: this.shakes.length * 3.7 }); }
  say(t0, t1, jp, en, o = {}) { this.subs.push({ t0, t1, jp, en, ...o }); }
  callout(t, kanji, en, side = 'right', o = {}) { this.callouts.push({ t, kanji, en, side, seed: this.callouts.length + 3, ...o }); }
  letterbox(t, v) { this.lbKeys.push([t, v]); }
  fade(t, v) { this.fadeKeys.push([t, v]); }
  sound(t, type, gain = 1, o = {}) { this.sfx.push({ t, type, gain, ...o }); }

  // ------------------------------------------------------------ queries (valid during/after build)
  groundAt = (x, tt) => this.world.groundAt(x, tt);
  gJ(t) { return this.girl.joints(this.T(t), this.groundAt); }
  gP(t, key) { return this.gJ(t)[key]; }

  build() {
    this.W = makeWarp(this.stops, this.slows);
    const T = (t) => this.T(t);
    for (const fn of this.geoQ) fn();
    const gk = this.gk.map((k) => ({ ...k, t: T(k.t) })).sort((a, c) => a.t - c.t);
    this.girl.add(keyClip(gk, {}, this.girl.seed, this.girl.scale));
    for (const f of this.foes) f.buildKeys();
    // knock-backs in time order
    const all = [];
    for (const f of this.foes) for (const k of f.knocks) all.push([k, f]);
    for (const sw of this.shocks) all.push([sw, null]);
    all.sort((a, c) => a[0].t - c[0].t);
    for (const [k, f] of all) {
      if (f) { f.doKnock(k); continue; }
      // blast: re-launch bodies already lying nearby
      const tau = this.T(k.t);
      for (const g of this.foes) {
        if (g.o.boss || g.knocks.every((q) => !q.sim || q.t >= k.t)) continue;
        if (g.a.appear > tau) continue;
        const p = g.a.pose(tau, this.groundAt);
        const d = p.x - k.x;
        if (Math.abs(d) > k.R || p.y > 0.6) continue;
        const side = Math.sign(d || 1);
        const fall = 1 - Math.abs(d) / k.R;
        const kk = { t: k.t + Math.abs(d) * 0.04, vx: side * k.power * (0.5 + fall), vy: k.power * (0.6 + fall * 0.6), spin: -side * 6 };
        g.knocks.push(kk);
        g.doKnock(kk);
      }
    }
    for (const fn of this.fxQ) fn();
    for (const fn of this.later) fn();
    for (const f of this.foes) f.finish();
    this.camKeys.sort((a, c) => a.t - c.t || (a.cut ? 1 : 0) - (c.cut ? 1 : 0));
    this.faceKeys.sort((a, c) => a[0] - c[0]);
    this.lbKeys.sort((a, c) => a[0] - c[0]);
    this.fadeKeys.sort((a, c) => a[0] - c[0]);
    return this.scene();
  }

  scene() {
    const S = this;
    let prev = { x: 0, y: 0.6, z: 300, r: 0 };
    for (const k of S.camKeys) {
      for (const f of ['x', 'y', 'z', 'r']) if (k[f] == null) k[f] = prev[f];
      prev = k;
    }
    const K = S.camKeys;
    const camAt = (t) => {
      if (!K.length) return prev;
      if (t <= K[0].t) return K[0];
      let lo = 0, hi = K.length - 1;
      while (lo < hi) { const m = (lo + hi + 1) >> 1; if (K[m].t <= t) lo = m; else hi = m - 1; }
      const A = K[lo], B = K[Math.min(K.length - 1, lo + 1)];
      if (A === B || t >= B.t || B.cut) return A;
      const k = (B.ease || E.inOutSine)((t - A.t) / (B.t - A.t));
      return { x: lerp(A.x, B.x, k), y: lerp(A.y, B.y, k), z: lerp(A.z, B.z, k), r: lerp(A.r, B.r, k) };
    };
    const inWin = (wins, t, fi = 0.06, fo = 0.12) => {
      let v = 0;
      for (const [a, c] of wins) {
        if (t < a || t > c + fo) continue;
        v = Math.max(v, Math.min(clamp((t - a) / fi), 1 - clamp((t - c) / fo)));
      }
      return v;
    };
    const FK = S.faceKeys.map(([t, f]) => [S.T(t), f]);
    const faceAt = (tau) => {
      let i = -1;
      for (let k = 0; k < FK.length; k++) if (FK[k][0] <= tau) i = k;
      if (i < 0) return FK[0][1];
      const cur = FK[i][1], prv = i > 0 ? FK[i - 1][1] : cur;
      const k = clamp((tau - FK[i][0]) / 0.3);
      return { ...cur, blush: lerp(prv.blush ?? 0, cur.blush ?? 0, k) };
    };
    const ghostT = S.ghostWin.map(([a, c]) => [S.T(a), S.T(c)]);
    const windT = S.windSmearWin.map(([a, c]) => [S.T(a), S.T(c)]);
    const noSmearT = S.noSmearWin.map(([a, c]) => [S.T(a), S.T(c)]);
    const lb = S.lbKeys.map(([a, v]) => [a, v, E.inOutSine]);
    const fd = S.fadeKeys.map(([a, v]) => [a, v, E.inOutSine]);
    return {
      duration: S.duration,
      poster: S.poster,
      W: S.W,
      world: S.world,
      fx: S.fx,
      girl: S.girl,
      enemies: S.foes.map((f) => f.a),
      camera: camAt,
      shake: (t) => {
        let dx = 0, dy = 0, dr = 0;
        for (const s of S.shakes) {
          const u = (t - s.t) / s.dur;
          if (u < 0 || u > 1) continue;
          const a = s.amp * (1 - u) ** 2;
          dx += a * noise(t * s.freq, s.seed);
          dy += a * noise(t * s.freq, s.seed + 11);
          dr += a * 0.0004 * noise(t * s.freq * 0.7, s.seed + 23);
        }
        return [dx, dy, dr];
      },
      faceAt,
      ghostAt: (tau) => inWin(ghostT, tau),
      smearOn: (tau) => inWin(noSmearT, tau, 0.001, 0.001) === 0,
      windSmear: (tau) => inWin(windT, tau) > 0,
      letterbox: (t) => keys(t, lb),
      fadeWhite: (t) => keys(t, fd),
      flowerOn: (tau) => tau >= S.T(S.flowerWin[0]) && tau <= S.T(S.flowerWin[1]),
      girlOn: () => true,
      title: S.title,
      seal: S.seal,
      subs: S.subs,
      callouts: S.callouts,
      sfx: S.sfx,
    };
  }
}

/** an anonymous stickman */
export class Foe {
  constructor(story, o) {
    this.S = story;
    this.o = o;
    this.frames = [];
    this.knocks = [];
    this.orbits = [];
    this.a = new Actor(o.name || 'foe', { scale: o.scale ?? 1, thick: o.thick ?? 1, weapon: o.weapon ? { ...o.weapon } : null, seed: o.seed });
    this.a.tone = o.tone || null;
    this.a.z = o.z ?? 0;
    this.a.front = !!o.front;
    this.start = { x: o.x ?? 0, dir: o.dir ?? -1 };
  }
  at(t, p, o = {}) { this.frames.push({ ...o, t, p: p || undefined }); return this; }
  run(t, x, o = {}) { this.frames.push({ ...o, t, cycle: 'run', x }); return this; }
  walk(t, x, o = {}) { this.frames.push({ ...o, t, cycle: 'walk', x }); return this; }
  /** ragdoll from song time t: {vx, vy, spin, crater:{R, D, debris}} */
  knock(t, v) { this.knocks.push({ t, ...v }); return this; }
  orbit(t, o) { this.orbits.push({ t, ...o }); return this; }
  ash(t, dur = 0.7, dir = [1, 0.25], o = {}) { this.ashSpec = { t, dur, dir, o }; return this; }
  gone(t) { this.goneT = t; return this; }
  appear(t) { this.appearT = t; return this; }

  buildKeys() {
    const S = this.S;
    const fr = this.frames.map((k) => {
      const o = { ...k, t: S.T(k.t) };
      for (const f of ['x', 'h', 'dh']) if (typeof o[f] === 'function') o[f] = o[f]();
      return o;
    }).sort((a, c) => a.t - c.t);
    if (!fr.length) fr.push({ t: -1, p: 'eStand' });
    if (fr[0].x == null) fr[0].x = this.start.x;
    if (fr[0].dir == null) fr[0].dir = this.start.dir;
    this.a.add(keyClip(fr, { x: fr[0].x, dir: fr[0].dir }, this.a.seed, this.a.scale));
    this.a.appear = this.appearT != null ? S.T(this.appearT) : -Infinity;
    if (this.goneT != null) this.a.gone = S.T(this.goneT);
    if (this.a.weapon && this.a.weapon.hide) this.a.weapon.hideT = this.a.weapon.hide.map(([p, q]) => [S.T(p), S.T(q)]);
  }

  doKnock(k) {
    const S = this.S;
    const g = S.groundAt;
    const tau = S.T(k.t);
    if (k.crater) {
      // find where the body first meets the ground, dig the crater there first
      const p = this.a.pose(tau, g);
      const pre = simulateFlight({ t: tau, x: p.x, y: p.y, vx: k.vx, vy: k.vy, spin: k.spin ?? -5, rot: p.rot || 0 }, g);
      const c = pre.contacts[0];
      if (c) {
        const cr = k.crater;
        S.world.addCrater(c.t, c.x + (cr.dx ?? 0), cr.R, cr);
        S.world.addDebris(c.t, { x: c.x, n: cr.debris ?? Math.round(cr.R * 30), speed: 2 + cr.R * 3, up: 3 + cr.R * 3.5, size: 0.05 + cr.R * 0.04, spread: cr.R * 0.6 });
        S.world.addDust(c.t, { x: c.x, n: Math.round(8 + cr.R * 10), ring: true, r: 0.05 + cr.R * 0.03, speed: 1.2 + cr.R * 2.2, life: 0.8 + cr.R * 0.4 });
        S.world.addDust(c.t, { x: c.x, n: 3, r: 0.05 + cr.R * 0.03, speed: 0.8, spread: 0.6, life: 0.8, vy: 0.4, front: true });
        const tSong = invW(S, c.t);
        S.shake(tSong, cr.shake ?? 10 + cr.R * 14, 0.45);
        S.sound(tSong, cr.R > 1 ? 'craterBig' : 'crater', 1);
        k.contact = { t: tSong, x: c.x };
      }
    }
    const sim = this.a.knock(tau, { vx: k.vx, vy: k.vy, spin: k.spin ?? -5, seed: k.seed, restH: k.restH }, g);
    sim.contacts.forEach((c, i) => {
      if (k.crater && i === 0) return;
      const hard = Math.min(1, c.speed / 6);
      S.world.addDust(c.t, { x: c.x, y: c.y + 0.02, n: 2 + Math.round(hard * 3), r: 0.045 + hard * 0.035, speed: 0.6 + hard * 1.1, spread: 0.8, life: 0.6 + hard * 0.3, vx: c.vx * 0.15 });
      if (hard > 0.6) S.world.addDebris(c.t, { x: c.x, n: Math.round(hard * 4), speed: 1.4, up: 2.2, size: 0.03, spread: 0.3 });
      S.sound(invW(S, c.t), i === 0 ? 'body' : 'bodySoft', 0.45 + hard * 0.55);
    });
    const last = sim.contacts[sim.contacts.length - 1];
    if (last && Math.abs(last.vx) > 1.5) {
      for (let tt = last.t + 0.03; tt < sim.tEnd; tt += 0.08) {
        const s = this.a.rawPose(tt);
        S.world.addDust(tt, { x: s.x, y: g(s.x, tt), n: 1, r: 0.04, speed: 0.35, spread: 0.6, life: 0.5, stagger: 0.02 });
      }
    }
    k.sim = sim;
  }

  finish() {
    const S = this.S;
    const g = S.groundAt;
    for (const o of this.orbits) {
      const tau = S.T(o.t);
      const p = this.a.pose(tau, g);
      if (o.maxDist != null && Math.abs(p.x - o.cx) > o.maxDist) continue;
      this.a.add(orbitClip(tau, { x: p.x, y: p.y, rot: p.rot, dir: p.dir }, o, this.a.seed));
    }
    if (this.ashSpec) {
      const { t, dur, dir, o } = this.ashSpec;
      S.fx.addAsh(this.a, S.T(t), S.T(t + dur) - S.T(t), dir, (tt) => this.a.joints(tt, g), (x, y, tt) => S.world.windAt(x, y, tt), o);
    }
  }
}

/** approximate inverse of the warp (scene -> song time), for sound/shake events */
export function invW(S, tau) {
  let lo = tau - 4, hi = tau + 4;
  for (let i = 0; i < 44; i++) {
    const m = (lo + hi) / 2;
    if (S.W(m) < tau) lo = m; else hi = m;
  }
  return (lo + hi) / 2;
}
