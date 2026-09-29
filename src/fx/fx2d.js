// 2D effects: backgrounds, doodles, particles and transitions (canvas 2D).
import { clamp, invLerp, E, hash, noise, lerp, TAU } from '../core/util.js';
import { drawPawPrint } from '../chars/draw2d.js';

export const W = 1920, H = 1080;

// ---------------------------------------------------------------- textures
let paperCanvas = null;
export function paper() {
  if (paperCanvas) return paperCanvas;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d');
  x.fillStyle = '#fbf6ee';
  x.fillRect(0, 0, W, H);
  // fibres / grain
  const img = x.getImageData(0, 0, W, H);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (hash(i * 0.618) - 0.5) * 10;
    d[i] += n; d[i + 1] += n; d[i + 2] += n * 0.9;
  }
  x.putImageData(img, 0, 0);
  // faint dotted grid like a sketchbook
  x.fillStyle = 'rgba(160,140,130,0.16)';
  for (let yy = 30; yy < H; yy += 44) for (let xx = 30; xx < W; xx += 44) {
    x.beginPath();
    x.arc(xx, yy, 1.6, 0, TAU);
    x.fill();
  }
  // vignette
  const g = x.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 1.0);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(120,90,70,0.16)');
  x.fillStyle = g;
  x.fillRect(0, 0, W, H);
  paperCanvas = c;
  return c;
}

let grainCanvas = null;
export function grain(ctx, t, amount = 0.05) {
  if (!grainCanvas) {
    grainCanvas = document.createElement('canvas');
    grainCanvas.width = grainCanvas.height = 256;
    const x = grainCanvas.getContext('2d');
    const img = x.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = hash(i * 1.37) * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
  }
  ctx.save();
  ctx.globalAlpha = amount;
  ctx.globalCompositeOperation = 'overlay';
  const ox = Math.floor(hash(Math.floor(t * 24)) * 256), oy = Math.floor(hash(Math.floor(t * 24) + 9) * 256);
  const pat = ctx.createPattern(grainCanvas, 'repeat');
  ctx.translate(-ox, -oy);
  ctx.fillStyle = pat;
  ctx.fillRect(0, 0, W + 256, H + 256);
  ctx.restore();
}

const vigCache = new Map();
export function vignette(ctx, amount = 0.25, color = '60,30,40') {
  const key = amount + '|' + color;
  let c = vigCache.get(key);
  if (!c) {
    // pre-rendered at half size, drawn stretched (it is a smooth gradient)
    c = document.createElement('canvas');
    c.width = W / 2;
    c.height = H / 2;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(W / 4, H / 4, H * 0.225, W / 4, H / 4, H * 0.525);
    g.addColorStop(0, `rgba(${color},0)`);
    g.addColorStop(1, `rgba(${color},${amount})`);
    x.fillStyle = g;
    x.fillRect(0, 0, W / 2, H / 2);
    vigCache.set(key, c);
  }
  ctx.drawImage(c, 0, 0, W, H);
}

// ---------------------------------------------------------------- backgrounds
export function halftone(ctx, x0, y0, w, h, color, bg, spacing = 34, rmax = 9, t = 0, pulse = 0) {
  ctx.fillStyle = bg;
  ctx.fillRect(x0, y0, w, h);
  ctx.fillStyle = color;
  const off = (t * 20) % spacing;
  for (let y = y0 - spacing; y < y0 + h + spacing; y += spacing) {
    const row = Math.round((y - y0) / spacing);
    for (let x = x0 - spacing; x < x0 + w + spacing; x += spacing) {
      const xx = x + (row % 2 ? spacing / 2 : 0) + off;
      const k = 0.4 + 0.6 * ((y - y0) / h);
      const r = rmax * k * (1 + pulse * 0.35);
      ctx.beginPath();
      ctx.arc(xx, y + off, r, 0, TAU);
      ctx.fill();
    }
  }
}

export function sunburst(ctx, cx, cy, rays, c1, c2, rot = 0, R = 2400) {
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = c2;
  for (let i = 0; i < rays; i++) {
    const a0 = rot + (i / rays) * TAU;
    const a1 = a0 + (TAU / rays) * 0.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a0) * R, cy + Math.sin(a0) * R);
    ctx.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R);
    ctx.closePath();
    ctx.fill();
  }
}

/** manga speed lines converging to (cx,cy) */
export function speedLines(ctx, cx, cy, t, color = 'rgba(40,20,30,0.85)', n = 90, inner = 330) {
  ctx.fillStyle = color;
  const f = Math.floor(t * 24);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU + hash(i + f * 0.13) * 0.05;
    const r0 = inner + hash(i * 3.1 + f) * 220;
    const wdt = 0.004 + hash(i * 7.7 + f) * 0.012;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
    ctx.lineTo(cx + Math.cos(a - wdt) * 2400, cy + Math.sin(a - wdt) * 2400);
    ctx.lineTo(cx + Math.cos(a + wdt) * 2400, cy + Math.sin(a + wdt) * 2400);
    ctx.closePath();
    ctx.fill();
  }
}

// ---------------------------------------------------------------- doodles
export function star(ctx, x, y, r, color, rot = 0, points = 5, inner = 0.45, stroke = '#3a2520', lw = 5) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * TAU - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * inner;
    ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  if (stroke) {
    ctx.lineWidth = lw;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
  ctx.restore();
}

export function heart(ctx, x, y, s, color, rot = 0, stroke = '#3a2520', lw = 5) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(s / 60, s / 60);
  ctx.beginPath();
  ctx.moveTo(0, 38);
  ctx.bezierCurveTo(-62, -4, -38, -54, 0, -22);
  ctx.bezierCurveTo(38, -54, 62, -4, 0, 38);
  ctx.fillStyle = color;
  ctx.fill();
  if (stroke) {
    ctx.lineWidth = (lw * 60) / s;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.ellipse(-20, -14, 9, 6, -0.6, 0, TAU);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.fill();
  ctx.restore();
}

export function note(ctx, x, y, s, color, rot = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(s / 60, s / 60);
  ctx.lineWidth = 7;
  ctx.strokeStyle = '#3a2520';
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(-18, 28, 16, 12, -0.4, 0, TAU);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(24, 18, 16, 12, -0.4, 0, TAU);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-3, 26);
  ctx.lineTo(-3, -38);
  ctx.lineTo(39, -48);
  ctx.lineTo(39, 16);
  ctx.lineWidth = 8;
  ctx.lineJoin = 'round';
  ctx.stroke();
  ctx.restore();
}

/** 4-point twinkle */
export function twinkle(ctx, x, y, r, color = '#ffffff', a = 1) {
  if (a <= 0 || r <= 0) return;
  ctx.save();
  ctx.globalAlpha *= a;
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.quadraticCurveTo(0, 0, 0, r);
  ctx.quadraticCurveTo(0, 0, -r, 0);
  ctx.quadraticCurveTo(0, 0, 0, -r);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

/** "!" or "?" marks in comic style */
export function mark(ctx, x, y, s, ch = '!', color = '#ff6f91', rot = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.font = `700 ${Math.round(s)}px Fredoka, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = s * 0.16;
  ctx.strokeStyle = '#3a2520';
  ctx.strokeText(ch, 0, 0);
  ctx.fillStyle = color;
  ctx.fillText(ch, 0, 0);
  ctx.restore();
}

/** pop-in doodles scheduled on beats: items [{t, x, y, kind, color, s, rot}] */
export function doodles(ctx, t, items, life = 1.4) {
  for (const d of items) {
    const age = t - d.t;
    if (age < 0 || age > life) continue;
    const k = E.outBack(clamp(age / 0.25), 2.2);
    const fade = 1 - clamp((age - life + 0.3) / 0.3);
    const s = d.s * k;
    const bob = Math.sin(age * 5 + d.x) * 6;
    ctx.save();
    ctx.globalAlpha *= fade;
    const rot = d.rot + Math.sin(age * 3 + d.y) * 0.15;
    if (d.kind === 'note') note(ctx, d.x, d.y - age * 30 + bob, s, d.color, rot);
    else if (d.kind === 'heart') heart(ctx, d.x, d.y - age * 25 + bob, s, d.color, rot);
    else if (d.kind === 'star') star(ctx, d.x, d.y + bob, s * 0.6, d.color, rot + age);
    else if (d.kind === 'twinkle') twinkle(ctx, d.x, d.y, s * 0.6 * (1 - age / life), d.color, 1);
    else if (d.kind === 'paw') {
      ctx.translate(d.x, d.y);
      ctx.rotate(rot);
      ctx.scale(s * 5, -s * 5);
      drawPawPrint(ctx, 0, 0, 1, d.color);
    }
    ctx.restore();
  }
}

/** burst of sparkles at (x,y) starting t0 */
export function sparkleBurst(ctx, t, t0, x, y, n = 12, R = 180, colors = ['#fff6a8', '#ffffff', '#ffc2d8'], seed = 1) {
  const age = t - t0;
  if (age < 0 || age > 1.0) return;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU + hash(i + seed) * 0.5;
    const d = E.outCubic(clamp(age / 0.7)) * R * (0.6 + hash(i * 3 + seed) * 0.6);
    const r = 26 * (1 - age) * (0.6 + hash(i * 7 + seed) * 0.8);
    twinkle(ctx, x + Math.cos(a) * d, y + Math.sin(a) * d, r, colors[i % colors.length], 1 - age * 0.8);
  }
}

// ---------------------------------------------------------------- panels
/** comic panel: polygon points, returns a clip helper */
export function panelPath(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
}

export function panelBorder(ctx, pts, lw = 12) {
  panelPath(ctx, pts);
  ctx.lineJoin = 'round';
  ctx.lineWidth = lw + 16;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.lineWidth = lw;
  ctx.strokeStyle = '#2a2321';
  ctx.stroke();
}

// ---------------------------------------------------------------- transitions
export function flash(ctx, a, color = '#ffffff') {
  if (a <= 0) return;
  ctx.save();
  ctx.globalAlpha = clamp(a);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

/** paw-print shaped path centred (x,y) with size s (px) */
export function pawPath(ctx, x, y, s) {
  // appends to the current path (no beginPath) so callers can combine shapes
  const m = new DOMMatrix().translate(x, y).scale(s, s);
  const p = new Path2D();
  p.ellipse(0, 0.12, 0.5, 0.42, 0, 0, TAU);
  const toes = [[-0.56, -0.38, 0.19, 0.24], [-0.21, -0.66, 0.2, 0.26], [0.21, -0.66, 0.2, 0.26], [0.56, -0.38, 0.19, 0.24]];
  for (const [tx, ty, rx, ry] of toes) {
    p.moveTo(tx + rx, ty);
    p.ellipse(tx, ty, rx, ry, 0, 0, TAU);
  }
  return { path: p, matrix: m };
}

/**
 * Cover the screen with colour except inside a growing/shrinking shape.
 * k: 0 = fully covered, 1 = fully open. shape: 'circle'|'paw'
 */
export function iris(ctx, k, x = W / 2, y = H / 2, color = '#2a2321', shape = 'circle') {
  if (k >= 1) return;
  ctx.save();
  const r = Math.max(0.0001, k) * 1400;
  const full = new Path2D();
  full.rect(0, 0, W, H);
  if (shape === 'paw') {
    const { path, matrix } = pawPath(ctx, x, y, r * 1.5);
    full.addPath(path, matrix);
  } else {
    full.moveTo(x + r, y);
    full.arc(x, y, r, 0, TAU, true);
  }
  ctx.fillStyle = color;
  ctx.fill(full, 'evenodd');
  ctx.restore();
}

/** screen full of bubbles that grow then pop: k 0..1 over the transition */
export function bubbleWipe(ctx, t, t0, dur, seed = 3) {
  const k = (t - t0) / dur;
  if (k <= 0 || k >= 1) return;
  const n = 70;
  for (let i = 0; i < n; i++) {
    const hx = hash(i * 1.3 + seed), hy = hash(i * 2.7 + seed), hs = hash(i * 5.1 + seed);
    const start = hash(i * 9.1 + seed) * 0.35;
    const local = clamp((k - start) / 0.4);
    if (local <= 0) continue;
    const pop = clamp((k - 0.62 - hs * 0.2) / 0.08);
    const x = hx * W, y = H * 1.1 - hy * H * 1.3 - local * 200;
    const r = (60 + hs * 170) * E.outBack(local) * (1 + pop * 0.3);
    const a = 1 - pop;
    if (a <= 0) continue;
    ctx.save();
    ctx.globalAlpha *= a;
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.6, 'rgba(255,236,246,0.9)');
    g.addColorStop(0.9, `hsla(${(hs * 360) | 0},90%,85%,0.95)`);
    g.addColorStop(1, 'rgba(255,255,255,1)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.stroke();
    ctx.restore();
  }
}

/** soft lens bokeh discs drifting in the foreground */
const bokehCache = new Map();
function bokehSprite(c) {
  let s = bokehCache.get(c);
  if (!s) {
    s = document.createElement('canvas');
    s.width = s.height = 128;
    const x = s.getContext('2d');
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 63);
    g.addColorStop(0, `rgba(${c},0.8)`);
    g.addColorStop(0.8, `rgba(${c},1)`);
    g.addColorStop(1, `rgba(${c},0)`);
    x.fillStyle = g;
    x.fillRect(0, 0, 128, 128);
    bokehCache.set(c, s);
  }
  return s;
}
export function lensBokeh(ctx, t, amount = 1, seed = 1, colors = ['255,200,220', '255,230,200', '180,245,225']) {
  if (amount <= 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  for (let i = 0; i < 8; i++) {
    const x = (hash(i + seed) * W * 1.2 - W * 0.1 + t * (10 + hash(i * 3) * 20)) % (W * 1.2) - W * 0.1;
    const y = hash(i * 7 + seed) * H + noise(t * 0.2 + i, 4) * 40;
    const r = 60 + hash(i * 11 + seed) * 140;
    ctx.globalAlpha = Math.min(1, 0.22 * amount);
    ctx.drawImage(bokehSprite(colors[i % colors.length]), x - r, y - r, 2 * r, 2 * r);
  }
  ctx.restore();
}

// ---------------------------------------------------------------- text
/** handwritten-looking title that writes on letter by letter */
export function writeOn(ctx, text, x, y, size, k, { color = '#2a2321', font = 'Gaegu', weight = 700, align = 'center', stroke = null, lw = 10, wobble = 0, t = 0 } = {}) {
  ctx.save();
  ctx.font = `${weight} ${size}px ${font}, "Comic Sans MS", cursive`;
  ctx.textBaseline = 'alphabetic';
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0);
  let cx = align === 'center' ? x - total / 2 : x;
  const n = chars.length;
  chars.forEach((ch, i) => {
    const local = clamp(k * n - i);
    if (local <= 0) return;
    const s = E.outBack(local, 2.5);
    const yy = y + Math.sin(t * 3 + i * 0.7) * wobble;
    ctx.save();
    ctx.translate(cx + widths[i] / 2, yy - size * 0.35);
    ctx.scale(s, s);
    ctx.rotate((1 - local) * 0.4 + Math.sin(i * 2.3) * 0.03);
    ctx.globalAlpha *= clamp(local * 2);
    if (stroke) {
      ctx.lineWidth = lw;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = stroke;
      ctx.strokeText(ch, -widths[i] / 2, size * 0.35);
    }
    ctx.fillStyle = color;
    ctx.fillText(ch, -widths[i] / 2, size * 0.35);
    ctx.restore();
    cx += widths[i];
  });
  ctx.restore();
  return total;
}
