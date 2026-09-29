// Shared character specifications. Units are "world units": the tall White
// Bear is 2.0 units tall. Both the 2D drawings and the 3D models are generated
// from these numbers so the characters look the same in both styles.
import { clamp, lerp } from '../core/util.js';

export const COLORS = {
  ink: '#2a2321', // outline colour (warm black)
  bearWhite: '#ffffff',
  bearShade: '#e9e4df',
  bearShade2: '#d6cfc9',
  earInner: '#f1dcd6',
  bag: '#1f1b1a',
  tongue: '#f28b9a',
  mouth: '#4a2426',
  blush: '#ff9fb0',
  orange: '#d97757', // Claude orange
  orangeLight: '#eb946f',
  orangeDark: '#b95b3d',
  petInk: '#3a2520',
  eye: '#1c1716',
};

// Catmull-Rom through control points -> dense polyline
function catmull(points, samples = 8) {
  const out = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    for (let s = 0; s < samples; s++) {
      const t = s / samples;
      const t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) =>
        0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

function makeBear(o) {
  // profile control points [y, radius], bottom -> top
  const dense = catmull(o.profile, 10);
  // force monotonic y and clamp radius
  for (let i = 1; i < dense.length; i++) dense[i][0] = Math.max(dense[i][0], dense[i - 1][0] + 1e-5);
  for (const p of dense) p[1] = Math.max(0, p[1]);
  const radiusAt = (y) => {
    if (y <= dense[0][0]) return dense[0][1];
    for (let i = 1; i < dense.length; i++) {
      if (dense[i][0] >= y) {
        const [y0, r0] = dense[i - 1];
        const [y1, r1] = dense[i];
        return lerp(r0, r1, (y - y0) / (y1 - y0));
      }
    }
    return 0;
  };
  return { ...o, dense, radiusAt };
}

// Tall version (~130 cm): long pill-shaped body, head merges into the body.
export const BEAR_TALL = makeBear({
  name: 'tall',
  height: 2.0,
  depth: 0.86, // z scale of the body cross-section
  profile: [
    [0.24, 0.0], [0.245, 0.1], [0.28, 0.235], [0.35, 0.318], [0.47, 0.356], [0.64, 0.358],
    [0.9, 0.336], [1.16, 0.31], [1.42, 0.29], [1.63, 0.276], [1.79, 0.262], [1.87, 0.245],
    [1.935, 0.205], [1.975, 0.14], [1.996, 0.065], [2.0, 0.0],
  ],
  face: { y: 1.725, scale: 1.0 }, // nose position
  ear: { x: 0.172, y: 1.948, r: 0.074 },
  arm: { x: 0.232, y: 1.38, len: 0.74, r: 0.09, splay: 0.09, splay3d: 0.19 },
  leg: { x: 0.135, len: 0.33, r: 0.094 },
  tail: { y: 0.5, r: 0.086 },
  bag: { x: -0.345, y: 0.5, r: 0.14 },
  strap: { sx: 0.2, sy: 1.53, hy: 0.53 },
  bend: { base: 0.45, len: 1.5 },
});

// Short version (~80 cm): chubby, rounder, relatively bigger head.
export const BEAR_SHORT = makeBear({
  name: 'short',
  height: 1.3,
  depth: 0.9,
  profile: [
    [0.17, 0.0], [0.175, 0.12], [0.21, 0.27], [0.28, 0.345], [0.4, 0.375], [0.55, 0.372],
    [0.72, 0.35], [0.88, 0.325], [1.02, 0.3], [1.12, 0.278], [1.2, 0.24], [1.255, 0.18],
    [1.287, 0.1], [1.3, 0.0],
  ],
  face: { y: 1.06, scale: 1.05 },
  ear: { x: 0.2, y: 1.235, r: 0.078 },
  arm: { x: 0.27, y: 0.84, len: 0.42, r: 0.092, splay: 0.14, splay3d: 0.3 },
  leg: { x: 0.15, len: 0.24, r: 0.1 },
  tail: { y: 0.38, r: 0.09 },
  bag: { x: -0.36, y: 0.38, r: 0.13 },
  strap: { sx: 0.22, sy: 0.98, hy: 0.4 },
  bend: { base: 0.3, len: 1.0 },
});

// Claude pet: the orange block critter, rendered smooth (no pixels).
export const PET = {
  width: 0.86,
  height: 0.54,
  depth: 0.6,
  radius: 0.15,
  lift: 0.12, // body bottom above ground (legs underneath)
  leg: { xs: [-0.3, -0.16, 0.16, 0.3], r: 0.046, len: 0.16 },
  arm: { x: 0.43, y: 0.34, len: 0.075, r: 0.068 },
  eye: { x: 0.195, y: 0.065, w: 0.072, h: 0.14 },
  bend: { base: 0.15, len: 0.55 },
};
PET.centerY = PET.lift + PET.height / 2;

/**
 * Deformation shared by the 2D drawings and the 3D vertex shader.
 * P = { squash, bendX, bendZ, twist, base, len }
 * Operates in character-local space (feet at origin, +y up).
 */
export function deform(x, y, z, P) {
  const s = P.squash;
  const inv = 1 / Math.sqrt(Math.max(s, 0.05));
  y *= s;
  x *= inv;
  z *= inv;
  const h = clamp((y - P.base) / P.len, 0, 1.6);
  const a = P.twist * h;
  const ca = Math.cos(a), sa = Math.sin(a);
  const rx = ca * x + sa * z;
  const rz = -sa * x + ca * z;
  const hh = h * h;
  return [rx + P.bendX * hh, y - (P.bendX * P.bendX + P.bendZ * P.bendZ) * hh * 0.35 / P.len, rz + P.bendZ * hh];
}

export const DEFORM_GLSL = /* glsl */ `
uniform float uSquash;
uniform vec2 uBend;
uniform float uTwist;
uniform float uBendBase;
uniform float uBendLen;
uniform mat4 uRoot;
uniform mat4 uRootInv;
vec3 deformPoint(vec3 p){
  float s = uSquash;
  float inv = inversesqrt(max(s, 0.05));
  p.y *= s; p.x *= inv; p.z *= inv;
  float h = clamp((p.y - uBendBase) / uBendLen, 0.0, 1.6);
  float a = uTwist * h;
  float ca = cos(a), sa = sin(a);
  vec3 q = vec3(ca * p.x + sa * p.z, p.y, -sa * p.x + ca * p.z);
  float hh = h * h;
  q.x += uBend.x * hh;
  q.z += uBend.y * hh;
  q.y -= dot(uBend, uBend) * hh * 0.35 / uBendLen;
  return q;
}
`;
