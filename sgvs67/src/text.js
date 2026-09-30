// Screen-space typography: speaker-tagged Singlish captions, brush-script skill
// call-outs (Chinese + English caps), the VS card and the end card.
import { clamp, E, rng, lerp } from './util.js';
import { SG, P67 } from './chars.js';

export const FONT = {
  en: '"Nunito", system-ui, sans-serif',
  brush: '"Brush", "Ma Shan Zheng", serif',
  caps: '"Bebas", "Bebas Neue", Impact, sans-serif',
};
const INK = '#141414';

const WHO = {
  sg: { tag: 'SG', bg: SG.main, fg: '#ffffff', band: SG.main, band2: SG.dark, zh: '#ffffff' },
  67: { tag: '67', bg: P67.main, fg: P67.gold, band: P67.main, band2: P67.deep, zh: P67.gold },
  auntie: { tag: 'AUNTIE', bg: '#6d6a64', fg: '#ffffff', band: '#6d6a64', band2: '#3b3935', zh: '#ffffff' },
  both: { tag: 'SG + 67', bg: '#141414', fg: '#ffffff', band: INK, band2: INK, zh: '#ffffff' },
};

function halo(ctx, text, x, y, w, fill = INK, stroke = '#ffffff') {
  ctx.lineJoin = 'round';
  ctx.miterLimit = 2;
  ctx.lineWidth = w;
  ctx.strokeStyle = stroke;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = fill;
  ctx.fillText(text, x, y);
}

function spaced(ctx, text, x, y, spacing, mode = 'fill', align = 'center') {
  const widths = [...text].map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (text.length - 1);
  let cx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
  [...text].forEach((c, i) => {
    if (mode === 'stroke') ctx.strokeText(c, cx, y);
    else ctx.fillText(c, cx, y);
    cx += widths[i] + spacing;
  });
  return total;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** slanted paint band, grows from the left by k */
function band(ctx, x, y, w, h, k, seed, col, col2) {
  if (k < 0.01) return;
  const rnd = rng(seed);
  const N = 36;
  const top = [], bot = [];
  const len = w * k;
  for (let i = 0; i <= N; i++) {
    const s = i / N;
    const px = x - w / 2 + len * s;
    const taper = Math.min(1, s / 0.05, (1 - s) / 0.1 + 0.35);
    top.push([px + h * 0.18, y - (h / 2) * taper + (rnd() - 0.5) * h * 0.1]);
    bot.push([px - h * 0.18, y + (h / 2) * taper * (0.92 + rnd() * 0.12)]);
  }
  const path = () => {
    ctx.beginPath();
    ctx.moveTo(top[0][0], top[0][1]);
    for (const p of top) ctx.lineTo(p[0], p[1]);
    for (let i = bot.length - 1; i >= 0; i--) ctx.lineTo(bot[i][0], bot[i][1]);
    ctx.closePath();
  };
  ctx.save();
  ctx.translate(8, 10);
  path();
  ctx.fillStyle = col2;
  ctx.fill();
  ctx.restore();
  path();
  ctx.fillStyle = col;
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.4)';
  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    const yy = y + (rnd() - 0.5) * h * 0.75;
    const x0 = x - w / 2 + len * (0.3 + rnd() * 0.4);
    ctx.beginPath();
    ctx.moveTo(x0, yy);
    ctx.lineTo(Math.min(x - w / 2 + len, x0 + w * (0.1 + rnd() * 0.25)), yy + (rnd() - 0.5) * 3);
    ctx.lineWidth = 1 + rnd() * 2.5;
    ctx.stroke();
  }
}

/** captions: [SG] tag pill + line; optional small gloss underneath */
export function drawCaptions(ctx, t, lines, W, H) {
  // a line that starts while an earlier one is still up sits above it
  for (const L of lines) {
    if (L.row != null) continue;
    L.row = 0;
    for (const M of lines) if (M !== L && M.t0 < L.t0 && M.t1 + 0.3 > L.t0 && (M.row ?? 0) >= L.row) L.row = (M.row ?? 0) + 1;
  }
  for (const L of lines) {
    if (t < L.t0 - 0.1 || t > L.t1 + 0.3) continue;
    const a = Math.min(clamp((t - L.t0) / 0.1), 1 - clamp((t - L.t1) / 0.2));
    if (a <= 0) continue;
    const who = WHO[L.who] || WHO.sg;
    const pop = E.outBack(clamp((t - L.t0) / 0.18), 2.2);
    ctx.save();
    ctx.globalAlpha = a;
    const y0 = H - (L.high ? 230 : 118) - L.row * 84;
    const size = L.big ? 62 : 46;
    ctx.font = `900 ${size}px ${FONT.en}`;
    const tw = ctx.measureText(L.text).width;
    ctx.font = `400 ${size * 0.92}px ${FONT.caps}`;
    const tagW = spacedWidth(ctx, who.tag, 4) + 30;
    const gap = 18;
    const total = tagW + gap + tw;
    const x0 = W / 2 - total / 2;
    ctx.translate(W / 2, y0);
    ctx.scale(lerp(0.85, 1, pop), lerp(0.85, 1, pop));
    ctx.translate(-W / 2, -y0);
    // tag pill (slightly tilted)
    ctx.save();
    ctx.translate(x0 + tagW / 2, y0 - size * 0.34);
    ctx.rotate(-0.06);
    roundRect(ctx, -tagW / 2 - 4, -size * 0.52 - 4, tagW + 8, size * 1.04 + 8, 14);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    roundRect(ctx, -tagW / 2, -size * 0.52, tagW, size * 1.04, 11);
    ctx.fillStyle = who.bg;
    ctx.fill();
    ctx.fillStyle = who.fg;
    ctx.textBaseline = 'middle';
    ctx.font = `400 ${size * 0.92}px ${FONT.caps}`;
    spaced(ctx, who.tag, 0, 3, 4);
    ctx.restore();
    // the line
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `900 ${size}px ${FONT.en}`;
    halo(ctx, L.text, x0 + tagW + gap, y0, 11);
    if (L.gloss) {
      ctx.font = `800 26px ${FONT.en}`;
      ctx.textAlign = 'center';
      ctx.globalAlpha = a * 0.9;
      halo(ctx, L.gloss, W / 2, y0 + 42, 6, '#5a5650');
    }
    ctx.restore();
  }
}

function spacedWidth(ctx, text, spacing) {
  return [...text].reduce((s, c) => s + ctx.measureText(c).width, 0) + spacing * (text.length - 1);
}

/** skill call-out: brush Chinese over the owner's colour band + English caps */
export function drawCallouts(ctx, t, list, W, H) {
  for (const c of list) {
    const u = t - c.t;
    const dur = c.dur ?? 1.4;
    if (u < 0 || u > dur) continue;
    const who = WHO[c.who] || WHO.sg;
    const out = clamp((u - (dur - 0.22)) / 0.22);
    const side = c.side ?? 'right';
    const cx = side === 'left' ? W * 0.25 : side === 'center' ? W * 0.5 : W * 0.75;
    const cy = H * (c.y ?? 0.22);
    const slideX = (side === 'left' ? -1 : 1) * E.inCubic(out) * 120;
    ctx.save();
    ctx.globalAlpha = 1 - out;
    ctx.translate(cx + slideX, cy);
    ctx.rotate(c.tilt ?? -0.05);
    const bw = Math.max(520, c.zh.length * 150 + 120);
    band(ctx, 0, 18, bw, 120, E.outCubic(clamp(u / 0.18)), c.seed ?? 7, who.band, who.band2);
    const s = lerp(1.7, 1, E.outBack(clamp(u / 0.15), 2.2));
    ctx.save();
    ctx.scale(s, s);
    ctx.globalAlpha = (1 - out) * E.outCubic(clamp(u / 0.1));
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `400 ${c.size ?? 158}px ${FONT.brush}`;
    ctx.lineWidth = 16;
    ctx.strokeStyle = INK;
    ctx.lineJoin = 'round';
    ctx.strokeText(c.zh, 0, 0);
    ctx.fillStyle = who.zh;
    ctx.fillText(c.zh, 0, 0);
    ctx.restore();
    ctx.globalAlpha = (1 - out) * clamp((u - 0.08) / 0.18);
    ctx.textBaseline = 'middle';
    ctx.font = `400 54px ${FONT.caps}`;
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#ffffff';
    ctx.lineJoin = 'round';
    spaced(ctx, c.en, 0, 118, 10, 'stroke');
    ctx.fillStyle = INK;
    spaced(ctx, c.en, 0, 118, 10, 'fill');
    ctx.restore();
  }
}

/** VS card: diagonal split, names slam in from each side */
export function drawVS(ctx, t, V, W, H) {
  if (!V || t < V.t0 || t > V.t1 + 0.35) return;
  const u = t - V.t0;
  const inK = E.outExpo(clamp(u / 0.28));
  const out = E.inCubic(clamp((t - V.t1) / 0.35));
  const slant = 180;
  ctx.save();
  // left panel (SG)
  const lx = -W * (1 - inK) - W * out;
  ctx.beginPath();
  ctx.moveTo(lx, 0);
  ctx.lineTo(lx + W / 2 + slant / 2, 0);
  ctx.lineTo(lx + W / 2 - slant / 2, H);
  ctx.lineTo(lx, H);
  ctx.closePath();
  ctx.fillStyle = SG.main;
  ctx.fill();
  // right panel (67)
  const rx = W * (1 - inK) + W * out;
  ctx.beginPath();
  ctx.moveTo(rx + W / 2 + slant / 2 + 14, 0);
  ctx.lineTo(rx + W, 0);
  ctx.lineTo(rx + W, H);
  ctx.lineTo(rx + W / 2 - slant / 2 + 14, H);
  ctx.closePath();
  ctx.fillStyle = P67.main;
  ctx.fill();
  // speed stripes
  const rnd = rng(9);
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 14; i++) {
    const y = rnd() * H, len = 200 + rnd() * 600, x = ((rnd() * W + u * 2400) % (W + len)) - len;
    ctx.fillRect(lx + x * 0.5, y, len * 0.5, 3 + rnd() * 5);
    ctx.fillRect(rx + W - x * 0.5 - len * 0.5, (y + 300) % H, len * 0.5, 3 + rnd() * 5);
  }
  ctx.globalAlpha = 1;
  // names
  const nameIn = E.outBack(clamp((u - 0.12) / 0.25), 1.6);
  ctx.textBaseline = 'middle';
  ctx.save();
  ctx.translate(lx + W * 0.25, H * 0.44);
  ctx.rotate(-0.07);
  ctx.scale(nameIn, nameIn);
  ctx.textAlign = 'center';
  ctx.font = `400 300px ${FONT.caps}`;
  halo(ctx, 'SG', 0, 0, 16, '#ffffff', INK);
  ctx.font = `400 96px ${FONT.brush}`;
  halo(ctx, '怕输', 0, 168, 12, '#ffffff', INK);
  ctx.font = `400 46px ${FONT.caps}`;
  ctx.fillStyle = '#ffffff';
  spaced(ctx, 'KIASU · SINGAPORE', 0, 246, 6);
  ctx.restore();
  ctx.save();
  ctx.translate(rx + W * 0.75, H * 0.56);
  ctx.rotate(-0.07);
  ctx.scale(nameIn, nameIn);
  ctx.textAlign = 'center';
  ctx.font = `400 300px ${FONT.caps}`;
  halo(ctx, '67', 0, 0, 16, P67.gold, INK);
  ctx.font = `400 96px ${FONT.brush}`;
  halo(ctx, '六七', 0, -176, 12, P67.gold, INK);
  ctx.font = `400 46px ${FONT.caps}`;
  ctx.fillStyle = '#ffffff';
  spaced(ctx, "THE MEME · 6'7\"", 0, 160, 6);
  ctx.restore();
  // VS stamp
  const vs = E.outBack(clamp((u - 0.3) / 0.18), 2.5) * (1 - out);
  if (vs > 0) {
    ctx.save();
    ctx.translate(W / 2 + 7, H / 2);
    ctx.rotate(-0.12);
    ctx.scale(vs, vs);
    ctx.textAlign = 'center';
    ctx.font = `400 260px ${FONT.caps}`;
    ctx.lineWidth = 34;
    ctx.strokeStyle = INK;
    ctx.lineJoin = 'round';
    ctx.strokeText('VS', 0, 10);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('VS', 0, 10);
    ctx.restore();
  }
  ctx.restore();
}

/** end card: title, red seal with 完, credit line */
export function drawEnd(ctx, t, S, W, H) {
  if (!S || t < S.t) return;
  const u = t - S.t;
  ctx.save();
  ctx.globalAlpha = clamp(u / 0.5);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `400 220px ${FONT.caps}`;
  const x = W * 0.5, y = H * 0.36;
  ctx.fillStyle = SG.main;
  ctx.fillText('SG', x - 300, y);
  ctx.fillStyle = INK;
  ctx.font = `400 120px ${FONT.caps}`;
  ctx.fillText('VS', x, y + 14);
  ctx.font = `400 220px ${FONT.caps}`;
  ctx.fillStyle = P67.main;
  ctx.fillText('67', x + 300, y);
  ctx.restore();
  if (u > 0.45) {
    const k = u - 0.45;
    const s = lerp(2.2, 1, E.outBack(clamp(k / 0.18), 1.4));
    ctx.save();
    ctx.translate(W * 0.5, H * 0.64);
    ctx.rotate(-0.06);
    ctx.scale(s, s);
    ctx.globalAlpha = clamp(k / 0.08);
    const R = 92;
    const rnd = rng(3);
    ctx.beginPath();
    for (let i = 0; i < 40; i++) {
      const ang = (i / 40) * Math.PI * 2;
      const r = R * (0.97 + rnd() * 0.06);
      i ? ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r) : ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r);
    }
    ctx.closePath();
    ctx.fillStyle = SG.main;
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `400 128px ${FONT.brush}`;
    ctx.fillStyle = '#ffffff';
    ctx.fillText('完', 0, 6);
    ctx.restore();
  }
  if (u > 0.9) {
    ctx.save();
    ctx.globalAlpha = clamp((u - 0.9) / 0.5) * 0.85;
    ctx.textAlign = 'center';
    ctx.font = `400 40px ${FONT.caps}`;
    ctx.fillStyle = INK;
    spaced(ctx, 'NO TABLES WERE HARMED · ALL TISSUES RETURNED', W / 2, H * 0.86, 9);
    ctx.restore();
  }
}
