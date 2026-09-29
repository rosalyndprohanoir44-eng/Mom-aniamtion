// 2D scenes (drawn on the 2D canvas above the 3D) and overlay transitions.
import { tBar, tBeat, beatAt, beatPhase, kick, hat, mouthOpen, BEAT } from '../core/music.js';
import { keys, seg, E, lerp, clamp, invLerp, noise, hash, wobble, spring, TAU } from '../core/util.js';
import { blink, breathe, jump, groove, beatPoses, tremble } from '../anim/motion.js';
import { drawBear2D, drawPet2D, BEAR_POSE, PET_POSE, place, drawPawPrint, drawWand } from '../chars/draw2d.js';
import { BEAR_TALL, BEAR_SHORT, COLORS } from '../chars/spec.js';
import {
  W, H, paper, halftone, sunburst, speedLines, star, heart, note, twinkle, mark, doodles, sparkleBurst,
  panelPath, panelBorder, flash, iris, bubbleWipe, lensBokeh, writeOn, vignette,
} from '../fx/fx2d.js';

// ------------------------------------------------------------------ helpers
function bear(ctx, x, y, px, spec, pose, t) {
  ctx.save();
  place(ctx, x, y, px);
  const p = Object.assign(BEAR_POSE(), pose);
  p.time = t;
  const hands = drawBear2D(ctx, spec, p);
  ctx.restore();
  return hands;
}
function pet(ctx, x, y, px, pose, t) {
  ctx.save();
  place(ctx, x, y, px);
  const p = Object.assign(PET_POSE(), pose);
  p.time = t;
  drawPet2D(ctx, p);
  ctx.restore();
}
function win(t, a, b, fin, fout) {
  const i = fin > 0 ? E.smooth(clamp((t - a) / fin)) : t >= a ? 1 : 0;
  const o = fout > 0 ? E.smooth(clamp((b - t) / fout)) : t < b ? 1 : 0;
  return Math.min(i, o);
}
function shake(ctx, t, amt) {
  if (amt <= 0) return;
  ctx.translate(noise(t * 40, 1) * amt, noise(t * 40, 2) * amt);
}
/** doodle schedule: one doodle per beat between beats a..b */
function beatDoodles(a, b, seed, area, kinds = ['note', 'heart', 'star', 'twinkle'], colors = ['#ffb3cf', '#ffd27a', '#9ee8cf', '#f3a07e']) {
  const out = [];
  for (let i = a; i < b; i++) {
    const r = (k) => hash(i * 13.7 + seed * 3.1 + k);
    out.push({
      t: tBeat(i), x: area[0] + r(1) * (area[2] - area[0]), y: area[1] + r(2) * (area[3] - area[1]),
      kind: kinds[i % kinds.length], color: colors[(i * 3) % colors.length], s: 44 + r(3) * 34, rot: (r(4) - 0.5) * 0.8,
    });
  }
  return out;
}

// ================================================================== SCENES
const SKETCH_DOODLES = [
  ...beatDoodles(12, 16, 1, [150, 380, 560, 760]),
  ...beatDoodles(12, 16, 2, [1380, 380, 1780, 760]),
];

const sketch = {
  name: 'sketch', start: 0, end: tBar(4),
  opaque: () => true,
  draw(ctx, t) {
    ctx.drawImage(paper(), 0, 0);
    const bx = 740, by = 1015, bs = 272;
    const px = 1190, ps = 345;
    // push-in toward the bear at the end (hand-off to 3D)
    const push = seg(t, tBar(4) - 0.75, tBar(4), E.inCubic);
    const zc = [bx, by - 1.45 * bs];
    ctx.translate(zc[0], zc[1]);
    ctx.scale(1 + push * 1.9, 1 + push * 1.9);
    ctx.translate(-zc[0] + (W / 2 - zc[0]) * push * 0.55, -zc[1] + (H / 2 - zc[1]) * push * 0.55);

    // title
    writeOn(ctx, 'White Bear', 960, 200, 150, seg(t, 0.2, 1.6, E.linear), { t, wobble: 2 });
    const stamp = seg(t, tBeat(3), tBeat(3) + 0.3, E.outBack);
    if (stamp > 0) {
      ctx.save();
      ctx.translate(1348, 128);
      ctx.rotate(0.25);
      ctx.scale(stamp * 240, -stamp * 240);
      drawPawPrint(ctx, 0, 0, 1, '#2a2321');
      ctx.restore();
    }
    writeOn(ctx, '& Claude Pet', 960, 312, 96, seg(t, tBar(2), tBar(2) + 0.9, E.linear), { t, color: COLORS.orange, wobble: 2 });
    const sub = seg(t, tBar(2) + 1.0, tBar(2) + 1.6);
    if (sub > 0) {
      ctx.save();
      ctx.globalAlpha = sub;
      ctx.font = '600 30px Fredoka, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#8a7a74';
      ctx.fillText('~  we are cute, we are bear  ~', 960, 366);
      ctx.restore();
    }

    // White Bear draws itself, then comes alive
    const alive = t > tBar(3);
    const g = groove(t, alive ? 1 : 0.3);
    const wave = alive ? 2.3 + Math.sin(t * 9) * 0.4 : 0;
    const hop = alive ? jump(t, tBeat(14), 0.4, 0.2) : { y: 0, squash: 1 };
    bear(ctx, bx, by - hop.y * bs, bs, BEAR_TALL, {
      reveal: seg(t, 0.9, 3.2, E.inOutSine), fill: seg(t, 3.0, 3.7), boil: 1,
      squash: breathe(t) * g.squash * hop.squash, bendX: g.sway * 0.5,
      armR: lerp(0, wave, seg(t, tBar(3), tBar(3) + 0.3)), armL: 0.05,
      face: { expr: alive ? 'happy' : 'neutral', blink: t < 3.9 ? 0 : blink(t, 1), lookX: alive ? 0.3 : 0 },
    }, t);
    // Claude Pet draws, paints orange, hops
    const ph = alive ? jump(t, tBeat(13), 0.36, 0.3) : { y: 0, squash: 1 };
    const ph2 = alive ? jump(t, tBeat(15), 0.36, 0.3) : { y: 0, squash: 1 };
    pet(ctx, px, by - (ph.y + ph2.y) * ps, ps, {
      reveal: seg(t, tBar(2) + 0.1, tBar(2) + 1.3, E.inOutSine), fill: seg(t, tBar(2) + 1.1, tBar(2) + 1.7), boil: 1,
      squash: breathe(t, 0.02, 2.6) * ph.squash * ph2.squash * g.squash,
      armL: alive ? 0.6 + Math.sin(t * 8) * 0.4 : 0, armR: alive ? 0.6 + Math.sin(t * 8 + 2) * 0.4 : 0,
      face: { expr: alive ? 'happy' : 'normal', blink: blink(t, 4), lookX: alive ? -0.4 : 0 },
    }, t);
    sparkleBurst(ctx, t, tBar(2) + 1.65, px, by - 0.4 * ps, 12, 200, ['#ffd27a', '#ffffff', '#ffb3cf'], 3);
    sparkleBurst(ctx, t, 3.65, bx, by - 1.2 * bs, 12, 260, ['#ffd27a', '#ffffff', '#ffb3cf'], 5);
    doodles(ctx, t, SKETCH_DOODLES);
    // flash to hand over to 3D
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    flash(ctx, seg(t, tBar(4) - 0.25, tBar(4), E.inQuad));
  },
};

// ------------------------------------------------------------------ split-screen dance
const B_DANCE = [
  { armL: 2.6, armR: 0.3, bendX: -0.09, squash: 1.02, legL: 0, legR: 0.07, dy: 0, expr: 'happy' },
  { armL: 0.3, armR: 2.6, bendX: 0.09, squash: 1.02, legL: 0.07, legR: 0, dy: 0, expr: 'happy' },
  { armL: 1.5, armR: 1.5, bendX: 0, squash: 0.86, legL: 0, legR: 0, dy: 0, expr: 'laugh' },
  { armL: 2.85, armR: 2.85, bendX: 0, squash: 1.13, legL: 0.1, legR: 0.1, dy: 70, expr: 'laugh' },
  { armL: 0.95, armR: 0.15, bendX: -0.13, squash: 0.98, legL: 0.06, legR: 0, dy: 0, expr: 'happy' },
  { armL: 0.15, armR: 0.95, bendX: 0.13, squash: 0.98, legL: 0, legR: 0.06, dy: 0, expr: 'happy' },
  { armL: 2.2, armR: 2.2, bendX: 0.1, squash: 1.0, legL: 0, legR: 0.05, dy: 20, expr: 'happy' },
  { armL: 0.05, armR: 0.05, bendX: 0, squash: 0.9, legL: 0, legR: 0, dy: 0, expr: 'cute' },
];
const P_DANCE = [
  { armL: 1.2, armR: -0.3, bendX: 0.12, squash: 0.95, dx: -30, dy: 0, rot: -0.08, expr: 'happy' },
  { armL: -0.3, armR: 1.2, bendX: -0.12, squash: 0.95, dx: 30, dy: 0, rot: 0.08, expr: 'happy' },
  { armL: 0.2, armR: 0.2, bendX: 0, squash: 0.8, dx: 0, dy: 0, rot: 0, expr: 'cute' },
  { armL: 1.3, armR: 1.3, bendX: 0, squash: 1.15, dx: 0, dy: 110, rot: 0, expr: 'happy' },
  { armL: 1.0, armR: 0.2, bendX: 0.14, squash: 1.0, dx: -40, dy: 0, rot: -0.12, expr: 'normal' },
  { armL: 0.2, armR: 1.0, bendX: -0.14, squash: 1.0, dx: 40, dy: 0, rot: 0.12, expr: 'normal' },
  { armL: 1.3, armR: 1.3, bendX: 0, squash: 1.05, dx: 0, dy: 50, rot: 0, expr: 'happy' },
  { armL: 0.0, armR: 0.0, bendX: 0, squash: 0.88, dx: 0, dy: 0, rot: 0, expr: 'cute' },
];

const split = {
  name: 'split', start: tBar(12) - 0.22, end: tBar(16) + 0.1,
  opaque: (t) => t > tBar(12) + 0.08 && t < tBar(16) - 0.45,
  draw(ctx, t) {
    const inK = E.outBack(clamp(invLerp(tBar(12) - 0.22, tBar(12) + 0.08, t)), 1.3);
    const outK = E.inBack(clamp(invLerp(tBar(16) - 0.5, tBar(16) + 0.05, t)), 1.4);
    const offL = -1150 * (1 - inK) - 1150 * outK;
    const offR = 1150 * (1 - inK) + 1150 * outK;
    const b0 = Math.round(beatAt(tBar(12)));
    const mirror = t > tBar(14);
    const micT = tBar(15) + 0.2;
    const freeze = t > tBar(16) - 0.95;
    const tt = freeze ? tBar(16) - 0.95 : t; // freeze-frame in the break

    // ---------------- left panel: White Bear
    const L = [[-40, -40], [1010, -40], [905, 1120], [-40, 1120]].map(([x, y]) => [x + offL, y]);
    ctx.save();
    panelPath(ctx, L);
    ctx.clip();
    const k = kick(t);
    if (mirror) sunburst(ctx, 470 + offL, 640, 18, '#ffe0ec', '#ffd0e2', t * 0.25);
    else ctx.fillStyle = '#ffe3ee', ctx.fillRect(0, 0, W, H);
    halftone(ctx, -40 + offL, -40, 1060, 1160, 'rgba(255,160,196,0.55)', 'rgba(0,0,0,0)', 38, 8, t, k);
    let bp = beatPoses(tt, B_DANCE, b0);
    if (t > micT) bp = { armL: 0.1, armR: 1.35, bendX: -0.03, squash: 1, legL: 0, legR: 0, dy: 0, expr: 'neutral' };
    const tap = t > micT ? Math.exp(-((t - tBeat(Math.floor(beatAt(t)))) * 9)) : 0;
    const g = groove(tt, 0.8);
    bear(ctx, 470 + offL, 1010 - bp.dy, 360, BEAR_TALL, {
      armL: bp.armL, armR: bp.armR + (t > micT ? tap * 0.12 : 0), bendX: bp.bendX + g.sway * 0.3, squash: bp.squash * g.squash,
      legL: bp.legL, legR: bp.legR, hold: t > micT ? 'mic' : null, micAng: 0.55,
      bagSwing: Math.sin(beatAt(tt) * Math.PI) * 0.3,
      face: { expr: t > micT ? 'happy' : bp.expr, blink: blink(tt, 2), lookX: t > micT ? 0.5 : 0 },
    }, tt);
    sparkleBurst(ctx, t, micT - 0.05, 470 + 250 + offL, 1010 - 1.05 * 360, 12, 160, undefined, 7);
    if (t > micT + 0.3 && t < tBar(16) - 0.5) {
      for (const tb of [tBeat(b0 + 13), tBeat(b0 + 14)]) {
        const a = t - tb;
        if (a > 0 && a < 0.45) mark(ctx, 800 + offL, 330 - a * 60, 70, 'tap!', '#ffd27a', -0.15);
      }
    }
    ctx.restore();

    // ---------------- right panel: Claude Pet
    const R = [[1040, -40], [1960, -40], [1960, 1120], [935, 1120]].map(([x, y]) => [x + offR, y]);
    ctx.save();
    panelPath(ctx, R);
    ctx.clip();
    if (mirror) sunburst(ctx, 1440 + offR, 700, 18, '#dcf7ec', '#c8f1e2', -t * 0.25);
    else ctx.fillStyle = '#dff7ee', ctx.fillRect(0, 0, W, H);
    halftone(ctx, 900 + offR, -40, 1100, 1160, 'rgba(120,214,180,0.5)', 'rgba(0,0,0,0)', 38, 8, -t, k);
    let pp = beatPoses(tt, P_DANCE, b0 + (mirror ? 0 : 2));
    const curious = t > micT + 0.4;
    if (curious) pp = { armL: 0.1, armR: 0.1, bendX: -0.1, squash: 1.02, dx: -30, dy: 0, rot: -0.06, expr: 'normal' };
    const pg = groove(tt, 0.8);
    ctx.save();
    ctx.translate(1440 + offR + pp.dx, 930 - pp.dy);
    ctx.rotate(pp.rot);
    ctx.translate(-(1440 + offR + pp.dx), -(930 - pp.dy));
    pet(ctx, 1440 + offR + pp.dx, 930 - pp.dy, 560, {
      armL: pp.armL, armR: pp.armR, bendX: pp.bendX, squash: pp.squash * pg.squash,
      face: { expr: pp.expr, blink: blink(tt, 5), lookX: curious ? -1 : 0, lookY: curious ? 0.3 : 0 },
    }, tt);
    ctx.restore();
    if (curious && t < tBar(16) - 0.5) mark(ctx, 1250 + offR, 470 + Math.sin(t * 6) * 8, 110 * E.outBack(clamp((t - micT - 0.4) / 0.3)), '?', '#9ee8cf', -0.2);
    ctx.restore();

    // borders
    panelBorder(ctx, L, 12);
    panelBorder(ctx, R, 12);
    // doodles
    if (!freeze) doodles(ctx, t, SPLIT_DOODLES);
  },
};
const SPLIT_DOODLES = [
  ...beatDoodles(50, 62, 3, [80, 140, 820, 420]),
  ...beatDoodles(50, 62, 4, [1100, 120, 1840, 380], ['star', 'heart', 'twinkle', 'note']),
];

// ------------------------------------------------------------------ shock: I am so scary of you
const shock = {
  name: 'shock', start: 39.25, end: 42.25,
  opaque: () => true,
  draw(ctx, t) {
    const t0 = 39.25;
    const sh = (t < t0 + 0.45 ? 22 * (1 - (t - t0) / 0.45) : 0) + Math.max(0, 12 * (1 - Math.abs(t - 40.12) / 0.25));
    ctx.save();
    shake(ctx, t, sh);
    sunburst(ctx, 960, 560, 24, '#fff6cf', '#ffe79a', t * 0.4, 2600);
    speedLines(ctx, 960, 560, t, 'rgba(60,35,45,0.75)', 80, 420);
    // jump-scare arcs: up fast, freeze, float down
    const arc = (tt, delay, h) => {
      const a = tt - t0 - delay;
      if (a < 0) return 0;
      if (a < 0.2) return h * E.outCubic(a / 0.2);
      if (a < 0.75) return h + Math.sin((a - 0.2) * 20) * 4;
      if (a < 1.65) return h * (1 - E.inQuad((a - 0.75) / 0.9));
      return -wobble(a - 1.65, 3, 7) * 30;
    };
    const land = t > t0 + 1.65;
    const byy = arc(t, 0, 150);
    const pyy = arc(t, 0.06, 190);
    const bsq = land ? 1 + wobble(t - t0 - 1.65, 4, 6) * 0.15 : 1.14;
    const point = seg(t, 41.3, 41.55, E.outBack);
    // White Bear
    bear(ctx, 610, 1000 - byy, 300, BEAR_TALL, {
      armL: lerp(2.7, 0.35, land ? 1 : 0), armR: lerp(lerp(2.7, 0.4, land ? 1 : 0), 1.45, point),
      legL: land ? 0 : 0.12, legR: land ? 0 : 0.08, squash: bsq + tremble(t, 0.012), bendX: land ? tremble(t, 0.02, 3) : 0,
      bagSwing: Math.sin(t * 20) * 0.3,
      face: land
        ? { expr: 'scared', sweat: 1, gloom: 1, tremble: 1, lookX: 1 }
        : { expr: 'surprised', open: 1, lookX: 0.6 },
    }, t);
    // Claude Pet
    pet(ctx, 1340, 960 - pyy, 500, {
      armL: land ? lerp(0.2, 0.25, point) : 1.3, armR: land ? 0.2 : 1.3, legLift: land ? 0 : 0.05,
      squash: (land ? 1 + wobble(t - t0 - 1.71, 4, 6) * 0.18 : 1.16) + tremble(t, 0.015, 5),
      face: { expr: 'wide', sweat: 1, tremble: 1, lookX: -1 },
    }, t);
    // "!!" marks
    const mk = E.outBack(clamp((t - t0 - 0.05) / 0.25), 2.5);
    if (mk > 0 && t < 41.2) {
      mark(ctx, 850, 330 - byy * 0.8, 150 * mk, '!!', '#ff6f91', 0.15 + Math.sin(t * 30) * 0.04);
      mark(ctx, 1640, 470 - pyy * 0.8, 140 * mk, '!?', '#ffb070', 0.18 + Math.sin(t * 30 + 1) * 0.04);
    }
    // flying sweat drops
    for (let i = 0; i < 10; i++) {
      const a = t - t0 - 0.05;
      if (a < 0 || a > 0.8) continue;
      const ang = -Math.PI / 2 + (hash(i) - 0.5) * 2.4;
      const cx = i < 5 ? 610 : 1340, cy = (i < 5 ? 460 - byy : 740 - pyy);
      const d = 60 + a * 520;
      ctx.save();
      ctx.globalAlpha = 1 - a / 0.8;
      ctx.translate(cx + Math.cos(ang) * d, cy + Math.sin(ang) * d);
      ctx.rotate(ang + Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(0, -22);
      ctx.bezierCurveTo(14, -2, 14, 14, 0, 14);
      ctx.bezierCurveTo(-14, 14, -14, -2, 0, -22);
      ctx.fillStyle = '#a8dcff';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#4f9cc6';
      ctx.stroke();
      ctx.restore();
    }
    // the bubble wand flies away (it will be found later)
    const wa = t - t0;
    if (wa > 0 && wa < 1.2) {
      ctx.save();
      ctx.translate(820 + wa * 950, 330 - wa * 520 + wa * wa * 300);
      ctx.scale(360, -360);
      drawWand(ctx, 0, 0, wa * 14, 1);
      ctx.restore();
    }
    ctx.restore();
    // impact frame: two inverted frames
    if (t < t0 + 0.085) {
      ctx.save();
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }
  },
};

// ------------------------------------------------------------------ You are so scary: dramatic close-ups
const scary = {
  name: 'scary', start: 45.62, end: 47.72,
  opaque: (t) => t > 46.18 && t < 47.42,
  draw(ctx, t) {
    const inL = E.outCubic(clamp((t - 45.62) / 0.2));
    const inR = E.outCubic(clamp((t - 45.98) / 0.2));
    const out = E.inCubic(clamp((t - 47.38) / 0.3));
    const dyL = -H * (1 - inL) - H * out;
    const dyR = H * (1 - inR) + H * out;
    const zig = (x0, dy) => {
      const pts = [];
      for (let i = 0; i <= 12; i++) pts.push([x0 + (i % 2 ? 26 : -26), -40 + (i * (H + 80)) / 12 + dy]);
      return pts;
    };
    const push = seg(t, 45.62, 47.6, E.linear);
    // left: bear
    const Lp = [[-40, -40 + dyL], ...zig(960, dyL), [-40, H + 40 + dyL]];
    ctx.save();
    panelPath(ctx, Lp);
    ctx.clip();
    ctx.fillStyle = '#2d2340';
    ctx.fillRect(0, 0, W, H);
    speedLines(ctx, 480, 520 + dyL, t, 'rgba(160,140,220,0.35)', 60, 260);
    ctx.save();
    ctx.translate(tremble(t, 8, 1), tremble(t, 8, 2) + dyL);
    const bs = 1450 + push * 180;
    bear(ctx, 480, 540 + 1.74 * bs - 0.02 * bs, bs, BEAR_TALL, {
      face: { expr: 'scared', sweat: 1, gloom: 1, tremble: 1, lookX: 1, open: mouthOpen(t, 'bear') }, shadow: 0, lw: 0.012,
    }, t);
    ctx.restore();
    ctx.restore();
    // right: pet
    const Rp = [[W + 40, -40 + dyR], ...zig(960, dyR), [W + 40, H + 40 + dyR]];
    ctx.save();
    panelPath(ctx, Rp);
    ctx.clip();
    ctx.fillStyle = '#2d2340';
    ctx.fillRect(0, 0, W, H);
    speedLines(ctx, 1440, 540 + dyR, t, 'rgba(255,170,140,0.3)', 60, 260);
    ctx.save();
    ctx.translate(tremble(t, 8, 3), tremble(t, 8, 4) + dyR);
    const ps = 1500 + push * 180;
    pet(ctx, 1440, 560 + 0.39 * ps, ps, { face: { expr: 'wide', sweat: 1, tremble: 1, lookX: -1 }, shadow: 0, lw: 0.012 }, t);
    ctx.restore();
    ctx.restore();
    // divider
    const ink = (pts) => {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (const p of pts) ctx.lineTo(p[0], p[1]);
      ctx.lineJoin = 'round';
      ctx.lineWidth = 26;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#2a2321';
      ctx.stroke();
    };
    if (inR > 0.3 && out < 0.5) ink(zig(960, 0));
  },
};

// ------------------------------------------------------------------ pop-art chorus 3
const POP = [['#ffd1e3', '#ffbcd4'], ['#d4f7e9', '#b7eed9'], ['#fff1b8', '#ffe28f'], ['#e5dcff', '#d3c5ff']];
const SB_DANCE = [
  { armL: 2.4, armR: 0.3, bendX: -0.1, squash: 1.0, legL: 0, legR: 0.06, dy: 0, dx: -20, expr: 'happy' },
  { armL: 0.3, armR: 2.4, bendX: 0.1, squash: 1.0, legL: 0.06, legR: 0, dy: 0, dx: 20, expr: 'happy' },
  { armL: 2.4, armR: 0.3, bendX: -0.1, squash: 1.0, legL: 0, legR: 0.06, dy: 0, dx: -20, expr: 'happy' },
  { armL: 2.6, armR: 2.6, bendX: 0, squash: 1.1, legL: 0.06, legR: 0.06, dy: 60, dx: 0, expr: 'laugh' },
];
const SP_DANCE = [
  { armL: 1.1, armR: -0.2, bendX: 0.12, squash: 0.96, dx: -30, dy: 0, rot: -0.08 },
  { armL: -0.2, armR: 1.1, bendX: -0.12, squash: 0.96, dx: 30, dy: 0, rot: 0.08 },
  { armL: 1.1, armR: -0.2, bendX: 0.12, squash: 0.96, dx: -30, dy: 0, rot: -0.08 },
  { armL: 1.3, armR: 1.3, bendX: 0, squash: 1.12, dx: 0, dy: 90, rot: 0 },
];
const POP_DOODLES = beatDoodles(112, 120, 9, [120, 110, 1800, 420], ['heart', 'star', 'heart', 'twinkle'], ['#ff8fb8', '#ffd27a', '#ff9fc0', '#ffffff']);

const popart = {
  name: 'popart', start: tBar(28) - 0.12, end: tBar(30),
  opaque: (t) => t > tBar(28) + 0.2,
  draw(ctx, t) {
    const open = E.outCubic(clamp((t - (tBar(28) - 0.12)) / 0.34));
    ctx.save();
    if (open < 1) {
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, open * 1200, 0, TAU);
      ctx.clip();
    }
    const b = beatAt(t);
    const pal = POP[Math.floor((b - beatAt(tBar(28))) / 2 + 0.001) % 4 < 0 ? 0 : Math.floor((b - beatAt(tBar(28))) / 2 + 0.001) % 4];
    sunburst(ctx, W / 2, 620, 20, pal[0], pal[1], t * 0.35);
    // tiled paw prints drifting diagonally
    ctx.save();
    ctx.globalAlpha = 0.35;
    const off = (t * 60) % 180;
    for (let y = -180; y < H + 180; y += 180)
      for (let x = -180; x < W + 180; x += 180) {
        ctx.save();
        ctx.translate(x + off + ((y / 180) % 2) * 90, y + off);
        ctx.scale(260, -260);
        drawPawPrint(ctx, 0, 0, 1, '#ffffff', 0.3);
        ctx.restore();
      }
    ctx.restore();
    halftone(ctx, 0, 0, W, H, 'rgba(255,255,255,0.35)', 'rgba(0,0,0,0)', 46, 7, t, kick(t));
    const b0 = Math.round(beatAt(tBar(28)));
    const bp = beatPoses(t, SB_DANCE, b0);
    const pp = beatPoses(t, SP_DANCE, b0);
    const cute = win(t, 60.75, 61.5, 0.1, 0.15);
    const g = groove(t, 1);
    // chubby White Bear (short version) + Claude Pet with bear ears
    bear(ctx, 690 + bp.dx, 960 - bp.dy, 500, BEAR_SHORT, {
      armL: lerp(bp.armL, 1.2, cute), armR: lerp(bp.armR, 1.2, cute), bendX: lerp(bp.bendX, 0.1, cute) + g.sway * 0.3,
      squash: bp.squash * g.squash, legL: bp.legL, legR: bp.legR, bagSwing: Math.sin(b * Math.PI) * 0.3,
      face: { expr: cute > 0.5 ? 'cute' : bp.expr, open: mouthOpen(t, 'bear'), blink: blink(t, 6) },
    }, t);
    ctx.save();
    const px = 1270 + pp.dx, py = 950 - pp.dy;
    ctx.translate(px, py);
    ctx.rotate(pp.rot + cute * -0.12);
    ctx.translate(-px, -py);
    pet(ctx, px, py, 580, {
      armL: pp.armL, armR: pp.armR, bendX: pp.bendX, squash: pp.squash * g.squash, ears: 1,
      face: { expr: cute > 0.5 ? 'cute' : 'happy', open: mouthOpen(t, 'pet'), blink: blink(t, 7) },
    }, t);
    ctx.restore();
    doodles(ctx, t, POP_DOODLES, 1.6);
    sparkleBurst(ctx, t, 62.11, 960, 450, 16, 380, ['#ffffff', '#fff3a0', '#ffb3d1'], 11);
    ctx.restore();
    if (open < 1) {
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, open * 1200, 0, TAU);
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }
  },
};

// ------------------------------------------------------------------ end card
const endcard = {
  name: 'endcard', start: tBar(36) - 0.05, end: 99,
  opaque: (t) => t > tBar(36) + 0.5,
  draw(ctx, t) {
    const t0 = tBar(36) - 0.05;
    const fade = seg(t, t0, t0 + 0.55, E.inOutSine);
    ctx.globalAlpha = fade;
    ctx.drawImage(paper(), 0, 0);
    ctx.globalAlpha = 1;
    if (fade < 0.85) return;
    const rv = seg(t, t0 + 0.5, t0 + 1.15, E.inOutSine);
    const fl = seg(t, t0 + 1.05, t0 + 1.4);
    const g = groove(t, 0.6);
    bear(ctx, 800, 1000, 430, BEAR_SHORT, {
      reveal: rv, fill: fl, boil: 1, squash: g.squash, armR: 2.2 + Math.sin(t * 8) * 0.35 * fl, armL: 0.1,
      face: { expr: 'happy', blink: blink(t, 8) },
    }, t);
    pet(ctx, 1150, 1000, 440, {
      reveal: rv, fill: fl, boil: 1, ears: fl, squash: g.squash, armL: 0.9 + Math.sin(t * 8 + 1) * 0.3 * fl, armR: 0.3,
      face: { expr: 'happy', blink: blink(t, 9) },
    }, t);
    const hk = E.outBack(clamp((t - t0 - 1.2) / 0.35), 2);
    if (hk > 0) heart(ctx, 985, 420 + Math.sin(t * 4) * 8, 120 * hk * (1 + kick(t) * 0.08), '#ff8fb8', 0);
    writeOn(ctx, 'We are cute, we are bear', 960, 185, 112, seg(t, t0 + 0.5, t0 + 1.4, E.linear), { t, wobble: 2 });
    writeOn(ctx, 'White Bear  &  Claude Pet', 960, 275, 64, seg(t, t0 + 1.0, t0 + 1.6, E.linear), { t, color: COLORS.orange });
    const st = E.outBack(clamp((t - 77.45) / 0.25), 2.4);
    if (st > 0) {
      ctx.save();
      ctx.translate(1560, 820);
      ctx.rotate(-0.2);
      ctx.scale(st, st);
      ctx.beginPath();
      ctx.arc(0, 0, 118, 0, TAU);
      ctx.fillStyle = 'rgba(217,119,87,0.12)';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = COLORS.orange;
      ctx.stroke();
      ctx.save();
      ctx.scale(300, -300);
      drawPawPrint(ctx, 0, 0.1, 0.95, COLORS.orange);
      ctx.restore();
      ctx.font = '700 44px Gaegu, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = COLORS.orange;
      ctx.fillText('the end', 0, 70);
      ctx.restore();
    }
    doodles(ctx, t, END_DOODLES, 2.2);
  },
};
const END_DOODLES = beatDoodles(145, 150, 12, [200, 380, 560, 700]).concat(beatDoodles(145, 150, 13, [1380, 380, 1700, 640]));

export const SHOTS2D = [sketch, split, shock, scary, popart, endcard];

// ================================================================== OVERLAYS
const THREE_D = [[tBar(4), tBar(12)], [tBar(16) - 0.4, 39.25], [42.25, 45.62], [47.62, tBar(28)], [tBar(30), tBar(36) + 0.5]];
const in3d = (t) => THREE_D.some(([a, b]) => t >= a && t < b);

export const OVERLAYS = [
  // hand-off flash from the sketch into 3D
  { start: tBar(4), end: tBar(4) + 0.7, draw: (o, t) => flash(o, 1 - seg(t, tBar(4), tBar(4) + 0.7, E.outCubic)) },
  // soft vignette + lens bokeh while in 3D
  {
    start: 0, end: 99, draw: (o, t) => {
      if (!in3d(t)) return;
      vignette(o, 0.2, '70,40,60');
      const dusk = seg(t, tBar(32), tBar(33), E.linear);
      lensBokeh(o, t, 0.5 + dusk * 0.7, 3, dusk > 0.5 ? ['255,210,170', '255,180,200', '190,245,225'] : undefined);
    },
  },
  // flash on the downbeat entering the split panels / shock / pop-art
  { start: 42.25, end: 42.6, draw: (o, t) => flash(o, 0.8 * (1 - seg(t, 42.25, 42.6))) },
  // paw-print iris out of the pop-art scene into the finale
  {
    start: tBar(30) - 0.35, end: tBar(30) + 0.45, draw: (o, t) => {
      const c = tBar(30);
      const k = t < c ? 1 - E.inCubic(clamp((t - (c - 0.35)) / 0.35)) : E.outCubic(clamp((t - c) / 0.45));
      iris(o, k * 1.1, W / 2, H / 2 + 40, '#2a2321', 'paw');
    },
  },
  // bubble wipe into the sunset
  { start: tBar(32) - 0.75, end: tBar(32) + 0.6, draw: (o, t) => bubbleWipe(o, t, tBar(32) - 0.75, 1.3, 5) },
];
