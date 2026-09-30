// The estate: a Singapore HDB neighbourhood drawn in light line-art so the black
// stick fighters stay readable. HDB slab blocks with void decks and corridors,
// a hawker centre, rain trees, a far skyline, plus destruction: punched holes
// with cracks and broken windows, and a block top that shears off and falls.
import { rng, clamp, lerp, E, TAU, noise } from './util.js';

const WALL = '#f7f4ee', LINE = '#8e8a83', GLASS = '#d9e2e6', SHADE = '#e6e1d8', DARK = '#3a3632';

export class City {
  constructor() {
    this.blocks = [];
    this.holes = [];
    this.breaks = [];
    this.collapses = [];
    this.trees = [];
    this.skyline = makeSkyline();
  }
  addBlock(o) {
    const b = { floors: 12, fh: 1.75, w: 14, accent: '#e0a33c', no: '', layer: 'mid', seed: this.blocks.length + 1, ...o };
    b.h = b.floors * b.fh;
    b.id = this.blocks.length;
    this.blocks.push(b);
    return b;
  }
  /** windows within r of (x, y) blow out at t (no hole) */
  addBreak(block, t, x, y, r) { this.breaks.push({ b: block.id, t, x, y, r }); }
  addHole(block, t, x, y, r) { this.holes.push({ b: block.id, t, x, y, r, rnd: rng(Math.floor(x * 97 + y * 31 + t * 7)) }); }
  /** the part of `block` above cutY between x0..x1 shears off and topples toward dir */
  addCollapse(block, t, cutY, x0, x1, dir = 1) {
    const rnd = rng(Math.floor(t * 100 + cutY));
    const edge = [];
    for (let i = 0; i <= 14; i++) edge.push([lerp(x0, x1, i / 14), cutY + (rnd() - 0.5) * 1.2 + (i % 2 ? 0.35 : -0.2)]);
    this.collapses.push({ b: block.id, t, cutY, x0, x1, dir, edge, fallT: 1.6 });
  }

  // ------------------------------------------------------------ drawing
  /** fill a layer's ground from y = 0 down past the bottom of the view */
  drawLayerGround(ctx, v, col, line) {
    ctx.fillStyle = col;
    ctx.fillRect(v.x0, Math.min(v.y0, -2) - 5, v.x1 - v.x0, -Math.min(v.y0, -2) + 5);
    if (line) {
      ctx.fillStyle = line;
      ctx.fillRect(v.x0, -0.06, v.x1 - v.x0, 0.06);
    }
  }

  drawSkyline(ctx, v) {
    ctx.lineJoin = 'round';
    for (const s of this.skyline) {
      if (s.x + s.w < v.x0 || s.x > v.x1) continue;
      ctx.beginPath();
      if (s.kind === 'wheel') {
        ctx.arc(s.x, s.h, s.w / 2, 0, TAU);
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = '#d9d9d9';
        ctx.stroke();
        for (let i = 0; i < 12; i++) {
          const a = (i / 12) * TAU;
          ctx.beginPath();
          ctx.moveTo(s.x, s.h);
          ctx.lineTo(s.x + Math.cos(a) * s.w / 2, s.h + Math.sin(a) * s.w / 2);
          ctx.lineWidth = 0.08;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(s.x - 2, 0); ctx.lineTo(s.x, s.h); ctx.lineTo(s.x + 2, 0);
        ctx.lineWidth = 0.3;
        ctx.stroke();
        continue;
      }
      if (s.kind === 'mbs') {
        for (const dx of [-4.5, 0, 4.5]) {
          ctx.rect(s.x + dx - 1.4, 0, 2.8, s.h);
        }
        ctx.fillStyle = '#ececec';
        ctx.fill();
        ctx.lineWidth = 0.15;
        ctx.strokeStyle = '#d2d2d2';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(s.x - 7.5, s.h + 0.3);
        ctx.lineTo(s.x + 8.5, s.h + 0.9);
        ctx.lineTo(s.x + 8.5, s.h + 1.9);
        ctx.lineTo(s.x - 7.5, s.h + 1.6);
        ctx.closePath();
        ctx.fillStyle = '#e8e8e8';
        ctx.fill();
        ctx.stroke();
        continue;
      }
      ctx.rect(s.x, 0, s.w, s.h);
      ctx.fillStyle = s.col;
      ctx.fill();
      ctx.lineWidth = 0.15;
      ctx.strokeStyle = '#d6d6d6';
      ctx.stroke();
      if (s.spire) {
        ctx.beginPath();
        ctx.moveTo(s.x + s.w / 2, s.h);
        ctx.lineTo(s.x + s.w / 2, s.h + s.spire);
        ctx.lineWidth = 0.2;
        ctx.stroke();
      }
      // faint window rows
      ctx.beginPath();
      for (let y = 2; y < s.h - 1; y += 2.2) {
        ctx.moveTo(s.x + 0.6, y);
        ctx.lineTo(s.x + s.w - 0.6, y);
      }
      ctx.lineWidth = 0.12;
      ctx.strokeStyle = '#e1e1e1';
      ctx.stroke();
    }
  }

  drawBlocks(ctx, layer, v, t) {
    for (const b of this.blocks) {
      if (b.layer !== layer) continue;
      if (b.x + b.w < v.x0 || b.x > v.x1) continue;
      ctx.save();
      ctx.translate(0, b.y0 || 0);
      this.drawBlock(ctx, b, v, t, layer);
      ctx.restore();
    }
  }

  drawBlock(ctx, b, v, t, layer) {
    {
      const col = this.collapses.find((c) => c.b === b.id && t >= c.t);
      if (!col) {
        drawHDB(ctx, b, t, v, layer === 'far');
      } else {
        // standing part: clip below the jagged cut
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(b.x - 1, -1);
        ctx.lineTo(b.x - 1, b.h + 5);
        ctx.lineTo(col.x0, b.h + 5);
        for (const p of col.edge) ctx.lineTo(p[0], p[1]);
        ctx.lineTo(col.x1, b.h + 5);
        ctx.lineTo(b.x + b.w + 1, b.h + 5);
        ctx.lineTo(b.x + b.w + 1, -1);
        ctx.closePath();
        ctx.clip();
        drawHDB(ctx, b, t, v, false);
        ctx.restore();
        // broken edge
        ctx.beginPath();
        col.edge.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
        ctx.lineWidth = 0.18;
        ctx.strokeStyle = DARK;
        ctx.stroke();
        // falling part
        const u = t - col.t;
        if (u < col.fallT) {
          const k = u / col.fallT;
          const pivotX = col.dir > 0 ? col.x1 : col.x0;
          const ang = -col.dir * 1.2 * k * k;
          const drop = 0.5 * 26 * Math.max(0, u - 0.25) ** 2;
          ctx.save();
          ctx.translate(pivotX, col.cutY - drop);
          ctx.rotate(ang);
          ctx.translate(-pivotX, -col.cutY);
          ctx.beginPath();
          ctx.moveTo(col.x0, col.edge[0][1]);
          for (const p of col.edge) ctx.lineTo(p[0], p[1]);
          ctx.lineTo(col.x1, b.h + 5);
          ctx.lineTo(col.x0, b.h + 5);
          ctx.closePath();
          ctx.clip();
          drawHDB(ctx, b, col.t, v, false);
          ctx.restore();
        }
      }
      this.drawHoles(ctx, b, t);
    }
  }

  drawHoles(ctx, b, t) {
    for (const h of this.holes) {
      if (h.b !== b.id || t < h.t) continue;
      const g = E.outExpo(clamp((t - h.t) / 0.1));
      const rnd = rng(Math.floor(h.x * 97 + h.y * 31));
      const N = 18;
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * TAU;
        const r = h.r * g * (0.7 + rnd() * 0.5) * (i % 2 ? 1 : 0.82);
        pts.push([h.x + Math.cos(a) * r, h.y + Math.sin(a) * r * 0.85]);
      }
      // broken concrete rim then the dark interior
      ctx.beginPath();
      pts.forEach((p, i) => { const q = [h.x + (p[0] - h.x) * 1.18, h.y + (p[1] - h.y) * 1.18]; i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); });
      ctx.closePath();
      ctx.fillStyle = '#b7b0a5';
      ctx.fill();
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
      ctx.closePath();
      ctx.fillStyle = '#8f877c';
      ctx.fill();
      // the dim room behind: a darker band at the top
      ctx.save();
      ctx.clip();
      ctx.fillStyle = '#6f685f';
      ctx.fillRect(h.x - h.r * 1.2, h.y + h.r * 0.25, h.r * 2.4, h.r);
      ctx.restore();
      ctx.lineWidth = 0.08;
      ctx.strokeStyle = '#141414';
      ctx.stroke();
      // bent rebar across the hole
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = '#8b8378';
      for (let k = 0; k < 3; k++) {
        const y = h.y + (k - 1) * h.r * 0.45 * g;
        ctx.beginPath();
        ctx.moveTo(h.x - h.r * 0.9 * g, y + (rnd() - 0.5) * 0.3);
        ctx.quadraticCurveTo(h.x, y + (rnd() - 0.2) * h.r * 0.6, h.x + h.r * 0.9 * g, y + (rnd() - 0.5) * 0.3);
        ctx.stroke();
      }
      // cracks radiating over the wall
      const reach = E.outCubic(clamp((t - h.t) / 0.28));
      ctx.lineWidth = 0.035 * Math.min(1.4, 0.6 + h.r * 0.5);
      ctx.strokeStyle = '#4a443d';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let k = 0; k < 7; k++) {
        let a = (k / 7) * TAU + rnd() * 0.6;
        let p = [h.x + Math.cos(a) * h.r * 0.9, h.y + Math.sin(a) * h.r * 0.8];
        const L = h.r * (0.6 + rnd() * 1.0) * reach;
        let dist = 0;
        ctx.beginPath();
        ctx.moveTo(p[0], p[1]);
        while (dist < L) {
          const s = 0.12 + rnd() * 0.2;
          a += (rnd() - 0.5) * 0.9;
          p = [p[0] + Math.cos(a) * s, p[1] + Math.sin(a) * s];
          ctx.lineTo(p[0], p[1]);
          dist += s;
        }
        ctx.stroke();
      }
    }
  }
}

/** does a window at (wx, wy) sit in a broken area at time t? */
function brokenAt(city, b, wx, wy, t) {
  for (const h of city ? city.holes : []) {
    if (h.b !== b.id || t < h.t) continue;
    const dx = wx - h.x, dy = wy - h.y;
    if (dx * dx + dy * dy < (h.r * 2.4) ** 2) return true;
  }
  for (const h of city ? city.breaks : []) {
    if (h.b !== b.id || t < h.t + Math.hypot(wx - h.x, wy - h.y) * 0.012) continue;
    const dx = wx - h.x, dy = wy - h.y;
    if (dx * dx + dy * dy < h.r * h.r) return true;
  }
  return false;
}

let CITY = null;
export function bindCity(c) { CITY = c; }

/** text in world units (canvas y is flipped in world space) */
export function worldText(ctx, text, x, y, size, font, color, align = 'center') {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 100, -size / 100);
  ctx.font = font.replace('SIZE', '100px');
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

/** HDB slab block: void deck pillars, corridors with doors and windows, lift core with the block number */
export function drawHDB(ctx, b, t, v, simple) {
  const { x, w, fh, floors } = b;
  const H = floors * fh;
  const rnd = rng(b.seed * 13);
  ctx.lineJoin = 'miter';
  // body
  ctx.fillStyle = WALL;
  ctx.fillRect(x, fh, w, H - fh);
  // void deck: dark recess with pillars
  ctx.fillStyle = SHADE;
  ctx.fillRect(x, 0, w, fh);
  ctx.fillStyle = '#d6d0c5';
  ctx.fillRect(x + 0.2, 0, w - 0.4, fh * 0.82);
  for (let px = x + 0.5; px < x + w - 0.2; px += 2.1) {
    ctx.fillStyle = '#f2eee6';
    ctx.fillRect(px, 0, 0.42, fh);
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = LINE;
    ctx.strokeRect(px, 0, 0.42, fh);
  }
  // lift core band
  const coreX = x + w * 0.36, coreW = Math.min(2.2, w * 0.14);
  // floors
  for (let f = 1; f < floors; f++) {
    const y = f * fh;
    if (simple) {
      ctx.fillStyle = '#ebe7df';
      ctx.fillRect(x, y, w, 0.16);
      ctx.fillStyle = '#e1e5e7';
      ctx.fillRect(x + 0.3, y + fh * 0.42, w - 0.6, fh * 0.28);
      continue;
    }
    // corridor slab edge + parapet
    ctx.fillStyle = '#ebe6dd';
    ctx.fillRect(x, y, w, 0.2);
    ctx.fillStyle = '#f0ece4';
    ctx.fillRect(x, y + 0.2, w, 0.42);
    // units: window, door, window ...
    for (let ux = x + 0.35; ux < x + w - 0.8; ux += 1.55) {
      if (ux + 0.9 > coreX && ux < coreX + coreW) continue;
      const broken = brokenAt(CITY, b, ux + 0.35, y + 1.05, t);
      ctx.fillStyle = broken ? '#8a8378' : GLASS;
      ctx.fillRect(ux, y + 0.78, 0.7, 0.62);
      if (broken) {
        // jagged glass left in the frame
        ctx.fillStyle = GLASS;
        ctx.beginPath();
        ctx.moveTo(ux, y + 1.4);
        ctx.lineTo(ux + 0.22, y + 1.4);
        ctx.lineTo(ux + 0.08, y + 1.12);
        ctx.lineTo(ux, y + 1.2);
        ctx.moveTo(ux + 0.7, y + 0.78);
        ctx.lineTo(ux + 0.7, y + 1.05);
        ctx.lineTo(ux + 0.5, y + 0.78);
        ctx.fill();
      }
      ctx.fillStyle = '#c9c2b6';
      ctx.fillRect(ux + 0.86, y + 0.62, 0.42, 1.0);
      ctx.lineWidth = 0.04;
      ctx.strokeStyle = LINE;
      ctx.strokeRect(ux, y + 0.78, 0.7, 0.62);
      ctx.strokeRect(ux + 0.86, y + 0.62, 0.42, 1.0);
      if (!broken) {
        ctx.beginPath();
        ctx.moveTo(ux + 0.35, y + 0.78);
        ctx.lineTo(ux + 0.35, y + 1.4);
        ctx.stroke();
      }
    }
    // railing line
    ctx.beginPath();
    ctx.moveTo(x, y + 0.62);
    ctx.lineTo(x + w, y + 0.62);
    ctx.lineWidth = 0.06;
    ctx.strokeStyle = '#b3ada3';
    ctx.stroke();
  }
  // lift core with the block number
  ctx.fillStyle = b.accent;
  ctx.globalAlpha = 0.55;
  ctx.fillRect(coreX, fh, coreW, H - fh + 0.8);
  ctx.globalAlpha = 1;
  ctx.lineWidth = 0.06;
  ctx.strokeStyle = LINE;
  ctx.strokeRect(coreX, fh, coreW, H - fh + 0.8);
  if (!simple) {
    for (let f = 1; f < floors; f++) {
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.fillRect(coreX + coreW * 0.3, f * fh + 0.5, coreW * 0.4, 0.7);
    }
  }
  if (b.no) worldText(ctx, b.no, coreX + coreW / 2, H - 1.2, Math.min(1.6, coreW * 0.8), '400 SIZE "Bebas", sans-serif', '#ffffff');
  // roof: parapet, water tank, antenna
  ctx.fillStyle = '#ece8e0';
  ctx.fillRect(x - 0.2, H, w + 0.4, 0.5);
  ctx.lineWidth = 0.06;
  ctx.strokeStyle = LINE;
  if (b.tank !== false) {
    ctx.fillStyle = '#e2ddd3';
    ctx.fillRect(x + w * 0.3, H + 0.5, w * 0.22, 1.3);
    ctx.strokeRect(x + w * 0.3, H + 0.5, w * 0.22, 1.3);
  }
  ctx.beginPath();
  ctx.moveTo(x + w * 0.8, H + 0.5);
  ctx.lineTo(x + w * 0.8, H + 2.4);
  ctx.stroke();
  // outline
  ctx.lineWidth = 0.09;
  ctx.strokeStyle = LINE;
  ctx.strokeRect(x, 0, w, H + 0.5);
  void rnd; void v;
}

/** hawker centre: long roof, pillars, stall fronts with signboards */
export function drawHawker(ctx, x0, x1) {
  const roofY = 3.3;
  // stall fronts at the back
  const stalls = [['CHICKEN RICE', '#e9c46a'], ['KOPI · TEH', '#8ab17d'], ['LAKSA', '#e76f51'], ['CHAR KWAY TEOW', '#90a4c8'], ['SATAY', '#d4a373'], ['DRINKS', '#6fb3c6']];
  const sw = (x1 - x0) / stalls.length;
  stalls.forEach(([name, col], i) => {
    const sx = x0 + i * sw + 0.25;
    ctx.fillStyle = '#efebe3';
    ctx.fillRect(sx, 0, sw - 0.5, 2.3);
    ctx.fillStyle = '#d9d3c8';
    ctx.fillRect(sx + 0.3, 0.9, sw - 1.1, 0.8);
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = LINE;
    ctx.strokeRect(sx, 0, sw - 0.5, 2.3);
    ctx.fillStyle = col;
    ctx.fillRect(sx, 2.3, sw - 0.5, 0.62);
    ctx.strokeRect(sx, 2.3, sw - 0.5, 0.62);
    worldText(ctx, name, sx + (sw - 0.5) / 2, 2.61, 0.34, '800 SIZE "Nunito", sans-serif', '#ffffff');
  });
  // roof + pillars
  for (let px = x0; px <= x1 + 0.01; px += (x1 - x0) / 6) {
    ctx.fillStyle = '#e4dfd6';
    ctx.fillRect(px - 0.12, 0, 0.24, roofY);
    ctx.lineWidth = 0.04;
    ctx.strokeStyle = LINE;
    ctx.strokeRect(px - 0.12, 0, 0.24, roofY);
  }
  ctx.beginPath();
  ctx.moveTo(x0 - 1.2, roofY);
  ctx.lineTo(x1 + 1.2, roofY);
  ctx.lineTo(x1 - 0.5, roofY + 1.6);
  ctx.lineTo(x0 + 0.5, roofY + 1.6);
  ctx.closePath();
  ctx.fillStyle = '#c9cfc6';
  ctx.fill();
  ctx.lineWidth = 0.08;
  ctx.strokeStyle = LINE;
  ctx.stroke();
  ctx.beginPath();
  for (let k = 1; k < 5; k++) {
    const y = roofY + k * 0.32;
    const inset = (k / 5) * 1.7;
    ctx.moveTo(x0 - 1.2 + inset, y);
    ctx.lineTo(x1 + 1.2 - inset, y);
  }
  ctx.lineWidth = 0.03;
  ctx.stroke();
}

/** round hawker table with stools; tissue packet optional */
export function drawTable(ctx, x, opts = {}) {
  const ink = '#2b2825';
  ctx.lineWidth = 0.035;
  ctx.strokeStyle = ink;
  // stools
  for (const dx of [-0.62, 0.62]) {
    ctx.fillStyle = '#d7d1c6';
    ctx.fillRect(x + dx - 0.16, 0, 0.32, 0.34);
    ctx.strokeRect(x + dx - 0.16, 0, 0.32, 0.34);
  }
  // pedestal + top
  ctx.fillStyle = '#cfc8bb';
  ctx.fillRect(x - 0.06, 0, 0.12, 0.58);
  ctx.strokeRect(x - 0.06, 0, 0.12, 0.58);
  ctx.beginPath();
  ctx.ellipse(x, 0.6, 0.55, 0.07, 0, 0, TAU);
  ctx.fillStyle = '#efe9dd';
  ctx.fill();
  ctx.stroke();
  if (opts.tissue) {
    const tx = x + (opts.tissueX ?? 0.1);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(tx - 0.1, 0.63, 0.2, 0.06);
    ctx.strokeRect(tx - 0.1, 0.63, 0.2, 0.06);
    ctx.fillStyle = '#e3242b';
    ctx.fillRect(tx - 0.1, 0.65, 0.2, 0.02);
  }
  if (opts.plate) {
    const px = x + (opts.plateX ?? -0.15);
    ctx.beginPath();
    ctx.ellipse(px, 0.64, 0.16, 0.03, 0, 0, TAU);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(px, 0.67, 0.1, 0.035, 0, Math.PI, TAU);
    ctx.fillStyle = '#f3e3b0';
    ctx.fill();
  }
}

export function drawLamp(ctx, x) {
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 3.1);
  ctx.quadraticCurveTo(x, 3.4, x + 0.45, 3.35);
  ctx.lineWidth = 0.07;
  ctx.strokeStyle = '#6f6b64';
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x + 0.5, 3.3, 0.18, 0.06, 0, 0, TAU);
  ctx.fillStyle = '#e9e5dc';
  ctx.fill();
  ctx.lineWidth = 0.03;
  ctx.stroke();
}

/** rain tree: trunk and a wide umbrella canopy */
export function drawTree(ctx, x, s = 1, seed = 1) {
  const rnd = rng(seed);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.quadraticCurveTo(x + 0.2 * s, 1.4 * s, x - 0.1 * s, 2.6 * s);
  ctx.moveTo(x, 1.6 * s);
  ctx.quadraticCurveTo(x + 0.8 * s, 2.2 * s, x + 1.3 * s, 2.7 * s);
  ctx.lineWidth = 0.22 * s;
  ctx.strokeStyle = '#8c8174';
  ctx.stroke();
  const blobs = [];
  for (let i = 0; i < 9; i++) blobs.push([x + (rnd() - 0.5) * 4.2 * s, 2.9 * s + rnd() * 1.1 * s, (0.9 + rnd() * 0.7) * s]);
  for (const [layer, col] of [[0.08, '#a9c29c'], [0, '#d4e5c9']]) {
    ctx.beginPath();
    for (const [bx, by, br] of blobs) {
      ctx.moveTo(bx + br + layer, by - layer);
      ctx.arc(bx, by - layer, br + layer, 0, TAU);
    }
    ctx.fillStyle = col;
    ctx.fill();
  }
}

function makeSkyline() {
  const rnd = rng(67);
  const out = [];
  let x = -120;
  while (x < 160) {
    const w = 3 + rnd() * 5;
    const h = 8 + rnd() * 26;
    out.push({ x, w, h, col: rnd() < 0.5 ? '#f1f1f1' : '#eeeeee', spire: rnd() < 0.2 ? 3 + rnd() * 4 : 0 });
    x += w + rnd() * 2.5;
  }
  out.push({ kind: 'mbs', x: 38, w: 16, h: 30 });
  out.push({ kind: 'wheel', x: 62, w: 18, h: 12 });
  return out;
}
