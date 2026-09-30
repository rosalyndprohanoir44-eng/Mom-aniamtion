// Stick-figure rig with a real 3D yaw. Poses are authored like a 2D side view
// (angles in the body's sagittal plane) plus small lateral spreads; the whole
// skeleton is then turned by `yaw` and projected orthographically. Turning
// around or spinning is therefore a continuous rotation (the figure passes
// through its front/back view) instead of an instant mirror flip.
//
// Pose fields (angles in radians):
//   x, y, d      pelvis position (world; d = depth toward the camera)
//   yaw          facing: 0 = right (+x), PI = left, PI/2 = toward the camera
//   rot          whole-body pitch in the sagittal plane (+ = forward)
//   lean, head   torso tilt / head tilt (+ = forward)
//   aB, aF       back/front arm [shoulder, elbow]; 0 = hanging, + = forward/up
//   lB, lF       back/front leg [hip, knee]; knee + bends the shin backward
//   aBz ... lFz  lateral spread of each limb (abduction)
//   fB, fF       planted feet: world x of each foot (legs solved by 3D IK)
import { clamp } from './util.js';

export const RIG = {
  torso: 0.34, neck: 0.055, headR: 0.1,
  ua: 0.2, fa: 0.19, th: 0.25, sh: 0.25,
  lw: 0.052, sw: 0.07, hw: 0.045,
};

export const BASE = () => ({
  x: 0, y: 0.47, d: 0, yaw: 0, rot: 0, lean: 0.02, head: 0, headYaw: 0,
  aB: [0.12, 0.25], aF: [0.18, 0.3], lB: [-0.08, 0.12], lF: [0.1, 0.14],
  aBz: 0.1, aFz: 0.1, lBz: 0.04, lFz: 0.04, scale: 1,
});

export const INK = '#141414';

const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul3 = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len3 = (a) => Math.hypot(a[0], a[1], a[2]);
const norm3 = (a) => { const l = len3(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

/** body frame for a pose: canonical (u fwd, v up, z lateral) -> world */
export function frame(p) {
  const s = p.scale ?? 1;
  const cy = Math.cos(p.yaw || 0), sy = Math.sin(p.yaw || 0);
  const cr = Math.cos(p.rot || 0), sr = Math.sin(p.rot || 0);
  const dir = (u, v, z) => {
    const u2 = u * cr + v * sr, v2 = -u * sr + v * cr;
    return [u2 * cy - z * sy, v2, u2 * sy + z * cy];
  };
  const pt = (u, v, z) => {
    const q = dir(u * s, v * s, z * s);
    return [p.x + q[0], p.y + q[1], (p.d || 0) + q[2]];
  };
  return { dir, pt, s };
}

/** world x-position target -> [hip, knee] leg angles (FK equivalent of an IK leg) */
export function legAnglesFromPoints(fr, hip, knee, foot, p) {
  // express the knee and foot relative to the hip in the canonical sagittal plane
  const inv = (w) => {
    const cy = Math.cos(p.yaw || 0), sy = Math.sin(p.yaw || 0);
    const cr = Math.cos(p.rot || 0), sr = Math.sin(p.rot || 0);
    const u2 = w[0] * cy + w[2] * sy; // forward component
    const v2 = w[1];
    return [u2 * cr - v2 * sr, u2 * sr + v2 * cr];
  };
  const k = inv(sub3(knee, hip)), f = inv(sub3(foot, knee));
  const h = Math.atan2(k[0], -k[1]);
  const sA = Math.atan2(f[0], -f[1]);
  return [h, h - sA];
}

/**
 * Joint positions in world space ([x, y, depth] each). groundAt(x) gives the
 * ground height for planted feet.
 */
export function joints(p, groundAt = () => 0, R = RIG) {
  const fr = frame(p);
  const { pt, dir, s } = fr;
  const lean = p.lean || 0;
  const T = [Math.sin(lean), Math.cos(lean)];
  const neckU = T[0] * R.torso, neckV = T[1] * R.torso;
  const shoU = neckU - T[0] * 0.03, shoV = neckV - T[1] * 0.03;
  const hd = lean + (p.head || 0);
  const headU = neckU + Math.sin(hd) * (R.neck + R.headR), headV = neckV + Math.cos(hd) * (R.neck + R.headR);
  const pelvis = pt(0, 0, 0);
  const neck = pt(neckU, neckV, 0);
  const head = pt(headU, headV, 0);
  const out = { pose: p, pelvis, neck, head, headR: R.headR * s, lw: R.lw * s * (p.thick || 1), headAng: hd };
  // arms
  for (const [key, side] of [['B', -1], ['F', 1]]) {
    const a = p['a' + key] || [0, 0];
    const b = p['a' + key + 'z'] ?? 0.1;
    const sho = [shoU, shoV, side * R.sw];
    const A = lean + a[0], A2 = A + a[1];
    const cb = Math.cos(b), sb = Math.sin(b);
    const e = [sho[0] + Math.sin(A) * cb * R.ua, sho[1] - Math.cos(A) * cb * R.ua, sho[2] + side * sb * R.ua];
    const h = [e[0] + Math.sin(A2) * cb * R.fa, e[1] - Math.cos(A2) * cb * R.fa, e[2] + side * sb * 0.6 * R.fa];
    out['shoulder' + key] = pt(...sho);
    out['elbow' + key] = pt(...e);
    out['hand' + key] = pt(...h);
    out['foreAng' + key] = A2;
  }
  out.shoulder = pt(shoU, shoV, 0);
  // legs
  for (const [key, side] of [['B', -1], ['F', 1]]) {
    const hipC = [0, 0, side * R.hw];
    const hip = pt(...hipC);
    out['hip' + key] = hip;
    const fx = p['f' + key];
    if (fx != null) {
      // planted foot: 3D two-bone IK, knee bends toward the body's forward direction
      const th = R.th * s, sh = R.sh * s;
      const target = [fx, groundAt(fx) + (p['f' + key + 'y'] || 0), hip[2]];
      let D = sub3(target, hip);
      let d = len3(D);
      const Dn = d > 1e-6 ? mul3(D, 1 / d) : [0, -1, 0];
      d = clamp(d, 0.05 * s, (th + sh) * 0.999);
      const a = (th * th - sh * sh + d * d) / (2 * d);
      const r = Math.sqrt(Math.max(0, th * th - a * a));
      const fwd = dir(1, 0, 0);
      let B = sub3(fwd, mul3(Dn, dot3(fwd, Dn)));
      if (len3(B) < 1e-4) B = [0, 1, 0];
      B = norm3(B);
      const knee = add3(add3(hip, mul3(Dn, a)), mul3(B, r));
      const foot = add3(hip, mul3(Dn, d));
      out['knee' + key] = knee;
      out['foot' + key] = foot;
      out['legAng' + key] = legAnglesFromPoints(fr, hip, knee, foot, p);
    } else {
      const l = p['l' + key] || [0, 0];
      const b = p['l' + key + 'z'] ?? 0.04;
      const cb = Math.cos(b), sb = Math.sin(b);
      const h = l[0], sA = l[0] - l[1];
      const k = [hipC[0] + Math.sin(h) * cb * R.th, hipC[1] - Math.cos(h) * cb * R.th, hipC[2] + side * sb * R.th];
      const f = [k[0] + Math.sin(sA) * cb * R.sh, k[1] - Math.cos(sA) * cb * R.sh, k[2] + side * sb * R.sh];
      out['knee' + key] = pt(...k);
      out['foot' + key] = pt(...f);
      out['legAng' + key] = l;
    }
  }
  // head frame (for faces / headbands): forward, up and side unit vectors in world
  const hy = p.headYaw || 0;
  const fwdH = norm3(dir(Math.cos(hy) * Math.cos(hd), -Math.cos(hy) * Math.sin(hd), Math.sin(hy)));
  const upH = norm3(dir(Math.sin(hd), Math.cos(hd), 0));
  const sideH = norm3([fwdH[1] * upH[2] - fwdH[2] * upH[1], fwdH[2] * upH[0] - fwdH[0] * upH[2], fwdH[0] * upH[1] - fwdH[1] * upH[0]]);
  out.headF = fwdH;
  out.headU = upH;
  out.headS = sideH;
  out.fwd = dir(1, 0, 0);
  return out;
}

/** point on the head sphere from local (forward, up, side) in head radii */
export function headPoint(J, f, u, sd) {
  const r = J.headR;
  return [
    J.head[0] + (J.headF[0] * f + J.headU[0] * u + J.headS[0] * sd) * r,
    J.head[1] + (J.headF[1] * f + J.headU[1] * u + J.headS[1] * sd) * r,
    J.head[2] + (J.headF[2] * f + J.headU[2] * u + J.headS[2] * sd) * r,
  ];
}

function line(ctx, pts, lw, col) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.lineWidth = lw;
  ctx.strokeStyle = col;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
}

/** draw the stick figure; limbs are sorted far-to-near by depth */
export function drawFigure(ctx, J, style = {}) {
  const c = style.color || INK;
  const lw = J.lw * (style.widen || 1);
  const parts = [
    [(J.shoulderB[2] + J.handB[2]) / 2, () => line(ctx, [J.shoulderB, J.elbowB, J.handB], lw, c)],
    [(J.hipB[2] + J.footB[2]) / 2, () => line(ctx, [J.hipB, J.kneeB, J.footB], lw, c)],
    [(J.hipF[2] + J.footF[2]) / 2, () => line(ctx, [J.hipF, J.kneeF, J.footF], lw, c)],
    [(J.shoulderF[2] + J.handF[2]) / 2, () => line(ctx, [J.shoulderF, J.elbowF, J.handF], lw, c)],
    [J.pelvis[2], () => {
      line(ctx, [J.hipB, J.hipF], lw, c);
      line(ctx, [J.pelvis, J.neck], lw * 1.02, c);
      line(ctx, [J.shoulderB, J.shoulderF], lw, c);
      ctx.beginPath();
      ctx.arc(J.head[0], J.head[1], J.headR + (lw - J.lw) * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = c;
      ctx.fill();
    }],
  ];
  parts.sort((a, b) => a[0] - b[0]);
  for (const [, draw] of parts) draw();
}

/** sample the figure as dots (for dissolves / clones) */
export function figurePoints(J, spacing = 0.02) {
  const out = [];
  const segs = [[J.shoulderB, J.elbowB], [J.elbowB, J.handB], [J.hipB, J.kneeB], [J.kneeB, J.footB], [J.pelvis, J.neck],
    [J.hipF, J.kneeF], [J.kneeF, J.footF], [J.shoulderF, J.elbowF], [J.elbowF, J.handF]];
  for (const [a, b] of segs) {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.max(2, Math.ceil(L / spacing));
    for (let i = 0; i < n; i++) {
      const k = i / (n - 1);
      out.push([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, J.lw / 2]);
    }
  }
  const r = J.headR;
  for (let yy = -r; yy <= r; yy += spacing * 1.2)
    for (let xx = -r; xx <= r; xx += spacing * 1.2)
      if (xx * xx + yy * yy <= r * r) out.push([J.head[0] + xx, J.head[1] + yy, spacing * 0.75]);
  return out;
}
