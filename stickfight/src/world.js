// The arena: a pale floor fading into the white background, craters with
// upturned slabs and radiating cracks, flat-shaded rock chunks (Yutapon-cube
// style debris), cel-shaded dust and the small red flower she protects.
// Floor depth d (toward the camera = +) is drawn at screen height -d * DEPTH.
import { clamp, lerp, E, rng, noise, TAU, polyPath } from './util.js';

export const DEPTH = 0.3; // floor depth -> screen y
export const FLOOR = { far: '#ffffff', mid: '#f1efeb', near: '#e3dfd8' };
export const ROCK = { light: '#f4f1eb', mid: '#c3bcb0', dark: '#81796d', ink: '#161616' };
export const DUST = { light: '#eeebe5', dark: '#d2ccc2', line: 'rgba(150,142,130,0.55)' };
const INK = '#141414';

export class World {
  constructor() {
    this.craters = [];
    this.cracks = [];
    this.rocks = [];
    this.dust = [];
    this.gusts = [];
    this.vortices = [];
    this.props = [];
    this.flower = { x: 0, d: -0.12 };
    this.floorMarks = makeFloorMarks();
  }

  // ------------------------------------------------------------ ground shape
  groundAt(x, t) {
    let y = 0;
    for (const c of this.craters) {
      if (t < c.t) continue;
      const g = E.outExpo(clamp((t - c.t) / 0.12));
      const u = (x - c.x) / (c.R * lerp(0.4, 1, g));
      const a = Math.abs(u);
      if (a < 1) y -= c.D * g * Math.pow(1 - u * u, 1.3);
      y += c.rim * g * Math.exp(-(((a - 1) / 0.14) ** 2));
    }
    return y;
  }
  /** floor height (screen) at x and depth d */
  floorY(x, d, t) {
    let y = -d * DEPTH;
    for (const c of this.craters) {
      if (t < c.t) continue;
      const g = E.outExpo(clamp((t - c.t) / 0.12));
      const u = (x - c.x) / c.R, v = (d * DEPTH) / (c.R * 0.28);
      const r2 = u * u + v * v;
      if (r2 < 1) y -= c.D * g * Math.pow(1 - r2, 1.3);
    }
    return y;
  }

  // ------------------------------------------------------------ events
  addCrater(t, x, R, opts = {}) {
    const rnd = rng(Math.floor(x * 1000 + t * 77) + (opts.seed || 0));
    const c = { t, x, R, D: opts.D ?? R * 0.26, rim: opts.rim ?? R * 0.035, kind: opts.kind || 'impact', rnd };
    // jagged rim profile
    c.edge = [];
    const N = 48;
    for (let i = 0; i < N; i++) c.edge.push(1 + (rnd() - 0.5) * 0.12 + (i % 2 ? 0.03 : -0.02));
    // upturned slabs along the rim
    c.slabs = [];
    if (c.kind === 'impact') {
      const n = Math.round(5 + R * 6);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU + rnd() * 0.5;
        const size = R * (0.16 + rnd() * 0.14);
        c.slabs.push({
          a, size, shape: makeRock(rnd, size, rnd() < 0.5 ? 0.38 : 0.5, rnd() < 0.3),
          tilt: -Math.cos(a) * (0.35 + rnd() * 0.5), yaw: rnd() * 0.9 - 0.45, roll: rnd() * 0.5,
          delay: rnd() * 0.06, out: 1.0 + rnd() * 0.08,
        });
      }
    }
    // fractures on the far wall + rubble in the pit
    c.walls = [];
    for (let i = 0; i < 7 + R * 5; i++) c.walls.push({ a: 0.25 + rnd() * 0.5, len: 0.3 + rnd() * 0.5, w: rnd() });
    c.rubble = [];
    for (let i = 0; i < 4 + R * 8; i++) {
      const size = R * (0.03 + rnd() * 0.06);
      c.rubble.push({ u: (rnd() - 0.5) * 1.3, v: -0.2 - rnd() * 0.5, size, shape: makeRock(rnd, size), q: randQuat(rnd) });
    }
    this.craters.push(c);
    this.craters.sort((a, b) => a.t - b.t);
    // cracks radiating from the rim
    const nc = opts.cracks ?? Math.round(5 + R * 5);
    for (let i = 0; i < nc; i++) {
      const a = (i / nc) * TAU + rnd() * 0.6;
      const r0 = 0.92;
      this.addCrack(t + 0.02, c.x + Math.cos(a) * R * r0, (Math.sin(a) * R * 0.28 * r0) / DEPTH, a, R * (0.5 + rnd() * 0.9), rnd, 0.28 + R * 0.08);
    }
    return c;
  }
  addCrack(t, x, d, ang, len, rnd = rng(Math.floor(x * 999 + t * 31)), grow = 0.3, width = 1) {
    const segs = [];
    const walk = (px, pd, a, L, w, depth) => {
      let dist = 0;
      while (dist < L) {
        const s = 0.05 + rnd() * 0.09;
        a += (rnd() - 0.5) * 0.8;
        const nx = px + Math.cos(a) * s, nd = pd + Math.sin(a) * s * 0.9;
        segs.push({ a: [px, pd], b: [nx, nd], w: w * (1 - dist / L), s0: dist + (depth ? depth : 0) });
        px = nx; pd = nd; dist += s;
        if (depth < 2 && rnd() < 0.09) walk(px, pd, a + (rnd() < 0.5 ? 0.7 : -0.7), (L - dist) * 0.5, w * 0.6, depth + 1);
      }
    };
    walk(x, d, ang, len, 0.016 * width, 0);
    this.cracks.push({ t, segs, len, grow });
  }
  /** rocks thrown from an impact: {x, d, n, speed, up, size, spread, dir} */
  addDebris(t, o) {
    const rnd = rng(Math.floor(o.x * 1000 + t * 1000) + (o.seed || 0));
    for (let i = 0; i < o.n; i++) {
      const big = rnd() < (o.bigShare ?? 0.25);
      const size = (o.size || 0.08) * (big ? 1.2 + rnd() * 0.9 : 0.35 + rnd() * 0.6);
      const side = o.dir ? o.dir : rnd() < 0.5 ? -1 : 1;
      const sp = (o.speed || 4) * (0.35 + rnd() * 0.8);
      const ang = (o.cone ?? 0.8) * (rnd() - 0.2);
      const rock = {
        t: t + rnd() * (o.stagger ?? 0.04), size, shape: makeRock(rnd, size, 1, rnd() < 0.35),
        x0: o.x + (rnd() - 0.5) * (o.spread ?? 0.3), y0: o.y ?? 0.02, d0: (o.d ?? 0) + (rnd() - 0.5) * 0.2,
        vx: side * sp * Math.cos(ang) * (o.hFactor ?? 1),
        vy: (o.up || 5) * (0.4 + rnd() * 0.8) * (big ? 0.75 : 1),
        vd: (rnd() - 0.4) * (o.depthSpread ?? 1.4),
        q: randQuat(rnd), axis: normalize3([rnd() - 0.5, rnd() - 0.5, rnd() - 0.5]), w: (rnd() * 14 + 4) * (rnd() < 0.5 ? -1 : 1),
        gravity: o.gravity ?? 9.5,
      };
      this.rocks.push(rock);
    }
  }
  /** a single rock with explicit motion (e.g. thrown at the flower) */
  addRock(r) {
    const rnd = rng(Math.floor(r.x0 * 777 + r.t * 313));
    this.rocks.push({ shape: makeRock(rnd, r.size, 1, false), q: randQuat(rnd), axis: normalize3([rnd() - 0.5, rnd() - 0.5, rnd()]), w: 6, vd: 0, d0: 0, gravity: 9.5, ...r });
  }
  /** loose iron prop (pipe/club): {t, x, y, ang, vx, vy, spin, len, w, head, stick, gone} */
  addProp(p) { this.props.push({ spin: 8, w: 0.05, head: 0, stick: false, gone: Infinity, col: '#5b6068', ...p }); }
  propState(p, t) {
    if (!p.path) {
      const out = [];
      let x = p.x, y = p.y, ang = p.ang, vx = p.vx, vy = p.vy, w = p.spin, moving = 1, tt = p.t;
      const dt = 1 / 120;
      for (let i = 0; i < 120 * 6; i++) {
        out.push([x, y, ang, moving]);
        if (!moving) break;
        vy -= 9.5 * dt; x += vx * dt; y += vy * dt; ang += w * dt;
        const half = p.len / 2;
        const ends = [[x + Math.cos(ang) * half, y + Math.sin(ang) * half], [x - Math.cos(ang) * half, y - Math.sin(ang) * half]];
        const low = ends[0][1] < ends[1][1] ? 0 : 1;
        const fy = this.floorY(ends[low][0], 0, tt);
        if (ends[low][1] < fy && vy < 0) {
          if (p.stick && Math.hypot(vx, vy) > 3) {
            // bury the leading end a little and freeze
            y += fy - ends[low][1] - 0.18;
            moving = 0;
          } else if (-vy > 1.5) {
            y += fy - ends[low][1];
            vy = -vy * 0.3; vx *= 0.5; w = -w * 0.4;
          } else {
            y = fy + p.w * 0.6;
            ang = Math.round(ang / Math.PI) * Math.PI;
            moving = 0;
          }
        }
        tt += dt;
      }
      out.push([x, y, ang, 0]);
      p.path = out;
    }
    const P = p.path;
    const i = Math.min(P.length - 1, Math.max(0, Math.floor((t - p.t) * 120)));
    return P[i];
  }
  drawProps(ctx, t) {
    for (const p of this.props) {
      if (t < p.t || t > p.gone) continue;
      const [x, y, ang] = this.propState(p, t);
      const dx = Math.cos(ang), dy = Math.sin(ang);
      const a = [x - dx * p.len / 2, y - dy * p.len / 2], b = [x + dx * p.len / 2, y + dy * p.len / 2];
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.lineWidth = p.w + 0.018;
      ctx.strokeStyle = INK;
      ctx.stroke();
      ctx.lineWidth = p.w;
      ctx.strokeStyle = p.col;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(a[0] - dy * p.w * 0.22, a[1] + dx * p.w * 0.22);
      ctx.lineTo(b[0] - dy * p.w * 0.22, b[1] + dx * p.w * 0.22);
      ctx.lineWidth = p.w * 0.2;
      ctx.strokeStyle = '#9aa1ab';
      ctx.stroke();
      if (p.head) {
        const c0 = [b[0] - dx * p.head, b[1] - dy * p.head];
        ctx.beginPath();
        ctx.moveTo(c0[0], c0[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.lineWidth = p.w * 1.9 + 0.018;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.lineWidth = p.w * 1.9;
        ctx.strokeStyle = '#4a4e55';
        ctx.stroke();
      }
    }
  }
  /** a dust cloud: {x, y, d, n, r, spread, vx, vy, life, ring} */
  addDust(t, o) {
    const rnd = rng(Math.floor(o.x * 1000 + t * 997) + (o.seed || 0));
    for (let i = 0; i < (o.n || 6); i++) {
      const ringA = o.ring ? (i / o.n) * TAU + rnd() * 0.3 : 0;
      const dir = o.ring ? [Math.cos(ringA), Math.sin(ringA) * 0.28] : [(rnd() - 0.5) * 2 * (o.spread ?? 1), rnd() * 0.5];
      const sp = (o.speed ?? 1.5) * (0.5 + rnd() * 0.7);
      const circles = [];
      const m = 3 + Math.floor(rnd() * 3);
      for (let k = 0; k < m; k++) circles.push([(rnd() - 0.5) * 1.2, (rnd() - 0.3) * 0.8, 0.55 + rnd() * 0.5]);
      this.dust.push({
        t: t + rnd() * (o.stagger ?? 0.05), x: o.x + (o.ring ? 0 : (rnd() - 0.5) * (o.w ?? 0.2)), y: (o.y ?? 0) + rnd() * 0.04,
        r: (o.r ?? 0.12) * (0.6 + rnd() * 0.7), vx: dir[0] * sp + (o.vx ?? 0), vy: dir[1] * sp * (o.ring ? 1 : 0.6) + (o.vy ?? 0.25),
        life: (o.life ?? 0.9) * (0.7 + rnd() * 0.6), drag: o.drag ?? 3.2, rise: o.rise ?? 0.15, circles, front: o.front ?? rnd() < 0.5,
      });
    }
  }
  addGust(t, o) { this.gusts.push({ t, dur: 0.8, strength: 3, radius: 3, ...o }); }

  // ------------------------------------------------------------ wind field
  windAt(x, y, t) {
    let wx = 0.35 + 0.18 * noise(t * 0.35, 3), wy = 0.03 * noise(t * 0.5, 5);
    for (const g of this.gusts) {
      const u = (t - g.t) / g.dur;
      if (u < 0 || u > 1) continue;
      const env = Math.sin(Math.PI * u) ** 0.7 * g.strength;
      const dx = x - g.x, dy = y - (g.y ?? 0.6);
      const r = Math.hypot(dx, dy) || 1;
      const fall = Math.exp(-((r / g.radius) ** 2));
      if (g.dir != null) { wx += g.dir * env * fall; }
      else { wx += (dx / r) * env * fall; wy += (dy / r) * env * fall * 0.6; }
    }
    for (const v of this.vortices) {
      if (t < v.t0 || t > v.t1) continue;
      const env = Math.min(1, (t - v.t0) / 0.5, (v.t1 - t) / 0.4) * v.strength;
      const dx = x - v.x;
      const fall = Math.exp(-((dx / v.radius) ** 2));
      wx += -Math.sign(dx || 1) * env * fall * 0.6;
      wy += env * fall * 0.8;
    }
    return [wx, wy];
  }

  // ------------------------------------------------------------ drawing
  drawFloor(ctx, view) {
    const { x0, x1, y0, y1 } = view;
    const g = ctx.createLinearGradient(0, 0.62, 0, -2.4);
    g.addColorStop(0, FLOOR.far);
    g.addColorStop(0.2, '#f8f7f4');
    g.addColorStop(0.3, FLOOR.mid);
    g.addColorStop(1, FLOOR.near);
    ctx.fillStyle = g;
    ctx.fillRect(x0, Math.max(y0, -40), x1 - x0, Math.min(0.62, y1) - Math.max(y0, -40));
    // grain marks (fixed in world space)
    ctx.lineCap = 'round';
    for (const m of this.floorMarks) {
      if (m.x + m.len < x0 || m.x - m.len > x1 || m.y < y0 - 0.1 || m.y > y1 + 0.1) continue;
      ctx.beginPath();
      ctx.moveTo(m.x - m.len / 2, m.y);
      ctx.lineTo(m.x + m.len / 2, m.y + m.tilt);
      ctx.lineWidth = m.w;
      ctx.strokeStyle = m.c;
      ctx.stroke();
    }
  }

  drawCracks(ctx, t) {
    ctx.lineCap = 'round';
    ctx.strokeStyle = INK;
    for (const c of this.cracks) {
      if (t < c.t) continue;
      const reach = c.len * 1.6 * E.outCubic(clamp((t - c.t) / c.grow));
      for (const s of c.segs) {
        if (s.s0 > reach) continue;
        const k = clamp((reach - s.s0) / 0.1);
        const a = [s.a[0], -s.a[1] * DEPTH], b0 = [s.b[0], -s.b[1] * DEPTH];
        const b = [lerp(a[0], b0[0], k), lerp(a[1], b0[1], k)];
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.lineWidth = Math.max(0.003, s.w);
        ctx.stroke();
      }
    }
  }

  craterGrow(c, t) { return E.outExpo(clamp((t - c.t) / 0.12)); }

  /** crater interior, far rim and back slabs (behind the fighters) */
  drawCraterBack(ctx, c, t) {
    if (t < c.t) return;
    const g = this.craterGrow(c, t);
    const R = c.R * lerp(0.4, 1, g), ry = R * 0.28;
    const edge = (a, s = 1) => {
      const i = Math.floor(((a / TAU) % 1 + 1) % 1 * c.edge.length);
      const e = c.edge[i] * s;
      return [c.x + Math.cos(a) * R * e, Math.sin(a) * ry * e];
    };
    const ring = (s) => { const pts = []; for (let i = 0; i <= 48; i++) pts.push(edge((i / 48) * TAU, s)); return pts; };
    // ejecta blanket
    ctx.save();
    ctx.translate(c.x, 0);
    ctx.scale(1, 0.28);
    const bl = ctx.createRadialGradient(0, 0, R * 0.9, 0, 0, R * 1.6);
    bl.addColorStop(0, 'rgba(160,150,135,0.28)');
    bl.addColorStop(1, 'rgba(160,150,135,0)');
    ctx.fillStyle = bl;
    ctx.beginPath();
    ctx.arc(0, 0, R * 1.6, 0, TAU);
    ctx.fill();
    ctx.restore();
    if (c.kind === 'swirl') return this.drawSwirlBack(ctx, c, t, R, ry, ring);
    // hole: far wall (light) above, pit (mid) below, deep shadow at the near lip
    const hole = ring(1);
    ctx.save();
    polyPath(ctx, hole);
    ctx.fillStyle = '#b9b2a6';
    ctx.fill();
    ctx.clip();
    ctx.beginPath();
    ctx.moveTo(c.x - R * 1.1, -ry * 0.05);
    ctx.quadraticCurveTo(c.x, -ry * 0.55 - c.D * 0.4, c.x + R * 1.1, -ry * 0.05);
    ctx.lineTo(c.x + R * 1.1, -ry * 1.2);
    ctx.lineTo(c.x - R * 1.1, -ry * 1.2);
    ctx.closePath();
    ctx.fillStyle = '#8e877b';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(c.x, -ry * 1.0, R * 0.98, ry * 0.42, 0, 0, TAU);
    ctx.fillStyle = '#6d665b';
    ctx.fill();
    // shadow band just under the far lip
    ctx.beginPath();
    ctx.ellipse(c.x, ry * 0.2, R * 1.02, ry * 0.95, 0, 0, TAU);
    ctx.ellipse(c.x, ry * 0.02, R * 1.0, ry * 0.9, 0, 0, TAU);
    ctx.fillStyle = 'rgba(80,72,62,0.35)';
    ctx.fill('evenodd');
    // strata arcs on the far wall
    ctx.lineCap = 'round';
    for (const [s, w] of [[0.78, 0.008], [0.58, 0.006]]) {
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const a = 0.12 * Math.PI + (i / 24) * 0.76 * Math.PI;
        const q = [c.x + Math.cos(a) * R * s * 1.02, Math.sin(a) * ry * s];
        i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]);
      }
      ctx.lineWidth = w * R;
      ctx.strokeStyle = 'rgba(110,100,88,0.55)';
      ctx.stroke();
    }
    // fracture lines running down the far wall
    for (const f of c.walls) {
      const a = f.a * Math.PI;
      const p = edge(a, 0.97);
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      ctx.lineTo(p[0] + (c.x - p[0]) * 0.15 * f.w, p[1] - ry * f.len);
      ctx.lineTo(p[0] + (c.x - p[0]) * 0.25 * f.w + 0.01, p[1] - ry * f.len * 1.25);
      ctx.lineWidth = 0.007 * c.R;
      ctx.strokeStyle = 'rgba(20,20,20,0.6)';
      ctx.stroke();
    }
    // rubble in the pit
    for (const r of c.rubble) drawRock(ctx, r.shape, c.x + r.u * R * 0.7, r.v * ry * 0.9 - c.D * 0.25, r.q, 1);
    ctx.restore();
    // far rim: thick jagged ink edge
    ctx.beginPath();
    for (let i = 0; i <= 24; i++) {
      const q = edge((i / 24) * Math.PI);
      i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]);
    }
    ctx.lineWidth = 0.02 * Math.min(1.4, 0.6 + c.R * 0.4);
    ctx.strokeStyle = INK;
    ctx.lineJoin = 'round';
    ctx.stroke();
    // slabs on the far side
    for (const s of c.slabs) if (Math.sin(s.a) > 0) this.drawSlab(ctx, c, s, t, R, ry);
  }

  drawSwirlBack(ctx, c, t, R, ry, ring) {
    const hole = ring(1);
    ctx.save();
    polyPath(ctx, hole);
    ctx.fillStyle = '#e2ddd5';
    ctx.fill();
    ctx.clip();
    // scour marks spiralling round the centre
    ctx.lineCap = 'round';
    for (let k = 0; k < 7; k++) {
      const s = 0.3 + k * 0.1;
      ctx.beginPath();
      for (let i = 0; i <= 30; i++) {
        const a = k * 0.9 + (i / 30) * Math.PI * 0.9;
        const q = [c.x + Math.cos(a) * R * s, Math.sin(a) * ry * s - c.D * 0.3];
        i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]);
      }
      ctx.lineWidth = 0.006 * c.R + 0.002;
      ctx.strokeStyle = 'rgba(120,110,98,0.7)';
      ctx.stroke();
    }
    ctx.restore();
    polyPath(ctx, hole);
    ctx.lineWidth = 0.008;
    ctx.strokeStyle = 'rgba(40,40,40,0.75)';
    ctx.stroke();
  }

  /** near lip and front slabs (over the fighters' feet) */
  drawCraterFront(ctx, c, t) {
    if (t < c.t || c.kind === 'swirl') return;
    const g = this.craterGrow(c, t);
    const R = c.R * lerp(0.4, 1, g), ry = R * 0.28;
    const edge = (a) => {
      const i = Math.floor(((a / TAU) % 1 + 1) % 1 * c.edge.length);
      const e = c.edge[i];
      return [c.x + Math.cos(a) * R * e, Math.sin(a) * ry * e];
    };
    // raised near lip: light band with an ink edge
    const lip = [];
    for (let i = 0; i <= 24; i++) lip.push(edge(Math.PI + (i / 24) * Math.PI));
    const outer = lip.map(([x, y]) => [c.x + (x - c.x) * 1.04, y * 1.12 - 0.012 * c.R]).reverse();
    polyPath(ctx, lip.concat(outer));
    ctx.fillStyle = '#f3f0ea';
    ctx.fill();
    ctx.beginPath();
    lip.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])));
    ctx.lineWidth = 0.024 * Math.min(1.4, 0.6 + c.R * 0.4);
    ctx.strokeStyle = INK;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.beginPath();
    outer.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])));
    ctx.lineWidth = 0.008;
    ctx.strokeStyle = 'rgba(20,20,20,0.5)';
    ctx.stroke();
    for (const s of c.slabs) if (Math.sin(s.a) <= 0) this.drawSlab(ctx, c, s, t, R, ry);
  }

  drawSlab(ctx, c, s, t, R, ry) {
    const k = clamp((t - c.t - s.delay) / 0.16);
    if (k <= 0) return;
    const pop = E.outBack(k, 2.2);
    const px = c.x + Math.cos(s.a) * R * s.out, py = Math.sin(s.a) * ry * s.out;
    const q = quatMul(quatAxis([0, 0, 1], s.tilt * pop), quatMul(quatAxis([0, 1, 0], s.yaw), quatAxis([1, 0, 0], s.roll)));
    ctx.save();
    // embed: clip below the local floor
    ctx.beginPath();
    ctx.rect(px - s.size * 3, py - s.size * 0.1, s.size * 6, s.size * 6);
    ctx.clip();
    drawRock(ctx, s.shape, px, py + s.size * 0.18 * pop, q, 1);
    ctx.restore();
  }

  /** rock position/orientation at time t (analytic ballistic + bounces, cached) */
  rockState(r, t) {
    if (!r.path) r.path = simRock(r, this);
    const P = r.path;
    const i = Math.min(P.length - 1, Math.max(0, Math.floor((t - r.t) * 120)));
    const a = P[i], bq = P[Math.min(P.length - 1, i + 1)];
    const k = clamp((t - r.t) * 120 - i);
    return {
      x: lerp(a[0], bq[0], k), y: lerp(a[1], bq[1], k), d: lerp(a[2], bq[2], k),
      ang: lerp(a[3], bq[3], k), moving: a[4], vx: a[5], vy: a[6],
    };
  }

  drawRocks(ctx, t, layer) {
    for (const r of this.rocks) {
      if (t < r.t || (r.gone != null && t > r.gone)) continue;
      const s = this.rockState(r, t);
      const front = s.d > 0.02;
      if ((layer === 'front') !== front) continue;
      const q = quatMul(quatAxis(r.axis, s.ang), r.q);
      const sc = 1 + s.d * 0.12;
      const sp = Math.hypot(s.vx, s.vy);
      if (s.moving && sp > 4) {
        // faint motion streak behind fast chunks
        const L = 0.022 * Math.min(1, (sp - 4) / 4);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * L, s.y - s.vy * L);
        ctx.lineWidth = r.size * 0.35 * sc;
        ctx.strokeStyle = 'rgba(110,102,92,0.28)';
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      drawRock(ctx, r.shape, s.x, s.y, q, sc);
    }
  }

  drawDust(ctx, t, front) {
    const layers = [[DUST.line, 0.018], [DUST.dark, 0], [DUST.light, -1]];
    for (const [col, grow] of layers) {
      ctx.fillStyle = col;
      ctx.beginPath();
      for (const p of this.dust) {
        if (p.front !== front) continue;
        const u = (t - p.t) / p.life;
        if (u < 0 || u > 1) continue;
        const k = (1 - Math.exp(-p.drag * (t - p.t))) / p.drag;
        const x = p.x + p.vx * k, y = p.y + p.vy * k + p.rise * (t - p.t);
        const size = p.r * E.outCubic(clamp(u / 0.25)) * (1 - E.inQuad(clamp((u - 0.4) / 0.6))) * (1 + u * 0.3);
        if (size <= 0.002) continue;
        for (const [cx, cy, cr] of p.circles) {
          let rr = cr * size, ox = cx * size, oy = cy * size;
          if (grow > 0) rr += grow;
          if (grow < 0) { rr *= 0.86; ox -= rr * 0.12; oy += rr * 0.16; }
          ctx.moveTo(x + ox + rr, y + oy);
          ctx.arc(x + ox, y + oy, rr, 0, TAU);
        }
      }
      ctx.fill();
    }
  }

  drawFlower(ctx, t) {
    const f = this.flower;
    const base = [f.x, -f.d * DEPTH];
    const w = this.windAt(f.x, 0.2, t);
    const sway = 0.1 * Math.sin(t * 1.9) + 0.04 * Math.sin(t * 3.7 + 1) + clamp(w[0] - 0.35, -3, 3) * 0.1 + (f.bend ? f.bend(t) : 0);
    const H = 0.2;
    const top = [base[0] + Math.sin(sway) * H, base[1] + Math.cos(sway) * H];
    const ctrl = [base[0] + Math.sin(sway * 0.4) * H * 0.55, base[1] + H * 0.55];
    ctx.lineCap = 'round';
    ctx.strokeStyle = INK;
    ctx.lineWidth = 0.012;
    ctx.beginPath();
    ctx.moveTo(base[0], base[1]);
    ctx.quadraticCurveTo(ctrl[0], ctrl[1], top[0], top[1]);
    ctx.stroke();
    // two leaves
    const leaf = (s, side) => {
      const p = [lerp(base[0], ctrl[0], s * 1.2), lerp(base[1], ctrl[1], s * 1.2)];
      const ang = side * 0.9 + sway * 0.6;
      ctx.save();
      ctx.translate(p[0], p[1]);
      ctx.rotate(-ang + (side > 0 ? 0 : Math.PI));
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(0.03, 0.022, 0.065, 0);
      ctx.quadraticCurveTo(0.03, -0.016, 0, 0);
      ctx.fillStyle = INK;
      ctx.fill();
      ctx.restore();
    };
    leaf(0.25, 1);
    leaf(0.45, -1);
    // blossom: five red petals
    ctx.save();
    ctx.translate(top[0], top[1]);
    ctx.rotate(-sway * 0.8);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU + 0.3;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a) * 0.028, Math.sin(a) * 0.022, 0.03, 0.019, a, 0, TAU);
      ctx.fillStyle = '#d8232f';
      ctx.fill();
      ctx.lineWidth = 0.005;
      ctx.strokeStyle = '#8f111b';
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(0, 0, 0.016, 0, TAU);
    ctx.fillStyle = '#141414';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-0.005, 0.005, 0.005, 0, TAU);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
    return top;
  }
}

// ------------------------------------------------------------ floor grain
function makeFloorMarks() {
  const rnd = rng(4242);
  const out = [];
  for (let i = 0; i < 900; i++) {
    const x = (rnd() - 0.5) * 60;
    // denser near the far edge, sparser toward the camera
    const y = 0.5 - Math.pow(rnd(), 1.6) * 3.2;
    const near = clamp((0.5 - y) / 3);
    out.push({
      x, y, len: 0.03 + rnd() * 0.18 * (0.4 + near), tilt: (rnd() - 0.5) * 0.01,
      w: 0.004 + near * 0.006, c: `rgba(120,108,92,${(0.1 + rnd() * 0.12).toFixed(3)})`,
    });
  }
  return out;
}

// ------------------------------------------------------------ rock geometry
function normalize3(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}
export function quatAxis(axis, ang) {
  const s = Math.sin(ang / 2);
  return [Math.cos(ang / 2), axis[0] * s, axis[1] * s, axis[2] * s];
}
export function quatMul(a, b) {
  return [
    a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
    a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
    a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0],
  ];
}
function randQuat(rnd) {
  return quatMul(quatAxis([0, 0, 1], rnd() * TAU), quatMul(quatAxis([1, 0, 0], rnd() * TAU), quatAxis([0, 1, 0], rnd() * TAU)));
}
function rotV(q, v) {
  const [w, x, y, z] = q;
  const ix = w * v[0] + y * v[2] - z * v[1];
  const iy = w * v[1] + z * v[0] - x * v[2];
  const iz = w * v[2] + x * v[1] - y * v[0];
  const iw = -x * v[0] - y * v[1] - z * v[2];
  return [
    ix * w + iw * -x + iy * -z - iz * -y,
    iy * w + iw * -y + iz * -x - ix * -z,
    iz * w + iw * -z + ix * -y - iy * -x,
  ];
}

/** jittered cuboid (or wedge) chunk */
export function makeRock(rnd, size, flat = 1, wedge = false) {
  const a = size * (0.75 + rnd() * 0.55), bb = size * (0.55 + rnd() * 0.45) * flat, c = size * (0.6 + rnd() * 0.5);
  const j = () => (rnd() - 0.5) * size * 0.22;
  let V, F;
  if (!wedge) {
    V = [];
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) V.push([(sx * a) / 2 + j(), (sy * bb) / 2 + j(), (sz * c) / 2 + j()]);
    F = [[0, 1, 3, 2], [4, 6, 7, 5], [0, 4, 5, 1], [2, 3, 7, 6], [0, 2, 6, 4], [1, 5, 7, 3]];
  } else {
    V = [[-a / 2 + j(), -bb / 2, -c / 2 + j()], [a / 2 + j(), -bb / 2, -c / 2 + j()], [j() * 2, bb / 2 + j(), -c / 2],
      [-a / 2 + j(), -bb / 2, c / 2 + j()], [a / 2 + j(), -bb / 2, c / 2 + j()], [j() * 2, bb / 2 + j(), c / 2]];
    F = [[0, 1, 2], [3, 5, 4], [0, 3, 4, 1], [1, 4, 5, 2], [2, 5, 3, 0]];
  }
  const cen = V.reduce((s, v) => [s[0] + v[0] / V.length, s[1] + v[1] / V.length, s[2] + v[2] / V.length], [0, 0, 0]);
  return { V, F, cen, size };
}

const LIGHT = normalize3([-0.55, 0.7, 0.45]);
/** flat-shaded rock: 3 tones + ink outline */
export function drawRock(ctx, shape, x, y, q, scale = 1, tones = ROCK) {
  const P = shape.V.map((v) => rotV(q, v));
  const cen = rotV(q, shape.cen);
  const faces = [];
  for (const f of shape.F) {
    const a = P[f[0]], b = P[f[1]], c = P[f[2]];
    let n = normalize3([
      (b[1] - a[1]) * (c[2] - a[2]) - (b[2] - a[2]) * (c[1] - a[1]),
      (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]),
      (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]),
    ]);
    const fc = f.reduce((s, i) => [s[0] + P[i][0] / f.length, s[1] + P[i][1] / f.length, s[2] + P[i][2] / f.length], [0, 0, 0]);
    if ((fc[0] - cen[0]) * n[0] + (fc[1] - cen[1]) * n[1] + (fc[2] - cen[2]) * n[2] < 0) n = [-n[0], -n[1], -n[2]];
    if (n[2] <= 0.02) continue;
    const l = n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2];
    faces.push({ f, z: fc[2], col: l > 0.5 ? tones.light : l > 0.0 ? tones.mid : tones.dark });
  }
  faces.sort((p, q2) => p.z - q2.z);
  const lw = Math.max(0.005, shape.size * 0.075) * scale;
  ctx.lineJoin = 'round';
  for (const fc of faces) {
    ctx.beginPath();
    fc.f.forEach((i, k) => {
      const px = x + P[i][0] * scale, py = y + P[i][1] * scale;
      k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = fc.col;
    ctx.fill();
    ctx.lineWidth = lw;
    ctx.strokeStyle = tones.ink;
    ctx.stroke();
  }
}

/** pre-simulate a rock's flight (120 Hz): [x, y, d, angle, moving, vx, vy] */
function simRock(r, world) {
  const out = [];
  let x = r.x0, y = r.y0, d = r.d0, vx = r.vx, vy = r.vy, vd = r.vd, ang = 0, w = r.w;
  let t = r.t, moving = 1, bounces = 0;
  const dt = 1 / 120;
  for (let i = 0; i < 120 * 8; i++) {
    out.push([x, y, d, ang, moving, vx, vy]);
    if (!moving) break;
    vy -= r.gravity * dt;
    x += vx * dt; y += vy * dt; d += vd * dt;
    d = clamp(d, -0.6, 1.2);
    ang += w * dt;
    const fy = world.floorY(x, d, t) + r.size * 0.32;
    if (y < fy && vy < 0) {
      y = fy;
      bounces++;
      if (-vy > 1.2 && bounces < 4) { vy = -vy * 0.32; vx *= 0.55; vd *= 0.5; w *= 0.5; }
      else { moving = 0; vy = 0; vx = 0; }
    }
    t += dt;
  }
  // resting: hold the last state forever
  out.push([x, y, d, ang, 0, 0, 0]);
  return out;
}
