// Screen-space typography: Japanese dialogue with English subtitles,
// brush-kanji technique call-outs, the title card and the end seal.
import { clamp, E, rng, lerp } from './util.js';

export const FONT = {
  jp: '"ZenMaru", "Zen Maru Gothic", sans-serif',
  en: '"Nunito", system-ui, sans-serif',
  brush: '"YujiSyuku", serif',
  caps: '"Bebas", "Bebas Neue", Impact, sans-serif',
};
const INK = '#141414';
const RED = '#d8232f';

function halo(ctx, text, x, y, w, fill = INK, stroke = '#ffffff') {
  ctx.lineJoin = 'round';
  ctx.miterLimit = 2;
  ctx.lineWidth = w;
  ctx.strokeStyle = stroke;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = fill;
  ctx.fillText(text, x, y);
}

function spaced(ctx, text, x, y, spacing, mode = 'fill') {
  // draw centred letter-spaced text
  const widths = [...text].map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (text.length - 1);
  let cx = x - total / 2;
  [...text].forEach((c, i) => {
    if (mode === 'stroke') ctx.strokeText(c, cx, y);
    else ctx.fillText(c, cx, y);
    cx += widths[i] + spacing;
  });
  return total;
}

/** dry-brush band (red) centred at x,y */
function brushBand(ctx, x, y, w, h, k, seed, col = RED) {
  if (k < 0.01) return;
  const rnd = rng(seed);
  const N = 40;
  const top = [], bot = [];
  const len = w * k;
  for (let i = 0; i <= N; i++) {
    const s = i / N;
    const px = x - w / 2 + len * s;
    const taper = Math.min(1, s / 0.06, (1 - s) / 0.12 + 0.3);
    top.push([px, y - (h / 2) * taper + (rnd() - 0.5) * h * 0.12]);
    bot.push([px + (rnd() - 0.5) * 4, y + (h / 2) * taper * (0.9 + rnd() * 0.15)]);
  }
  ctx.beginPath();
  ctx.moveTo(top[0][0], top[0][1]);
  for (const p of top) ctx.lineTo(p[0], p[1]);
  for (let i = bot.length - 1; i >= 0; i--) ctx.lineTo(bot[i][0], bot[i][1]);
  ctx.closePath();
  ctx.fillStyle = col;
  ctx.fill();
  // dry streaks
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineCap = 'round';
  for (let i = 0; i < 7; i++) {
    const yy = y + (rnd() - 0.5) * h * 0.8;
    const x0 = x - w / 2 + len * (0.35 + rnd() * 0.4);
    ctx.beginPath();
    ctx.moveTo(x0, yy);
    ctx.lineTo(Math.min(x - w / 2 + len, x0 + w * (0.1 + rnd() * 0.3)), yy + (rnd() - 0.5) * 3);
    ctx.lineWidth = 1 + rnd() * 2.5;
    ctx.stroke();
  }
}

export function drawSubtitles(ctx, t, lines, W, H, lb = 0) {
  for (const L of lines) {
    if (t < L.t0 - 0.2 || t > L.t1 + 0.3) continue;
    const a = Math.min(clamp((t - L.t0) / 0.14), 1 - clamp((t - L.t1) / 0.22));
    if (a <= 0) continue;
    const rise = (1 - E.outCubic(clamp((t - L.t0) / 0.25))) * 10;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    const y0 = H - (L.high ? 190 : 112) - 92 * lb + rise;
    ctx.font = `700 46px ${FONT.jp}`;
    halo(ctx, L.jp, W / 2, y0, 9);
    ctx.font = `800 ${L.en.length > 46 ? 32 : 35}px ${FONT.en}`;
    halo(ctx, L.en, W / 2, y0 + 50, 8, '#262626');
    ctx.restore();
  }
}

/** technique name call-out: big brush kanji over a red band + English caps */
export function drawCallouts(ctx, t, list, W, H) {
  for (const c of list) {
    const u = t - c.t;
    const dur = c.dur ?? 1.5;
    if (u < 0 || u > dur) continue;
    const inK = E.outCubic(clamp(u / 0.16));
    const out = clamp((u - (dur - 0.25)) / 0.25);
    const cx = c.side === 'left' ? W * 0.24 : c.side === 'center' ? W * 0.5 : W * 0.76;
    const cy = H * (c.y ?? 0.27);
    ctx.save();
    ctx.globalAlpha = 1 - out;
    ctx.translate(cx + (c.side === 'left' ? -1 : 1) * out * 40, cy);
    brushBand(ctx, 0, 34, 520, 110, E.outCubic(clamp(u / 0.22)), c.seed ?? 7);
    const s = lerp(1.45, 1, E.outBack(clamp(u / 0.16), 2));
    ctx.scale(s, s);
    ctx.globalAlpha = (1 - out) * inK;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `400 170px ${FONT.brush}`;
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#ffffff';
    ctx.lineJoin = 'round';
    ctx.strokeText(c.kanji, 0, 0);
    ctx.fillStyle = INK;
    ctx.fillText(c.kanji, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.globalAlpha = (1 - out) * clamp((u - 0.1) / 0.2);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = `400 48px ${FONT.caps}`;
    ctx.translate(cx + (c.side === 'left' ? -1 : 1) * out * 40, cy + 128);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ffffff';
    ctx.lineJoin = 'round';
    spaced(ctx, c.en, 0, 0, 10, 'stroke');
    ctx.fillStyle = INK;
    spaced(ctx, c.en, 0, 0, 10, 'fill');
    ctx.restore();
  }
}

/** opening title: red band at t0, kanji stamps at tStamp, fades at tOut */
export function drawTitle(ctx, t, T, W, H) {
  if (t > T.tOut + 0.6) return;
  const out = clamp((t - T.tOut) / 0.6);
  ctx.save();
  ctx.globalAlpha = 1 - E.inQuad(out);
  const cx = W / 2, cy = H * 0.33;
  brushBand(ctx, cx, cy + 20, 760, 150, E.outCubic(clamp((t - T.t0) / 0.35)), 11);
  if (t >= T.tStamp) {
    const u = t - T.tStamp;
    const s = lerp(1.6, 1, E.outBack(clamp(u / 0.14), 1.6));
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(s, s);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `400 250px ${FONT.brush}`;
    ctx.lineWidth = 18;
    ctx.strokeStyle = '#ffffff';
    ctx.lineJoin = 'round';
    ctx.strokeText(T.kanji, 0, 0);
    ctx.fillStyle = INK;
    ctx.fillText(T.kanji, 0, 0);
    ctx.restore();
    // ink droplets thrown by the stamp
    const rnd = rng(5);
    for (let i = 0; i < 16; i++) {
      const a = rnd() * Math.PI * 2, sp = 300 + rnd() * 500;
      const k = E.outCubic(clamp(u / 0.35));
      const x = cx + Math.cos(a) * (240 + sp * k) * 1.2, y = cy + Math.sin(a) * (90 + sp * k * 0.45);
      const r = (3 + rnd() * 9) * (1 - clamp((u - 0.4) / 0.6));
      if (r <= 0) continue;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 5 === 0 ? RED : INK;
      ctx.fill();
    }
  }
  if (t >= T.tSub) {
    ctx.globalAlpha = (1 - E.inQuad(out)) * clamp((t - T.tSub) / 0.4);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = `400 64px ${FONT.caps}`;
    ctx.fillStyle = INK;
    spaced(ctx, T.en, cx, cy + 190, 22);
  }
  ctx.restore();
}

/** hanko seal with 完 */
export function drawSeal(ctx, t, S, W, H) {
  if (t < S.t) return;
  const u = t - S.t;
  const s = lerp(2.2, 1, E.outBack(clamp(u / 0.18), 1.4));
  const a = clamp(u / 0.08);
  ctx.save();
  ctx.translate(S.x * W, S.y * H);
  ctx.rotate(-0.06);
  ctx.scale(s, s);
  ctx.globalAlpha = a;
  const R = 92;
  const rnd = rng(3);
  ctx.beginPath();
  for (let i = 0; i < 40; i++) {
    const ang = (i / 40) * Math.PI * 2;
    const r = R * (0.97 + rnd() * 0.06);
    const p = [Math.cos(ang) * r, Math.sin(ang) * r];
    i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
  }
  ctx.closePath();
  ctx.fillStyle = RED;
  ctx.fill();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `400 128px ${FONT.brush}`;
  ctx.fillStyle = '#ffffff';
  ctx.fillText('完', 0, 6);
  ctx.restore();
  if (S.en && u > 0.35) {
    ctx.save();
    ctx.globalAlpha = clamp((u - 0.35) / 0.4);
    ctx.textAlign = 'left';
    ctx.font = `400 40px ${FONT.caps}`;
    ctx.fillStyle = INK;
    spaced(ctx, S.en, S.x * W, S.y * H + 140, 12);
    ctx.restore();
  }
}
