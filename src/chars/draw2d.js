// 2D (hand-drawn look) renderers for White Bear and Claude Pet.
// ctx must be set up in world units with +y up and the origin at the
// character's feet (see place()).
//
// Layering trick for clean cartoon silhouettes: first stroke every part's
// outline at double width, then fill every part on top (this leaves only the
// outer silhouette of the union), then add the few inner lines that should be
// visible (arm edges in front of the body, etc.).
import { BEAR_TALL, PET, COLORS, deform } from './spec.js';
import { drawBearFace, drawPetFace } from './faces.js';
import { clamp, noise } from '../core/util.js';

/** Put ctx at screen point (x,y) (feet), scale px per world unit, y-up. */
export function place(ctx, x, y, px, rot = 0) {
  ctx.translate(x, y);
  if (rot) ctx.rotate(rot);
  ctx.scale(px, -px);
}

function pathFrom(ctx, pts, close = true) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  if (close) ctx.closePath();
}

function pathLength(pts) {
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  return L;
}

/** stroke a polyline, optionally only the first `reveal` fraction (draw-on) */
function inkStroke(ctx, pts, lw, reveal = 1, color = COLORS.ink, close = true) {
  if (reveal <= 0) return;
  pathFrom(ctx, pts, close);
  ctx.lineWidth = lw;
  ctx.strokeStyle = color;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  if (reveal < 1) {
    const L = pathLength(pts) + (close ? Math.hypot(pts[0][0] - pts.at(-1)[0], pts[0][1] - pts.at(-1)[1]) : 0);
    ctx.setLineDash([L * reveal, L * 2]);
  }
  ctx.stroke();
  ctx.setLineDash([]);
}

function line(ctx, a, b, w, color) {
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.lineWidth = w;
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.stroke();
}

/** open outline of a capsule from a (open end) around b (round end) */
function capsuleContour(a, b, r, n = 14) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L;
  const px = -uy, py = ux;
  const pts = [[a[0] + px * r, a[1] + py * r], [b[0] + px * r, b[1] + py * r]];
  for (let i = 1; i < n; i++) {
    const t = (i / n) * Math.PI;
    const c = Math.cos(t), s = Math.sin(t);
    pts.push([b[0] + (px * c + ux * s) * r, b[1] + (py * c + uy * s) * r]);
  }
  pts.push([b[0] - px * r, b[1] - py * r], [a[0] - px * r, a[1] - py * r]);
  return pts;
}

export function drawPawPrint(ctx, x, y, s, color = '#ffffff', rot = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0.02 * s);
  ctx.bezierCurveTo(0.045 * s, 0.02 * s, 0.06 * s, -0.035 * s, 0.03 * s, -0.045 * s);
  ctx.bezierCurveTo(0.012 * s, -0.05 * s, -0.012 * s, -0.05 * s, -0.03 * s, -0.045 * s);
  ctx.bezierCurveTo(-0.06 * s, -0.035 * s, -0.045 * s, 0.02 * s, 0, 0.02 * s);
  ctx.fill();
  const toes = [[-0.058, 0.034, -0.35], [-0.022, 0.062, -0.12], [0.022, 0.062, 0.12], [0.058, 0.034, 0.35]];
  for (const [tx, ty, tr] of toes) {
    ctx.beginPath();
    ctx.ellipse(tx * s, ty * s, 0.017 * s, 0.022 * s, tr, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

export function drawMic(ctx, x, y, ang, s = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  line(ctx, [0, -0.02 * s], [0, 0.17 * s], 0.062 * s, COLORS.ink);
  line(ctx, [0, -0.02 * s], [0, 0.17 * s], 0.04 * s, '#4b4f5c');
  ctx.beginPath();
  ctx.arc(0, 0.2 * s, 0.058 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#dfe3ea';
  ctx.fill();
  ctx.lineWidth = 0.016 * s;
  ctx.strokeStyle = COLORS.ink;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-0.04 * s, 0.2 * s);
  ctx.lineTo(0.04 * s, 0.2 * s);
  ctx.moveTo(0, 0.16 * s);
  ctx.lineTo(0, 0.24 * s);
  ctx.lineWidth = 0.006 * s;
  ctx.strokeStyle = '#9aa1ad';
  ctx.stroke();
  ctx.restore();
}

export function drawWand(ctx, x, y, ang, s = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  line(ctx, [0, -0.02 * s], [0, 0.22 * s], 0.034 * s, COLORS.ink);
  line(ctx, [0, -0.02 * s], [0, 0.22 * s], 0.018 * s, '#ffcf6b');
  ctx.beginPath();
  ctx.arc(0, 0.29 * s, 0.07 * s, 0, Math.PI * 2);
  ctx.lineWidth = 0.034 * s;
  ctx.strokeStyle = COLORS.ink;
  ctx.stroke();
  ctx.lineWidth = 0.018 * s;
  ctx.strokeStyle = '#ff9fc0';
  ctx.stroke();
  ctx.restore();
}

// ------------------------------------------------------------------ bear
export const BEAR_POSE = () => ({
  squash: 1, bendX: 0, armL: 0, armR: 0, legL: 0, legR: 0, bagSwing: 0,
  face: { expr: 'neutral' }, hold: null, reveal: 1, fill: 1, boil: 0, time: 0, lw: 0.02,
  shadow: 1,
});

/**
 * Draw White Bear (front view). spec: BEAR_TALL | BEAR_SHORT.
 * pose fields: squash, bendX, armL/armR (raise, radians), legL/legR (lift),
 * bagSwing, face{...}, hold ('mic'|'wand'|null), reveal (0..1 line draw-on
 * for the sketch intro), fill (0..1), boil (hand-drawn wobble), time.
 * Returns hand positions {L:{hand,dir}, R:{...}} in local units.
 */
export function drawBear2D(ctx, spec = BEAR_TALL, pose = BEAR_POSE()) {
  const P = { squash: pose.squash ?? 1, bendX: pose.bendX || 0, bendZ: 0, twist: 0, base: spec.bend.base, len: spec.bend.len };
  const lw = pose.lw ?? 0.02;
  const reveal = pose.reveal ?? 1;
  const fillA = clamp(pose.fill ?? 1);
  const boil = pose.boil || 0;
  const frame = Math.floor((pose.time || 0) * 12);
  const jit = (i, k) => (boil ? noise(i * 0.61 + frame * 17.3, k) * boil * 0.006 : 0);
  const D = (x, y) => {
    const q = deform(x, y, 0, P);
    return [q[0], q[1]];
  };

  // ---------- geometry
  const body = [];
  const d = spec.dense;
  for (let i = 0; i < d.length; i++) body.push(D(d[i][1] + jit(i, 1), d[i][0]));
  for (let i = d.length - 1; i >= 0; i--) body.push(D(-d[i][1] + jit(i, 2), d[i][0]));

  const leg = spec.leg;
  const legs = [[-1, pose.legL || 0], [1, pose.legR || 0]].map(([side, lift]) => ({
    a: D(side * leg.x, leg.len + 0.06),
    b: [(side * leg.x) / Math.sqrt(P.squash), leg.r + lift],
  }));

  const ear = spec.ear;
  const ears = [-1, 1].map((side) => ({ side, c: D(side * ear.x, ear.y) }));

  const arm = spec.arm;
  const shX = spec.radiusAt(arm.y) - arm.r * 1.05;
  const arms = [[-1, pose.armL || 0, 'L'], [1, pose.armR || 0, 'R']].map(([side, raise, key]) => {
    const sh = D(side * shX, arm.y);
    const th = arm.splay + raise;
    const dir = [side * Math.sin(th), -Math.cos(th)];
    const hand = [sh[0] + dir[0] * (arm.len - arm.r), sh[1] + dir[1] * (arm.len - arm.r)];
    return { side, key, sh, dir, hand };
  });
  const hands = {};
  for (const a of arms) hands[a.key] = { hand: a.hand, dir: a.dir, ang: Math.atan2(a.dir[1], a.dir[0]) };

  const st = spec.strap;
  const bagTop = D(spec.bag.x + 0.02, spec.bag.y + spec.bag.r * 0.7);
  const s0 = D(spec.radiusAt(st.sy) + 0.02, st.sy);
  const s1 = D((st.sx + spec.bag.x) * 0.5 + 0.02, (st.sy + st.hy) * 0.5 - 0.03);

  // ---------- ground shadow
  if ((pose.shadow ?? 1) > 0 && fillA > 0) {
    ctx.save();
    ctx.globalAlpha *= 0.16 * fillA * (pose.shadow ?? 1);
    ctx.beginPath();
    ctx.ellipse(0, 0, spec.profile[4][1] * 1.35, 0.055, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#6b6275';
    ctx.fill();
    ctx.restore();
  }

  // ---------- sketch (draw-on) lines, shown while the drawing appears
  if (fillA < 1 && reveal > 0) {
    ctx.save();
    ctx.globalAlpha *= 1 - fillA;
    for (const l of legs) inkStroke(ctx, capsuleContour(l.a, l.b, leg.r + lw / 2), lw, reveal, COLORS.ink, false);
    for (const e of ears) {
      const ring = [];
      for (let i = 0; i <= 40; i++) {
        const a = -Math.PI / 2 - e.side * (i / 40) * Math.PI * 2;
        ring.push([e.c[0] + Math.cos(a) * ear.r, e.c[1] + Math.sin(a) * ear.r]);
      }
      inkStroke(ctx, ring, lw, reveal, COLORS.ink, false);
    }
    inkStroke(ctx, body, lw, reveal);
    for (const a of arms) {
      const start = [a.sh[0] + a.dir[0] * 0.06, a.sh[1] + a.dir[1] * 0.06];
      inkStroke(ctx, capsuleContour(start, a.hand, arm.r + lw / 2), lw, reveal, COLORS.ink, false);
    }
    const sp = [s0, bagTop];
    inkStroke(ctx, sp, lw * 2.2, reveal, COLORS.bag, false);
    const ring = [];
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      ring.push([bagTop[0] - 0.01 + Math.cos(a) * spec.bag.r, bagTop[1] - spec.bag.r * 0.72 + Math.sin(a) * spec.bag.r]);
    }
    inkStroke(ctx, ring, lw, reveal, COLORS.ink, false);
    ctx.restore();
  }
  if (fillA <= 0) return hands;

  ctx.save();
  ctx.globalAlpha *= fillA;

  // ---------- legs (behind body)
  for (const l of legs) {
    line(ctx, l.a, l.b, 2 * leg.r + 2 * lw, COLORS.ink);
    line(ctx, l.a, l.b, 2 * leg.r, COLORS.bearWhite);
  }
  // soft shade on the upper legs
  for (const l of legs) {
    ctx.save();
    ctx.globalAlpha *= 0.5;
    line(ctx, [l.a[0], l.a[1] - 0.02], [l.a[0], l.a[1] - 0.14], 2 * leg.r * 0.9, '#ebe6e2');
    ctx.restore();
  }

  // ---------- ears (behind head)
  for (const e of ears) {
    ctx.beginPath();
    ctx.arc(e.c[0], e.c[1], ear.r + lw, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.ink;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(e.c[0], e.c[1], ear.r, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.bearWhite;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(e.c[0] + e.side * 0.008, e.c[1] + 0.01, ear.r * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.earInner;
    ctx.fill();
  }

  // ---------- outline pass (body + arms)
  pathFrom(ctx, body);
  ctx.lineWidth = 2 * lw;
  ctx.strokeStyle = COLORS.ink;
  ctx.lineJoin = 'round';
  ctx.stroke();
  for (const a of arms) line(ctx, a.sh, a.hand, 2 * arm.r + 2 * lw, COLORS.ink);

  // ---------- fill pass
  pathFrom(ctx, body);
  ctx.fillStyle = COLORS.bearWhite;
  ctx.fill();
  ctx.save();
  ctx.clip();
  const bc = D(0, spec.profile[2][0] + 0.02);
  const R = spec.profile[4][1];
  const g = ctx.createRadialGradient(bc[0], bc[1] - 0.05, 0.02, bc[0], bc[1] - 0.05, R * 1.25);
  g.addColorStop(0, 'rgba(206,198,193,0.85)');
  g.addColorStop(0.55, 'rgba(222,215,210,0.55)');
  g.addColorStop(1, 'rgba(235,230,226,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(bc[0], bc[1] - 0.05, R * 1.3, (0.22 * spec.height) / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  const sg = ctx.createLinearGradient(-R - 0.05, 0, R + 0.05, 0);
  sg.addColorStop(0, 'rgba(225,219,214,0.6)');
  sg.addColorStop(0.2, 'rgba(255,255,255,0)');
  sg.addColorStop(0.8, 'rgba(255,255,255,0)');
  sg.addColorStop(1, 'rgba(225,219,214,0.6)');
  ctx.fillStyle = sg;
  ctx.fillRect(-1, 0, 2, spec.height + 0.1);
  ctx.restore();

  // strap goes over the body (clipped to it), under the arms
  ctx.save();
  pathFrom(ctx, body);
  ctx.clip();
  ctx.beginPath();
  ctx.moveTo(s0[0], s0[1]);
  ctx.quadraticCurveTo(s1[0], s1[1], bagTop[0], bagTop[1]);
  ctx.strokeStyle = COLORS.bag;
  ctx.lineWidth = 0.046 * (spec.height / 2 + 0.5) / 1.5;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.restore();

  for (const a of arms) line(ctx, a.sh, a.hand, 2 * arm.r, COLORS.bearWhite);
  // arm inner edges + hand caps (in front of the body); the top stays open
  for (const a of arms) {
    const start = [a.sh[0] + a.dir[0] * 0.07, a.sh[1] + a.dir[1] * 0.07];
    const c = capsuleContour(start, a.hand, arm.r + lw / 2);
    inkStroke(ctx, c, lw, 1, COLORS.ink, false);
  }

  // ---------- held item
  if (pose.hold === 'mic') drawMic(ctx, hands.R.hand[0] - 0.02, hands.R.hand[1] + 0.02, pose.micAng ?? 0.35, spec.height / 2);
  if (pose.hold === 'wand') drawWand(ctx, hands.R.hand[0], hands.R.hand[1], pose.wandAng ?? 0.3, spec.height / 2);

  // ---------- face
  const fc = D(0, spec.face.y);
  ctx.save();
  ctx.translate(fc[0], fc[1]);
  ctx.scale(spec.face.scale, spec.face.scale);
  drawBearFace(ctx, { time: pose.time, ...pose.face });
  ctx.restore();

  // ---------- bag (swinging on the strap)
  const b = spec.bag;
  ctx.save();
  ctx.translate(bagTop[0], bagTop[1]);
  ctx.rotate(pose.bagSwing || 0);
  const br = b.r;
  ctx.beginPath();
  ctx.arc(-0.01, -br * 0.72, br, 0, Math.PI * 2);
  ctx.fillStyle = COLORS.bag;
  ctx.fill();
  ctx.save();
  ctx.scale(1, -1);
  drawPawPrint(ctx, -0.01, br * 0.72, (br / 0.14) * 0.95, '#ffffff');
  ctx.restore();
  ctx.beginPath();
  ctx.arc(-0.055, -br * 0.72 + 0.065, 0.022, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.fill();
  ctx.restore();

  ctx.restore();
  return hands;
}

// ------------------------------------------------------------------ pet
export const PET_POSE = () => ({
  squash: 1, bendX: 0, armL: 0, armR: 0, walk: 0, stepPhase: 0, legLift: 0,
  face: { expr: 'normal' }, ears: 0, reveal: 1, fill: 1, boil: 0, time: 0, lw: 0.02, shadow: 1,
});

function roundedRectPoints(cx, cy, w, h, r, n = 10) {
  const pts = [];
  const corners = [
    [cx + w / 2 - r, cy - h / 2 + r, -Math.PI / 2],
    [cx + w / 2 - r, cy + h / 2 - r, 0],
    [cx - w / 2 + r, cy + h / 2 - r, Math.PI / 2],
    [cx - w / 2 + r, cy - h / 2 + r, Math.PI],
  ];
  for (const [x, y, a0] of corners) {
    for (let i = 0; i <= n; i++) {
      const a = a0 + (i / n) * (Math.PI / 2);
      pts.push([x + Math.cos(a) * r, y + Math.sin(a) * r]);
    }
  }
  return pts;
}

/** Bear-ears headband ears (the pet wears it in the chorus). k = 0..1 pop-in */
function drawEars(ctx, D, k, lw) {
  if (k <= 0) return;
  for (const side of [-1, 1]) {
    const c = D(side * 0.26, PET.lift + PET.height + 0.03);
    ctx.save();
    ctx.translate(c[0], c[1]);
    ctx.scale(k, k);
    ctx.beginPath();
    ctx.arc(0, 0, 0.085, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = lw;
    ctx.strokeStyle = COLORS.ink;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -0.005, 0.045, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.earInner;
    ctx.fill();
    ctx.restore();
  }
}

/**
 * Draw Claude Pet (front view): smooth orange body, two tall eyes, arm nubs,
 * four little legs. pose: squash, bendX, armL/armR (raise), walk (0..1),
 * stepPhase, legLift, face{...}, ears (0..1 bear-ear headband), reveal, fill.
 */
export function drawPet2D(ctx, pose = PET_POSE()) {
  const P = { squash: pose.squash ?? 1, bendX: pose.bendX || 0, bendZ: 0, twist: 0, base: PET.bend.base, len: PET.bend.len };
  const lw = pose.lw ?? 0.02;
  const reveal = pose.reveal ?? 1;
  const fillA = clamp(pose.fill ?? 1);
  const boil = pose.boil || 0;
  const frame = Math.floor((pose.time || 0) * 12);
  const jit = (i, k) => (boil ? noise(i * 0.53 + frame * 11.7, k) * boil * 0.006 : 0);
  const D = (x, y) => {
    const q = deform(x, y, 0, P);
    return [q[0], q[1]];
  };

  const L = PET.leg;
  const legs = L.xs.map((x, i) => {
    const phase = (pose.stepPhase || 0) * Math.PI * 2 + (i % 2 ? Math.PI : 0);
    const lift = Math.max(0, Math.sin(phase)) * 0.07 * (pose.walk || 0) + (pose.legLift || 0);
    return { a: D(x * 0.95, PET.lift + 0.05), b: [x / Math.sqrt(P.squash), L.r + lift] };
  });
  const A = PET.arm;
  const arms = [[-1, pose.armL || 0, 'L'], [1, pose.armR || 0, 'R']].map(([side, raise, key]) => {
    const root = D(side * (A.x - 0.08), A.y);
    const dir = [side * Math.cos(raise), Math.sin(raise)];
    const tip = [root[0] + dir[0] * (A.len + 0.08), root[1] + dir[1] * (A.len + 0.08)];
    return { key, root, tip, dir };
  });
  const hands = {};
  for (const a of arms) hands[a.key] = { hand: a.tip, dir: a.dir };
  const raw = roundedRectPoints(0, PET.centerY, PET.width, PET.height, PET.radius + 0.02, 12);
  const body = raw.map(([x, y], i) => D(x + jit(i, 1), y + jit(i, 2)));

  if ((pose.shadow ?? 1) > 0 && fillA > 0) {
    ctx.save();
    ctx.globalAlpha *= 0.16 * fillA * (pose.shadow ?? 1);
    ctx.beginPath();
    ctx.ellipse(0, 0, PET.width * 0.62, 0.045, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#6b4e4e';
    ctx.fill();
    ctx.restore();
  }

  if (fillA < 1 && reveal > 0) {
    ctx.save();
    ctx.globalAlpha *= 1 - fillA;
    for (const l of legs) inkStroke(ctx, capsuleContour(l.a, l.b, L.r + lw / 2), lw, reveal, COLORS.petInk, false);
    for (const a of arms) inkStroke(ctx, capsuleContour(a.root, a.tip, A.r + lw / 2), lw, reveal, COLORS.petInk, false);
    inkStroke(ctx, body, lw, reveal, COLORS.petInk);
    ctx.restore();
  }
  if (fillA <= 0) return hands;

  ctx.save();
  ctx.globalAlpha *= fillA;
  const orange = COLORS.orange;
  for (const l of legs) {
    line(ctx, l.a, l.b, 2 * L.r + 2 * lw, COLORS.petInk);
    line(ctx, l.a, l.b, 2 * L.r, '#cf6c4d');
  }
  for (const a of arms) {
    line(ctx, a.root, a.tip, 2 * A.r + 2 * lw, COLORS.petInk);
    line(ctx, a.root, a.tip, 2 * A.r, orange);
  }
  drawEars(ctx, D, pose.ears || 0, lw);

  pathFrom(ctx, body);
  const top = D(0, PET.lift + PET.height);
  const g = ctx.createLinearGradient(0, top[1], 0, PET.lift);
  g.addColorStop(0, COLORS.orangeLight);
  g.addColorStop(0.55, orange);
  g.addColorStop(1, '#c9654a');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.save();
  ctx.clip();
  // glossy highlight - the "smooth" look
  const hl = D(-0.2, PET.lift + PET.height - 0.1);
  const hg = ctx.createRadialGradient(hl[0], hl[1], 0.01, hl[0], hl[1], 0.3);
  hg.addColorStop(0, 'rgba(255,236,224,0.75)');
  hg.addColorStop(0.4, 'rgba(255,220,200,0.22)');
  hg.addColorStop(1, 'rgba(255,220,200,0)');
  ctx.fillStyle = hg;
  ctx.fillRect(-1, 0, 2, 1.2);
  const bg = ctx.createLinearGradient(0, PET.lift + 0.12, 0, PET.lift);
  bg.addColorStop(0, 'rgba(150,60,40,0)');
  bg.addColorStop(1, 'rgba(150,60,40,0.3)');
  ctx.fillStyle = bg;
  ctx.fillRect(-1, 0, 2, 1.2);
  ctx.restore();
  inkStroke(ctx, body, lw, 1, COLORS.petInk);

  if ((pose.ears || 0) > 0) {
    const a = D(-0.36, PET.lift + PET.height - 0.07);
    const m = D(0, PET.lift + PET.height + 0.012);
    const b = D(0.36, PET.lift + PET.height - 0.07);
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.quadraticCurveTo(m[0], m[1] + 0.03, b[0], b[1]);
    ctx.lineWidth = 0.024 * pose.ears;
    ctx.strokeStyle = '#4a3a36';
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  const fc = D(0, PET.centerY);
  ctx.save();
  ctx.translate(fc[0], fc[1]);
  drawPetFace(ctx, { time: pose.time, ...pose.face });
  ctx.restore();

  ctx.restore();
  return hands;
}
