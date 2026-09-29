// Stick-figure rig: skeleton (FK with optional planted-foot IK), pose blending
// and drawing in the Hyun's Dojo style (thick black strokes, filled round head).
//
// Pose angles are authored for a figure facing right (+x), y up:
//   lean  torso tilt from vertical, + = forward
//   head  head tilt relative to the torso, + = forward/down
//   aB/aF back/front arm  [shoulder, elbow]  shoulder 0 = hanging along the torso,
//         + swings forward/up; elbow + bends the forearm forward/up
//   lB/lF back/front leg  [hip, knee]  hip 0 = straight down, + = forward;
//         knee + bends the shin backwards (natural knee)
//   rot   whole-body rotation around the pelvis, + = pitch forward
//   fB/fF optional planted feet: world x of each foot (legs solved by IK)
import { lerp, clamp, rot as vrot } from './util.js';

export const RIG = {
  torso: 0.34, neck: 0.055, headR: 0.1,
  ua: 0.2, fa: 0.19, th: 0.25, sh: 0.25,
  lw: 0.052,
};

export const BASE = () => ({
  x: 0, y: 0.47, dir: 1, rot: 0, lean: 0.02, head: 0,
  aB: [0.12, 0.25], aF: [0.18, 0.3], lB: [-0.08, 0.12], lF: [0.1, 0.14],
  scale: 1,
});

const NUM_KEYS = ['x', 'y', 'rot', 'lean', 'head', 'scale'];
const ARR_KEYS = ['aB', 'aF', 'lB', 'lF'];

/** blend two poses (a -> b by k). Feet targets blend when both exist. */
export function mix(a, b, k) {
  const o = { ...a };
  for (const key of NUM_KEYS) if (key in a || key in b) o[key] = lerp(a[key] ?? b[key], b[key] ?? a[key], k);
  for (const key of ARR_KEYS) {
    const p = a[key], q = b[key];
    if (p && q) o[key] = [lerp(p[0], q[0], k), lerp(p[1], q[1], k)];
    else o[key] = p || q;
  }
  for (const f of ['fB', 'fF']) {
    if (a[f] != null && b[f] != null) o[f] = lerp(a[f], b[f], k);
    else o[f] = null; // mixed IK/FK: resolved to angles by the caller
  }
  o.dir = k < 0.5 ? a.dir : b.dir;
  // non-numeric attributes switch halfway
  for (const key in b) if (!(key in o) || (typeof b[key] !== 'number' && !Array.isArray(b[key]) && !['fB', 'fF', 'dir'].includes(key))) {
    if (k >= 0.5 || !(key in a)) o[key] = b[key];
  }
  return o;
}

/** 2-bone IK for a leg: returns [hip, knee] so the foot reaches `foot` (world) */
export function solveLeg(p, foot, R = RIG) {
  const s = p.scale ?? 1;
  const th = R.th * s, sh = R.sh * s;
  // foot relative to pelvis in canonical frame (undo mirror and body rotation)
  let dx = (foot[0] - p.x) * p.dir;
  let dy = foot[1] - p.y;
  [dx, dy] = vrot([dx, dy], p.rot || 0); // canonical rot is applied as -rot on the way out
  let d = Math.hypot(dx, dy);
  const maxD = (th + sh) * 0.999;
  if (d > maxD) { dx *= maxD / d; dy *= maxD / d; d = maxD; }
  d = Math.max(d, 0.05 * s);
  const cosK = clamp((th * th + sh * sh - d * d) / (2 * th * sh), -1, 1);
  const knee = Math.PI - Math.acos(cosK);
  const phi = Math.atan2(dx, -dy); // angle of the foot from straight down, + forward
  const cosA = clamp((th * th + d * d - sh * sh) / (2 * th * d), -1, 1);
  const hip = phi + Math.acos(cosA);
  return [hip, knee];
}

/**
 * Compute joint positions in world space.
 * groundAt(x) gives the ground height, used for planted feet.
 */
export function joints(p, groundAt = () => 0, R = RIG) {
  const s = p.scale ?? 1;
  const L = (v) => v * s;
  const lean = p.lean || 0;
  const T = [Math.sin(lean), Math.cos(lean)];
  const dirv = (a) => [Math.sin(a), -Math.cos(a)]; // angle from straight down, + forward
  const pel = [0, 0];
  const neck = [T[0] * L(R.torso), T[1] * L(R.torso)];
  const sho = [neck[0] - T[0] * L(0.03), neck[1] - T[1] * L(0.03)];
  const hd = lean + (p.head || 0);
  const headC = [neck[0] + Math.sin(hd) * L(R.neck + R.headR), neck[1] + Math.cos(hd) * L(R.neck + R.headR)];
  const arm = (a) => {
    const ua = lean + a[0];
    const fa = ua + a[1];
    const e = [sho[0] + dirv(ua)[0] * L(R.ua), sho[1] + dirv(ua)[1] * L(R.ua)];
    const h = [e[0] + dirv(fa)[0] * L(R.fa), e[1] + dirv(fa)[1] * L(R.fa)];
    return [e, h, fa];
  };
  const legs = {};
  for (const [key, fk] of [['B', 'fB'], ['F', 'fF']]) {
    let ang = p['l' + key];
    if (p[fk] != null) {
      const fx = p[fk];
      ang = solveLeg(p, [fx, groundAt(fx) + (p[fk + 'y'] || 0)], R);
    }
    const hA = ang[0], sA = ang[0] - ang[1];
    const kn = [dirv(hA)[0] * L(R.th), dirv(hA)[1] * L(R.th)];
    const ft = [kn[0] + dirv(sA)[0] * L(R.sh), kn[1] + dirv(sA)[1] * L(R.sh)];
    legs[key] = [kn, ft, ang];
  }
  let [eB, hB, faB] = arm(p.aB);
  const [eF, hF, faF] = arm(p.aF);
  if (p.view === 'front' || p.view === 'back') {
    // facing the camera: the "back" limbs are mirrored to the other side
    const mx = (q, cx) => [2 * cx - q[0], q[1]];
    eB = mx(eB, sho[0]);
    hB = mx(hB, sho[0]);
    legs.B[0] = mx(legs.B[0], 0);
    legs.B[1] = mx(legs.B[1], 0);
  }
  // body rotation (+ pitches forward = clockwise in canonical frame), mirror, translate
  const r = -(p.rot || 0);
  const W = (q) => {
    const rq = vrot(q, r);
    return [p.x + rq[0] * p.dir, p.y + rq[1]];
  };
  return {
    pose: p,
    pelvis: W(pel), neck: W(neck), shoulder: W(sho), head: W(headC), headAng: hd,
    elbowB: W(eB), handB: W(hB), elbowF: W(eF), handF: W(hF),
    kneeB: W(legs.B[0]), footB: W(legs.B[1]), kneeF: W(legs.F[0]), footF: W(legs.F[1]),
    legAngB: legs.B[2], legAngF: legs.F[2], foreAngB: faB, foreAngF: faF,
    headR: R.headR * s, lw: R.lw * s * (p.thick || 1),
    // local frame helpers for accessories
    up: vrot([Math.sin(hd) * p.dir, Math.cos(hd)], r * p.dir),
    fwd: [p.dir, 0],
  };
}

/** local point on the head: (ax along facing, ay up) rotated with the head */
export function headPoint(J, ax, ay) {
  const p = J.pose;
  const a = -(J.headAng) - (p.rot || 0); // head orientation angle (canonical)
  const c = Math.cos(a), s = Math.sin(a);
  // canonical offset rotated by head angle, then mirrored
  const x = ax * c - ay * s;
  const y = ax * s + ay * c;
  const sc = p.scale ?? 1;
  return [J.head[0] + x * p.dir * sc, J.head[1] + y * sc];
}

// ------------------------------------------------------------------ drawing
function stroke(ctx, pts, lw, color) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.lineWidth = lw;
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
}

export const INK = '#141414';

/** Draw a plain stick figure. style: {color, far, alpha} */
export function drawFigure(ctx, J, style = {}) {
  const c = style.color || INK;
  const far = style.far || c;
  const lw = J.lw;
  stroke(ctx, [J.shoulder, J.elbowB, J.handB], lw, far);
  stroke(ctx, [J.pelvis, J.kneeB, J.footB], lw, far);
  stroke(ctx, [J.pelvis, J.neck], lw * 1.02, c);
  stroke(ctx, [J.pelvis, J.kneeF, J.footF], lw, c);
  ctx.beginPath();
  ctx.arc(J.head[0], J.head[1], J.headR, 0, Math.PI * 2);
  ctx.fillStyle = c;
  ctx.fill();
  stroke(ctx, [J.shoulder, J.elbowF, J.handF], lw, c);
}

/** points along the figure's strokes (for the ash dissolve), with radius */
export function figurePoints(J, spacing = 0.014) {
  const out = [];
  const segs = [
    [J.shoulder, J.elbowB], [J.elbowB, J.handB], [J.pelvis, J.kneeB], [J.kneeB, J.footB],
    [J.pelvis, J.neck], [J.pelvis, J.kneeF], [J.kneeF, J.footF], [J.shoulder, J.elbowF], [J.elbowF, J.handF],
  ];
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
