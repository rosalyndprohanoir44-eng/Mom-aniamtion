// The heroine: a tsundere anime-girl stick figure. Twin-tails with red
// ribbons, an ahoge, a red scarf and a pleated skirt, all with secondary
// motion (they trail the body using its past positions), plus an expressive
// face drawn on the black head (white eyes, red glint, blush lines).
import { headPoint, INK } from './rig.js';
import { norm, sub, add, mul, ribbon, polyPath, smoothPts, clamp, lerp } from './util.js';

export const RED = '#d8232f';
export const RED_DARK = '#8f111b';
export const RED_GLOW = '#ff3b3b';

/**
 * A chain that trails its anchor: point i heads toward where the anchor was
 * i*lag seconds ago (plus gravity and wind), with fixed segment length.
 * anchorAt(t) -> [x,y]
 */
export function chain(anchorAt, t, n, segLen, lag, gravity, wind = [0, 0], wave = 0, seed = 0) {
  // rest direction: hang with gravity, pushed by the wind
  const rest = norm([wind[0], -gravity + wind[1]]);
  const pts = [anchorAt(t)];
  for (let i = 1; i < n; i++) {
    // where this point would be if the strand simply hung from the anchor's past position
    const past = anchorAt(t - i * lag);
    const w = wave * Math.sin(t * 9 - i * 0.8 + seed) * i;
    const target = [past[0] + rest[0] * i * segLen - rest[1] * w, past[1] + rest[1] * i * segLen + rest[0] * w];
    const prev = pts[i - 1];
    let d = sub(target, prev);
    if (Math.hypot(d[0], d[1]) < 1e-6) d = rest;
    const u = norm(d);
    pts.push(add(prev, mul(u, segLen)));
  }
  return pts;
}

/** compute all secondary-motion chains for the girl at time t */
export function girlChains(jointsAt, t, windAt) {
  const J = jointsAt(t);
  const w = windAt(J.head[0], J.head[1], t);
  const dir = J.pose.dir;
  const view = J.pose.view === 'back' ? 'front' : J.pose.view || 'side';
  const tailAnchor = (side) => (tt) => {
    const j = tt === t ? J : jointsAt(tt);
    if (view === 'front') return headPoint(j, side * 0.088, 0.045);
    return side < 0 ? headPoint(j, -0.062, 0.07) : headPoint(j, -0.088, 0.005);
  };
  const tails = [-1, 1].map((side, i) => {
    const wind = view === 'front' ? [w[0] * 0.12 + side * dir * 0.28, w[1] * 0.2] : [w[0] * 0.35 - dir * 0.45, w[1] * 0.35];
    return chain(tailAnchor(side), t, 12, 0.042, 0.016, 1, wind, 0.004 * (0.4 + Math.hypot(w[0], w[1]) * 0.3), i * 2.1);
  });
  const scarf = chain((tt) => {
    const j = tt === t ? J : jointsAt(tt);
    const back = view === 'front' ? [0.03, 0] : [-0.035 * j.pose.dir, 0];
    return add(j.neck, back);
  }, t, 12, 0.046, 0.018, 1, [w[0] * 0.7 - dir * (view === 'front' ? 0.2 : 0.8), w[1] * 0.5], 0.006 * (0.5 + Math.hypot(w[0], w[1]) * 0.35), 5);
  const ahoge = chain((tt) => headPoint(tt === t ? J : jointsAt(tt), 0.0, 0.098), t, 4, 0.028, 0.025, -1, [dir * 0.45 + w[0] * 0.1, 0], 0.002, 9);
  // skirt hem trails the pelvis
  const hem = chain((tt) => {
    const j = tt === t ? J : jointsAt(tt);
    return j.pelvis;
  }, t, 3, 0.07, 0.03, 1, [w[0] * 0.08, 0], 0, 3);
  return { J, tails, scarf, ahoge, hem, dir, view: J.pose.view || 'side' };
}

function fillRibbon(ctx, pts, widthAt, fill, stroke = null, lw = 0) {
  const sm = smoothPts(pts, 3);
  polyPath(ctx, ribbon(sm, widthAt));
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.lineWidth = lw;
    ctx.strokeStyle = stroke;
    ctx.lineJoin = 'round';
    ctx.stroke();
  }
}

function bow(ctx, p, size, ang) {
  ctx.save();
  ctx.translate(p[0], p[1]);
  ctx.rotate(ang);
  // two ribbon ends hanging down, then two rounded loops
  ctx.beginPath();
  ctx.moveTo(-size * 0.1, 0);
  ctx.lineTo(-size * 0.55, -size * 1.05);
  ctx.lineTo(-size * 0.25, -size * 0.95);
  ctx.closePath();
  ctx.moveTo(size * 0.1, 0);
  ctx.lineTo(size * 0.55, -size * 1.05);
  ctx.lineTo(size * 0.25, -size * 0.95);
  ctx.closePath();
  ctx.fillStyle = RED_DARK;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size * 0.5, size * 0.95, -size * 1.25, size * 0.55, -size * 1.0, -size * 0.05);
  ctx.bezierCurveTo(-size * 0.8, -size * 0.45, -size * 0.35, -size * 0.25, 0, 0);
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size * 0.5, size * 0.95, size * 1.25, size * 0.55, size * 1.0, -size * 0.05);
  ctx.bezierCurveTo(size * 0.8, -size * 0.45, size * 0.35, -size * 0.25, 0, 0);
  ctx.fillStyle = RED;
  ctx.fill();
  ctx.lineWidth = size * 0.18;
  ctx.strokeStyle = RED_DARK;
  ctx.lineJoin = 'round';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.32, 0, Math.PI * 2);
  ctx.fillStyle = RED_DARK;
  ctx.fill();
  ctx.restore();
}

/** layers drawn BEHIND the body: twin-tails and the scarf tail */
export function drawGirlBack(ctx, G) {
  const { J } = G;
  const s = J.pose.scale ?? 1;
  for (const tail of G.tails) {
    fillRibbon(ctx, tail, (u) => (u < 0.2 ? lerp(0.03, 0.062, u / 0.2) : lerp(0.062, 0.004, (u - 0.2) / 0.8)) * s, INK);
  }
  // scarf tail: red ribbon with a darker fold
  fillRibbon(ctx, G.scarf, (u) => lerp(0.05, 0.062, u) * s * (u > 0.93 ? (1 - u) / 0.07 * 0.6 + 0.4 : 1), RED, RED_DARK, 0.008 * s);
  const fold = G.scarf.slice(2).map((p, i, arr) => p);
  if (fold.length > 2) {
    const sm = smoothPts(fold, 3);
    ctx.beginPath();
    ctx.moveTo(sm[0][0], sm[0][1]);
    for (const p of sm) ctx.lineTo(p[0], p[1]);
    ctx.lineWidth = 0.014 * s;
    ctx.strokeStyle = 'rgba(120,10,20,0.55)';
    ctx.lineCap = 'round';
    ctx.stroke();
  }
}

/** skirt (over the hips) */
export function drawSkirt(ctx, G) {
  const { J } = G;
  const p = J.pose;
  const s = p.scale ?? 1;
  const up = norm(sub(J.neck, J.pelvis));
  const side = [up[1], -up[0]]; // perpendicular (screen right when upright)
  const waist = add(J.pelvis, mul(up, 0.06 * s));
  const wHalf = 0.05 * s;
  const w1 = add(waist, mul(side, -wHalf));
  const w2 = add(waist, mul(side, wHalf));
  // hem spreads along the thighs, trails motion a little
  const trail = sub(G.hem[1], G.hem[0]);
  const down = mul(up, -1);
  const legDir = (knee) => norm(sub(knee, J.pelvis));
  const kB = legDir(J.kneeB), kF = legDir(J.kneeF);
  const Lh = 0.165 * s;
  const mixDir = (a, b, k) => norm([lerp(a[0], b[0], k), lerp(a[1], b[1], k)]);
  let hB = add(J.pelvis, mul(mixDir(down, kB, 0.55), Lh));
  let hF = add(J.pelvis, mul(mixDir(down, kF, 0.55), Lh));
  hB = add(hB, mul(trail, 0.35));
  hF = add(hF, mul(trail, 0.35));
  // keep a minimum flare
  const mid = [(hB[0] + hF[0]) / 2, (hB[1] + hF[1]) / 2];
  const spread = Math.hypot(hF[0] - hB[0], hF[1] - hB[1]);
  if (spread < 0.2 * s) {
    const d = spread > 1e-4 ? norm(sub(hF, hB)) : side;
    hB = add(mid, mul(d, -0.1 * s));
    hF = add(mid, mul(d, 0.1 * s));
  }
  const bulge = add(mid, mul(norm(sub(mid, waist)), 0.025 * s));
  ctx.beginPath();
  ctx.moveTo(w1[0], w1[1]);
  ctx.lineTo(w2[0], w2[1]);
  const first = Math.hypot(hF[0] - w2[0], hF[1] - w2[1]) < Math.hypot(hB[0] - w2[0], hB[1] - w2[1]) ? hF : hB;
  const second = first === hF ? hB : hF;
  ctx.lineTo(first[0], first[1]);
  ctx.quadraticCurveTo(bulge[0], bulge[1], second[0], second[1]);
  ctx.closePath();
  ctx.fillStyle = INK;
  ctx.fill();
  ctx.lineWidth = 0.02 * s;
  ctx.strokeStyle = INK;
  ctx.lineJoin = 'round';
  ctx.stroke();
  // pleats
  ctx.lineWidth = 0.007 * s;
  ctx.strokeStyle = 'rgba(255,255,255,0.28)';
  for (const k of [0.33, 0.66]) {
    const a = [lerp(w1[0], w2[0], k), lerp(w1[1], w2[1], k)];
    const b = [lerp(second[0], first[0], k), lerp(second[1], first[1], k)];
    ctx.beginPath();
    ctx.moveTo(lerp(a[0], b[0], 0.3), lerp(a[1], b[1], 0.3));
    ctx.lineTo(lerp(a[0], b[0], 0.92), lerp(a[1], b[1], 0.92));
    ctx.stroke();
  }
}

/** layers drawn OVER the body: scarf wrap, ribbons, ahoge, face */
export function drawGirlFront(ctx, G, face = {}) {
  const { J } = G;
  const p = J.pose;
  const s = p.scale ?? 1;
  // ahoge (single springy strand on top)
  const ah = smoothPts(G.ahoge, 3);
  ctx.beginPath();
  ctx.moveTo(ah[0][0], ah[0][1]);
  for (const q of ah) ctx.lineTo(q[0], q[1]);
  ctx.lineWidth = 0.02 * s;
  ctx.strokeStyle = INK;
  ctx.lineCap = 'round';
  ctx.stroke();
  // bangs: small spikes along the front-top of the head
  ctx.fillStyle = INK;
  const spikes = G.view === 'back' ? [] : G.view === 'front'
    ? [[-0.07, 0.07, -0.1, 0.02], [0.07, 0.07, 0.1, 0.02]]
    : [[0.07, 0.06, 0.115, 0.0], [0.04, 0.085, 0.09, 0.04], [-0.02, 0.1, 0.03, 0.08]];
  for (const [ax, ay, tx, ty] of spikes) {
    const a = headPoint(J, ax, ay), b = headPoint(J, tx, ty), c = headPoint(J, ax * 0.6, ay * 0.6);
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.closePath();
    ctx.fill();
  }
  // ribbons at the tail roots
  for (const tail of G.tails) bow(ctx, tail[0], 0.034 * s, Math.atan2(tail[1][1] - tail[0][1], tail[1][0] - tail[0][0]) + Math.PI / 2);
  // scarf wrap around the neck
  const up = norm(sub(J.neck, J.pelvis));
  const side = [up[1], -up[0]];
  const n1 = add(J.neck, mul(side, -0.05 * s));
  const n2 = add(J.neck, mul(side, 0.05 * s));
  ctx.beginPath();
  ctx.moveTo(n1[0], n1[1]);
  ctx.lineTo(n2[0], n2[1]);
  ctx.lineWidth = 0.05 * s;
  ctx.strokeStyle = RED;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.lineWidth = 0.012 * s;
  ctx.strokeStyle = RED_DARK;
  ctx.beginPath();
  ctx.moveTo(n1[0] + up[0] * -0.012 * s, n1[1] + up[1] * -0.012 * s);
  ctx.lineTo(n2[0] + up[0] * -0.012 * s, n2[1] + up[1] * -0.012 * s);
  ctx.stroke();
  if (G.view !== 'back') drawFace(ctx, J, G.view, face);
}

/** anime face on the black head. face: {eye:'normal'|'angry'|'soft'|'shut'|'wide'|'red', blush:0..1, mouth:'none'|'shout'|'pout'} */
export function drawFace(ctx, J, view = 'side', face = {}) {
  const eye = face.eye || 'normal';
  const s = (J.pose.scale ?? 1);
  const W = '#ffffff';
  const eyes = view === 'front' ? [[-0.04, 0.005], [0.04, 0.005]] : [[0.05, 0.008]];
  for (const [ex, ey] of eyes) {
    const P = (dx, dy) => headPoint(J, ex + dx * (view === 'front' && ex < 0 ? -1 : 1), ey + dy);
    ctx.beginPath();
    if (eye === 'soft' || eye === 'shut') {
      const a = P(-0.018, 0), b = P(0.018, 0), m = P(0, eye === 'soft' ? 0.016 : -0.012);
      ctx.moveTo(a[0], a[1]);
      ctx.quadraticCurveTo(m[0], m[1], b[0], b[1]);
      ctx.lineWidth = 0.009 * s;
      ctx.strokeStyle = W;
      ctx.lineCap = 'round';
      ctx.stroke();
      continue;
    }
    const tall = eye === 'wide' ? 0.03 : eye === 'angry' || eye === 'red' ? 0.016 : 0.024;
    const a = P(-0.022, 0.004), b = P(0.02, 0.006), c = P(0.012, -tall), d = P(-0.012, -tall * 0.8);
    const top = P(0, 0.004 + (eye === 'angry' || eye === 'red' ? -0.004 : 0.008));
    ctx.moveTo(a[0], a[1]);
    ctx.quadraticCurveTo(top[0], top[1], b[0], b[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.quadraticCurveTo(P(0, -tall * 1.15)[0], P(0, -tall * 1.15)[1], d[0], d[1]);
    ctx.closePath();
    ctx.fillStyle = eye === 'red' ? RED_GLOW : W;
    ctx.fill();
    // pupil / highlight
    const pc = P(0.006, -tall * 0.35);
    ctx.beginPath();
    ctx.ellipse(pc[0], pc[1], 0.0085 * s, 0.011 * s, 0, 0, Math.PI * 2);
    ctx.fillStyle = eye === 'red' ? '#5c0008' : INK;
    ctx.fill();
    const hl = P(0.0, -tall * 0.15);
    ctx.beginPath();
    ctx.arc(hl[0], hl[1], 0.0035 * s, 0, Math.PI * 2);
    ctx.fillStyle = W;
    ctx.fill();
    if (eye === 'angry' || eye === 'red') {
      const b1 = view === 'front' ? P(-0.026, 0.01) : P(-0.026, 0.028);
      const b2 = view === 'front' ? P(0.024, 0.03) : P(0.024, 0.012);
      ctx.beginPath();
      ctx.moveTo(b1[0], b1[1]);
      ctx.lineTo(b2[0], b2[1]);
      ctx.lineWidth = 0.008 * s;
      ctx.strokeStyle = W;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }
  const blush = clamp(face.blush || 0);
  if (blush > 0) {
    const cheeks = view === 'front' ? [[-0.05, -0.03], [0.05, -0.03]] : [[0.04, -0.03]];
    ctx.save();
    ctx.globalAlpha *= blush;
    ctx.lineWidth = 0.006 * s;
    ctx.strokeStyle = '#ff4d4d';
    ctx.lineCap = 'round';
    for (const [cx, cy] of cheeks) {
      for (let i = -1; i <= 1; i++) {
        const a = headPoint(J, cx + i * 0.012 + 0.006, cy + 0.008);
        const b = headPoint(J, cx + i * 0.012 - 0.004, cy - 0.008);
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  if (face.mouth === 'shout' || face.mouth === 'pout') {
    const m = view === 'front' ? [0, -0.05] : [0.078, -0.045];
    const a = headPoint(J, m[0] - 0.012, m[1] + 0.004), b = headPoint(J, m[0] + 0.012, m[1] + 0.004);
    const c = headPoint(J, m[0], m[1] - (face.mouth === 'shout' ? 0.02 : 0.006));
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.closePath();
    ctx.fillStyle = face.mouth === 'shout' ? W : 'rgba(255,255,255,0.85)';
    ctx.fill();
  }
}
