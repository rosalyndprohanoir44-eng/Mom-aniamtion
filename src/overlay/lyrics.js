// Karaoke lyrics: word-by-word colour sweep, a bouncing paw that hops from
// word to word, and a little badge showing who is singing.
import { LINES } from '../data/lyrics.js';
import { clamp, invLerp, E, lerp } from '../core/util.js';
import { drawBearFace, drawPetFace, roundRectPath } from '../chars/faces.js';
import { drawPawPrint } from '../chars/draw2d.js';
import { COLORS } from '../chars/spec.js';

const FONT = '700 78px Fredoka, "Baloo 2", system-ui, sans-serif';

// When each line is on screen: it appears a little before its first word, and
// gives way to the next line only once its own last word has been sung.
const LEAD = 0.55, TAIL = 0.45;
const WINDOWS = LINES.map((line, i) => {
  const prev = LINES[i - 1];
  const from = Math.max(line.start - LEAD, prev ? prev.end + 0.05 : -Infinity);
  return { line, from };
}).map((w, i, all) => {
  const next = all[i + 1];
  const natural = w.line.end + TAIL;
  const to = next ? Math.min(natural, next.from) : natural;
  return { ...w, to, cut: to < natural };
});
const SUNG = { bear: ['#ff8fb8', '#ff6fa3'], pet: ['#f0a07c', '#d97757'], both: ['#ff9fc0', '#d97757'] };
const widthCache = new Map();

function measure(ctx, text) {
  const k = text;
  if (!widthCache.has(k)) {
    ctx.font = FONT;
    widthCache.set(k, ctx.measureText(text).width);
  }
  return widthCache.get(k);
}

function badge(ctx, who, x, y, s, t) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.arc(0, 0, 46, 0, Math.PI * 2);
  ctx.fillStyle = who === 'pet' ? '#ffe6da' : '#ffffff';
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#3a2520';
  ctx.stroke();
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 43, 0, Math.PI * 2);
  ctx.clip();
  if (who === 'pet') {
    ctx.fillStyle = COLORS.orange;
    roundRectPath(ctx, -40, -26, 80, 64, 16);
    ctx.fill();
    ctx.translate(0, 4);
    ctx.scale(95, -95);
    drawPetFace(ctx, { expr: 'normal', time: t, blink: (t % 2.7) < 0.12 ? 1 : 0 });
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-50, -50, 100, 100);
    ctx.translate(0, 8);
    ctx.scale(300, -300);
    drawBearFace(ctx, { expr: 'sing', open: 0.5 + 0.5 * Math.sin(t * 14), time: t });
  }
  ctx.restore();
  ctx.restore();
}

/**
 * Draw the lyric line active at time t.
 * opts: { y: baseline y, alpha, style: 'normal'|'shaky'|'big' }
 */
export function drawLyrics(ctx, t, W, H, opts = {}) {
  const win = WINDOWS.find((w) => t >= w.from && t < w.to);
  if (!win) return;
  const line = win.line;
  const appear = E.outBack(clamp(invLerp(win.from, win.from + 0.35, t)));
  const vanish = clamp(invLerp(win.to - (win.cut ? 0.12 : 0.3), win.to, t));
  const alpha = (opts.alpha ?? 1) * clamp(invLerp(win.from, win.from + 0.2, t)) * (1 - vanish);
  if (alpha <= 0) return;

  ctx.save();
  ctx.font = FONT;
  ctx.textBaseline = 'alphabetic';
  ctx.lineJoin = 'round';
  const space = 24;
  const widths = line.words.map((w) => measure(ctx, w.text));
  const total = widths.reduce((a, b) => a + b, 0) + space * (widths.length - 1);
  const baseY = opts.y ?? H - 92;
  const cx = W / 2 + (line.who === 'both' ? 50 : 38);
  let x = cx - total / 2;
  const cols = SUNG[line.who];

  ctx.globalAlpha = alpha;
  ctx.translate(cx, baseY - 26);
  const sc = 0.8 + 0.2 * appear;
  ctx.scale(sc, sc);
  ctx.translate(-cx, -(baseY - 26) + vanish * 20);

  // soft backing pill for readability
  ctx.save();
  ctx.globalAlpha = alpha * 0.28;
  ctx.fillStyle = '#3a2520';
  roundRectPath(ctx, x - 150, baseY - 86, total + 190 + (line.who === 'both' ? 40 : 0), 118, 59);
  ctx.fill();
  ctx.restore();

  // singer badges
  const bx = x - 78;
  const bt = t - line.start;
  const bs = 0.85 + 0.05 * Math.sin(bt * 8);
  if (line.who === 'both') {
    badge(ctx, 'pet', bx - 22, baseY - 26, bs * 0.78, t);
    badge(ctx, 'bear', bx + 26, baseY - 26, bs * 0.78, t);
  } else {
    badge(ctx, line.who, bx, baseY - 26, bs, t);
  }

  const centers = [];
  line.words.forEach((w, i) => {
    const wx = x;
    const ww = widths[i];
    const p = clamp(invLerp(w.start, w.start + Math.max(0.12, (w.end - w.start) * 0.9), t));
    const hit = t >= w.start ? Math.exp(-(t - w.start) * 7) : 0;
    const shaky = opts.style === 'shaky' && /scar|afraid/i.test(w.text) ? 1 : 0;
    const jx = shaky ? Math.sin(t * 60 + i) * 2.5 : 0;
    const jy = shaky ? Math.cos(t * 55 + i) * 2.5 : 0;
    ctx.save();
    ctx.translate(wx + ww / 2 + jx, baseY - 26 - hit * 14 + jy);
    const s = 1 + hit * 0.16;
    ctx.scale(s, s);
    ctx.translate(-(wx + ww / 2), -(baseY - 26));
    // outline
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#3a2520';
    ctx.strokeText(w.text, wx, baseY);
    ctx.fillStyle = '#fffaf5';
    ctx.fillText(w.text, wx, baseY);
    if (p > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(wx - 6, baseY - 90, (ww + 12) * p, 120);
      ctx.clip();
      const g = ctx.createLinearGradient(0, baseY - 60, 0, baseY + 8);
      g.addColorStop(0, '#fff0f5');
      g.addColorStop(0.28, cols[0]);
      g.addColorStop(1, cols[1]);
      ctx.fillStyle = g;
      ctx.fillText(w.text, wx, baseY);
      ctx.restore();
    }
    ctx.restore();
    centers.push({ x: wx + ww / 2, start: w.start });
    x += ww + space;
  });

  // bouncing paw hopping between word tops
  const first = centers[0];
  if (t >= first.start - 0.5) {
    let px, py;
    const top = baseY - 104;
    if (t < first.start) {
      const k = E.outQuad(clamp(invLerp(first.start - 0.5, first.start, t)));
      px = lerp(first.x - 120, first.x, k);
      py = top - Math.sin(k * Math.PI) * 50 + (1 - k) * 0;
    } else {
      let i = centers.length - 1;
      while (i > 0 && centers[i].start > t) i--;
      const a = centers[i];
      const b = centers[i + 1];
      if (b) {
        const k = clamp(invLerp(a.start, b.start, t));
        px = lerp(a.x, b.x, E.inOutSine(k));
        py = top - Math.sin(k * Math.PI) * Math.min(60, 20 + Math.abs(b.x - a.x) * 0.25);
      } else {
        const k = clamp((t - a.start) / 0.6);
        px = a.x;
        py = top - Math.sin(Math.min(k, 1) * Math.PI) * 26 * (1 - k);
      }
    }
    ctx.save();
    ctx.translate(px, py);
    ctx.scale(210, -210);
    ctx.beginPath();
    ctx.arc(0, 0.005, 0.12, 0, Math.PI * 2);
    ctx.fillStyle = '#3a2520';
    ctx.fill();
    drawPawPrint(ctx, 0, -0.005, 1.3, line.who === 'pet' ? '#ffb28f' : '#ffc2d8');
    ctx.restore();
  }
  ctx.restore();
}

/** is any lyric line on screen at t (used to lift other overlays) */
export const lyricsVisible = (t) => WINDOWS.some((w) => t >= w.from && t < w.to);
