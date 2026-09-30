// Camera: smooth keys (monotone cubic per channel), trauma-style shake,
// zoom punches, and parallax layers (each layer has its own drift and scale).
import { pchipTangents, hermite, noise, clamp, E } from './util.js';

export const W = 1920, H = 1080;

/** parallax layers: p = horizontal drift, py = vertical drift, s = scale, oy = ground lift */
export const LAYERS = {
  sky: { p: 0, py: 0, s: 1, ox: 0, oy: 0 },
  skyline: { p: 0.07, py: 0.1, s: 0.42, ox: 0, oy: 3.6 },
  far: { p: 0.28, py: 0.32, s: 0.56, ox: 0, oy: 2.3 },
  mid: { p: 0.8, py: 0.84, s: 0.8, ox: 0, oy: 1.05 },
  fight: { p: 1, py: 1, s: 1, ox: 0, oy: 0 },
  fore: { p: 1.22, py: 1.15, s: 1.18, ox: 0, oy: -0.55 },
};

export function makeCamera(keys, shakes, punches) {
  const K = [...keys].sort((a, b) => a.t - b.t);
  const ts = K.map((k) => k.t);
  const ch = {};
  for (const c of ['x', 'y', 'z', 'r']) {
    const vals = K.map((k) => (c === 'z' ? Math.log(k.z) : k[c] ?? 0));
    ch[c] = { vals, m: pchipTangents(ts, vals) };
  }
  const n = K.length;
  const at = (t) => {
    if (!n) return { x: 0, y: 1, z: 300, r: 0 };
    const cut = (i) => K[i].cut;
    let i = 0;
    if (t <= ts[0]) i = -1;
    else if (t >= ts[n - 1]) i = n - 1;
    else {
      let lo = 0, hi = n - 1;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (ts[m] <= t) lo = m; else hi = m; }
      i = lo;
    }
    const get = (c) => {
      if (i < 0) return ch[c].vals[0];
      if (i >= n - 1 || cut(i + 1)) return ch[c].vals[i];
      const hs = ts[i + 1] - ts[i];
      const s = clamp((t - ts[i]) / hs);
      // a cut key starts a fresh segment: do not blend its tangent backwards
      const m0 = cut(i) && i > 0 ? ch[c].m[i] : ch[c].m[i];
      return hermite(ch[c].vals[i], ch[c].vals[i + 1], m0, ch[c].m[i + 1], hs, s);
    };
    return { x: get('x'), y: get('y'), z: Math.exp(get('z')), r: get('r') };
  };
  const shake = (t) => {
    let dx = 0, dy = 0, dr = 0;
    for (const s of shakes) {
      const u = (t - s.t) / s.dur;
      if (u < 0 || u > 1) continue;
      const a = s.amp * (1 - u) * (1 - u);
      dx += a * noise(t * s.freq, s.seed);
      dy += a * noise(t * s.freq, s.seed + 11);
      dr += a * 0.00035 * noise(t * s.freq * 0.6, s.seed + 23);
    }
    return [dx, dy, dr];
  };
  const punch = (t) => {
    // quick push-in that settles like a spring
    let k = 0;
    for (const p of punches) {
      const u = t - p.t;
      if (u < 0 || u > 0.9) continue;
      k += p.amt * Math.exp(-u * 7) * Math.sin(Math.min(Math.PI / 2, u * 40) + u * 6) * (u < 0.04 ? E.smooth(u / 0.04) : 1);
    }
    return 1 + k;
  };
  return (t) => {
    const c = at(t);
    const [dx, dy, dr] = shake(t);
    return { ...c, z: c.z * punch(t), sx: dx, sy: dy, r: c.r + dr };
  };
}

/** set the canvas transform for a parallax layer */
export function applyLayer(ctx, cam, L) {
  const Z = cam.z;
  const a = L.s * Z;
  const tx = W / 2 + (L.ox - cam.x * L.p) * Z;
  const ty = H / 2 + (cam.y * L.py - L.oy) * Z;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(W / 2 + cam.sx, H / 2 + cam.sy);
  ctx.rotate(cam.r);
  ctx.translate(-W / 2, -H / 2);
  ctx.transform(a, 0, 0, -a, tx, ty);
}

/** world point of a layer -> screen pixels (ignores roll) */
export function toScreen(cam, L, p) {
  const Z = cam.z;
  return [W / 2 + (L.ox - cam.x * L.p) * Z + p[0] * L.s * Z + cam.sx, H / 2 + (cam.y * L.py - L.oy) * Z - p[1] * L.s * Z + cam.sy];
}

/** screen y (px) of a layer's ground line */
export function groundScreenY(cam, L) {
  return H / 2 + (cam.y * L.py - L.oy) * cam.z + cam.sy;
}

/** visible x-range of a layer (in layer units), with margin */
export function layerView(cam, L, m = 1.3) {
  const Z = cam.z * L.s;
  const cx = (cam.x * L.p - L.ox) / L.s;
  const cy = (cam.y * L.py - L.oy) / L.s;
  return { x0: cx - (W / 2 / Z) * m, x1: cx + (W / 2 / Z) * m, y0: cy - (H / 2 / Z) * m, y1: cy + (H / 2 / Z) * m };
}
