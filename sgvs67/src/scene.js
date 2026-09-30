// Draws one frame at song time t. The world is drawn in parallax layers
// (sky, skyline, far and mid estate, the fight plane, foreground), then the
// frame is motion-blurred with a 180-degree shutter (several sub-frames
// averaged, more of them when things move fast) and the titles are drawn on top.
import { W, H, LAYERS, applyLayer, layerView } from './camera.js';
import { drawFigure, INK } from './rig3.js';
import { SG, P67, sgTails, drawSGBack, drawSGFront, draw67Front, drawEyes } from './chars.js';
import { drawHawker, drawTable, drawLamp, drawTree } from './city.js';
import { drawCaptions, drawCallouts, drawVS, drawEnd } from './text.js';
import { clamp, lerp, ribbon, polyPath, smoothPts, rng, TAU } from './util.js';

export { W, H };

const SHUTTER = 1 / 120;

/** transform of an actor between the fight plane (lay 0) and the mid layer (lay 1) */
function actorLayer(lay) {
  if (!lay) return LAYERS.fight;
  const A = LAYERS.fight, B = LAYERS.mid;
  return { p: lerp(A.p, B.p, lay), py: lerp(A.py, B.py, lay), s: lerp(A.s, B.s, lay), ox: 0, oy: lerp(A.oy, B.oy, lay) };
}

function project(cam, L, p) {
  const Z = cam.z;
  const x = W / 2 + (L.ox - cam.x * L.p) * Z + p[0] * L.s * Z - W / 2;
  const y = H / 2 + (cam.y * L.py - L.oy) * Z - p[1] * L.s * Z - H / 2;
  const c = Math.cos(cam.r), s = Math.sin(cam.r);
  return [W / 2 + cam.sx + x * c - y * s, H / 2 + cam.sy + x * s + y * c];
}

// ------------------------------------------------------------------ motion blur
function blurSamples(S, t) {
  const a = t - SHUTTER / 2, b = t + SHUTTER / 2;
  const ca = S.camera(a), cb = S.camera(b);
  let m = 0;
  // camera motion at the frame corners of the fight plane
  for (const q of [[-0.45, -0.4], [0.45, 0.4]]) {
    const pa = [ca.x + q[0] * W / ca.z, ca.y + q[1] * H / ca.z];
    const A = project(ca, LAYERS.fight, pa), B = project(cb, LAYERS.fight, pa);
    m = Math.max(m, Math.hypot(A[0] - B[0], A[1] - B[1]));
  }
  const ta = S.W(a), tb = S.W(b);
  for (const f of S.fighters) {
    if (!f.visible(ta) && !f.visible(tb)) continue;
    const Ja = f.J(ta), Jb = f.J(tb);
    const La = actorLayer(Ja.pose.lay), Lb = actorLayer(Jb.pose.lay);
    for (const k of ['head', 'handB', 'handF', 'footB', 'footF', 'pelvis']) {
      const A = project(ca, La, Ja[k]), B = project(cb, Lb, Jb[k]);
      m = Math.max(m, Math.hypot(A[0] - B[0], A[1] - B[1]));
    }
  }
  return Math.max(1, Math.min(6, Math.ceil(m / 7)));
}

let OFF = null;
function offscreen() {
  if (!OFF) {
    const c = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
    OFF = { c, ctx: c.getContext('2d', { alpha: false }) };
  }
  return OFF;
}

export function renderFrame(ctx, t, S, frameNo = 0) {
  let N = S.noBlur ? 1 : blurSamples(S, t);
  let a = t - SHUTTER / 2, b = t + SHUTTER / 2;
  // never blur across a camera cut
  for (const c of S.cuts) {
    if (c > a && c <= b) { if (t >= c) a = c; else b = c - 1e-4; }
  }
  if (N <= 1) drawWorld(ctx, t, S);
  else {
    const o = offscreen();
    for (let k = 0; k < N; k++) {
      const tk = a + ((b - a) * (k + 0.5)) / N;
      if (k === 0) { drawWorld(ctx, tk, S); continue; }
      drawWorld(o.ctx, tk, S);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1 / (k + 1);
      ctx.drawImage(o.c, 0, 0);
      ctx.globalAlpha = 1;
    }
  }
  drawPost(ctx, t, S, frameNo);
}

// ------------------------------------------------------------------ world
function drawWorld(ctx, t, S) {
  const tau = S.W(t);
  const cam = S.camera(t);
  const city = S.city, world = S.world, sk = S.sk, fx = S.fx;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';
  // sky
  const [top, bottom] = S.skyAt(t);
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, top);
  g.addColorStop(1, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  // sun + clouds (sky layer, barely moving)
  applyLayer(ctx, cam, { p: 0.02, py: 0.03, s: 0.35, ox: 0, oy: 0 });
  drawSun(ctx, S, t);
  drawClouds(ctx, tau);
  // skyline
  let L = LAYERS.skyline;
  applyLayer(ctx, cam, L);
  let v = layerView(cam, L);
  city.drawSkyline(ctx, v);
  city.drawLayerGround(ctx, v, '#f3f1ec');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = bottom;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 1;
  // far estate
  L = LAYERS.far;
  applyLayer(ctx, cam, L);
  v = layerView(cam, L);
  city.drawLayerGround(ctx, v, '#efece6');
  city.drawBlocks(ctx, 'far', v, tau);
  // aerial haze: the far estate fades toward the sky colour
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 0.42;
  ctx.fillStyle = bottom;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 1;
  // mid estate: hawker centre, trees, BLK 68 ...
  L = LAYERS.mid;
  applyLayer(ctx, cam, L);
  v = layerView(cam, L);
  city.drawLayerGround(ctx, v, '#ebe7e0');
  for (const tr of S.trees || []) if (tr.layer === 'mid') drawTree(ctx, tr.x, tr.s, tr.seed);
  city.drawBlocks(ctx, 'mid', v, tau);
  if (S.hawker) drawHawker(ctx, S.hawker[0], S.hawker[1]);
  for (const tr of S.trees || []) if (tr.layer === 'midFront') drawTree(ctx, tr.x, tr.s, tr.seed);
  // actors that are deep in the mid layer (crashing into buildings)
  const deep = S.fighters.filter((f) => f.visible(tau) && (f.J(tau).pose.lay ?? 0) >= 0.5);
  for (const f of deep) drawActor(ctx, cam, f, tau, S);
  applyLayer(ctx, cam, LAYERS.mid);
  S.midWorld.drawDust(ctx, tau, false);
  S.midWorld.drawRocks(ctx, tau, 'back');
  S.midWorld.drawRocks(ctx, tau, 'front');
  S.midWorld.drawDust(ctx, tau, true);
  S.midFx.drawBursts(ctx, tau);
  S.midFx.drawSparks(ctx, tau);
  S.midSk.drawGlass(ctx, tau);
  S.midSk.drawBolts(ctx, tau);
  // fight plane
  L = LAYERS.fight;
  applyLayer(ctx, cam, L);
  v = layerView(cam, L);
  city.drawBlocks(ctx, 'fight', v, tau);
  world.drawFloor(ctx, v, 1.4);
  world.drawCracks(ctx, tau);
  for (const c of world.craters) world.drawCraterBack(ctx, c, tau);
  for (const p of S.props) drawProp(ctx, p, tau, S);
  world.drawRocks(ctx, tau, 'back');
  world.drawDust(ctx, tau, false);
  fx.drawBursts(ctx, tau);
  sk.drawDomes(ctx, tau);
  // crater lips and slabs stay behind the fighters so they always read
  for (const c of world.craters) world.drawCraterFront(ctx, c, tau);
  const live = S.fighters.filter((f) => f.visible(tau) && (f.J(tau).pose.lay ?? 0) < 0.5);
  for (const f of live) shadow(ctx, f.J(tau), tau);
  live.sort((a, b) => (a.J(tau).pose.d ?? 0) - (b.J(tau).pose.d ?? 0) || (a.o.z ?? 0) - (b.o.z ?? 0));
  for (const f of live) drawActor(ctx, cam, f, tau, S);
  for (const h of S.held) {
    if (tau < S.T(h.t0) || tau > S.T(h.t1)) continue;
    drawHeld(ctx, h, h.f.J(tau));
  }
  world.drawRocks(ctx, tau, 'front');
  world.drawDust(ctx, tau, true);
  sk.drawGlass(ctx, tau);
  sk.drawBlasts(ctx, tau);
  sk.drawBeams(ctx, tau);
  sk.drawClashes(ctx, tau);
  sk.drawOrbs(ctx, tau);
  sk.drawNumbers(ctx, tau);
  sk.drawPackets(ctx, tau);
  sk.drawSeals(ctx, tau);
  sk.drawBolts(ctx, tau);
  sk.drawTags(ctx, tau);
  fx.drawSlashes(ctx, tau);
  fx.drawWisps(ctx, tau);
  fx.drawSparks(ctx, tau);
  fx.drawMotes(ctx, tau);
  // foreground
  L = LAYERS.fore;
  applyLayer(ctx, cam, L);
  v = layerView(cam, L);
  for (const x of S.foreLamps || []) if (x > v.x0 - 2 && x < v.x1 + 2) drawLamp(ctx, x);
}

function drawSun(ctx, S, t) {
  const sun = S.sunAt ? S.sunAt(t) : null;
  if (!sun) return;
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.r, 0, TAU);
  ctx.fillStyle = sun.col;
  ctx.globalAlpha = sun.a ?? 1;
  ctx.fill();
  ctx.globalAlpha = 1;
}

const CLOUDS = (() => {
  const rnd = rng(11);
  const out = [];
  for (let i = 0; i < 14; i++) out.push({ x: -90 + i * 13 + rnd() * 6, y: 20 + rnd() * 26, w: 6 + rnd() * 9, seed: rnd() });
  return out;
})();
function drawClouds(ctx, tau) {
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  for (const c of CLOUDS) {
    const x = c.x + tau * 0.12;
    ctx.beginPath();
    ctx.ellipse(x, c.y, c.w, c.w * 0.18, 0, 0, TAU);
    ctx.ellipse(x + c.w * 0.3, c.y + c.w * 0.12, c.w * 0.5, c.w * 0.2, 0, 0, TAU);
    ctx.fill();
  }
}

function shadow(ctx, J, tau) {
  const p = J.pose;
  const g = p.ground(p.x);
  const lowest = Math.min(J.footB[1], J.footF[1], J.pelvis[1] - 0.3 * p.scale);
  const lift = Math.max(0, lowest - g);
  const s = p.scale ?? 1;
  const a = 0.16 * clamp(1 - lift / (2.2 * s));
  if (a <= 0.005 || (p.vis ?? 1) < 0.5) return;
  const xs = [J.pelvis[0], J.footB[0], J.footF[0], J.head[0]];
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const rx = Math.max(0.2 * s, (x1 - x0) / 2 + 0.08 * s) * (1 - clamp(lift / (3 * s)) * 0.4);
  ctx.beginPath();
  ctx.ellipse((J.footB[0] + J.footF[0] + J.pelvis[0]) / 3, g - 0.012 * s, rx, 0.04 * s, 0, 0, TAU);
  ctx.fillStyle = `rgba(40,34,28,${a.toFixed(3)})`;
  ctx.fill();
}

/** swept smear behind fast limbs (anime smear frames) */
function drawSmears(ctx, f, tau, J, col) {
  const dt = 1 / 160;
  const N = 6;
  const hist = [J];
  for (let i = 1; i <= N; i++) hist.push(f.J(tau - i * dt));
  const s = J.pose.scale ?? 1;
  for (const [end, mid] of [['footF', 'kneeF'], ['footB', 'kneeB'], ['handF', 'elbowF'], ['handB', 'elbowB']]) {
    const v = Math.hypot(hist[0][end][0] - hist[2][end][0], hist[0][end][1] - hist[2][end][1]) / (2 * dt) / s;
    if (v < 8) continue;
    const k = clamp((v - 8) / 10);
    const tip = hist.map((h) => h[end]);
    const knee = hist.map((h) => h[mid]);
    ctx.globalAlpha = 0.22 * k;
    polyPath(ctx, tip.concat([...knee].reverse()));
    ctx.fillStyle = col;
    ctx.fill();
    ctx.globalAlpha = 0.85 * k;
    polyPath(ctx, ribbon(smoothPts(tip, 2), (u) => J.lw * (1 - u) ** 1.2));
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function drawActor(ctx, cam, f, tau, S) {
  const J = f.J(tau);
  const p = J.pose;
  if ((p.vis ?? 1) < 0.5) return;
  const lay = p.lay ?? 0;
  if (lay > 0.001) applyLayer(ctx, cam, actorLayer(lay));
  const face = f.faceAt(tau);
  const kind = f.kind;
  const wind = S.world.windAt(p.x, p.y, tau);
  const body = kind === 'clone' ? SG.main : kind === 'auntie' ? '#77736c' : f.tone || INK;
  if (f.alpha != null) ctx.globalAlpha = f.alpha;
  // afterimages
  const gh = f.ghostAt(tau);
  if (gh > 0) {
    for (let k = 3; k >= 1; k--) {
      const Jg = f.J(tau - k * 0.045);
      ctx.globalAlpha = gh * (0.45 - k * 0.11);
      drawFigure(ctx, Jg, { color: kind === '67' ? P67.light : SG.light });
    }
    ctx.globalAlpha = 1;
  }
  S.sk.drawAuras(ctx, tau, true, f);
  // comet trail behind a launched fighter
  for (const [a, b, col] of f.trails || []) {
    if (tau < S.T(a) || tau > S.T(b) + 0.25) continue;
    const pts = [];
    for (let i = 0; i <= 14; i++) {
      const tt = Math.max(S.T(a), tau - i * 0.02);
      const Jt = f.J(tt);
      if (Math.abs((Jt.pose.lay ?? 0) - lay) > 0.35 && i > 0) break;
      pts.push([Jt.pelvis[0], Jt.pelvis[1]]);
    }
    if (pts.length > 2) {
      const fade = 1 - clamp((tau - S.T(b)) / 0.25);
      const s = J.pose.scale ?? 1;
      ctx.globalAlpha = 0.85 * fade;
      polyPath(ctx, ribbon(smoothPts(pts, 2), (u) => 0.34 * s * (1 - u)));
      ctx.fillStyle = col;
      ctx.fill();
      polyPath(ctx, ribbon(smoothPts(pts, 2), (u) => 0.12 * s * (1 - u)));
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  // a white rim keeps a figure readable against dark holes and rubble
  if (lay > 0.5 || f.outline) drawFigure(ctx, J, { color: '#ffffff', widen: 2.2 });
  if (kind === 'sg' || kind === 'clone') drawSGBack(ctx, J, sgTails((tt) => f.J(tt), tau, wind), kind === 'clone');
  if (kind === 'auntie') drawAuntieBack(ctx, J);
  if (!S.noSmear) drawSmears(ctx, f, tau, J, body);
  drawFigure(ctx, J, { color: body });
  if (kind === 'sg') drawSGFront(ctx, J, face);
  else if (kind === 'clone') drawEyes(ctx, J, { eye: 'angry' }, '#ffffff');
  else if (kind === '67') draw67Front(ctx, J, face);
  else if (kind === 'auntie') drawAuntieFront(ctx, J);
  S.sk.drawAuras(ctx, tau, false, f);
  ctx.globalAlpha = 1;
  if (lay > 0.001) applyLayer(ctx, cam, LAYERS.fight);
}

function drawAuntieBack(ctx, J) {
  // hair bun behind the head
  const s = J.headR;
  const b = [J.head[0] - J.headF[0] * s * 0.9, J.head[1] + s * 0.55];
  ctx.beginPath();
  ctx.arc(b[0], b[1], s * 0.5, 0, TAU);
  ctx.fillStyle = '#77736c';
  ctx.fill();
}
function drawAuntieFront(ctx, J) {
  // handbag hanging from the back hand
  const h = J.handB, s = J.headR;
  ctx.fillStyle = '#b8563f';
  ctx.fillRect(h[0] - s * 0.9, h[1] - s * 1.6, s * 1.8, s * 1.2);
  ctx.lineWidth = s * 0.15;
  ctx.strokeStyle = '#77736c';
  ctx.beginPath();
  ctx.moveTo(h[0] - s * 0.6, h[1] - s * 0.4);
  ctx.lineTo(h[0], h[1]);
  ctx.lineTo(h[0] + s * 0.6, h[1] - s * 0.4);
  ctx.stroke();
  drawEyes(ctx, J, { eye: 'normal' });
}

/** plate of chicken rice balanced on the front hand */
function drawHeld(ctx, h, J) {
  const p = J.handF, s = J.pose.scale ?? 1;
  const x = p[0], y = p[1] + 0.02 * s;
  ctx.lineWidth = 0.02 * s;
  ctx.strokeStyle = '#2b2825';
  ctx.beginPath();
  ctx.ellipse(x, y, 0.17 * s, 0.03 * s, 0, 0, TAU);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x - 0.02 * s, y + 0.035 * s, 0.1 * s, 0.045 * s, 0, Math.PI, TAU);
  ctx.fillStyle = '#f7f1dc';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x + 0.07 * s, y + 0.03 * s, 0.06 * s, 0.03 * s, 0, Math.PI, TAU);
  ctx.fillStyle = '#e7b35a';
  ctx.fill();
}

function drawProp(ctx, p, tau, S) {
  if (tau < S.T(p.t0 ?? -1e9) || tau > S.T(p.t1 ?? 1e9)) return;
  if (p.kind === 'table') {
    const st = p.state ? p.state(tau) : {};
    drawTable(ctx, p.x, { tissue: st.tissue, tissueX: st.tissueX, plate: st.plate, plateX: st.plateX });
  }
}

// ------------------------------------------------------------------ post (not blurred)
function drawPost(ctx, t, S, frameNo) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  // radial focus lines
  for (const o of S.focus) {
    if (t < o.t0 || t > o.t1) continue;
    const u = (t - o.t0) / (o.t1 - o.t0);
    const env = Math.min(1, u / 0.08, (1 - u) / 0.2);
    const cam = S.camera(t);
    const p = o.fn(S.W(t));
    const f = project(cam, LAYERS.fight, p);
    const rnd = rng(Math.floor(frameNo / 2) * 7 + 13);
    ctx.fillStyle = o.col || INK;
    ctx.globalAlpha = (o.a ?? 0.8) * env;
    const clear = (o.clear ?? 0.36) * H;
    for (let i = 0; i < (o.n ?? 70); i++) {
      const a = rnd() * TAU;
      const r0 = clear * (1 + rnd() * 0.6), r1 = W * 1.3;
      const wd = (0.003 + rnd() * 0.009) * H;
      const c = Math.cos(a), s = Math.sin(a);
      ctx.beginPath();
      ctx.moveTo(f[0] + c * r0, f[1] + s * r0);
      ctx.lineTo(f[0] + c * r1 - s * wd, f[1] + s * r1 + c * wd);
      ctx.lineTo(f[0] + c * r1 + s * wd, f[1] + s * r1 - c * wd);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  const tint = S.tintAt(t);
  if (tint) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = tint[1];
    ctx.fillStyle = tint[0];
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
  // vignette
  const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.45, W / 2, H / 2, H * 1.05);
  vg.addColorStop(0, 'rgba(20,16,12,0)');
  vg.addColorStop(1, `rgba(20,16,12,${S.vignette ? S.vignette(t) : 0.12})`);
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);
  const fl = S.flashAt(t);
  if (fl) {
    if (fl === 'neg') {
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = '#ffffff';
    } else if (fl === 'white') ctx.fillStyle = '#ffffff';
    else {
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = fl === 'red' ? SG.main : fl === 'gold' ? P67.gold : P67.main;
    }
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
  }
  const lb = S.lb(t);
  if (lb > 0) {
    ctx.fillStyle = '#141414';
    const h = 100 * lb;
    ctx.fillRect(0, 0, W, h);
    ctx.fillRect(0, H - h, W, h);
  }
  const fade = S.fadeAt(t);
  if (fade > 0) {
    ctx.fillStyle = `rgba(255,255,255,${fade})`;
    ctx.fillRect(0, 0, W, H);
  }
  drawVS(ctx, t, S.vs, W, H);
  drawCallouts(ctx, t, S.callouts, W, H);
  drawCaptions(ctx, t, S.caps, W, H);
  drawEnd(ctx, t, S.end, W, H);
}
