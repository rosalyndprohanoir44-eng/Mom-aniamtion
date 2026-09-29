// 3D shots, in song order. Each shot's update(t, S) poses the world for time t:
// camera, mood, characters (S.bearPose / S.petPose), bubbles, sprites, confetti.
import { tBar, tBeat, beatAt, beatPhase, kick, mouthOpen, singing, BEAT } from '../core/music.js';
import { LINES } from '../data/lyrics.js';
import { keys, seg, E, lerp, clamp, invLerp, noise, hash, wobble, spring, TAU } from '../core/util.js';
import { blink, breathe, jump, groove, bearWalk, petScuttle, beatHop, lookAround, tremble, impact, beatPoses } from '../anim/motion.js';
import { bubbleStream } from '../three/world.js';

// ------------------------------------------------------------------ helpers
function camPath(S, t, frames, shake = 0, roll = 0) {
  const pos = keys(t, frames.map((f) => [f[0], f[1], f[4]]));
  const tgt = keys(t, frames.map((f) => [f[0], f[2], f[4]]));
  const fov = keys(t, frames.map((f) => [f[0], f[3], f[4]]));
  S.cam(pos, tgt, fov, roll, shake, t);
}

const wordsOf = (who) => LINES.filter((l) => l.who === who || l.who === 'both').flatMap((l) => l.words);

/** music notes floating out of a point for each sung word */
function singNotes(S, t, who, o, dir = [0.35, 0.8, 0.15]) {
  const cols = ['#ffb3cf', '#ffd27a', '#9ee8cf', '#f3a07e', '#c9b3ff'];
  wordsOf(who).forEach((w, i) => {
    const age = t - w.start;
    if (age < 0 || age > 1.8) return;
    const side = i % 2 ? 1 : -1;
    const pop = E.outBack(clamp(age / 0.25));
    S.spriteList.push({
      tex: 'note', x: o[0] + dir[0] * age * side * 0.8 + Math.sin(age * 4 + i) * 0.08,
      y: o[1] + dir[1] * age, z: o[2] + dir[2] * age,
      s: 0.24 * pop, a: 1 - clamp((age - 1.3) / 0.5), rot: Math.sin(age * 3 + i) * 0.3, color: cols[i % cols.length],
    });
  });
}

/** twinkle burst (additive stars) */
function sparkle(S, t, t0, p, n = 12, R = 0.7, colors = ['#fff3a0', '#ffffff', '#ffc2da'], size = 0.34, seed = 1) {
  const age = t - t0;
  if (age < 0 || age > 0.9) return;
  for (let i = 0; i < n; i++) {
    const a = hash(i + seed) * TAU, e = (hash(i * 3.3 + seed) - 0.3) * 1.6;
    const d = E.outCubic(clamp(age / 0.6)) * R * (0.5 + hash(i * 7.1 + seed) * 0.7);
    S.spriteList.push({
      tex: 'star', add: true, x: p[0] + Math.cos(a) * Math.cos(e) * d, y: p[1] + Math.sin(e) * d, z: p[2] + Math.sin(a) * Math.cos(e) * d,
      s: size * (1 - age / 0.9) * (0.6 + hash(i * 9 + seed) * 0.8), a: 1, rot: age * 3 + i, color: colors[i % colors.length],
    });
  }
}

/** hearts rising from p between t0 and t1 */
function heartStream(S, t, t0, t1, p, rate = 4, spread = 0.6, seed = 2) {
  if (t < t0) return;
  const n = Math.floor((Math.min(t, t1) - t0) * rate) + 1;
  for (let i = 0; i < n; i++) {
    const ts = t0 + i / rate;
    const age = t - ts;
    if (age < 0 || age > 2.2) continue;
    const pop = E.outBack(clamp(age / 0.3));
    S.spriteList.push({
      tex: 'heart', x: p[0] + (hash(i + seed) - 0.5) * spread + Math.sin(age * 3 + i) * 0.1,
      y: p[1] + age * 0.55, z: p[2] + (hash(i * 5 + seed) - 0.5) * spread * 0.5,
      s: 0.22 * pop * (0.7 + hash(i * 3 + seed) * 0.6), a: 1 - clamp((age - 1.6) / 0.6),
      rot: Math.sin(age * 2 + i) * 0.3, color: ['#ff8fb8', '#ffb0cb', '#ff7aa3', '#ffd0dd'][i % 4],
    });
  }
}

/** glowing dust motes around a point (ambient magic) */
function motes(S, t, center, R = 3, n = 26, seed = 5, color = '#fff6d8', size = 0.07) {
  for (let i = 0; i < n; i++) {
    const x = center[0] + (hash(i + seed) - 0.5) * R * 2 + noise(t * 0.3 + i, 1) * 0.4;
    const y = center[1] + hash(i * 3 + seed) * R + noise(t * 0.25 + i, 2) * 0.3;
    const z = center[2] + (hash(i * 7 + seed) - 0.5) * R + noise(t * 0.3 + i, 3) * 0.4;
    const tw = 0.5 + 0.5 * Math.sin(t * (2 + hash(i) * 3) + i);
    S.spriteList.push({ tex: 'glow', add: true, x, y, z, s: size * (0.6 + tw * 0.8), a: 0.35 + 0.5 * tw, color });
  }
}

function bearIdle(S, t, seed = 0) {
  const P = S.bearPose;
  P.squash = breathe(t);
  P.bendX = noise(t * 0.4, seed) * 0.02;
  P.armL = 0.02 + noise(t * 0.5, seed + 1) * 0.03;
  P.armR = 0.02 + noise(t * 0.5, seed + 2) * 0.03;
  P.face = { expr: 'neutral', blink: blink(t, seed), ...lookAround(t, seed, 0.6) };
  return P;
}

function petIdle(S, t, seed = 3) {
  const P = S.petPose;
  P.squash = breathe(t, 0.02, 2.8);
  P.bendX = noise(t * 0.5, seed) * 0.03;
  P.face = { expr: 'normal', blink: blink(t, seed), ...lookAround(t, seed, 0.7) };
  return P;
}

// world positions
const HIDE_PET = [2.5, 0, -1.2];
const HIDE_BEAR = [-2.7, 0, -2.75];
const STUMP_TOP = 0.36;

// ------------------------------------------------------------------ shots
export const SHOTS3D = [
  // ============================================================ meadow stroll
  {
    name: 'stroll', start: tBar(4) - 0.4, end: tBar(8),
    update(t, S) {
      S.world.setMood('day');
      S.petPose.visible = false;
      const P = S.bearPose;
      const x0 = -4.2, z0 = 1.6;
      const walkStart = tBar(5), walkEnd = tBar(6) + 0.1;
      const walkX = keys(t, [[walkStart, x0], [walkEnd, x0 + 1.5, E.inOutSine]]);
      const walking = t > walkStart && t < walkEnd ? 1 : 0;
      const wAmt = clamp(invLerp(walkStart, walkStart + 0.25, t)) * (1 - clamp(invLerp(walkEnd - 0.3, walkEnd, t)));
      bearIdle(S, t, 1);
      P.x = walkX;
      P.z = z0;
      // face camera, turn to walk (+x), then 3/4 toward camera to blow bubbles
      P.rotY = keys(t, [[tBar(5) - 0.35, 0.15], [tBar(5) + 0.15, 1.25, E.inOutCubic], [tBar(6) - 0.1, 1.25], [tBar(6) + 0.35, 0.55, E.inOutCubic]]);
      P.face.expr = 'happy';
      // wave hello at the start (continues the 2D wave)
      const wave = win(t, tBar(4) - 0.4, tBar(5) - 0.2, 0.2, 0.3);
      P.armR = lerp(P.armR, 2.35 + Math.sin(t * 9) * 0.35, wave);
      P.armRSwing = 0.25 * wave;
      if (walking) {
        const w = bearWalk(t, wAmt);
        Object.assign(P, { legLSwing: w.legLSwing, legRSwing: w.legRSwing, legL: w.legL, legR: w.legR, armLSwing: w.armLSwing, armRSwing: w.armRSwing, bagSwing: w.bagSwing, tailWag: w.tailWag });
        P.y = w.bob;
        P.squash *= w.squash;
        P.bendX += w.bendX;
      } else {
        const g = groove(t, 0.5);
        P.squash *= g.squash;
        P.bendX += g.sway * 0.5;
        P.bagSwing = impact(t, walkEnd, 0.25, 2.2, 3);
      }
      // reach into the bag, take the wand, blow bubbles
      const reach = win(t, tBar(6) + 0.2, tBar(6) + 0.95, 0.25, 0.25);
      P.armL += reach * 0.35;
      P.armLSwing += reach * 0.5;
      const hold = t > tBar(6) + 0.75;
      if (hold) {
        P.hold = 'wand';
        const up = seg(t, tBar(6) + 0.75, tBar(6) + 1.2, E.outBack);
        P.armRSwing = lerp(0, 1.95, up);
        P.armR = lerp(0, -0.62, up);
        P.face = { expr: t > tBar(6) + 1.25 ? 'surprised' : 'happy', open: 0.25, blink: blink(t, 1), lookX: 0.2 };
        P.bendZ = 0.03 * up;
      }
      sparkle(S, t, tBar(6) + 0.75, [P.x + 0.35, 1.25, P.z + 0.4], 12, 0.5);
      // bubbles from the wand ring
      if (t > tBar(6) + 1.2) {
        S.bear.apply(P, t);
        const ring = S.bear.wand.ring.getWorldPosition(S.tmp);
        const org = [ring.x, ring.y, ring.z];
        S.bubbleList.push(...bubbleStream(t, {
          t0: tBar(6) + 1.3, t1: tBar(8) - 0.3, rate: 5.5, seed: 11, life: 5.5,
          origin: () => org, vel: [0.72, 0.16, -0.18], spread: 0.35, size: [0.09, 0.2],
        }));
      }
      // camera: reveal pull-back, side tracking, 3/4 blow, follow bubbles
      const bx = P.x;
      camPath(S, t, [
        [tBar(4) - 0.4, [x0 + 0.05, 1.55, z0 + 2.4], [x0, 1.5, z0], 36],
        [tBar(5) - 0.1, [x0 + 1.1, 2.0, z0 + 6.0], [x0 + 0.5, 1.1, z0], 36, E.inOutCubic],
        [tBar(5) + 1.0, [x0 + 1.9, 1.55, z0 + 4.6], [x0 + 0.95, 1.05, z0], 35, E.inOutSine],
        [tBar(6), [x0 + 2.5, 1.55, z0 + 4.5], [x0 + 1.45, 1.1, z0], 35, E.inOutSine],
        [tBar(6) + 0.6, [x0 + 3.9, 1.75, z0 + 4.2], [x0 + 1.55, 1.45, z0], 34, E.inOutCubic],
        [tBar(7), [x0 + 4.1, 1.8, z0 + 4.4], [x0 + 1.7, 1.45, z0], 34, E.linear],
        [tBar(8), [x0 + 6.4, 1.3, z0 + 3.2], [x0 + 5.6, 0.95, z0 - 1.6], 36, E.inOutSine],
      ]);
      // the bush rustles as bubbles reach it
      motes(S, t, [-2, 0.3, 0], 4, 22, 3);
    },
  },

  // ============================================================ Claude pet appears
  {
    name: 'pet-intro', start: tBar(8), end: tBar(12),
    update(t, S) {
      S.world.setMood('day', 'golden', seg(t, tBar(8), tBar(12), E.linear) * 0.5);
      const bear = S.bearPose;
      bear.visible = false;
      const P = petIdle(S, t, 3);
      P.rotY = 0;
      // bubbles keep drifting in from the left
      S.bubbleList.push(...bubbleStream(t, {
        t0: tBar(8) - 4, t1: tBar(12), rate: 3.2, seed: 21, life: 6,
        origin: (ts, i) => [-1.4 + hash(i) * 0.8, 0.9 + hash(i * 3) * 0.8, 0.2 + hash(i * 5) * 0.8], vel: [0.55, 0.05, 0.02], spread: 0.25, size: [0.07, 0.15],
      }));
      // hidden behind the bush, then pops out
      const pop = tBeat(34);
      const landT = pop + 0.5;
      if (t < pop - 0.15) {
        P.x = HIDE_PET[0]; P.z = HIDE_PET[2]; P.y = -0.2;
      } else {
        const j = jump(t, pop, 0.52, 1.0, 0.12);
        const k = seg(t, pop, landT, E.inOutSine);
        P.x = lerp(HIDE_PET[0], 2.0, k);
        P.z = lerp(HIDE_PET[2], 0.55, k);
        P.y = lerp(-0.2, 0, k) + j.y;
        P.squash *= j.squash;
      }
      // look around, notice the hero bubble, jump & bop it
      const seeT = tBar(9) + 0.05, hopT = tBeat(37) + 0.05, popT = hopT + 0.33;
      P.twist = keys(t, [[landT, 0], [landT + 0.25, 0.45, E.outBack], [landT + 0.55, 0.45], [landT + 0.8, -0.45, E.outBack], [seeT - 0.1, -0.45], [seeT + 0.15, 0.15, E.outBack]]);
      if (t > seeT && t < popT + 0.1) P.face = { expr: 'wide', blink: 0, lookX: -0.3, lookY: 0.5 };
      const hj = jump(t, hopT, 0.62, 0.62, 0.16);
      if (t > hopT - 0.2) {
        P.y += hj.y;
        P.squash *= hj.squash;
        P.armR = keys(t, [[hopT, 0], [hopT + 0.15, 1.1, E.outBack], [hopT + 0.5, 1.2], [hopT + 0.8, 0.1]]);
      }
      if (t > popT + 0.1) {
        P.face = { expr: 'happy', blink: 0, blush: 1 };
        P.twist = Math.sin((t - popT) * 12) * 0.25 * Math.exp(-(t - popT - 0.4) * 1.2) * (t > popT + 0.4 ? 1 : 0);
      }
      // the hero bubble: drifts in, gets bopped
      const hb = { x: lerp(0.4, 2.15, seg(t, tBar(8) + 0.3, popT, E.linear)), y: 1.02 + Math.sin(t * 2) * 0.05, z: 0.6 };
      if (t < popT) S.bubbleList.push({ x: hb.x, y: hb.y, z: hb.z, r: 0.19, a: 1, phase: t * 0.2 });
      else if (t < popT + 0.15) S.bubbleList.push({ x: hb.x, y: hb.y, z: hb.z, r: 0.19 * (1 + (t - popT) * 4), a: 1 - (t - popT) / 0.15 });
      sparkle(S, t, popT, [hb.x, hb.y, hb.z], 16, 0.8, undefined, 0.36, 4);
      // walk off to the left following the bubble trail (toward the bear)
      const walkT = tBar(10);
      if (t > walkT) {
        const k = seg(t, walkT, tBar(12), E.linear);
        const sc = petScuttle(t, 1, 2);
        P.x = lerp(2.0, -1.2, k);
        P.z = lerp(0.55, 2.1, k);
        P.rotY = keys(t, [[walkT, 0], [walkT + 0.3, -1.25, E.inOutCubic]]);
        P.twist = 0.25;
        Object.assign(P, { walk: sc.walk, stepPhase: sc.stepPhase, tiltZ: sc.tiltZ });
        P.y = sc.bob;
        P.face = { expr: 'normal', blink: blink(t, 4), lookX: 0.6, lookY: 0.4 };
        // little hops on some beats + pop another bubble
        for (const hb2 of [tBeat(44), tBeat(46)]) {
          const jj = jump(t, hb2, 0.42, 0.34, 0.1);
          P.y += jj.y;
          P.squash *= jj.squash;
        }
        const pop2 = tBeat(46) + 0.22;
        sparkle(S, t, pop2, [lerp(2.0, -1.2, seg(pop2, walkT, tBar(12), E.linear)) - 0.1, 0.95, lerp(0.55, 2.1, seg(pop2, walkT, tBar(12), E.linear))], 12, 0.6, undefined, 0.3, 9);
        if (t > tBeat(46) && t < tBeat(47)) P.armL = keys(t, [[tBeat(46), 0], [tBeat(46) + 0.15, 1.1, E.outBack], [tBeat(46) + 0.45, 0]]);
      }
      // camera
      const px = P.x;
      camPath(S, t, [
        [tBar(8), [1.2, 0.5, 3.6], [2.2, 0.55, 0.0], 32],
        [tBar(9) - 0.2, [1.35, 0.55, 3.2], [2.1, 0.5, 0.3], 32, E.inOutSine],
        [tBar(9) + 0.4, [0.8, 0.75, 3.9], [1.8, 0.75, 0.4], 34, E.inOutCubic],
        [tBar(10), [0.9, 0.8, 4.0], [1.85, 0.7, 0.5], 34, E.linear],
        [tBar(10) + 0.6, [1.4, 0.6, 5.0], [1.3, 0.45, 1.2], 34, E.inOutCubic],
        [tBar(12), [-0.9, 0.6, 5.4], [-1.2, 0.45, 2.0], 34, E.linear],
      ]);
      // bush rustle before the pop
      const r = t < pop ? Math.max(0, Math.sin((t - tBar(8)) * 18)) * clamp(invLerp(tBar(8) + 0.2, pop, t)) : 0;
      S.world.heroBush.scale.setScalar(1 + r * 0.05 + (t > pop ? impact(t, pop, 0.08, 4, 5) : 0));
      motes(S, t, [1.5, 0.2, 0.5], 3, 22, 7);
    },
  },

  // ============================================================ stage: I want to sing a song
  {
    name: 'stage', start: tBar(16) - 0.5, end: 39.25,
    update(t, S) {
      S.world.setMood('golden');
      S.world.heroBush.scale.setScalar(1);
      S.world.micStand.visible = true;
      S.world.spotCone.visible = true;
      S.world.spotCone.material.uniforms.uA.value = 0.8 + kick(t) * 0.4;
      const P = bearIdle(S, t, 1);
      P.y = STUMP_TOP;
      P.groundY = STUMP_TOP;
      P.z = -0.05;
      const g = groove(t, 0.8);
      P.squash *= g.squash;
      P.bendX = g.sway * 0.7;
      P.twist = noise(t * 0.6, 2) * 0.12;
      const open = mouthOpen(t, 'bear');
      const sing = singing(t, 'bear');
      P.face = { expr: 'sing', open, blink: Math.max(blink(t, 1), /song/.test(curWord(t, 'bear')) ? 0.95 : 0), lookX: 0.1 };
      // arms: one to the mic, one expressive
      P.armRSwing = 1.0 * sing + 0.1;
      P.armR = -0.2 * sing;
      P.armL = 0.25 + 0.55 * sing * (0.5 + 0.5 * Math.sin(beatAt(t) * Math.PI * 0.5));
      P.armLSwing = 0.3 * sing;
      P.bagSwing = Math.sin(beatAt(t) * Math.PI) * 0.12;
      singNotes(S, t, 'bear', [0.15, 2.25, 0.6]);
      // the pet peeks from behind the bush, then sneaks up behind the bear
      const Q = petIdle(S, t, 5);
      const peek = Math.max(win(t, 35.1, 35.95, 0.2, 0.18), win(t, 36.55, 37.3, 0.18, 0.2));
      const sneak0 = 37.45, sneak1 = 38.95;
      if (t < sneak0) {
        Q.x = lerp(HIDE_PET[0] + 0.15, 1.7, peek);
        Q.z = HIDE_PET[2];
        Q.bendX = -0.12 * peek;
        Q.face = { expr: 'normal', blink: blink(t, 5), lookX: -0.8, lookY: 0.3 };
      } else {
        const k = seg(t, sneak0, sneak1, E.inOutSine);
        Q.x = lerp(1.7, 0.45, k);
        Q.z = lerp(HIDE_PET[2], -1.25, k);
        Q.rotY = keys(t, [[sneak0, -0.6], [sneak1, -0.3]]);
        const sc = petScuttle(t, 0.8, 1);
        Object.assign(Q, { walk: sc.walk * (1 - clamp(invLerp(sneak1 - 0.2, sneak1, t))), stepPhase: sc.stepPhase });
        Q.y = sc.bob * 1.6;
        Q.squash = 1.06; // tiptoe
        Q.face = { expr: 'normal', blink: blink(t, 6), lookX: -0.5, lookY: 0.6 };
      }
      // camera: L1 front push-in, L2 3/4 wide showing the sneak
      if (t < 37.3) {
        camPath(S, t, [
          [tBar(16) - 0.5, [0.2, 1.9, 7.4], [0.35, 1.55, 0], 32],
          [37.3, [0.2, 1.95, 5.6], [0.35, 1.62, 0], 32, E.inOutSine],
        ]);
      } else {
        camPath(S, t, [
          [37.3, [-3.6, 1.55, 5.4], [0.55, 1.1, -0.3], 34],
          [39.25, [-3.1, 1.7, 4.8], [0.45, 1.15, -0.4], 33, E.inOutSine],
        ]);
      }
      motes(S, t, [0, 1.5, 0], 2.2, 30, 9, '#fff2c4', 0.06);
    },
  },

  // ============================================================ peek-a-boo: I'm scary of for you
  {
    name: 'peekaboo', start: 42.25, end: 45.62,
    update(t, S) {
      S.world.setMood('golden', 'day', 0.4);
      S.world.groundWand.visible = true;
      const P = bearIdle(S, t, 2);
      P.x = HIDE_BEAR[0]; P.z = HIDE_BEAR[2];
      P.rotY = 0.35;
      const bPeek = Math.max(win(t, 42.7, 43.2, 0.12, 0.12), win(t, 44.3, 44.72, 0.1, 0.08), win(t, 45.05, 45.62, 0.15, 0.1) * 0.85);
      P.squash = lerp(0.84, 1.26, bPeek) + tremble(t, 0.01, 1);
      P.face = { expr: 'scared', blink: 0, lookX: 0.9, lookY: -0.2, sweat: 1, gloom: 0.7, tremble: 1 };
      if (t > 44.3 && t < 44.8) P.face.expr = 'surprised';
      P.armL = 0.3; P.armR = 0.3; P.armLSwing = 0.9; P.armRSwing = 0.9;
      const Q = petIdle(S, t, 7);
      Q.x = HIDE_PET[0] - 0.05; Q.z = HIDE_PET[2] + 0.1;
      Q.rotY = -0.5;
      const pPeek = Math.max(win(t, 43.25, 43.85, 0.12, 0.15), win(t, 44.3, 44.72, 0.1, 0.08), win(t, 45.0, 45.62, 0.15, 0.1) * 0.8);
      Q.y = lerp(-0.25, 0.52, pPeek);
      Q.squash = 1 + tremble(t, 0.02, 3);
      Q.face = { expr: 'wide', blink: 0, lookX: -0.9, sweat: 1, tremble: 1, open: mouthOpen(t, 'pet') };
      if (mouthOpen(t, 'pet') > 0.05) Q.face.expr = 'sing';
      // sweat drops popping above the hiding spots
      for (const [i, p] of [[0, [-2.7, 2.3, -2.2]], [1, [2.4, 1.2, -0.8]]]) {
        const ph = (t * 1.3 + i * 0.5) % 1;
        S.spriteList.push({ tex: 'glow', x: p[0] + (i ? -0.2 : 0.25), y: p[1] + ph * 0.3, z: p[2], s: 0.12, a: (1 - ph) * 0.8, color: '#a8dcff' });
      }
      // camera: wide, with quick whip-zooms toward whoever peeks
      const foc = keys(t, [[42.25, 0], [42.62, -1, E.outCubic], [43.15, -1], [43.25, 1, E.outCubic], [43.9, 1], [44.25, 0, E.outCubic]]);
      const zoom = keys(t, [[42.25, 0], [42.62, 1, E.outCubic], [43.15, 1], [43.9, 1], [44.25, 0, E.outCubic]]);
      const tx = foc < 0 ? lerp(0, -2.6, -foc) : lerp(0, 2.3, foc);
      const ty = foc < 0 ? lerp(0.9, 1.75, -foc) : lerp(0.9, 0.55, foc);
      const tyB = foc < 0 ? lerp(1.0, 2.05, -foc) : lerp(1.0, 0.75, foc);
      S.cam([tx * 0.45 - 0.2, 1.65 - zoom * 0.1, 5.4 - zoom * 1.2], [tx * 0.95 - 0.2, tyB, -1.5], 42 - zoom * 12, 0, t > 44.3 && t < 44.8 ? 0.05 : 0, t);
    },
  },

  // ============================================================ I am afraid of: the bubble boop
  {
    name: 'boop', start: 47.62, end: tBar(24),
    update(t, S) {
      S.world.setMood('golden', 'day', 0.3);
      const pick = 48.6;
      S.world.groundWand.visible = t < pick;
      const Q = petIdle(S, t, 8);
      // step out timidly, pick up the wand
      const k1 = seg(t, 47.7, 48.55, E.inOutSine);
      Q.x = lerp(HIDE_PET[0] - 0.4, 1.35, k1);
      Q.z = lerp(HIDE_PET[2] + 0.3, 0.75, k1);
      Q.rotY = keys(t, [[47.62, -0.6], [48.55, -0.9], [49.0, -1.1]]);
      const sc = petScuttle(t, 0.7 * (1 - clamp(invLerp(48.4, 48.55, t))), 1.5);
      Object.assign(Q, { walk: sc.walk, stepPhase: sc.stepPhase });
      Q.squash = 1 + tremble(t, 0.02, 4) * (t < 48.6 ? 1 : 0.3);
      Q.face = { expr: 'sing', open: mouthOpen(t, 'pet'), blink: blink(t, 8), lookX: -0.6, tremble: t < 48.6 ? 1 : 0 };
      if (t > pick) {
        Q.hold = 'wand';
        Q.armR = keys(t, [[pick, 0], [pick + 0.2, 0.9, E.outBack], [48.95, 0.7], [49.15, 1.2], [49.35, 0.6], [49.55, 1.0]]);
      }
      // bear peeks over the bush as the bubble arrives
      const P = bearIdle(S, t, 2);
      P.x = HIDE_BEAR[0]; P.z = HIDE_BEAR[2]; P.rotY = 0.45;
      const peek = seg(t, 49.2, 49.6, E.outBack);
      P.squash = lerp(0.84, 1.3, peek);
      P.face = { expr: 'scared', lookX: 0.8, lookY: -0.3, sweat: 0.6 };
      const popT = 49.95;
      if (t > popT) P.face = { expr: 'surprised', lookX: 0 };
      if (t > popT + 0.3) P.face = { expr: 'cute', blush: 1 };
      if (t > popT) P.squash += impact(t, popT, 0.1, 5, 6);
      // the big bubble: forms on the wand, floats over to the bear's nose
      S.pet.apply(Q, t);
      const ring = t > pick ? S.pet.wand.ring.getWorldPosition(S.tmp).clone() : null;
      if (ring && t < popT + 0.15) {
        const form = seg(t, 48.95, 49.3, E.outBack);
        const fly = seg(t, 49.3, popT, E.inOutSine);
        const nose = [HIDE_BEAR[0] + 0.1, 1.725 * 1.3 + 0.02, HIDE_BEAR[2] + 0.24];
        const x = lerp(ring.x, nose[0], fly), z = lerp(ring.z, nose[2], fly);
        const y = lerp(ring.y + 0.15, nose[1], fly) + Math.sin(fly * Math.PI) * 0.6;
        const r = 0.3 * form;
        if (t < popT) S.bubbleList.push({ x, y, z, r, a: 1, phase: t * 0.3 });
        else S.bubbleList.push({ x, y, z, r: r * (1 + (t - popT) * 5), a: 1 - (t - popT) / 0.15 });
      }
      sparkle(S, t, popT, [HIDE_BEAR[0] + 0.1, 2.25, HIDE_BEAR[2] + 0.3], 18, 0.9, ['#fff3a0', '#ffffff', '#ffb3d1', '#b8f5e2'], 0.4, 12);
      if (t > popT + 0.2) heartStream(S, t, popT + 0.2, popT + 0.8, [HIDE_BEAR[0] + 0.1, 2.65, HIDE_BEAR[2] + 0.3], 5, 0.5);
      // camera
      if (t < 48.85) {
        camPath(S, t, [
          [47.62, [2.9, 0.75, 3.5], [1.6, 0.45, 0.3], 34],
          [48.85, [2.6, 0.8, 3.2], [1.35, 0.45, 0.6], 33, E.inOutSine],
        ]);
      } else {
        camPath(S, t, [
          [48.85, [0.9, 2.0, 5.6], [-0.6, 1.4, -0.9], 40],
          [49.5, [-0.2, 2.35, 3.2], [-1.6, 1.95, -1.6], 36, E.inOutSine],
          [popT - 0.05, [-1.1, 2.4, 1.2], [-2.55, 2.2, -2.4], 32, E.inOutSine],
          [tBar(24), [-1.3, 2.45, 0.9], [-2.6, 2.2, -2.5], 30, E.outCubic],
        ]);
      }
    },
  },

  // ============================================================ chorus 1: bear ears!
  {
    name: 'ears', start: tBar(24), end: tBar(26),
    update(t, S) {
      const m = seg(t, tBar(24), tBar(25) + 0.5, E.inOutSine);
      S.world.setMood('golden', 'party', m);
      const P = bearIdle(S, t, 3);
      // leap out from behind the bush
      const j0 = tBar(24) + 0.05;
      const j = jump(t, j0, 0.62, 1.25, 0.14);
      if (t < j0 - 0.14) P.squash = 1.3;
      const k = seg(t, j0, j0 + 0.62, E.linear);
      P.x = lerp(HIDE_BEAR[0], -0.5, k);
      P.z = lerp(HIDE_BEAR[2], 1.65, k);
      P.y = j.y;
      P.squash = j.squash * breathe(t);
      P.rotY = keys(t, [[j0, 0.4], [j0 + 0.62, 0.95], [52.5, 0.95], [52.8, 0.3, E.inOutCubic]]);
      P.face = { expr: t < j0 + 0.7 ? 'laugh' : 'happy', blink: blink(t, 3) };
      if (j.air) { P.armL = 1.8; P.armR = 1.8; P.legLSwing = 0.5; P.legRSwing = -0.3; }
      // put the bear-ears headband on the pet
      const give = win(t, 51.2, 52.45, 0.3, 0.3);
      P.armLSwing = lerp(P.armLSwing, 1.35, give);
      P.armRSwing = lerp(P.armRSwing, 1.35, give);
      P.armL = lerp(P.armL, -0.25, give);
      P.armR = lerp(P.armR, -0.25, give);
      P.bendZ = 0.12 * give;
      // pose on "we are bear": paws up like ears
      const pose = win(t, 53.0, tBar(26), 0.2, 0.15);
      P.armL = lerp(P.armL, 2.75, pose);
      P.armR = lerp(P.armR, 2.75, pose);
      P.armLSwing = lerp(P.armLSwing, 0.35, pose);
      P.armRSwing = lerp(P.armRSwing, 0.35, pose);
      const hop = jump(t, 53.62, 0.4, 0.3, 0.1);
      P.y += hop.y;
      P.squash *= hop.squash;
      if (t > 52.3) P.face = { expr: t > 53.0 ? 'laugh' : 'happy', blink: blink(t, 3), open: mouthOpen(t, 'bear') };

      const Q = petIdle(S, t, 9);
      Q.x = 0.75; Q.z = 1.9;
      Q.rotY = keys(t, [[tBar(24), -1.1], [51.0, -0.9], [52.5, -0.9], [52.8, -0.25, E.inOutCubic]]);
      const earsT = 52.03;
      Q.ears = t < earsT ? 0 : spring(t - earsT, 2.2, 6);
      Q.face = { expr: t > earsT ? 'happy' : 'wide', blink: blink(t, 9), open: mouthOpen(t, 'pet'), blush: t > earsT ? 1 : 0.3 };
      Q.squash *= 1 + wobble(t - earsT, 4, 5) * 0.12;
      const qh = jump(t, 53.62, 0.4, 0.35, 0.1);
      Q.y = qh.y;
      Q.squash *= qh.squash;
      if (pose > 0) { Q.armL = 1.2 * pose; Q.armR = 1.2 * pose; }
      sparkle(S, t, earsT, [0.75, 0.95, 1.95], 16, 0.7, undefined, 0.3, 21);
      sparkle(S, t, 53.71, [0.15, 1.8, 1.8], 20, 1.2, ['#fff3a0', '#ffffff', '#ffb3d1', '#b8f5e2'], 0.42, 22);
      heartStream(S, t, 53.71, 54.6, [0.15, 1.5, 1.8], 7, 1.6, 3);
      S.bursts.push({ t0: 53.71, x: 0.15, y: 1.2, z: 1.9, n: 110, power: 2.6, seed: 1 });
      // camera
      camPath(S, t, [
        [tBar(24), [-1.3, 2.45, 0.9], [-2.6, 2.2, -2.5], 30],
        [tBar(24) + 0.55, [-0.4, 1.7, 6.6], [-0.7, 1.25, 0.6], 38, E.inOutCubic],
        [51.6, [0.15, 1.35, 5.6], [0.15, 1.0, 1.7], 36, E.inOutCubic],
        [53.0, [0.35, 1.3, 5.3], [0.2, 1.1, 1.7], 36, E.linear],
        [tBar(26), [0.2, 1.55, 6.3], [0.2, 1.25, 1.7], 38, E.outCubic],
      ], t > 53.71 && t < 54.0 ? 0.04 : 0);
      motes(S, t, [0, 1, 0.5], 3, 30, 13, '#ffe7f3', 0.07);
    },
  },

  // ============================================================ chorus 2: dance together
  {
    name: 'dance', start: tBar(26), end: tBar(28),
    update(t, S) {
      S.world.setMood('party');
      const bPoses = [
        { x: -0.72, bendX: -0.1, armL: 1.0, armR: 0.25, armLSwing: 0.4, armRSwing: -0.2, legL: 0.08, legR: 0, squash: 0.95, twist: 0.15 },
        { x: -0.48, bendX: 0.1, armL: 0.25, armR: 1.0, armLSwing: -0.2, armRSwing: 0.4, legL: 0, legR: 0.08, squash: 0.95, twist: -0.15 },
        { x: -0.72, bendX: -0.1, armL: 1.0, armR: 0.25, armLSwing: 0.4, armRSwing: -0.2, legL: 0.08, legR: 0, squash: 0.95, twist: 0.15 },
        { x: -0.6, bendX: 0, armL: 2.7, armR: 2.7, armLSwing: 0.2, armRSwing: 0.2, legL: 0, legR: 0, squash: 1.08, twist: 0 },
      ];
      const qPoses = [
        { x: 0.55, bendX: 0.12, armL: 0.9, armR: -0.2, tiltZ: -0.1, squash: 0.92, twist: -0.2 },
        { x: 0.85, bendX: -0.12, armL: -0.2, armR: 0.9, tiltZ: 0.1, squash: 0.92, twist: 0.2 },
        { x: 0.55, bendX: 0.12, armL: 0.9, armR: -0.2, tiltZ: -0.1, squash: 0.92, twist: -0.2 },
        { x: 0.7, bendX: 0, armL: 1.3, armR: 1.3, tiltZ: 0, squash: 1.1, twist: 0 },
      ];
      const b0 = Math.round(beatAt(tBar(26)));
      const P = bearIdle(S, t, 4);
      Object.assign(P, beatPoses(t, bPoses, b0));
      P.z = 1.75;
      P.rotY = 0.12;
      const g = groove(t, 1);
      P.y = g.bob;
      P.squash *= g.squash;
      P.face = { expr: 'happy', open: mouthOpen(t, 'bear'), blink: blink(t, 4) };
      const Q = petIdle(S, t, 10);
      Object.assign(Q, beatPoses(t, qPoses, b0));
      Q.z = 1.9;
      Q.rotY = -0.15;
      Q.ears = 1;
      const h = beatHop(t, 0.12);
      Q.y = h.y;
      Q.squash *= h.squash;
      Q.face = { expr: 'happy', open: mouthOpen(t, 'pet'), blink: blink(t, 10) };
      // "cute" pose: paws to cheeks & head tilt
      const cute = win(t, 56.45, 57.25, 0.12, 0.2);
      if (cute > 0) {
        P.armL = lerp(P.armL, -0.35, cute); P.armR = lerp(P.armR, -0.35, cute);
        P.armLSwing = lerp(P.armLSwing, 2.1, cute); P.armRSwing = lerp(P.armRSwing, 2.1, cute);
        P.bendX = lerp(P.bendX, 0.12, cute);
        P.face.expr = 'cute';
        Q.tiltZ = lerp(Q.tiltZ || 0, -0.25, cute);
        Q.face.expr = 'cute';
      }
      // "bear": jump together with arms up
      const jb = 57.9;
      const jj = jump(t, jb, 0.55, 0.55, 0.12);
      const jq = jump(t, jb + 0.03, 0.55, 0.7, 0.12);
      if (t > jb - 0.15 && t < jb + 0.9) {
        P.y += jj.y; P.squash *= jj.squash;
        Q.y += jq.y; Q.squash *= jq.squash;
        if (jj.air) { P.armL = 2.8; P.armR = 2.8; Q.armL = 1.3; Q.armR = 1.3; P.face.expr = 'laugh'; }
      }
      S.bursts.push({ t0: jb + 0.2, x: 0, y: 1.6, z: 1.9, n: 140, power: 2.8, seed: 2 });
      sparkle(S, t, jb + 0.2, [0, 1.9, 1.9], 18, 1.3, ['#fff3a0', '#ffffff', '#ffb3d1', '#b8f5e2'], 0.42, 31);
      heartStream(S, t, tBar(26), tBar(28), [0, 1.2, 1.5], 3, 2.6, 5);
      // bubbles drifting through
      S.bubbleList.push(...bubbleStream(t, {
        t0: tBar(26) - 3, t1: tBar(28), rate: 4, seed: 41, life: 5,
        origin: (ts, i) => [-3 + hash(i) * 6, 0.2 + hash(i * 2) * 0.6, -1.5 + hash(i * 3)], vel: [0.1, 0.45, 0.12], spread: 0.3, size: [0.07, 0.17],
      }));
      // camera orbit
      const k = seg(t, tBar(26), tBar(28), E.inOutSine);
      const ang = lerp(-0.55, 0.55, k);
      const R = 5.6 - kick(t) * 0.06;
      S.cam([Math.sin(ang) * R, 1.35 + k * 0.45, 1.8 + Math.cos(ang) * R], [0, 1.2, 1.8], 38, 0, t > jb + 0.15 && t < jb + 0.45 ? 0.03 : 0, t);
      motes(S, t, [0, 1, 0.8], 3.5, 34, 17, '#ffe7f3', 0.07);
    },
  },

  // ============================================================ chorus 4: the big lift
  {
    name: 'lift', start: tBar(30) - 0.3, end: tBar(32),
    update(t, S) {
      S.world.setMood('party', 'golden', seg(t, 66.0, tBar(32), E.linear) * 0.6);
      const P = bearIdle(S, t, 5);
      P.z = 1.65;
      const Q = petIdle(S, t, 11);
      Q.ears = 1;
      // pick up (63.0-64.3), lift overhead (64.45-64.95), spin (65.65-66.3), toss (66.35) and land on head
      const pickT = 63.3, liftT = 64.45, spinT = 65.62, tossT = 66.33, landT = 67.1;
      const lift = seg(t, liftT - 0.05, liftT + 0.45, E.outBack);
      const hold = seg(t, pickT, pickT + 0.7, E.inOutCubic);
      P.rotY = keys(t, [[pickT - 0.3, 0.6], [pickT + 0.2, 0.0, E.inOutCubic], [spinT, 0], [tossT - 0.05, TAU, E.inOutCubic]]);
      // arms: forward to hold, then up
      P.armLSwing = lerp(0, 1.45, hold) * (1 - lift) + lift * 0.15;
      P.armRSwing = P.armLSwing;
      P.armL = lerp(0, -0.2, hold) * (1 - lift) + lift * 2.85;
      P.armR = P.armL;
      P.face = { expr: 'happy', open: mouthOpen(t, 'bear'), blink: blink(t, 5) };
      const g = groove(t, 0.6);
      P.squash *= g.squash;
      // pet position: beside -> in arms -> overhead -> tossed -> on the head
      const chest = [0, 1.02, P.z + 0.55];
      const over = [0, 2.1, P.z + 0.12];
      let qx = lerp(0.9, chest[0], hold), qy = lerp(0, chest[1], hold), qz = lerp(P.z + 0.3, chest[2], hold);
      qx = lerp(qx, over[0], lift); qy = lerp(qy, over[1], lift); qz = lerp(qz, over[2], lift);
      Q.rotY = keys(t, [[pickT - 0.3, -0.7], [pickT + 0.4, 0, E.inOutCubic], [spinT, 0], [tossT - 0.05, TAU, E.inOutCubic]]);
      if (hold > 0 && hold < 1) Q.legLift = 0.03;
      // spin: pet stays overhead (rotates with the bear)
      const bj = jump(t, tossT, 0.7, 0.45, 0.12);
      if (t > tossT - 0.15) { P.y = bj.y; P.squash *= bj.squash; }
      if (t > tossT) {
        // slow-motion toss: ease out near the apex
        const k = clamp((t - tossT) / (landT - tossT));
        const up = Math.sin(E.outSine(k) * Math.PI);
        qy = lerp(over[1], 2.02, E.inOutSine(k)) + up * 1.25;
        qz = lerp(over[2], P.z - 0.02, k);
        Q.rotY = TAU + E.inOutCubic(k) * TAU;
        P.armL = lerp(2.85, 2.2, E.outCubic(k)) - (k > 0.85 ? (k - 0.85) * 8 : 0);
        P.armR = P.armL;
        if (t > landT) { qy = 2.02 + P.y; P.armL = 0.9 + Math.sin(t * 8) * 0.3; P.armR = 2.4 + Math.sin(t * 8 + 1) * 0.3; }
      }
      Q.x = qx; Q.y = qy; Q.z = qz;
      Q.groundY = 0;
      Q.face = { expr: 'happy', open: mouthOpen(t, 'pet'), blink: 0, blush: 1 };
      if (lift > 0.5) { Q.armL = 1.25 + Math.sin(t * 10) * 0.2; Q.armR = 1.25 + Math.sin(t * 10 + 1) * 0.2; }
      if (t > landT) Q.squash *= 1 + wobble(t - landT, 4, 5) * 0.2;
      // effects
      sparkle(S, t, liftT + 0.15, [0, 2.5, 1.75], 18, 1.1, undefined, 0.38, 41);
      sparkle(S, t, tossT + 0.1, [0, 3.0, 1.75], 24, 1.6, ['#fff3a0', '#ffffff', '#ffb3d1', '#b8f5e2'], 0.5, 42);
      S.bursts.push({ t0: tossT + 0.05, x: 0, y: 2.4, z: 1.85, n: 160, power: 3.2, seed: 3 });
      S.bursts.push({ t0: liftT + 0.1, x: 0, y: 2.2, z: 1.85, n: 60, power: 2.0, seed: 4 });
      heartStream(S, t, liftT, tBar(32), [0, 2.0, 1.5], 4, 2.2, 7);
      // heart made of bubbles behind them
      const hk = seg(t, tossT, tossT + 0.6, E.outBack);
      if (hk > 0) {
        for (let i = 0; i < 26; i++) {
          const a = (i / 26) * TAU;
          const hx = 16 * Math.pow(Math.sin(a), 3);
          const hy = 13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a);
          const f = 0.085 * hk;
          S.bubbleList.push({ x: hx * f, y: 2.3 + hy * f + Math.sin(t * 2 + i) * 0.03, z: 0.2, r: 0.13 + 0.03 * Math.sin(i), a: 1, phase: i * 0.1 + t * 0.2 });
        }
      }
      // camera: low hero angle, crane up on the toss
      camPath(S, t, [
        [tBar(30) - 0.3, [1.7, 1.35, 6.4], [0.3, 1.15, 1.65], 36],
        [liftT, [1.0, 1.1, 6.3], [0.05, 1.55, 1.65], 38, E.inOutSine],
        [tossT, [0.6, 1.2, 6.7], [0, 2.05, 1.6], 40, E.inOutSine],
        [tossT + 0.7, [0.3, 1.9, 7.4], [0, 2.4, 1.5], 42, E.outCubic],
        [tBar(32), [0.2, 2.1, 7.6], [0, 2.2, 1.5], 42, E.linear],
      ], t > tossT && t < tossT + 0.3 ? 0.035 : 0);
      motes(S, t, [0, 1.5, 0.5], 3.5, 34, 19, '#ffe7f3', 0.07);
    },
  },

  // ============================================================ outro: sunset bubbles
  {
    name: 'sunset', start: tBar(32), end: tBar(36) + 0.8,
    update(t, S) {
      const k = seg(t, tBar(32), tBar(32) + 1.5, E.outCubic);
      S.world.setMood('party', 'dusk', k);
      S.world.stump.visible = false;
      S.bear.def.u.uRimStrength.value = lerp(0.18, 1.35, k);
      S.pet.def.u.uRimStrength.value = lerp(0.22, 1.25, k);
      S.bear.def.u.uRim.value.set(0xffd2b0);
      S.pet.def.u.uRim.value.set(0xffc9a8);
      const P = bearIdle(S, t, 6);
      const Q = petIdle(S, t, 12);
      const zc = -8.5;
      const g = groove(t, 0.5);
      // sit side by side facing the glowing horizon (-z), swaying to the beat
      P.x = -0.42; P.z = zc; P.rotY = Math.PI; P.y = -0.22;
      P.legLSwing = 1.35; P.legRSwing = 1.35;
      P.bendZ = -0.03;
      P.bendX = g.sway * 0.8;
      P.hold = 'wand';
      P.armRSwing = 1.35 + Math.sin(t * 1.3) * 0.05; P.armR = -0.35;
      P.armL = 0.25;
      P.face = { expr: 'happy', blink: blink(t, 6) };
      Q.x = 0.58; Q.z = zc + 0.1; Q.rotY = Math.PI; Q.y = -0.06 + beatHop(t, 0.05, 2).y;
      Q.ears = 1;
      Q.bendX = -g.sway * 0.8;
      // the pet swats at bubbles now and then
      Q.armL = 0.3 + Math.max(0, Math.sin((t - tBar(32)) * 5.4)) * 0.9 * win(t, tBar(32) + 1.2, tBar(34) - 0.2, 0.3, 0.3);
      // lean on the bear, then look at each other
      const lean = seg(t, tBar(34), tBar(34) + 0.8, E.inOutSine);
      Q.x -= lean * 0.2;
      Q.tiltZ = lean * 0.24;
      P.tiltZ = -lean * 0.05;
      const look = seg(t, tBar(35), tBar(35) + 0.8, E.inOutCubic);
      P.twist = look * 0.6;
      Q.twist = -look * 0.65;
      if (look > 0.5) { P.face = { expr: 'laugh', blink: 0, blush: 1 }; Q.face = { expr: 'happy', blush: 1 }; }
      heartStream(S, t, tBar(34) + 0.4, tBar(34) + 0.55, [0.08, 1.75, zc], 10, 0.25, 9);
      heartStream(S, t, tBar(35) + 0.7, tBar(35) + 1.1, [0.08, 1.9, zc], 10, 0.45, 10);
      // glowing bubbles rising toward the sky
      S.bear.apply(P, t);
      const ring = S.bear.wand.ring.getWorldPosition(S.tmp).clone();
      S.bubbleList.push(...bubbleStream(t, {
        t0: tBar(32) - 1, t1: tBar(36) + 1, rate: 5, seed: 61, life: 7,
        origin: () => [ring.x, ring.y, ring.z], vel: [0.05, 0.45, -0.7], spread: 0.55, size: [0.09, 0.22],
      }));
      // fireflies
      motes(S, t, [0, 0.6, zc + 1], 3.2, 36, 23, '#ffe9b0', 0.06);
      motes(S, t, [0, 3.5, zc - 6], 9, 30, 29, '#fff3dd', 0.12);
      camPath(S, t, [
        [tBar(32), [0.9, 0.6, zc + 5.6], [0.05, 2.3, zc - 10], 36],
        [tBar(35), [0.3, 0.75, zc + 4.4], [0.05, 2.2, zc - 10], 34, E.inOutSine],
        [tBar(36) + 0.8, [0.1, 1.05, zc + 4.9], [0.05, 2.5, zc - 10], 35, E.inOutSine],
      ]);
      S.world.skyU.uGlowDir.value.set(0.02, 0.1, -1);
    },
  },
];

function win(t, a, b, fin, fout) {
  const i = fin > 0 ? E.smooth(clamp((t - a) / fin)) : t >= a ? 1 : 0;
  const o = fout > 0 ? E.smooth(clamp((b - t) / fout)) : t < b ? 1 : 0;
  return Math.min(i, o);
}

function curWord(t, who) {
  for (const l of LINES) {
    if (l.who !== who && l.who !== 'both') continue;
    for (const w of l.words) if (t >= w.start && t < w.end) return w.text;
  }
  return '';
}
