// Math, easing and deterministic noise helpers. The whole film is a pure
// function of time, so nothing here keeps hidden state.

export const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, x) => clamp((x - a) / (b - a));
export const fract = (x) => x - Math.floor(x);
export const TAU = Math.PI * 2;
export const PI = Math.PI;
export const sign = (x) => (x < 0 ? -1 : 1);

export const E = {
  linear: (t) => t,
  inQuad: (t) => t * t,
  outQuad: (t) => 1 - (1 - t) * (1 - t),
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  inQuart: (t) => t * t * t * t,
  inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  outQuint: (t) => 1 - Math.pow(1 - t, 5),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
  inOutExpo: (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  outSine: (t) => Math.sin((t * Math.PI) / 2),
  inSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  outBack: (t, s = 1.70158) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
  inBack: (t, s = 1.70158) => (s + 1) * t * t * t - s * t * t,
  smooth: (t) => t * t * (3 - 2 * t),
  // strike: accelerates into the contact frame, settles in the last 15%
  strike: (t) => (t < 0.85 ? 0.92 * (t / 0.85) ** 2 : 0.92 + 0.08 * (1 - (1 - (t - 0.85) / 0.15) ** 2)),
  // strike: slow start then a very fast snap (anticipation-less whip)
  whip: (t) => (t < 0.35 ? 0.12 * (t / 0.35) : 0.12 + 0.88 * (1 - Math.pow(1 - (t - 0.35) / 0.65, 4))),
};

export const seg = (t, a, b, ease = E.inOutCubic) => ease(invLerp(a, b, t));
export const win = (t, a, b, fin = 0.2, fout = 0.2) =>
  Math.min(fin > 0 ? E.smooth(invLerp(a, a + fin, t)) : t >= a ? 1 : 0,
    fout > 0 ? E.smooth(1 - invLerp(b - fout, b, t)) : t < b ? 1 : 0);

// ---------------------------------------------------------------- noise
export function hash(n) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
}
export const hash2 = (a, b) => hash(a * 57.31 + b * 113.97);
export function noise(x, seed = 0) {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return lerp(hash(i + seed * 101.3), hash(i + 1 + seed * 101.3), u) * 2 - 1;
}
export const fbm = (x, seed = 0) => noise(x, seed) * 0.6 + noise(x * 2.07, seed + 7) * 0.3 + noise(x * 4.13, seed + 13) * 0.1;

export function rng(seed) {
  let a = (seed * 2654435761) >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const wobble = (t, freq = 5, damp = 6) => (t < 0 ? 0 : Math.exp(-damp * t) * Math.sin(TAU * freq * t));

// ---------------------------------------------------------------- 2D vectors
export const v = (x, y) => [x, y];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
export const mul = (a, s) => [a[0] * s, a[1] * s];
export const len = (a) => Math.hypot(a[0], a[1]);
export const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
export const norm = (a) => {
  const l = Math.hypot(a[0], a[1]) || 1;
  return [a[0] / l, a[1] / l];
};
export const rot = (a, ang) => {
  const c = Math.cos(ang), s = Math.sin(ang);
  return [a[0] * c - a[1] * s, a[0] * s + a[1] * c];
};
export const vlerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
export const perp = (a) => [-a[1], a[0]];

/** Keyframe interpolation: frames [[t, value(number|array), ease?], ...] */
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

/** Build a filled tapered ribbon polygon along a polyline. widthAt(s) with s in 0..1 */
export function ribbon(pts, widthAt) {
  const n = pts.length;
  const left = [], right = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let d = norm(sub(b, a));
    const p = perp(d);
    const w = widthAt(i / (n - 1)) / 2;
    left.push([pts[i][0] + p[0] * w, pts[i][1] + p[1] * w]);
    right.push([pts[i][0] - p[0] * w, pts[i][1] - p[1] * w]);
  }
  return left.concat(right.reverse());
}

export function polyPath(ctx, pts, close = true) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  if (close) ctx.closePath();
}

/** Catmull-Rom smoothing of a polyline (returns denser points) */
export function smoothPts(pts, per = 4) {
  if (pts.length < 3) return pts;
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    for (let s = 0; s < per; s++) {
      const t = s / per, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}
