// The two fighters' looks: SG (kiasu, red headband with long flowing tails,
// white eyes) and 67 (6'7": taller, purple headband printed "67", gold
// wristbands). Headbands wrap the head in 3D, so they turn with the face.
import { headPoint } from './rig3.js';
import { norm, sub, add, mul, ribbon, polyPath, smoothPts, clamp, lerp, TAU } from './util.js';

export const SG = { main: '#e3242b', dark: '#8c1016', light: '#ff6a5c' };
export const P67 = { main: '#6a3be0', gold: '#ffc629', deep: '#2c1470', light: '#b89cff' };

/** a strand that trails its anchor through the anchor's past positions */
export function chain(anchorAt, t, n, segLen, lag, gravity, wind = [0, 0], wave = 0, seed = 0) {
  const rest = norm([wind[0], -gravity + wind[1]]);
  const pts = [anchorAt(t)];
  for (let i = 1; i < n; i++) {
    const past = anchorAt(t - i * lag);
    const w = wave * Math.sin(t * 8 - i * 0.8 + seed) * i;
    const target = [past[0] + rest[0] * i * segLen - rest[1] * w, past[1] + rest[1] * i * segLen + rest[0] * w];
    const prev = pts[i - 1];
    let d = sub(target, prev);
    if (Math.hypot(d[0], d[1]) < 1e-6) d = rest;
    pts.push(add(prev, mul(norm(d), segLen)));
  }
  return pts;
}

/** band around the head at height u (head radii); returns visible arc points */
function bandArc(J, u, from = -Math.PI * 0.95, to = Math.PI * 0.95) {
  const r = Math.sqrt(Math.max(0, 1 - u * u));
  const pts = [];
  for (let i = 0; i <= 28; i++) {
    const a = lerp(from, to, i / 28);
    const p = headPoint(J, Math.cos(a) * r, u, Math.sin(a) * r);
    pts.push([p[0], p[1], p[2] - J.head[2]]);
  }
  return pts;
}

function strokeVisible(ctx, pts, w, col) {
  let run = [];
  const flush = () => {
    if (run.length > 1) {
      ctx.beginPath();
      run.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
      ctx.lineWidth = w;
      ctx.strokeStyle = col;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    run = [];
  };
  for (const p of pts) {
    if (p[2] >= -0.02) run.push(p);
    else flush();
  }
  flush();
}

/** eyes on the visible side of the face */
export function drawEyes(ctx, J, face = {}, glow = null) {
  const s = J.headR;
  const eye = face.eye || 'normal';
  for (const side of [-1, 1]) {
    const c = headPoint(J, 0.72, 0.08, side * 0.42);
    if (c[2] - J.head[2] < 0.02 * s) continue; // on the far side
    const fx = J.headF[0], fyy = J.headF[1];
    const facing = Math.abs(J.headF[2]);
    const wx = s * (0.26 * (1 - facing) + 0.2 * facing);
    const h = s * (eye === 'wide' ? 0.3 : eye === 'angry' || eye === 'glow' ? 0.14 : eye === 'shut' ? 0.03 : 0.2);
    const ang = Math.atan2(fyy, fx) * (1 - facing);
    ctx.save();
    ctx.translate(c[0], c[1]);
    ctx.rotate(ang * 0.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, wx, h, 0, 0, TAU);
    ctx.fillStyle = eye === 'glow' ? glow || '#ffffff' : '#ffffff';
    ctx.fill();
    if (eye !== 'shut' && eye !== 'glow') {
      ctx.beginPath();
      ctx.ellipse(wx * 0.25 * Math.sign(fx || 1), -h * 0.1, wx * 0.45, h * 0.62, 0, 0, TAU);
      ctx.fillStyle = '#141414';
      ctx.fill();
    }
    if (eye === 'angry' || eye === 'glow') {
      ctx.beginPath();
      ctx.moveTo(-wx * 1.2, h * 1.9 * (side * (fx || 1) > 0 ? 1 : 0.4) + h * 0.4);
      ctx.lineTo(wx * 1.2, h * 1.9 * (side * (fx || 1) > 0 ? 0.4 : 1) + h * 0.4);
      ctx.lineWidth = s * 0.1;
      ctx.strokeStyle = '#ffffff';
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    ctx.restore();
  }
  if (face.mouth) {
    const m = headPoint(J, 0.8, -0.45, 0);
    if (m[2] - J.head[2] > -0.02 * s) {
      ctx.beginPath();
      if (face.mouth === 'shout') ctx.ellipse(m[0], m[1], s * 0.2, s * 0.16, 0, 0, TAU);
      else ctx.ellipse(m[0], m[1], s * 0.16, s * 0.05, 0, 0, TAU);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
  }
}

/** SG: red headband with a knot and two long tails behind the head */
export function sgTails(jointsAt, t, wind) {
  const J = jointsAt(t);
  const knot = (tt) => {
    const j = tt === t ? J : jointsAt(tt);
    const k = headPoint(j, -0.98, 0.32, 0);
    return [k[0], k[1]];
  };
  const dir = Math.cos(J.pose.yaw || 0) >= 0 ? 1 : -1;
  const w = wind || [0, 0];
  return [0, 1].map((i) => chain(knot, t, 10, 0.05 * (J.pose.scale ?? 1), 0.018, 1, [w[0] * 0.4 - dir * 0.6, w[1] * 0.4 + 0.15 * (i ? 1 : -1)], 0.006, i * 2.3));
}

export function drawSGBack(ctx, J, tails, clone = false) {
  const s = J.pose.scale ?? 1;
  for (const [i, tail] of tails.entries()) {
    const sm = smoothPts(tail, 3);
    polyPath(ctx, ribbon(sm, (u) => (0.045 - u * 0.02) * s * (i ? 0.85 : 1)));
    ctx.fillStyle = clone ? (i ? '#ffd0cc' : '#ffffff') : i ? SG.dark : SG.main;
    ctx.fill();
  }
}

export function drawSGFront(ctx, J, face) {
  const s = J.headR;
  const band = bandArc(J, 0.34);
  strokeVisible(ctx, band, s * 0.34, SG.main);
  strokeVisible(ctx, bandArc(J, 0.2), s * 0.06, SG.dark);
  // knot when the back of the head faces us
  const k = headPoint(J, -0.98, 0.32, 0);
  if (k[2] - J.head[2] > 0) {
    ctx.beginPath();
    ctx.arc(k[0], k[1], s * 0.2, 0, TAU);
    ctx.fillStyle = SG.dark;
    ctx.fill();
  }
  drawEyes(ctx, J, face, '#ff3b3b');
}

export function draw67Front(ctx, J, face) {
  const s = J.headR;
  strokeVisible(ctx, bandArc(J, 0.36), s * 0.3, P67.main);
  strokeVisible(ctx, bandArc(J, 0.24), s * 0.05, P67.gold);
  // "67" printed on the front of the headband, readable when facing us
  const f = headPoint(J, 0.93, 0.36, 0);
  const vis = f[2] - J.head[2];
  if (vis > 0.25 * s) {
    ctx.save();
    ctx.translate(f[0], f[1]);
    ctx.scale((s * 0.0032) * clamp(vis / s * 1.2, 0.2, 1), -s * 0.0032);
    ctx.font = '400 100px "Bebas", sans-serif';
    ctx.fillStyle = P67.gold;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('67', 0, 4);
    ctx.restore();
  }
  // gold wristbands
  for (const k of ['B', 'F']) {
    const e = J['elbow' + k], h = J['hand' + k];
    const a = [lerp(e[0], h[0], 0.62), lerp(e[1], h[1], 0.62)], b = [lerp(e[0], h[0], 0.82), lerp(e[1], h[1], 0.82)];
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineWidth = J.lw * 1.25;
    ctx.strokeStyle = P67.gold;
    ctx.lineCap = 'butt';
    ctx.stroke();
  }
  drawEyes(ctx, J, face, P67.gold);
}
