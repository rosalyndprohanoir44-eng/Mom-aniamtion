// Small math / easing / noise toolkit. Everything in the animation is a pure
// function of song time, so these helpers never keep hidden state.

export const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, x) => clamp((x - a) / (b - a));
export const fract = (x) => x - Math.floor(x);
export const TAU = Math.PI * 2;
export const deg = (d) => (d * Math.PI) / 180;
export const mix3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

// ---------------------------------------------------------------- easing
export const E = {
  linear: (t) => t,
  inQuad: (t) => t * t,
  outQuad: (t) => 1 - (1 - t) * (1 - t),
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  outSine: (t) => Math.sin((t * Math.PI) / 2),
  inSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  outBack: (t, s = 1.70158) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
  inBack: (t, s = 1.70158) => (s + 1) * t * t * t - s * t * t,
  outElastic: (t) =>
    t <= 0 ? 0 : t >= 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1,
  outBounce: (t) => {
    const n = 7.5625, d = 2.75;
    if (t < 1 / d) return n * t * t;
    if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
    return n * (t -= 2.625 / d) * t + 0.984375;
  },
  smooth: (t) => t * t * (3 - 2 * t),
};

/** eased progress of t through [a,b] */
export const seg = (t, a, b, ease = E.inOutCubic) => ease(invLerp(a, b, t));

/** 0→1→0 window: rises over [a,a+fin], falls over [b-fout,b] */
export const win = (t, a, b, fin = 0.25, fout = 0.25) =>
  Math.min(fin > 0 ? E.smooth(invLerp(a, a + fin, t)) : t >= a ? 1 : 0,
    fout > 0 ? E.smooth(1 - invLerp(b - fout, b, t)) : t < b ? 1 : 0);

/**
 * Keyframe interpolation. frames = [[time, value, ease?], ...] sorted by time.
 * value may be a number or an array of numbers. `ease` on a frame shapes the
 * segment that *arrives* at that frame.
 */
export function keys(t, frames) {
  if (t <= frames[0][0]) return frames[0][1];
  const last = frames[frames.length - 1];
  if (t >= last[0]) return last[1];
  let i = 1;
  while (frames[i][0] < t) i++;
  const [t0, v0] = frames[i - 1];
  const [t1, v1, ease = E.inOutCubic] = frames[i];
  const k = ease((t - t0) / (t1 - t0));
  if (Array.isArray(v0)) return v0.map((a, j) => a + (v1[j] - a) * k);
  return v0 + (v1 - v0) * k;
}

// ---------------------------------------------------------------- noise
export function hash(n) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
}
export function hash2(a, b) {
  return hash(a * 57.31 + b * 113.97);
}
/** smooth 1D value noise in [-1,1] */
export function noise(x, seed = 0) {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return lerp(hash(i + seed * 101.3), hash(i + 1 + seed * 101.3), u) * 2 - 1;
}
/** fractal noise */
export function fbm(x, seed = 0) {
  return noise(x, seed) * 0.6 + noise(x * 2.07, seed + 7) * 0.3 + noise(x * 4.13, seed + 13) * 0.1;
}
/** mulberry32 seeded RNG for building static things (layouts etc.) */
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** damped spring response to a step at time 0 (for overshooty pops) */
export function spring(t, freq = 3.2, damp = 5.0) {
  if (t <= 0) return 0;
  return 1 - Math.exp(-damp * t) * Math.cos(TAU * freq * t);
}

/** decaying oscillation - handy for wobbles after an impact */
export function wobble(t, freq = 5, damp = 6) {
  if (t < 0) return 0;
  return Math.exp(-damp * t) * Math.sin(TAU * freq * t);
}
