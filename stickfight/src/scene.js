// Draws one frame of the film at song time t from the story data.
import { drawFigure, INK, headPoint } from './rig.js';
import { girlChains, drawGirlBack, drawGirlFront, drawSkirt, RED, RED_GLOW } from './girl.js';
import { WIND } from './fx.js';
import { drawSubtitles, drawCallouts, drawTitle, drawSeal } from './text.js';
import { clamp, lerp, E, ribbon, polyPath, noise, smoothPts } from './util.js';

export const W = 1920, H = 1080;

function cameraTransform(ctx, cam, sh) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(W / 2 + sh[0], H / 2 + sh[1]);
  ctx.rotate(cam.r + sh[2]);
  ctx.scale(cam.z, -cam.z);
  ctx.translate(-cam.x, -cam.y);
}

function shadow(ctx, J, groundAt, t, lying) {
  const g = groundAt(J.pelvis[0], t);
  const lift = Math.max(0, Math.min(J.footB[1], J.footF[1], J.pelvis[1] - 0.3) - g);
  const a = 0.17 * clamp(1 - lift / 2.2);
  if (a <= 0.005) return;
  const xs = [J.pelvis[0], J.footB[0], J.footF[0], J.head[0]];
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const s = J.pose.scale ?? 1;
  const cx = lying ? (x0 + x1) / 2 : (J.footB[0] + J.footF[0] + J.pelvis[0]) / 3;
  const rx = Math.max(0.2 * s, (x1 - x0) / 2 + 0.08 * s) * (1 - clamp(lift / 3) * 0.4);
  ctx.beginPath();
  ctx.ellipse(cx, g - 0.012, rx, 0.04 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(40,34,28,${a.toFixed(3)})`;
  ctx.fill();
}

/** iron club / pipe held in the front hand */
function drawWeapon(ctx, J, wpn, t, groundAt) {
  if (!wpn) return;
  if (wpn.hideT) for (const [a, c] of wpn.hideT) if (t >= a && t < c) return;
  const p = J.pose;
  const s = p.scale ?? 1;
  const ang = (J.foreAngF + (p.club ?? wpn.grip ?? 0.2));
  // canonical direction (angle from straight down, + forward), then rotate by body and mirror
  const r = -(p.rot || 0);
  let dx = Math.sin(ang), dy = -Math.cos(ang);
  const c = Math.cos(r), sn = Math.sin(r);
  [dx, dy] = [dx * c - dy * sn, dx * sn + dy * c];
  dx *= p.dir;
  const L = wpn.len * s, back = wpn.back * s;
  const h = J.handF;
  // never through the floor: let the head rest on the ground
  const tipY = h[1] + dy * L;
  const gy = groundAt(h[0] + dx * L, t) + wpn.w * s * 0.9;
  if (tipY < gy) {
    const ndy = Math.max(-1, (gy - h[1]) / L);
    dx = Math.sign(dx || p.dir) * Math.sqrt(Math.max(0, 1 - ndy * ndy));
    dy = ndy;
  }
  const a = [h[0] - dx * back, h[1] - dy * back], b = [h[0] + dx * L, h[1] + dy * L];
  const wdt = wpn.w * s;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.lineWidth = wdt + 0.018 * s;
  ctx.strokeStyle = INK;
  ctx.stroke();
  ctx.lineWidth = wdt;
  ctx.strokeStyle = wpn.col || '#5b6068';
  ctx.stroke();
  // highlight (iron)
  const nx = -dy, ny = dx;
  ctx.beginPath();
  ctx.moveTo(a[0] + nx * wdt * 0.22, a[1] + ny * wdt * 0.22);
  ctx.lineTo(b[0] + nx * wdt * 0.22, b[1] + ny * wdt * 0.22);
  ctx.lineWidth = wdt * 0.2;
  ctx.strokeStyle = '#9aa1ab';
  ctx.stroke();
  if (wpn.head) {
    // heavy striking end with rivets
    const hl = wpn.head * s;
    const c0 = [b[0] - dx * hl, b[1] - dy * hl];
    ctx.beginPath();
    ctx.moveTo(c0[0], c0[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineWidth = wdt * 1.9 + 0.018 * s;
    ctx.strokeStyle = INK;
    ctx.stroke();
    ctx.lineWidth = wdt * 1.9;
    ctx.strokeStyle = '#4a4e55';
    ctx.stroke();
    for (let i = 0; i < 3; i++) {
      const q = [c0[0] + dx * hl * (0.2 + i * 0.3), c0[1] + dy * hl * (0.2 + i * 0.3)];
      ctx.beginPath();
      ctx.arc(q[0] + nx * wdt * 0.45, q[1] + ny * wdt * 0.45, wdt * 0.16, 0, Math.PI * 2);
      ctx.fillStyle = '#c3c8cf';
      ctx.fill();
    }
  }
  return { a, b };
}

/** swept-area smear behind fast limbs */
function drawSmears(ctx, jointsAt, t, J, opts) {
  const dt = 1 / 150;
  const N = 7;
  const hist = [J];
  for (let i = 1; i <= N; i++) hist.push(jointsAt(t - i * dt));
  for (const [end, mid, root] of [['footF', 'kneeF', 'pelvis'], ['footB', 'kneeB', 'pelvis'], ['handF', 'elbowF', 'shoulder'], ['handB', 'elbowB', 'shoulder']]) {
    const v = Math.hypot(hist[0][end][0] - hist[2][end][0], hist[0][end][1] - hist[2][end][1]) / (2 * dt);
    if (v < (opts.minSpeed ?? 7)) continue;
    const k = clamp((v - (opts.minSpeed ?? 7)) / 8);
    const tip = hist.map((h) => h[end]);
    const knee = hist.map((h) => h[mid]);
    // swept area between the limb's middle joint and its tip
    const poly = tip.concat([...knee].reverse());
    ctx.globalAlpha = 0.28 * k;
    polyPath(ctx, poly);
    ctx.fillStyle = INK;
    ctx.fill();
    ctx.globalAlpha = 0.9 * k;
    const sm = smoothPts(tip, 2);
    polyPath(ctx, ribbon(sm, (s) => J.lw * (1 - s) ** 1.2));
    ctx.fillStyle = INK;
    ctx.fill();
    if (opts.wind) {
      ctx.globalAlpha = 0.9 * k;
      polyPath(ctx, ribbon(sm.map(([x, y]) => [x, y]), (s) => J.lw * 0.35 * Math.sin(Math.PI * s)));
      ctx.fillStyle = WIND.mid;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}

function drawGirl(ctx, S, tau, groundAt) {
  const girl = S.girl;
  const jointsAt = (tt) => girl.joints(tt, groundAt);
  const G = girlChains(jointsAt, tau, (x, y, tt) => S.world.windAt(x, y, tt));
  const face = S.faceAt(tau);
  // afterimages
  const ghost = S.ghostAt(tau);
  if (ghost > 0) {
    for (let k = 3; k >= 1; k--) {
      const Jg = jointsAt(tau - k * 0.045);
      ctx.globalAlpha = ghost * (0.42 - k * 0.1);
      drawFigure(ctx, Jg, { color: k === 1 ? '#2f7f77' : WIND.mid });
    }
    ctx.globalAlpha = 1;
  }
  // red eye streak in power mode
  if (face.eye === 'red' && G.view === 'side') {
    const pts = [];
    for (let i = 0; i < 12; i++) pts.push(headPoint(jointsAt(tau - i * 0.014), 0.055, 0.004));
    const move = Math.hypot(pts[0][0] - pts[11][0], pts[0][1] - pts[11][1]);
    if (move > 0.05) {
      const sm = smoothPts(pts, 2);
      polyPath(ctx, ribbon(sm, (s) => 0.022 * (1 - s)));
      ctx.fillStyle = RED;
      ctx.fill();
      polyPath(ctx, ribbon(sm, (s) => 0.009 * (1 - s)));
      ctx.fillStyle = RED_GLOW;
      ctx.fill();
    }
  }
  drawGirlBack(ctx, G);
  if (S.smearOn(tau)) drawSmears(ctx, jointsAt, tau, G.J, { wind: S.windSmear(tau) });
  drawFigure(ctx, G.J);
  drawSkirt(ctx, G);
  drawGirlFront(ctx, G, face);
  return G;
}

export function renderFrame(ctx, t, S, frame = 0) {
  const tau = S.W(t);
  const world = S.world, fx = S.fx;
  const groundAt = (x, tt) => world.groundAt(x, tt);
  const cam = S.camera(t);
  const sh = S.shake(t);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  cameraTransform(ctx, cam, sh);
  const m = 1.3;
  const view = { x0: cam.x - (W / 2 / cam.z) * m, x1: cam.x + (W / 2 / cam.z) * m, y0: cam.y - (H / 2 / cam.z) * m, y1: cam.y + (H / 2 / cam.z) * m };

  world.drawFloor(ctx, view);
  world.drawCracks(ctx, tau);
  for (const c of world.craters) world.drawCraterBack(ctx, c, tau);
  world.drawRocks(ctx, tau, 'back');
  world.drawProps(ctx, tau);
  if (S.flowerOn(tau)) world.drawFlower(ctx, tau);
  fx.drawBursts(ctx, tau);
  world.drawDust(ctx, tau, false);

  // actors
  const live = [];
  for (const e of S.enemies) {
    if (tau < e.appear || tau > e.ashAt + (e.ashDur ?? 0) + 0.01 || (e.gone != null && tau > e.gone)) continue;
    const J = e.joints(tau, groundAt);
    live.push([e, J]);
    shadow(ctx, J, groundAt, tau, J.pose.airborne);
  }
  const gJ = S.girl.joints(tau, groundAt);
  shadow(ctx, gJ, groundAt, tau, false);
  fx.drawVortices(ctx, tau, 'back');
  live.sort((a, b) => (a[0].z ?? 0) - (b[0].z ?? 0));
  const near = (J) => (J.pose.depth ?? 0) < -0.05;
  for (const [e, J] of live) {
    if (e.front || near(J)) continue;
    drawEnemy(ctx, e, J, tau, fx, groundAt);
  }
  if (S.girlOn(tau)) drawGirl(ctx, S, tau, groundAt);
  for (const [e, J] of live) if (e.front && !near(J)) drawEnemy(ctx, e, J, tau, fx, groundAt);

  for (const c of world.craters) world.drawCraterFront(ctx, c, tau);
  world.drawRocks(ctx, tau, 'front');
  world.drawDust(ctx, tau, true);
  fx.drawVortices(ctx, tau, 'front');
  for (const [e, J] of live) if (near(J)) drawEnemy(ctx, e, J, tau, fx, groundAt);
  fx.drawSlashes(ctx, tau);
  fx.drawWisps(ctx, tau);
  fx.drawSparks(ctx, tau);
  fx.drawStreaks(ctx, tau);
  fx.drawMotes(ctx, tau);
  fx.drawAsh(ctx, tau);

  // screen space
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const toScreen = (p) => {
    const dx = (p[0] - cam.x) * cam.z, dy = -(p[1] - cam.y) * cam.z;
    const c = Math.cos(cam.r), s = Math.sin(cam.r);
    return [W / 2 + dx * c - dy * s, H / 2 + dx * s + dy * c];
  };
  void toScreen;
  const imp = fx.impactFrame(t);
  if (imp) {
    ctx.globalCompositeOperation = imp === 'neg' ? 'difference' : 'multiply';
    ctx.fillStyle = imp === 'neg' ? '#ffffff' : RED;
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
  }
  const lb = S.letterbox(t);
  if (lb > 0) {
    ctx.fillStyle = '#141414';
    const h = 96 * lb;
    ctx.fillRect(0, 0, W, h);
    ctx.fillRect(0, H - h, W, h);
  }
  const fade = S.fadeWhite(t);
  if (fade > 0) {
    ctx.fillStyle = `rgba(255,255,255,${fade})`;
    ctx.fillRect(0, 0, W, H);
  }
  drawTitle(ctx, t, S.title, W, H);
  drawCallouts(ctx, t, S.callouts, W, H);
  drawSubtitles(ctx, t, S.subs, W, H, lb);
  drawSeal(ctx, t, S.seal, W, H);
}

function drawEnemy(ctx, e, J, tau, fx, groundAt) {
  const dissolving = tau >= e.ashAt;
  if (dissolving) {
    ctx.save();
    fx.ashClip(ctx, e.ashFx, tau);
  }
  const col = e.tone || INK;
  drawFigure(ctx, J, { color: col });
  if (e.weapon) drawWeapon(ctx, J, e.weapon, tau, groundAt);
  if (dissolving) ctx.restore();
}
