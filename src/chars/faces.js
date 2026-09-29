// Face drawing for both characters, in world units with +y up.
// The caller sets up ctx so that 1 unit = 1 world unit and y points up
// (e.g. ctx.scale(px, -px)). Used by the 2D drawings *and* painted into the
// canvas textures on the 3D heads, so expressions match in 2D and 3D.
//
// Bear expressions follow the character sheet: happy, angry, cute (> <),
// surprised - plus neutral, sing, scared, laugh, blink.
import { COLORS } from './spec.js';
import { clamp, noise } from '../core/util.js';

export function roundRectPath(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

function ellipse(ctx, x, y, rx, ry, fill) {
  ctx.beginPath();
  ctx.ellipse(x, y, Math.max(rx, 1e-4), Math.max(ry, 1e-4), 0, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
}

function stroke(ctx, w, color = COLORS.eye) {
  ctx.lineWidth = w;
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
}

function sweatDrop(ctx, x, y, s, a) {
  if (a <= 0) return;
  ctx.save();
  ctx.globalAlpha *= a;
  ctx.beginPath();
  ctx.moveTo(x, y + 0.05 * s);
  ctx.bezierCurveTo(x + 0.026 * s, y + 0.004 * s, x + 0.03 * s, y - 0.03 * s, x, y - 0.03 * s);
  ctx.bezierCurveTo(x - 0.03 * s, y - 0.03 * s, x - 0.026 * s, y + 0.004 * s, x, y + 0.05 * s);
  ctx.fillStyle = '#9fd8f5';
  ctx.fill();
  stroke(ctx, 0.007 * s, '#4f9cc6');
  ellipse(ctx, x - 0.008 * s, y - 0.012 * s, 0.006 * s, 0.009 * s, 'rgba(255,255,255,0.9)');
  ctx.restore();
}

// ------------------------------------------------------------------ bear
/**
 * f: { expr, open, blink, lookX, lookY, blush, sweat, gloom, time, tremble }
 * Origin = nose centre.
 */
export function drawBearFace(ctx, f = {}) {
  const expr = f.expr || 'neutral';
  const t = f.time || 0;
  const open = clamp(f.open || 0);
  const blink = clamp(f.blink || 0);
  const tremble = f.tremble || 0;
  const lx = (f.lookX || 0) * 0.014 + tremble * noise(t * 40, 1) * 0.004;
  const ly = (f.lookY || 0) * 0.01 + tremble * noise(t * 40, 2) * 0.004;
  const EX = 0.066, EY = 0.074;

  // blush first (under everything)
  const blush = clamp(f.blush ?? (expr === 'cute' || expr === 'laugh' ? 0.8 : 0));
  if (blush > 0) {
    ctx.save();
    ctx.globalAlpha *= 0.55 * blush;
    for (const sx of [-1, 1]) ellipse(ctx, sx * 0.128 + lx * 0.5, -0.012, 0.038, 0.02, COLORS.blush);
    ctx.restore();
  }

  // gloom lines (scared)
  const gloom = clamp(f.gloom ?? 0);
  if (gloom > 0) {
    ctx.save();
    ctx.globalAlpha *= gloom * 0.7;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 0.035, 0.24);
      ctx.lineTo(i * 0.035, 0.24 - 0.07 - (i % 2 === 0 ? 0.03 : 0));
      stroke(ctx, 0.008, '#8a7fc0');
    }
    ctx.restore();
  }

  // ---- eyes
  const eyeMode =
    blink > 0.85 ? 'closed' :
    expr === 'cute' ? 'chevron' :
    expr === 'laugh' ? 'arc' :
    'dot';
  for (const side of [-1, 1]) {
    const cx = side * EX + lx;
    const cy = EY + ly;
    if (eyeMode === 'dot') {
      let rx = 0.0185, ry = 0.027 * (1 - blink * 0.9);
      if (expr === 'surprised') { rx *= 1.12; ry *= 1.12; }
      if (expr === 'scared') { rx *= 0.9; ry *= 0.92; }
      ellipse(ctx, cx, cy, rx, ry, COLORS.eye);
      if (ry > 0.012) {
        const hs = expr === 'scared' ? 1.35 : 1;
        ellipse(ctx, cx - 0.006, cy + 0.01, 0.0062 * hs, 0.0072 * hs, '#ffffff');
        ellipse(ctx, cx + 0.007, cy - 0.011, 0.0028, 0.0028, 'rgba(255,255,255,0.85)');
      }
      if (expr === 'angry') {
        ctx.beginPath();
        ctx.moveTo(side * 0.098 + lx, 0.122 + ly);
        ctx.lineTo(side * 0.036 + lx, 0.098 + ly);
        stroke(ctx, 0.013);
      }
      if (expr === 'scared') {
        ctx.beginPath();
        ctx.moveTo(side * 0.094 + lx, 0.098 + ly);
        ctx.quadraticCurveTo(side * 0.07 + lx, 0.118 + ly, side * 0.04 + lx, 0.122 + ly);
        stroke(ctx, 0.008);
      }
    } else if (eyeMode === 'closed') {
      ctx.beginPath();
      ctx.moveTo(cx - 0.02, cy);
      ctx.quadraticCurveTo(cx, cy - 0.012, cx + 0.02, cy);
      stroke(ctx, 0.0095);
    } else if (eyeMode === 'arc') {
      ctx.beginPath();
      ctx.moveTo(cx - 0.021, cy - 0.008);
      ctx.quadraticCurveTo(cx, cy + 0.03, cx + 0.021, cy - 0.008);
      stroke(ctx, 0.011);
    } else if (eyeMode === 'chevron') {
      ctx.beginPath();
      ctx.moveTo(cx - side * 0.018, cy + 0.019);
      ctx.lineTo(cx + side * 0.016, cy);
      ctx.lineTo(cx - side * 0.018, cy - 0.019);
      stroke(ctx, 0.0115);
    }
  }

  // ---- nose (rounded, pointing down)
  const nx = lx * 0.6, ny = ly * 0.5;
  ctx.beginPath();
  ctx.moveTo(nx - 0.026, ny + 0.012);
  ctx.quadraticCurveTo(nx, ny + 0.02, nx + 0.026, ny + 0.012);
  ctx.quadraticCurveTo(nx + 0.03, ny + 0.006, nx + 0.012, ny - 0.011);
  ctx.quadraticCurveTo(nx, ny - 0.021, nx - 0.012, ny - 0.011);
  ctx.quadraticCurveTo(nx - 0.03, ny + 0.006, nx - 0.026, ny + 0.012);
  ctx.fillStyle = COLORS.eye;
  ctx.fill();
  ellipse(ctx, nx - 0.008, ny + 0.007, 0.006, 0.0035, 'rgba(255,255,255,0.55)');

  // ---- mouth
  const mx = nx, my = ny - 0.016;
  const W = () => {
    // the ":3" / omega mouth
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx, my - 0.012);
    ctx.moveTo(mx - 0.036, my - 0.006);
    ctx.bezierCurveTo(mx - 0.034, my - 0.026, mx - 0.004, my - 0.028, mx, my - 0.012);
    ctx.bezierCurveTo(mx + 0.004, my - 0.028, mx + 0.034, my - 0.026, mx + 0.036, my - 0.006);
    stroke(ctx, 0.0085);
  };
  const openMouth = (w, d, y0 = my - 0.02) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(mx - w / 2, y0);
    ctx.quadraticCurveTo(mx, y0 + 0.006, mx + w / 2, y0);
    ctx.bezierCurveTo(mx + w / 2, y0 - d * 0.9, mx + w * 0.2, y0 - d, mx, y0 - d);
    ctx.bezierCurveTo(mx - w * 0.2, y0 - d, mx - w / 2, y0 - d * 0.9, mx - w / 2, y0);
    ctx.closePath();
    ctx.fillStyle = COLORS.mouth;
    ctx.fill();
    ctx.clip();
    ellipse(ctx, mx, y0 - d * 1.02, w * 0.36, d * 0.55, COLORS.tongue);
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(mx - w / 2, y0);
    ctx.quadraticCurveTo(mx, y0 + 0.006, mx + w / 2, y0);
    ctx.bezierCurveTo(mx + w / 2, y0 - d * 0.9, mx + w * 0.2, y0 - d, mx, y0 - d);
    ctx.bezierCurveTo(mx - w * 0.2, y0 - d, mx - w / 2, y0 - d * 0.9, mx - w / 2, y0);
    stroke(ctx, 0.0075);
  };

  if (expr === 'surprised') {
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx, my - 0.012);
    stroke(ctx, 0.0085);
    const o = 0.6 + open * 0.6;
    ellipse(ctx, mx, my - 0.038, 0.016 * o, 0.021 * o, COLORS.mouth);
    ctx.beginPath();
    ctx.ellipse(mx, my - 0.038, 0.016 * o, 0.021 * o, 0, 0, Math.PI * 2);
    stroke(ctx, 0.0075);
  } else if (expr === 'scared') {
    ctx.beginPath();
    const y0 = my - 0.03;
    ctx.moveTo(mx - 0.042, y0);
    for (let i = 1; i <= 12; i++) {
      const x = mx - 0.042 + (0.084 * i) / 12;
      ctx.lineTo(x, y0 + Math.sin(i * Math.PI * 0.5 + t * 30 * (f.tremble ? 1 : 0)) * 0.006);
    }
    stroke(ctx, 0.0085);
    if (open > 0.05) openMouth(0.03 + open * 0.02, 0.02 + open * 0.03, my - 0.036);
  } else if (expr === 'angry') {
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx, my - 0.014);
    ctx.moveTo(mx - 0.032, my - 0.046);
    ctx.quadraticCurveTo(mx, my - 0.012, mx + 0.032, my - 0.046);
    stroke(ctx, 0.0085);
  } else if (expr === 'happy' || expr === 'laugh') {
    W();
    openMouth(expr === 'laugh' ? 0.07 : 0.056, (expr === 'laugh' ? 0.05 : 0.04) + open * 0.02, my - 0.018);
  } else if (expr === 'sing') {
    W();
    if (open > 0.04) openMouth(0.042 + open * 0.024, 0.014 + open * 0.052, my - 0.019);
  } else if (expr === 'cute') {
    W();
    // tongue out ("blep")
    ctx.beginPath();
    ctx.moveTo(mx - 0.014, my - 0.018);
    ctx.lineTo(mx - 0.014, my - 0.04);
    ctx.quadraticCurveTo(mx - 0.014, my - 0.06, mx, my - 0.06);
    ctx.quadraticCurveTo(mx + 0.014, my - 0.06, mx + 0.014, my - 0.04);
    ctx.lineTo(mx + 0.014, my - 0.018);
    ctx.fillStyle = COLORS.tongue;
    ctx.fill();
    stroke(ctx, 0.0065);
    ctx.beginPath();
    ctx.moveTo(mx, my - 0.03);
    ctx.lineTo(mx, my - 0.046);
    stroke(ctx, 0.004, '#c9606f');
    // "..." like the character sheet
    for (let i = 0; i < 3; i++) ellipse(ctx, 0.15 + i * 0.018, 0.035, 0.0045, 0.0045, COLORS.eye);
  } else {
    // neutral ":3" with a tiny tongue, as on the sheet's front view
    W();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(mx - 0.012, my - 0.022);
    ctx.quadraticCurveTo(mx, my - 0.04, mx + 0.012, my - 0.022);
    ctx.closePath();
    ctx.fillStyle = COLORS.tongue;
    ctx.fill();
    stroke(ctx, 0.0055);
    ctx.restore();
  }

  sweatDrop(ctx, 0.19, 0.12 - ((t * 0.6) % 1) * 0.05 * (f.sweat > 0 ? 1 : 0), 1, clamp(f.sweat || 0));
}

// ------------------------------------------------------------------ pet
/**
 * Claude pet face. Origin = centre of the body's front face.
 * f: { expr: 'normal'|'happy'|'cute'|'wide'|'sing', blink, lookX, lookY, blush, open, sweat, time, tremble }
 */
export function drawPetFace(ctx, f = {}) {
  const expr = f.expr || 'normal';
  const t = f.time || 0;
  const blink = clamp(f.blink || 0);
  const open = clamp(f.open || 0);
  const tremble = f.tremble || 0;
  const lx = (f.lookX || 0) * 0.03 + tremble * noise(t * 45, 3) * 0.006;
  const ly = (f.lookY || 0) * 0.02 + tremble * noise(t * 45, 4) * 0.006;
  const EX = 0.195, EY = 0.065;

  const blush = clamp(f.blush ?? (expr === 'happy' || expr === 'cute' ? 0.85 : 0.35));
  if (blush > 0) {
    ctx.save();
    ctx.globalAlpha *= 0.5 * blush;
    for (const s of [-1, 1]) ellipse(ctx, s * 0.305 + lx * 0.4, -0.045, 0.055, 0.028, '#ff8a8a');
    ctx.restore();
  }

  for (const side of [-1, 1]) {
    const cx = side * EX + lx;
    const cy = EY + ly;
    const mode = blink > 0.85 ? 'closed' : expr === 'happy' ? 'arc' : expr === 'cute' ? 'chevron' : 'rect';
    if (mode === 'rect') {
      const wide = expr === 'wide' ? 1 : 0;
      const w = 0.072 + wide * 0.012;
      const h = (0.14 + wide * 0.025) * (1 - blink * 0.88);
      ctx.fillStyle = COLORS.eye;
      roundRectPath(ctx, cx - w / 2, cy - h / 2, w, h, w * 0.45);
      ctx.fill();
      if (h > 0.05) {
        const hs = 1 + wide * 0.35;
        ctx.fillStyle = '#ffffff';
        roundRectPath(ctx, cx - 0.024, cy + h / 2 - 0.05 * hs, 0.022 * hs, 0.036 * hs, 0.011 * hs);
        ctx.fill();
        ellipse(ctx, cx + 0.014, cy - h / 2 + 0.024, 0.0075 * hs, 0.0075 * hs, 'rgba(255,255,255,0.8)');
      }
    } else if (mode === 'closed') {
      ctx.beginPath();
      ctx.moveTo(cx - 0.035, cy - 0.005);
      ctx.quadraticCurveTo(cx, cy - 0.022, cx + 0.035, cy - 0.005);
      stroke(ctx, 0.022);
    } else if (mode === 'arc') {
      ctx.beginPath();
      ctx.moveTo(cx - 0.04, cy - 0.02);
      ctx.quadraticCurveTo(cx, cy + 0.06, cx + 0.04, cy - 0.02);
      stroke(ctx, 0.026);
    } else {
      ctx.beginPath();
      ctx.moveTo(cx - side * 0.036, cy + 0.045);
      ctx.lineTo(cx + side * 0.03, cy);
      ctx.lineTo(cx - side * 0.036, cy - 0.045);
      stroke(ctx, 0.026);
    }
  }

  // tiny mouth - only while singing / laughing
  const mOpen = expr === 'sing' ? open : expr === 'happy' ? Math.max(open, 0.35) : open;
  if (mOpen > 0.04) {
    const w = 0.05 + mOpen * 0.03, d = 0.012 + mOpen * 0.05;
    const y0 = -0.045 + ly * 0.5;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(lx * 0.5 - w / 2, y0);
    ctx.quadraticCurveTo(lx * 0.5, y0 + 0.008, lx * 0.5 + w / 2, y0);
    ctx.bezierCurveTo(lx * 0.5 + w / 2, y0 - d, lx * 0.5 - w / 2, y0 - d, lx * 0.5 - w / 2, y0);
    ctx.fillStyle = '#3b1717';
    ctx.fill();
    ctx.clip();
    ellipse(ctx, lx * 0.5, y0 - d, w * 0.3, d * 0.5, COLORS.tongue);
    ctx.restore();
  } else if (expr === 'cute') {
    ctx.beginPath();
    const y0 = -0.05 + ly * 0.5;
    ctx.moveTo(lx * 0.5 - 0.03, y0 + 0.006);
    ctx.quadraticCurveTo(lx * 0.5 - 0.015, y0 - 0.014, lx * 0.5, y0 + 0.002);
    ctx.quadraticCurveTo(lx * 0.5 + 0.015, y0 - 0.014, lx * 0.5 + 0.03, y0 + 0.006);
    stroke(ctx, 0.012);
  }

  sweatDrop(ctx, 0.37, 0.17 - ((t * 0.7) % 1) * 0.05, 1.3, clamp(f.sweat || 0));
}
