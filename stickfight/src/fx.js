// Her effects are wind: teal strokes with white cores and thin red accents
// (no pink). Everything is used sparingly and timed: curl wisps, a crescent
// wind blade, a whirlwind, a crimson storm, burst rings, ink hit sparks,
// localized focus lines and the ash dissolve of defeated stickmen.
import { clamp, lerp, E, rng, noise, TAU, ribbon, polyPath, smoothPts } from './util.js';
import { figurePoints } from './rig.js';

export const WIND = { dark: '#0f5e5a', mid: '#3fb8a8', light: '#bff3ea', core: '#ffffff' };
export const RED = '#d8232f', RED_DARK = '#8f111b', RED_GLOW = '#ff3b3b';

function fillPoly(ctx, pts, col) {
  polyPath(ctx, pts);
  ctx.fillStyle = col;
  ctx.fill();
}

/** tapered stroke along a polyline: widths taper to both ends */
function taper(ctx, pts, w, col, shape = (s) => Math.sin(Math.PI * clamp(s)) ** 0.8) {
  if (pts.length < 2) return;
  fillPoly(ctx, ribbon(pts, (s) => w * shape(s)), col);
}

// ------------------------------------------------------------------ wisps
function wispPath(rnd, curl) {
  const pts = [];
  let x = 0, y = 0, a = (rnd() - 0.5) * 0.2;
  for (let i = 0; i < 24; i++) {
    pts.push([x, y]);
    a += (rnd() - 0.5) * 0.08 + curl * 0.003 * i;
    x += Math.cos(a) * 0.032;
    y += Math.sin(a) * 0.032;
  }
  let step = 0.03;
  for (let i = 0; i < 26; i++) {
    pts.push([x, y]);
    a += curl * (0.17 + i * 0.014);
    step *= 0.955;
    x += Math.cos(a) * step;
    y += Math.sin(a) * step;
  }
  return pts;
}

export class FX {
  constructor() {
    this.wisps = [];
    this.slashes = [];
    this.vortices = [];
    this.bursts = [];
    this.sparks = [];
    this.speed = [];
    this.impacts = [];
    this.ash = [];
    this.trails = [];
    this.motes = [];
  }

  /** wind wisp: {x, y, ang, len, w, life, curl, red} */
  wisp(t, o) {
    const rnd = rng(Math.floor((o.x * 131 + o.y * 71 + t * 1000) | 0) + (o.seed || 0));
    this.wisps.push({ t, life: 0.9, len: 1, w: 0.035, ang: 0, curl: rnd() < 0.5 ? 1 : -1, ...o, path: wispPath(rnd, o.curl ?? (rnd() < 0.5 ? 1 : -1)) });
  }
  /** a gust of a few wisps around a point, heading `ang` */
  gust(t, o) {
    const rnd = rng(Math.floor(o.x * 97 + t * 131));
    const n = o.n ?? 3;
    for (let i = 0; i < n; i++) {
      this.wisp(t + i * (o.stagger ?? 0.05) + rnd() * 0.03, {
        x: o.x + (rnd() - 0.5) * (o.spreadX ?? 0.4), y: o.y + (rnd() - 0.5) * (o.spreadY ?? 0.5),
        ang: (o.ang ?? 0) + (rnd() - 0.5) * 0.25, len: (o.len ?? 1) * (0.7 + rnd() * 0.5), w: (o.w ?? 0.03) * (0.7 + rnd() * 0.5),
        life: (o.life ?? 0.8) * (0.8 + rnd() * 0.4), red: o.red && i === 1, seed: i, move: o.move ?? 1.2,
      });
    }
  }
  /** crescent wind blade: {x, y, dir, speed, R, life, tilt, red} */
  slash(t, o) { this.slashes.push({ t, R: 0.45, speed: 12, life: 0.7, tilt: 0, dir: 1, ...o }); }
  /** whirlwind around a point: {x, y0, h, R, life, spin, red, bands} */
  vortex(t, o) { this.vortices.push({ t, h: 1.1, R: 0.7, life: 1.4, spin: 9, bands: 5, y0: 0.05, ...o }); }
  /** expanding ring: {x, y, R, life, flat, red, w} */
  burst(t, o) { this.bursts.push({ t, R: 1.2, life: 0.45, flat: 0.3, w: 0.05, ...o }); }
  /** ink hit spark: {x, y, s, ang, kind:'ink'|'wind'|'iron'} */
  spark(t, o) {
    const rnd = rng(Math.floor(o.x * 1000 + o.y * 333 + t * 1000));
    const spikes = [];
    const n = o.n ?? 9;
    for (let i = 0; i < n; i++) spikes.push([(i / n) * TAU + (rnd() - 0.5) * 0.4, 0.5 + rnd() * 0.8]);
    this.sparks.push({ t, s: 0.22, life: 0.14, ang: 0, kind: 'ink', ...o, spikes });
  }
  /** localized speed streaks trailing a moving subject (use rarely): {t1, focus(t)->[x,y], ang, R} */
  speedLines(t, o) { this.speed.push({ t, R: 0.55, n: 16, ...o }); }
  /** impact frame: negative + red frames (song time) */
  impact(t, o = {}) { this.impacts.push({ t, frames: o.frames ?? [['neg', 2], ['red', 2], ['neg', 1]] }); }
  /** drifting motes (tiny teal/red specks) */
  motes2(t, o) {
    const rnd = rng(Math.floor(t * 777 + o.x * 31));
    for (let i = 0; i < (o.n ?? 12); i++) {
      this.motes.push({
        t: t + rnd() * (o.spread ?? 1), x: o.x + (rnd() - 0.5) * (o.w ?? 1), y: (o.y ?? 0.2) + rnd() * (o.h ?? 0.4),
        vx: (rnd() - 0.5) * 0.5 + (o.vx ?? 0), vy: 0.4 + rnd() * 0.8, life: 0.8 + rnd() * 0.8, red: rnd() < (o.red ?? 0.3), s: 0.01 + rnd() * 0.012,
      });
    }
  }

  // ------------------------------------------------------------ drawing
  drawWisps(ctx, t) {
    for (const w of this.wisps) {
      const u = (t - w.t) / w.life;
      if (u < 0 || u > 1) continue;
      const head = E.outCubic(clamp(u / 0.75));
      const tail = E.inCubic(clamp((u - 0.15) / 0.85));
      const P = w.path;
      const i0 = Math.floor(tail * (P.length - 1)), i1 = Math.max(i0 + 2, Math.ceil(head * (P.length - 1)));
      const c = Math.cos(w.ang), s = Math.sin(w.ang);
      const drift = w.move * u * w.len * 0.4;
      const pts = P.slice(i0, Math.min(P.length, i1 + 1)).map(([x, y]) => [w.x + (x * c - y * s) * w.len + c * drift, w.y + (x * s + y * c) * w.len + s * drift]);
      if (pts.length < 3) continue;
      const sm = smoothPts(pts, 2);
      ctx.globalAlpha = Math.min(1, (1 - u) * 2.2);
      taper(ctx, sm, w.w * 1.35, WIND.dark);
      taper(ctx, sm, w.w, WIND.mid);
      taper(ctx, sm, w.w * 0.5, w.red ? RED : WIND.light);
      taper(ctx, sm, w.w * 0.16, WIND.core);
      ctx.globalAlpha = 1;
    }
  }

  drawSlashes(ctx, t) {
    for (const o of this.slashes) {
      const u = (t - o.t) / o.life;
      if (u < 0 || u > 1) continue;
      const age = t - o.t;
      const x = o.x + o.dir * o.speed * age * (1 - 0.25 * u);
      const y = o.y;
      const R = o.R * (0.8 + 0.45 * E.outCubic(clamp(u * 3)));
      const A = 1.2;
      const N = 40;
      const rnd = rng(Math.floor(o.t * 1000) + 7);
      const grow = E.outCubic(clamp(u / 0.1));
      const lead = [], trail = [], mid = [], core = [], redL = [];
      const cx = x - o.dir * R * 0.75;
      const P = (th, r) => [cx + o.dir * Math.cos(th + o.tilt) * r * R, y + Math.sin(th + o.tilt) * r * R];
      let jag = 0;
      for (let i = 0; i <= N; i++) {
        const th = -A + (2 * A * i) / N;
        const k = Math.cos((th / A) * Math.PI * 0.5) ** 1.1;
        const thick = 0.36 * k * grow;
        // torn trailing edge: irregular spikes swept back along the arc
        if (i % 3 === 0) jag = rnd() * 0.55 * k;
        else jag *= 0.35;
        lead.push(P(th, 1));
        trail.push(P(th - 0.04 * o.dir * 0, 1 - thick * (1 + jag)));
        mid.push(P(th, 1 - thick * 0.55));
        core.push(P(th, 1 - thick * 0.22));
        redL.push(P(th, 1 - thick * 0.8));
      }
      const alpha = u < 0.7 ? 1 : 1 - (u - 0.7) / 0.3;
      ctx.globalAlpha = alpha;
      // trailing wind streaks (curved, tapered)
      for (let k = 0; k < 3; k++) {
        const th = (k - 1) * 0.55;
        const base = P(th, 0.62);
        const len = R * (1.0 + k * 0.35) * Math.min(1, age * 5);
        const pts = [];
        for (let i = 0; i <= 10; i++) {
          const s2 = i / 10;
          pts.push([base[0] - o.dir * len * s2, base[1] + Math.sin(th) * R * 0.25 * s2 * s2]);
        }
        taper(ctx, pts, 0.03 * R, k === 1 ? WIND.mid : 'rgba(63,184,168,0.6)', (s2) => (1 - s2) * Math.min(1, s2 * 6));
      }
      fillPoly(ctx, lead.concat([...trail].reverse()), WIND.mid);
      fillPoly(ctx, lead.concat([...mid].reverse()), WIND.light);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const line = (pts, w, col) => {
        ctx.beginPath();
        pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
        ctx.lineWidth = w;
        ctx.strokeStyle = col;
        ctx.stroke();
      };
      line(lead, 0.018 * R, WIND.dark);
      line(core.slice(3, -3), 0.03 * R, WIND.core);
      if (o.red !== false) line(redL.slice(8, -8), 0.016 * R, RED);
      ctx.globalAlpha = 1;
    }
  }

  /** whirlwind bands; layer 'back' or 'front' */
  drawVortices(ctx, t, layer) {
    for (const v of this.vortices) {
      const u = (t - v.t) / v.life;
      if (u < 0 || u > 1) continue;
      const env = Math.min(1, E.outCubic(clamp(u / 0.15)), (1 - u) / 0.3);
      const x = typeof v.x === 'function' ? v.x(t) : v.x;
      const age = t - v.t;
      if (v.funnel && layer === 'back') {
        // translucent body of the funnel so it reads as one column of wind
        const rAt = (hk) => v.R * (0.35 + hk * 1.15) * (0.55 + 0.45 * env);
        const wav = (hk, ph) => 0.09 * Math.sin(age * 4 + hk * 9 + ph) + 0.05 * Math.sin(age * 7 + hk * 17 + ph * 2);
        for (const [scl, alpha] of [[1, 0.1], [0.72, 0.1], [0.45, 0.08]]) {
          const pts = [];
          for (let i = 0; i <= 24; i++) { const hk = i / 24; pts.push([x - rAt(hk) * scl + wav(hk, 0), v.y0 + v.h * hk]); }
          for (let i = 24; i >= 0; i--) { const hk = i / 24; pts.push([x + rAt(hk) * scl + wav(hk, 1.3), v.y0 + v.h * hk]); }
          const g = ctx.createLinearGradient(0, v.y0, 0, v.y0 + v.h);
          g.addColorStop(0, 'rgba(63,184,168,0)');
          g.addColorStop(0.25, `rgba(63,184,168,${alpha * env})`);
          g.addColorStop(0.8, `rgba(63,184,168,${alpha * env})`);
          g.addColorStop(1, 'rgba(63,184,168,0)');
          polyPath(ctx, pts);
          ctx.fillStyle = g;
          ctx.fill();
        }
      }
      for (let k = 0; k < v.bands; k++) {
        const hk = (k + 0.5) / v.bands;
        // bands drift upward and cycle
        const cyc = (hk + age * (v.rise ?? 0.35)) % 1;
        const fadeC = Math.min(1, cyc / 0.15, (1 - cyc) / 0.2);
        const yc = v.y0 + v.h * cyc;
        const rx = v.R * (v.funnel ? 0.35 + cyc * 1.15 : 0.75 + 0.3 * Math.sin(k * 1.7 + cyc * 3)) * (0.55 + 0.45 * env);
        const ry = rx * (0.16 + 0.06 * Math.sin(k * 2.9));
        const tilt = 0.12 * Math.sin(k * 3.1 + age * 2);
        const start = age * v.spin * (1 + hk * 0.35) + k * 2.1;
        const span = (0.75 + 0.45 * ((k * 0.618) % 1)) * Math.PI;
        const pts = [];
        const N = 30;
        for (let i = 0; i <= N; i++) {
          const a = start - (span * i) / N; // i=0 is the leading end
          const ex = Math.cos(a) * rx, ey = Math.sin(a) * ry;
          pts.push([x + ex * Math.cos(tilt) - ey * Math.sin(tilt), yc + ex * Math.sin(tilt) + ey * Math.cos(tilt), Math.sin(a), i / N]);
        }
        const want = layer === 'front' ? (sn) => sn < 0 : (sn) => sn >= 0;
        const w = (0.022 + 0.018 * hk) * env * fadeC * (v.w ?? 1);
        if (w <= 0.001) continue;
        const red = v.red && k % 3 === 1;
        const redBand = v.funnel && red;
        let run = [];
        const flush = () => {
          if (run.length > 2) {
            const pts2 = run.map((p) => [p[0], p[1]]);
            const s0 = run[0][3], s1 = run[run.length - 1][3];
            // comet taper: thick at the leading end
            const shape = (s2) => { const g = lerp(s0, s1, s2); return Math.min(1, g * 12) * (1 - g) ** 1.4; };
            taper(ctx, pts2, w * 1.35, redBand ? RED_DARK : WIND.dark, shape);
            taper(ctx, pts2, w, redBand ? RED : WIND.mid, shape);
            taper(ctx, pts2, w * 0.45, redBand ? RED_GLOW : red ? RED : WIND.light, shape);
            taper(ctx, pts2, w * 0.14, WIND.core, shape);
          }
          run = [];
        };
        for (const p of pts) {
          if (want(p[2])) run.push(p);
          else flush();
        }
        flush();
      }
    }
  }

  drawBursts(ctx, t) {
    for (const o of this.bursts) {
      const u = (t - o.t) / o.life;
      if (u < 0 || u > 1) continue;
      const r = o.R * E.outCubic(u);
      const w = o.w * (1 - u) ** 1.5;
      ctx.save();
      ctx.translate(o.x, o.y);
      ctx.scale(1, o.flat);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.lineWidth = (w / Math.max(0.2, o.flat)) * 0.45;
      ctx.strokeStyle = o.red ? RED : WIND.mid;
      ctx.globalAlpha = 0.9 * (1 - u * 0.6);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.97, 0, TAU);
      ctx.lineWidth = (w / Math.max(0.2, o.flat)) * 0.3;
      ctx.strokeStyle = o.red ? RED_GLOW : WIND.light;
      ctx.stroke();
      ctx.restore();
      ctx.globalAlpha = 1;
    }
  }

  drawSparks(ctx, t) {
    for (const o of this.sparks) {
      const u = (t - o.t) / o.life;
      if (u < 0 || u > 1) continue;
      const pop = u < 0.2 ? E.outBack(u / 0.2) : 1 - E.inQuad((u - 0.2) / 0.8) * 0.4;
      const S = o.s * pop;
      const thin = 1 - E.inQuad(clamp((u - 0.3) / 0.7));
      ctx.save();
      ctx.translate(o.x, o.y);
      ctx.rotate(o.ang);
      if (o.kind === 'iron') {
        ctx.lineCap = 'round';
        for (const [a, l] of o.spikes) {
          const r0 = S * 0.3 * (1 + u), r1 = S * (0.6 + l) * (0.6 + u);
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0);
          ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
          ctx.lineWidth = 0.012 * thin;
          ctx.strokeStyle = u < 0.4 ? '#fff4d6' : RED;
          ctx.stroke();
        }
        ctx.restore();
        continue;
      }
      const star = (scale, col) => {
        ctx.beginPath();
        o.spikes.forEach(([a, l], i) => {
          const r = S * l * scale;
          const a2 = a + Math.PI / o.spikes.length;
          const p = [Math.cos(a) * r, Math.sin(a) * r];
          const q = [Math.cos(a2) * S * 0.22 * scale * thin, Math.sin(a2) * S * 0.22 * scale * thin];
          i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
          ctx.lineTo(q[0], q[1]);
        });
        ctx.closePath();
        ctx.fillStyle = col;
        ctx.fill();
      };
      star(1, o.kind === 'wind' ? WIND.dark : '#141414');
      star(0.55, '#ffffff');
      if (o.kind === 'wind' || o.kind === 'red') {
        ctx.beginPath();
        ctx.arc(0, 0, S * (0.4 + u * 0.9), 0, TAU);
        ctx.lineWidth = 0.014 * (1 - u);
        ctx.strokeStyle = o.kind === 'red' ? RED : WIND.mid;
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  drawMotes(ctx, t) {
    for (const m of this.motes) {
      const u = (t - m.t) / m.life;
      if (u < 0 || u > 1) continue;
      const x = m.x + m.vx * (t - m.t) + 0.05 * Math.sin((t - m.t) * 5 + m.x * 9);
      const y = m.y + m.vy * (t - m.t);
      const s = m.s * (1 - u);
      ctx.fillStyle = m.red ? RED : WIND.mid;
      ctx.fillRect(x - s, y - s, s * 2, s * 2);
    }
  }

  /** screen-space focus lines; w,h = canvas size */
  drawSpeedLines(ctx, t, frame, W, H, toScreen) {
    for (const o of this.speed) {
      if (t < o.t || t > o.t1) continue;
      const u = (t - o.t) / (o.t1 - o.t);
      const env = Math.min(1, u / 0.1, (1 - u) / 0.2);
      const f = typeof o.focus === 'function' ? toScreen(o.focus(t)) : [o.fx * W, o.fy * H];
      const rnd = rng(Math.floor(frame / 2) * 7 + 13);
      const n = o.n ?? 70;
      ctx.fillStyle = o.col || '#141414';
      ctx.globalAlpha = 0.85 * env;
      const clear = (o.clear ?? 0.42) * H;
      for (let i = 0; i < n; i++) {
        const a = rnd() * TAU;
        const r0 = clear * (1 + rnd() * 0.55), r1 = W * 1.2;
        const wdt = (0.004 + rnd() * 0.01) * H;
        const c = Math.cos(a), s = Math.sin(a);
        ctx.beginPath();
        ctx.moveTo(f[0] + c * r0, f[1] + s * r0);
        ctx.lineTo(f[0] + c * r1 - s * wdt, f[1] + s * r1 + c * wdt);
        ctx.lineTo(f[0] + c * r1 + s * wdt, f[1] + s * r1 - c * wdt);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  /** thin streaks behind the subject, parallel to its motion */
  drawStreaks(ctx, t) {
    for (const o of this.speed) {
      if (t < o.t || t > o.t1) continue;
      const u = (t - o.t) / (o.t1 - o.t);
      const env = Math.min(1, u / 0.15, (1 - u) / 0.25);
      const f = o.focus(t);
      const c = Math.cos(o.ang), s = Math.sin(o.ang);
      const rnd = rng(Math.floor(t * 30) * 7 + 13);
      ctx.fillStyle = '#141414';
      for (let i = 0; i < o.n; i++) {
        const p = (rnd() - 0.5) * 2 * o.R;
        const s0 = 0.15 + rnd() * 0.45, L = 0.5 + rnd() * 1.1;
        const w = 0.004 + rnd() * 0.006;
        const bx = f[0] - s * p - c * s0, by = f[1] + c * p - s * s0;
        ctx.globalAlpha = (0.35 + rnd() * 0.4) * env;
        ctx.beginPath();
        ctx.moveTo(bx - s * w, by + c * w);
        ctx.lineTo(bx + s * w, by - c * w);
        ctx.lineTo(bx - c * L, by - s * L);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  impactFrame(t) {
    for (const o of this.impacts) {
      let at = o.t;
      for (const [kind, n] of o.frames) {
        const d = n / 60;
        if (t >= at && t < at + d) return kind;
        at += d;
      }
    }
    return null;
  }

  // ------------------------------------------------------------ ash
  /**
   * Dissolve an actor into ash from t0 over dur; the front sweeps along `dir`.
   * jointsAt(t) gives the actor's joints; windAt(x,y,t) drives the drift.
   */
  addAsh(actor, t0, dur, dir, jointsAt, windAt, opts = {}) {
    const rnd = rng(Math.floor(t0 * 1000) + actor.seed * 13);
    const K = 6;
    const samples = [];
    for (let k = 0; k <= K; k++) samples.push(figurePoints(jointsAt(t0 + (dur * k) / K), 0.024));
    const n = Math.min(...samples.map((s) => s.length));
    // projection range along dir
    let lo = Infinity, hi = -Infinity, pc = 0;
    for (const p of samples[0]) {
      const pr = p[0] * dir[0] + p[1] * dir[1];
      lo = Math.min(lo, pr); hi = Math.max(hi, pr);
      pc += (-p[0] * dir[1] + p[1] * dir[0]) / samples[0].length;
    }
    const parts = [];
    for (let i = 0; i < n; i++) {
      const p0 = samples[0][i];
      const pr = (p0[0] * dir[0] + p0[1] * dir[1] - lo) / (hi - lo || 1);
      const ta = t0 + dur * clamp(pr * 0.85 + rnd() * 0.15);
      const k = Math.round(((ta - t0) / dur) * K);
      const p = samples[k][Math.min(i, samples[k].length - 1)];
      const w = windAt(p[0], p[1], ta);
      parts.push({
        ta, x: p[0], y: p[1], r: p[2] * (0.8 + rnd() * 0.5),
        vx: w[0] * (0.35 + rnd() * 0.5) + (rnd() - 0.5) * 0.6 + (opts.vx ?? 0), vy: 0.25 + rnd() * 0.7 + w[1] * 0.3 + (opts.vy ?? 0),
        life: (opts.life ?? 2.2) * (0.6 + rnd() * 0.7), rot: rnd() * TAU, spin: (rnd() - 0.5) * 8, seed: rnd() * 100,
      });
    }
    this.ash.push({ actor, t0, dur, dir, lo, hi, pc, parts });
    actor.ashAt = t0;
    actor.ashDur = dur;
    actor.ashFx = this.ash[this.ash.length - 1];
  }

  /** clip region for the still-solid part of a dissolving actor */
  ashClip(ctx, a, t) {
    const k = clamp((t - a.t0) / a.dur);
    const f = lerp(a.lo, a.hi, k * 1.02) - 0.02;
    const [dx, dy] = a.dir;
    const px = -dy, py = dx;
    const pts = [];
    const N = 24;
    for (let i = 0; i <= N; i++) {
      const s = a.pc - 3 + (6 * i) / N;
      const j = noise(s * 6 + t * 3, a.actor.seed) * 0.04;
      pts.push([dx * (f + j) + px * s, dy * (f + j) + py * s]);
    }
    pts.push([dx * (f + 9) + px * (a.pc + 3), dy * (f + 9) + py * (a.pc + 3)]);
    pts.push([dx * (f + 9) + px * (a.pc - 3), dy * (f + 9) + py * (a.pc - 3)]);
    polyPath(ctx, pts);
    ctx.clip();
    return f;
  }

  drawAsh(ctx, t) {
    const buckets = { ember: [], ink: [], gray: [], light: [] };
    for (const a of this.ash) {
      if (t < a.t0) continue;
      for (const p of a.parts) {
        const u = t - p.ta;
        if (u < 0 || u > p.life) continue;
        const k = u / p.life;
        const x = p.x + p.vx * u + 0.12 * noise(u * 1.6 + p.seed, 1) * u * 2;
        const y = p.y + p.vy * u * (1 - k * 0.3) + 0.1 * noise(u * 1.3 + p.seed, 2) * u * 2;
        const r = p.r * 0.8 * (1 - k) * (u < 0.05 ? 1.3 : 1);
        const col = u < 0.07 ? 'ember' : k < 0.12 ? 'ink' : k < 0.5 ? 'gray' : 'light';
        buckets[col].push([x, y, r, p.rot + p.spin * u]);
      }
    }
    const cols = { ember: RED_GLOW, ink: '#1c1c1c', gray: '#6f6a64', light: '#aaa49c' };
    for (const key of ['light', 'gray', 'ink', 'ember']) {
      const list = buckets[key];
      if (!list.length) continue;
      ctx.beginPath();
      for (const [x, y, r, a] of list) {
        const c = Math.cos(a) * r, s = Math.sin(a) * r;
        ctx.moveTo(x + c, y + s);
        ctx.lineTo(x - s * 0.7, y + c * 0.7);
        ctx.lineTo(x - c, y - s);
        ctx.lineTo(x + s * 0.7, y - c * 0.7);
        ctx.closePath();
      }
      ctx.fillStyle = cols[key];
      ctx.fill();
    }
  }
}
