// Signature skills, designed for this fight.
//  SG (kiasu, red/white):  CHOPE! tissue-packet seals that bind, QUEUE RUSH
//    (a queue of numbered clones), KIASU MODE aura, LION CITY ROAR beam.
//  67 (purple/gold):  SIX-SEVEN SCALES barrage of 6s and 7s, GIANT form
//    lightning, the golden DUNK orb, and the twin-helix SIX-SEVEN BEAM.
//  Shared: beam clash ball, shockwave domes, glass shards, lightning.
import { clamp, lerp, E, rng, noise, TAU, ribbon, polyPath, smoothPts } from './util.js';
import { SG, P67 } from './chars.js';

const RED = SG.main, RED_D = SG.dark, GOLD = P67.gold, PUR = P67.main, PUR_D = P67.deep;

function glowLine(ctx, pts, widths, cols, alpha = 1) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (let i = 0; i < widths.length; i++) {
    ctx.beginPath();
    pts.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.globalAlpha = alpha * (i === 0 ? 0.35 : 1);
    ctx.lineWidth = widths[i];
    ctx.strokeStyle = cols[i];
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function bez(p0, c, p1, u) {
  const a = 1 - u;
  return [a * a * p0[0] + 2 * a * u * c[0] + u * u * p1[0], a * a * p0[1] + 2 * a * u * c[1] + u * u * p1[1]];
}

function textW(ctx, s, x, y, size, font, fill, stroke, sw, rotA = 0, sx = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotA);
  ctx.scale((size / 100) * sx, -size / 100);
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (stroke) {
    ctx.lineJoin = 'round';
    ctx.lineWidth = sw;
    ctx.strokeStyle = stroke;
    ctx.strokeText(s, 0, 0);
  }
  ctx.fillStyle = fill;
  ctx.fillText(s, 0, 0);
  ctx.restore();
}

/** jagged lightning polyline between a and b */
export function bolt(a, b, seed, jag = 0.18, n = 9) {
  const rnd = rng(seed);
  const pts = [a];
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const px = -dy / L, py = dx / L;
  for (let i = 1; i < n; i++) {
    const k = i / n;
    const off = (rnd() - 0.5) * 2 * jag * L * Math.sin(Math.PI * k);
    pts.push([a[0] + dx * k + px * off, a[1] + dy * k + py * off]);
  }
  pts.push(b);
  return pts;
}

export class Skills {
  constructor() {
    this.packets = [];
    this.seals = [];
    this.numbers = [];
    this.auras = [];
    this.beams = [];
    this.clashes = [];
    this.bolts = [];
    this.orbs = [];
    this.domes = [];
    this.glass = [];
    this.tags = [];
    this.blasts = [];
  }

  // ------------------------------------------------------------ CHOPE!
  /** tissue packet thrown from p0 to p1 (arrives at t1), sticks until tEnd */
  packet(t0, t1, p0, p1, o = {}) { this.packets.push({ t0, t1, p0, p1, arc: o.arc ?? 0.4, spin: o.spin ?? 22, tEnd: o.tEnd ?? t1 + 1.2, stick: o.stick }); }
  seal(t0, dur, at, R = 0.62) { this.seals.push({ t0, dur, at, R }); }

  drawPackets(ctx, t) {
    for (const p of this.packets) {
      if (t < p.t0 || t > p.tEnd) continue;
      const ctrl = [(p.p0[0] + p.p1[0]) / 2, Math.max(p.p0[1], p.p1[1]) + p.arc];
      const draw = (u, a, alpha) => {
        const q = u >= 1 && p.stick ? p.stick(t) : bez(p.p0, ctrl, p.p1, clamp(u));
        const ang = u >= 1 ? 0.3 : (t - p.t0) * p.spin;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(q[0], q[1]);
        ctx.rotate(ang * 0.35);
        ctx.scale(Math.max(0.15, Math.abs(Math.cos(ang))), 1);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-0.12, -0.075, 0.24, 0.15);
        ctx.fillStyle = RED;
        ctx.fillRect(-0.12, -0.02, 0.24, 0.045);
        ctx.lineWidth = 0.02;
        ctx.strokeStyle = '#141414';
        ctx.strokeRect(-0.12, -0.075, 0.24, 0.15);
        ctx.restore();
        void a;
      };
      const u = (t - p.t0) / (p.t1 - p.t0);
      if (u < 1) for (let k = 3; k >= 1; k--) draw(u - k * 0.07, 0, 0.22 / k);
      draw(u, 0, 1);
    }
  }

  drawSeals(ctx, t) {
    for (const s of this.seals) {
      const u = (t - s.t0) / s.dur;
      if (u < 0 || u > 1) continue;
      const c = s.at(t);
      const g = E.outBack(clamp(u / 0.12), 1.8) * (u > 0.85 ? 1 + (u - 0.85) * 2 : 1);
      const a = u > 0.85 ? 1 - (u - 0.85) / 0.15 : 1;
      const R = s.R * g;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(c[0], c[1]);
      // talisman strips wrapping the body
      for (let k = 0; k < 3; k++) {
        ctx.save();
        ctx.rotate(-0.5 + k * 0.5 + Math.sin(t * 2 + k) * 0.05);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-R * 1.1, -0.05, R * 2.2 * clamp(u * 6 - k * 0.6), 0.1);
        ctx.strokeStyle = RED;
        ctx.lineWidth = 0.02;
        ctx.strokeRect(-R * 1.1, -0.05, R * 2.2 * clamp(u * 6 - k * 0.6), 0.1);
        ctx.restore();
      }
      // seal rings
      ctx.rotate(t * 0.8);
      for (const [r, w] of [[R, 0.05], [R * 0.82, 0.02]]) {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, TAU);
        ctx.lineWidth = w;
        ctx.strokeStyle = RED;
        ctx.stroke();
      }
      for (let k = 0; k < 16; k++) {
        const ang = (k / 16) * TAU;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * R * 0.84, Math.sin(ang) * R * 0.84);
        ctx.lineTo(Math.cos(ang) * R * (k % 2 ? 0.94 : 0.98), Math.sin(ang) * R * (k % 2 ? 0.94 : 0.98));
        ctx.lineWidth = 0.025;
        ctx.stroke();
      }
      ctx.rotate(-t * 0.8);
      textW(ctx, '霸位', 0, 0, R * 0.62, '400 100px "Brush", serif', RED, '#ffffff', 10);
      ctx.restore();
    }
  }

  // ------------------------------------------------------------ SIX-SEVEN SCALES
  /** a flying digit: from -> to with a curved (Itano-style) path */
  number(t0, flight, from, to, digit, o = {}) {
    const rnd = rng(Math.floor(t0 * 1000) + this.numbers.length);
    const mid = [(from[0] + to[0]) / 2 + (rnd() - 0.5) * (o.spread ?? 2.4), (from[1] + to[1]) / 2 + 0.8 + rnd() * (o.lift ?? 1.8)];
    this.numbers.push({ t0, t1: t0 + flight, from, to, mid, digit, size: o.size ?? 0.42 });
  }
  drawNumbers(ctx, t) {
    for (const n of this.numbers) {
      if (t < n.t0 || t > n.t1) continue;
      const u = (t - n.t0) / (n.t1 - n.t0);
      const e = E.inQuad(u) * 0.6 + u * 0.4;
      // smoke-trail of the path so far
      const trail = [];
      for (let k = 0; k <= 12; k++) {
        const uu = Math.max(0, e - k * 0.035);
        trail.push(bez(n.from, n.mid, n.to, uu));
      }
      glowLine(ctx, trail, [0.16 * n.size / 0.42, 0.06 * n.size / 0.42, 0.02], [PUR, P67.light, '#ffffff'], 0.85);
      const p = bez(n.from, n.mid, n.to, e);
      const q = bez(n.from, n.mid, n.to, Math.min(1, e + 0.02));
      const ang = Math.atan2(q[1] - p[1], q[0] - p[0]);
      const pulse = 1 + 0.12 * Math.sin(t * 40 + n.t0);
      textW(ctx, n.digit, p[0], p[1], n.size * pulse, '400 100px "Bebas", sans-serif', GOLD, PUR_D, 16, ang * 0.25);
    }
  }

  // ------------------------------------------------------------ auras
  /** flame aura around an actor between t0 and t1 */
  aura(t0, t1, jointsAt, pal, owner = null) { this.auras.push({ t0, t1, jointsAt, pal, owner }); }
  drawAuras(ctx, t, back, owner = null) {
    for (const a of this.auras) {
      if (t < a.t0 || t > a.t1 || a.owner !== owner) continue;
      const env = Math.min(1, (t - a.t0) / 0.3, (a.t1 - t) / 0.4);
      const J = a.jointsAt(t);
      const s = J.pose.scale ?? 1;
      const pts = [J.head, J.neck, J.pelvis, J.handB, J.handF, J.footB, J.footF, J.elbowB, J.elbowF, J.kneeB, J.kneeF];
      const layers = back ? [[a.pal.outer, 0.2, 0.55], [a.pal.mid, 0.13, 0.8]] : [[a.pal.core, 0.07, 0.9]];
      for (const [col, rad, alpha] of layers) {
        ctx.fillStyle = col;
        ctx.globalAlpha = alpha * env;
        ctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          // flame tongue: base circle + a flickering spike upward
          const r = rad * s * (1 + 0.25 * noise(t * 6 + i, 3));
          const h = (rad * 2.6 + 0.12 * noise(t * 9 + i * 1.7, 5)) * s;
          const sway = 0.08 * s * noise(t * 5 + i, 9);
          ctx.moveTo(p[0] - r, p[1]);
          ctx.quadraticCurveTo(p[0] - r * 0.6 + sway, p[1] + h * 0.6, p[0] + sway * 2, p[1] + h);
          ctx.quadraticCurveTo(p[0] + r * 0.6 + sway, p[1] + h * 0.6, p[0] + r, p[1]);
          ctx.arc(p[0], p[1], r, 0, Math.PI, true);
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  // ------------------------------------------------------------ beams
  /**
   * beam from origin(t) toward dir, front at x = frontAt(t).
   * kind 'lion' (red/white, lion head front) or 'helix' (gold/purple twin helix)
   */
  beam(t0, t1, o) { this.beams.push({ t0, t1, width: 0.9, ...o }); }
  drawBeams(ctx, t) {
    for (const b of this.beams) {
      if (t < b.t0 || t > b.t1) continue;
      const env = Math.min(1, (t - b.t0) / 0.12, (b.t1 - t) / 0.2);
      const o = b.origin(t);
      const fx = b.frontAt(t);
      const L = Math.abs(fx - o[0]);
      const dir = Math.sign(fx - o[0]) || 1;
      const W0 = b.width * env * (1 + 0.06 * Math.sin(t * 50));
      const N = 40;
      if (b.kind === 'lion') {
        const edge = (side, scale) => {
          const pts = [];
          for (let i = 0; i <= N; i++) {
            const k = i / N;
            const w = W0 * scale * (0.35 + 0.65 * Math.min(1, k * 3)) * (1 + 0.12 * noise(k * 9 - t * 12, side * 3));
            pts.push([o[0] + dir * L * k, o[1] + side * w / 2]);
          }
          return pts;
        };
        for (const [scale, col] of [[1.35, 'rgba(227,36,43,0.35)'], [1, RED], [0.62, '#ff9a8a'], [0.3, '#ffffff']]) {
          const top = edge(1, scale), bot = edge(-1, scale).reverse();
          polyPath(ctx, top.concat(bot));
          ctx.fillStyle = col;
          ctx.fill();
        }
        drawLionHead(ctx, [o[0] + dir * Math.max(0, L - W0 * 1.6), o[1]], W0 * 1.25, dir, t);
      } else {
        // twin helix around a white core
        const core = [];
        for (let i = 0; i <= N; i++) core.push([o[0] + dir * L * (i / N), o[1]]);
        glowLine(ctx, core, [W0 * 1.2, W0 * 0.5, W0 * 0.2], [PUR, P67.light, '#ffffff'], env);
        for (const [ph, col] of [[0, GOLD], [Math.PI, PUR]]) {
          const pts = [];
          for (let i = 0; i <= N * 2; i++) {
            const k = i / (N * 2);
            pts.push([o[0] + dir * L * k, o[1] + Math.sin(k * L * 3.2 - t * 26 + ph) * W0 * 0.55 * Math.min(1, k * 4)]);
          }
          glowLine(ctx, pts, [0.16, 0.08, 0.03], [col, col, '#ffffff'], env);
        }
        // numerals riding the helix
        for (let k = 0; k < 6; k++) {
          const kk = ((k / 6 + t * 1.8) % 1);
          const p = [o[0] + dir * L * kk, o[1] + Math.sin(kk * L * 3.2 - t * 26) * W0 * 0.55];
          textW(ctx, k % 2 ? '7' : '6', p[0], p[1], 0.36, '400 100px "Bebas", sans-serif', GOLD, PUR_D, 12);
        }
      }
    }
  }

  // ------------------------------------------------------------ clash ball
  clash(t0, t1, at, R = 1.1) { this.clashes.push({ t0, t1, at, R }); }
  drawClashes(ctx, t) {
    for (const c of this.clashes) {
      if (t < c.t0 || t > c.t1) continue;
      const u = (t - c.t0) / (c.t1 - c.t0);
      const p = c.at(t);
      const R = c.R * (0.6 + 0.6 * u) * (1 + 0.1 * Math.sin(t * 60));
      // expanding rings
      for (let k = 0; k < 4; k++) {
        const ph = ((t * 2.2 + k / 4) % 1);
        ctx.beginPath();
        ctx.ellipse(p[0], p[1], R * (1 + ph * 2.2), R * (1 + ph * 2.2) * 0.9, 0, 0, TAU);
        ctx.lineWidth = 0.06 * (1 - ph);
        ctx.strokeStyle = k % 2 ? RED : GOLD;
        ctx.globalAlpha = 1 - ph;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      // lightning arcs
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * TAU + Math.floor(t * 20) * 0.7;
        const q = [p[0] + Math.cos(a) * R * 2.4, p[1] + Math.sin(a) * R * 2.0];
        glowLine(ctx, bolt(p, q, Math.floor(t * 20) * 13 + k, 0.25, 7), [0.1, 0.04], [k % 2 ? RED : PUR, '#ffffff']);
      }
      // the ball: two halves pushing
      ctx.beginPath();
      ctx.arc(p[0], p[1], R * 1.15, 0, TAU);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p[0], p[1], R, Math.PI / 2, Math.PI * 1.5);
      ctx.fillStyle = '#ffd1cc';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p[0], p[1], R, -Math.PI / 2, Math.PI / 2);
      ctx.fillStyle = '#ffeaa6';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p[0], p[1], R * 0.6, 0, TAU);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
  }

  // ------------------------------------------------------------ lightning / orb / dome
  bolts2(t, from, to, o = {}) { this.bolts.push({ t, life: o.life ?? 0.12, from, to, col: o.col ?? PUR, seed: this.bolts.length * 17 + 3, w: o.w ?? 0.08 }); }
  drawBolts(ctx, t) {
    for (const b of this.bolts) {
      const u = (t - b.t) / b.life;
      if (u < 0 || u > 1) continue;
      const pts = bolt(b.from, b.to, b.seed + Math.floor(t * 30), 0.2, 10);
      glowLine(ctx, pts, [b.w * 3, b.w, b.w * 0.4], [b.col, b.col, '#ffffff'], 1 - u);
    }
  }
  orb(t0, t1, at, R = 0.5) { this.orbs.push({ t0, t1, at, R }); }
  drawOrbs(ctx, t) {
    for (const o of this.orbs) {
      if (t < o.t0 || t > o.t1) continue;
      const p = o.at(t);
      const R = (typeof o.R === 'function' ? o.R(t) : o.R) * Math.min(1, (t - o.t0) / 0.25);
      ctx.beginPath();
      ctx.arc(p[0], p[1], R * 1.35, 0, TAU);
      ctx.fillStyle = 'rgba(255,198,41,0.28)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p[0], p[1], R, 0, TAU);
      ctx.fillStyle = GOLD;
      ctx.fill();
      ctx.lineWidth = R * 0.08;
      ctx.strokeStyle = PUR_D;
      ctx.stroke();
      // basketball seams, spinning
      const a = t * 9;
      ctx.save();
      ctx.beginPath();
      ctx.arc(p[0], p[1], R, 0, TAU);
      ctx.clip();
      ctx.lineWidth = R * 0.07;
      ctx.strokeStyle = PUR_D;
      ctx.beginPath();
      ctx.ellipse(p[0], p[1], R * Math.abs(Math.cos(a)), R, 0, 0, TAU);
      ctx.moveTo(p[0] - R, p[1]);
      ctx.lineTo(p[0] + R, p[1]);
      ctx.stroke();
      ctx.restore();
      ctx.beginPath();
      ctx.arc(p[0] - R * 0.35, p[1] + R * 0.35, R * 0.18, 0, TAU);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fill();
    }
  }
  dome(t, x, R, o = {}) { this.domes.push({ t, x, y: o.y ?? 0, R, life: o.life ?? 0.7, col: o.col ?? GOLD, col2: o.col2 ?? PUR }); }
  drawDomes(ctx, t) {
    for (const d of this.domes) {
      const u = (t - d.t) / d.life;
      if (u < 0 || u > 1) continue;
      const r = d.R * E.outCubic(u);
      ctx.save();
      ctx.globalAlpha = (1 - u) * 0.9;
      ctx.beginPath();
      ctx.ellipse(d.x, d.y, r, r * 0.75, 0, 0, Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.fill();
      ctx.lineWidth = 0.12 * (1 - u) + 0.02;
      ctx.strokeStyle = d.col;
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(d.x, d.y, r * 0.93, r * 0.7, 0, 0, Math.PI);
      ctx.lineWidth = 0.05 * (1 - u);
      ctx.strokeStyle = d.col2;
      ctx.stroke();
      ctx.restore();
    }
  }

  // ------------------------------------------------------------ blast
  /** big filled explosion: white core, coloured rings, light rays */
  blast(t, x, y, R, o = {}) { this.blasts.push({ t, x, y, R, life: o.life ?? 0.9, cols: o.cols ?? ['#ffffff', '#ffd9a0', SG.main], rays: o.rays ?? 14 }); }
  drawBlasts(ctx, t) {
    for (const b of this.blasts) {
      const u = (t - b.t) / b.life;
      if (u < 0 || u > 1) continue;
      const g = E.outExpo(clamp(u / 0.35));
      const fade = 1 - E.inQuad(clamp((u - 0.45) / 0.55));
      // rays
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.globalAlpha = 0.75 * fade;
      for (let k = 0; k < b.rays; k++) {
        const a = (k / b.rays) * TAU + Math.sin(k * 7.3) * 0.2;
        const L = b.R * (1.6 + 0.8 * Math.abs(Math.sin(k * 3.1))) * g;
        const w = b.R * 0.05 * (1 + (k % 3));
        ctx.beginPath();
        ctx.moveTo(Math.cos(a + 1.57) * w, Math.sin(a + 1.57) * w);
        ctx.lineTo(Math.cos(a) * L, Math.sin(a) * L);
        ctx.lineTo(Math.cos(a - 1.57) * w, Math.sin(a - 1.57) * w);
        ctx.closePath();
        ctx.fillStyle = k % 2 ? b.cols[1] : '#ffffff';
        ctx.fill();
      }
      // fireball layers (outer colour first)
      const layers = [[1.0, b.cols[2]], [0.82, b.cols[1]], [0.6, b.cols[0]]];
      for (const [k, col] of layers) {
        ctx.beginPath();
        const N = 26;
        for (let i = 0; i <= N; i++) {
          const a = (i / N) * TAU;
          const r = b.R * k * g * (1 + 0.1 * noise(i * 0.7 + t * 6, k * 9));
          const p = [Math.cos(a) * r, Math.sin(a) * r * 0.85];
          i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
        }
        ctx.closePath();
        ctx.globalAlpha = fade;
        ctx.fillStyle = col;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // ------------------------------------------------------------ glass
  shatter(t, x, y, n, o = {}) {
    const rnd = rng(Math.floor(t * 999 + x * 31 + y * 7));
    for (let i = 0; i < n; i++) {
      this.glass.push({
        t: t + rnd() * 0.05, x: x + (rnd() - 0.5) * (o.w ?? 1), y: y + (rnd() - 0.5) * (o.h ?? 0.6),
        vx: (rnd() - 0.5) * (o.speed ?? 5) + (o.vx ?? 0), vy: rnd() * (o.up ?? 4), spin: (rnd() - 0.5) * 20, size: 0.04 + rnd() * 0.09,
        g: o.g ?? 9.5, life: (o.life ?? 1.2) + rnd() * 0.8, floor: o.floor ?? -0.2, paper: !!o.paper, drag: o.paper ? 1.6 : 0,
      });
    }
  }
  drawGlass(ctx, t) {
    for (const g of this.glass) {
      const u = t - g.t;
      if (u < 0 || u > g.life) continue;
      let x, y;
      if (g.paper) {
        // tissue flutters: velocity decays, then drifts down slowly
        const k = (1 - Math.exp(-g.drag * u)) / g.drag;
        x = g.x + g.vx * k + 0.08 * Math.sin(u * 7 + g.spin);
        y = Math.max(g.floor, g.y + g.vy * k - 0.35 * u * u);
      } else {
        x = g.x + g.vx * u;
        y = Math.max(g.floor, g.y + g.vy * u - 0.5 * g.g * u * u);
      }
      const a = g.spin * u;
      const glint = !g.paper && Math.abs(Math.sin(a * 1.3)) > 0.93;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(a);
      ctx.scale(1, Math.abs(Math.cos(a * 0.7)) + 0.2);
      ctx.beginPath();
      if (g.paper) ctx.rect(-g.size, -g.size, g.size * 2, g.size * 2);
      else {
        ctx.moveTo(-g.size, -g.size * 0.6);
        ctx.lineTo(g.size, -g.size * 0.2);
        ctx.lineTo(-g.size * 0.2, g.size);
        ctx.closePath();
      }
      ctx.globalAlpha = Math.min(1, (g.life - u) / 0.3);
      ctx.fillStyle = g.paper ? '#ffffff' : glint ? '#ffffff' : '#cfe6f0';
      ctx.fill();
      ctx.lineWidth = 0.012 * (g.scale ?? 1);
      ctx.strokeStyle = g.paper ? '#b9b2a6' : '#5d7a86';
      ctx.stroke();
      ctx.restore();
    }
  }

  // ------------------------------------------------------------ queue tags
  tag(t0, t1, at, label) { this.tags.push({ t0, t1, at, label }); }
  drawTags(ctx, t) {
    for (const g of this.tags) {
      if (t < g.t0 || t > g.t1) continue;
      const a = Math.min(1, (t - g.t0) / 0.08, (g.t1 - t) / 0.15);
      const p = g.at(t);
      ctx.globalAlpha = a;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(p[0] - 0.24, p[1] - 0.1, 0.48, 0.2);
      ctx.lineWidth = 0.02;
      ctx.strokeStyle = RED;
      ctx.strokeRect(p[0] - 0.24, p[1] - 0.1, 0.48, 0.2);
      textW(ctx, g.label, p[0], p[1] - 0.005, 0.15, '800 100px "Nunito", sans-serif', RED, null, 0);
      ctx.globalAlpha = 1;
    }
  }
}

/** stylised lion head of red and white flame at the front of the roar */
function drawLionHead(ctx, p, S, dir, t) {
  ctx.save();
  ctx.translate(p[0], p[1]);
  ctx.scale(dir, 1);
  // mane: flame spikes around
  for (const [sc, col] of [[1.25, 'rgba(227,36,43,0.4)'], [1, RED], [0.78, '#ff8f7e']]) {
    ctx.beginPath();
    const N = 18;
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * TAU;
      const r = S * sc * (i % 2 ? 0.62 : 0.95 + 0.15 * noise(t * 8 + i, 4));
      const q = [Math.cos(a) * r - S * 0.2, Math.sin(a) * r];
      i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]);
    }
    ctx.closePath();
    ctx.fillStyle = col;
    ctx.fill();
  }
  // face
  ctx.beginPath();
  ctx.ellipse(S * 0.05, 0, S * 0.5, S * 0.46, 0, 0, TAU);
  ctx.fillStyle = '#fff3f0';
  ctx.fill();
  // snout + open jaws
  ctx.beginPath();
  ctx.moveTo(S * 0.2, S * 0.1);
  ctx.lineTo(S * 0.72, S * 0.02);
  ctx.lineTo(S * 0.72, -S * 0.34);
  ctx.lineTo(S * 0.2, -S * 0.26);
  ctx.closePath();
  ctx.fillStyle = RED_D;
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 4; i++) {
    const x = S * (0.28 + i * 0.12);
    ctx.beginPath();
    ctx.moveTo(x, S * 0.08 - i * 0.012 * S);
    ctx.lineTo(x + S * 0.05, -S * 0.04);
    ctx.lineTo(x + S * 0.1, S * 0.06 - i * 0.012 * S);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, -S * 0.26);
    ctx.lineTo(x + S * 0.05, -S * 0.15);
    ctx.lineTo(x + S * 0.1, -S * 0.27);
    ctx.fill();
  }
  // glowing eye
  ctx.beginPath();
  ctx.ellipse(S * 0.2, S * 0.2, S * 0.12, S * 0.05, -0.3, 0, TAU);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = S * 0.03;
  ctx.strokeStyle = RED_D;
  ctx.stroke();
  ctx.restore();
}
