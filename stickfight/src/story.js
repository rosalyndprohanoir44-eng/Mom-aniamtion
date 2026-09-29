// "Iron and Ash": the whole film, choreographed to the song's beat grid
// (110 BPM; beat k at b(k) = 0.1799 + 0.54547 k seconds).
//
//  0 - 5.6   title, the girl kneels by a red flower on a white plain
//  5.6 - 17  the horde walks in; one tries to stomp the flower (palm strike)
// 17 - 37   first waves (martial arts, Wind Cutter)
// 37 - 63   more enemies, Whirlwind Kick, the iron-club brute
// 63 - 74   peak: clash, disarm, minions; a rock flies at the flower
// 74 - 81   breakdown: she shields the flower (tender beat)
// 81 - 97   red-eyed return: aerial combo, the big crater, Crimson Storm
// 97 - 110  ash, final blow, back to the flower, the end
import { Story, b } from './director.js';
import { E } from './util.js';

const S = new Story({ duration: 110.2 });
const B = b;
const G = (t, p, o = {}) => S.g(t, p, o);
const PIPE = { len: 0.6, back: 0.1, w: 0.035, grip: 0.3 };
const CLUB = { len: 1.15, back: 0.16, w: 0.055, head: 0.36, grip: 0.3 };

function spark(t, at, o = {}) {
  S.spark(t, () => {
    const p = Array.isArray(at) ? at : S.gP(t, at);
    return { x: p[0] + (o.dx ?? 0), y: p[1] + (o.dy ?? 0), s: o.s ?? 0.2, kind: o.kind ?? 'ink', ang: o.ang ?? 0 };
  });
}
/** land a blow on foe f at song time t */
function hit(t, f, v, o = {}) {
  f.knock(t, v);
  spark(t, o.at ?? 'handF', o);
  if (o.stop) S.stop(t, o.stop[0], o.stop[1]);
  if (o.shake) S.shake(t, o.shake, o.shakeDur ?? 0.3);
  S.sound(t, o.sfx ?? 'punch', o.gain ?? 1);
}
const man = (o) => S.foe(o);
/** x (or height) of her fist/foot at song time t, plus an offset: keeps blows in contact */
const ax = (t, key, dx) => () => S.gP(t, key)[0] + dx;
const ay = (t, key, dy, scale = 1) => () => (S.gP(t, key)[1] + dy) / scale;
const plus = (f, d) => () => f() + d;
const FOES = [];
const mk = (o) => { const f = man(o); FOES.push(f); return f; };

// =================================================================== 0: title
S.title = { t0: B(0), tStamp: B(2), tSub: 1.6, tOut: 2.3, kanji: '鉄と灰', en: 'IRON AND ASH' };
S.sound(B(2), 'stamp', 0.9);
S.poster = 1.9;

G(-1, 'kneelFlower', { x: -0.4, dir: 1 });
G(2.5, 'kneelFlower', { x: -0.4, dir: 1 });
G(3.4, 'kneeTouch', { x: -0.4, dir: 1 });
G(4.35, 'kneeTouch', { x: -0.4, dir: 1, dhead: 0.06 });
G(B(8) + 0.1, 'lookUp', { x: -0.4, dir: 1, ease: E.outCubic });
S.face(-1, 'soft');
S.face(B(8) + 0.05, 'wide');
S.face(5.2, 'angry');

S.cam(0, { x: 0, y: 1.05, z: 190 });
S.cam(2.3, { x: -0.05, y: 1.0, z: 200 });
S.cam(5.5, { x: -0.18, y: 0.5, z: 540 }, E.inOutCubic);
S.wisp(0.3, { x: -3.2, y: 1.5, ang: 0.04, len: 1.7, w: 0.028, life: 2.2 });
S.wisp(2.7, { x: -1.3, y: 0.3, ang: 0.08, len: 0.9, w: 0.02, life: 1.8 });
S.wisp(3.9, { x: -1.1, y: 0.95, ang: -0.05, len: 1.0, w: 0.02, life: 1.6 });
S.sound(2.3, 'windSoft', 0.6);

// =================================================================== 1: the horde
// right group (R1 is the cocky one)
const RX = [2.35, 2.95, 3.55, 4.15, 4.75, 5.35, 5.95];
const LX = [-2.4, -3.05, -3.7, -4.35, -5.0];
const R = RX.map((x, i) => mk({ x: x + 4.6, dir: -1, name: 'R' + (i + 1) }));
const L = LX.map((x, i) => mk({ x: x - 4.6, dir: 1, name: 'L' + (i + 1) }));
R.forEach((f, i) => {
  const arr = 8.2 + i * 0.16;
  f.at(4.7, 'eStand', { x: RX[i] + 4.6, dir: -1 }).walk(arr, RX[i], { menace: 1 }).at(arr + 0.3, 'eStand', { x: RX[i], dir: -1, bob: 0.014 });
});
L.forEach((f, i) => {
  const arr = 8.35 + i * 0.18;
  f.at(4.7, 'eStand', { x: LX[i] - 4.6, dir: 1 }).walk(arr, LX[i], { menace: 1 }).at(arr + 0.3, 'eStand', { x: LX[i], dir: 1, bob: 0.014 });
});
// everyone laughs at her threat, flinches at the palm strike, then squares up
const crowdReact = (f, x, dir, until) => {
  f.at(13.25, 'eStand', { x, dir, bob: 0.014 }).at(13.5, 'eLaugh', { x, dir, bob: 0.03 }).at(14.3, 'eLaugh', { x, dir, bob: 0.03 })
    .at(14.6, 'eStand', { x, dir }).at(15.62, 'eStand', { x, dir }).at(15.85, 'eScared', { x: x + 0.12 * -dir, dir, ease: E.outCubic })
    .at(16.6, 'eScared', { x: x + 0.12 * -dir, dir }).at(17.0, 'eGuard', { x: x + 0.05 * -dir, dir, bob: 0.018 });
  if (until) f.at(until, 'eGuard', { x: x + 0.05 * -dir, dir, bob: 0.018 });
};

// R1: walks up to the flower and tries to stomp it
const R1 = R[0];
R1.at(11.63, 'eStand', { x: RX[0], dir: -1 }).walk(13.27, 0.36, { menace: 0.4 })
  .at(13.5, 'eLaugh', { x: 0.36, dir: -1, bob: 0.03 }).at(14.2, 'eLaugh', { x: 0.36, dir: -1, bob: 0.03 })
  .at(B(26) + 0.15, 'eStomp', { x: 0.34, dir: -1, lF: [1.3, 0.55], lean: -0.05, ease: E.inOutCubic })
  .at(15.25, 'eStomp', { x: 0.32, dir: -1, lF: [1.1, 0.7], lean: 0.08, ease: E.inOutSine })
  .at(B(28), 'eStomp', { x: ax(B(28), 'handF', 0.1), dir: -1, lF: [1.08, 0.72], lean: 0.1 });
hit(B(28), R1, { vx: 9.5, vy: 3.2, spin: -8 }, { at: 'handF', kind: 'wind', s: 0.32, stop: [0.1, 0.12], shake: 20, sfx: 'palm' });
S.impact(B(28));
S.burst(B(28), () => { const p = S.gP(B(28), 'handF'); return { x: p[0], y: p[1], R: 0.9, flat: 1, life: 0.35, w: 0.05 }; });
S.wisps(B(28), () => { const p = S.gP(B(28), 'handF'); return { x: p[0] + 0.3, y: p[1], ang: 0.05, n: 3, len: 1.1, spreadY: 0.35 }; });
S.gust(B(28), { x: 0.3, y: 0.7, dir: 1, strength: 5, radius: 2.5, dur: 0.9 });

// girl: stands, arms crossed, close-up, points, dashes
G(5.75, 'lookUp', { x: -0.4, dir: 1 });
G(6.9, 'stand', { x: -0.45, dir: 1 });
G(7.35, 'armsCrossed', { x: -0.45, dir: 1 });
G(8.925, 'armsCrossed', { x: -0.45, dir: 1 });
G(8.935, 'frontArmsCrossed', { x: -0.45, dir: 1 });
G(11.325, 'frontArmsCrossed', { x: -0.45, dir: 1, dhead: 0.04 });
G(11.335, 'armsCrossed', { x: -0.45, dir: 1 });
G(12.55, 'armsCrossed', { x: -0.45, dir: 1 });
G(12.85, 'point', { x: -0.45, dir: 1, ease: E.outBack });
G(13.9, 'point', { x: -0.45, dir: 1 });
G(14.3, 'armsCrossed', { x: -0.45, dir: 1 });
G(15.2, 'armsCrossed', { x: -0.45, dir: 1, dhead: 0.15 });
G(15.34, 'dash', { x: -0.36, dir: 1, ease: E.inCubic });
G(B(28), 'palm', { x: -0.22, dir: 1, ease: E.strike });
G(15.75, 'palm', { x: -0.2, dir: 1 });
G(16.2, 'guard', { x: 0.5, dir: 1, jump: 0.12 });
S.ghost(15.22, 15.5);
S.face(9.2, 'angry', 0);
S.face(12.1, 'angry');
S.face(15.2, 'red');
S.face(15.8, 'angry');
S.say(7.3, 9.1, '……何よ、あんたたち。', '…What do you want, you lot?');
S.say(9.5, 11.3, 'ふん。雑魚がぞろぞろと。', 'Hmph. Small fry, crawling out in droves.');
S.say(12.2, 14.3, 'この花、踏んだら……許さないんだから！', 'Step on this flower and… I will never forgive you!');
S.say(15.85, 16.95, '言ったでしょ。踏むなって。', 'I told you. Don’t step on it.');
S.say(17.05, 18.3, 'かかってきなさいよ！', 'Come at me, then!');

S.cut(B(10), { x: 0, y: 1.15, z: 150 });
S.cam(6.8, { x: 0, y: 1.1, z: 160 });
S.cam(7.7, { x: -0.1, y: 0.78, z: 300 });
S.cam(8.9, { x: -0.1, y: 0.8, z: 310 });
S.cut(8.935, { x: -0.45, y: 0.74, z: 700 });
S.cam(11.3, { x: -0.45, y: 0.76, z: 730 });
S.cut(11.335, { x: 0.7, y: 0.85, z: 280 });
S.cam(13.3, { x: 0.2, y: 0.72, z: 320 });
S.cam(14.36, { x: 0.15, y: 0.7, z: 330 });
S.cam(15.3, { x: 0.12, y: 0.46, z: 560 }, E.inOutCubic);
S.cam(B(28), { x: 0.1, y: 0.46, z: 560 });
S.cam(15.9, { x: 1.4, y: 0.95, z: 230 }, E.outCubic);
S.cam(16.9, { x: 1.0, y: 0.88, z: 280 });
S.cam(19.0, { x: 0.95, y: 0.88, z: 310 });
S.cam(20.6, { x: 0.8, y: 0.88, z: 300 });
S.cam(21.5, { x: -0.8, y: 0.9, z: 300 });
S.cam(22.6, { x: -1.0, y: 1.0, z: 290 });
S.cam(24.0, { x: -0.9, y: 0.88, z: 310 });
S.cam(25.9, { x: -0.9, y: 0.88, z: 300 });

// crowd reactions
R.slice(1).forEach((f, i) => crowdReact(f, RX[i + 1], -1));
L.forEach((f, i) => crowdReact(f, LX[i], 1));

// =================================================================== 2: first waves
// --- wave A (right side)
const [R2, R3, R4, R5, R6, R7] = R.slice(1);
const R2x = ax(B(33), 'handF', 0.19);
R2.at(16.95, 'eGuard', { x: RX[1] - 0.05, dir: -1 }).run(17.48, R2x).at(17.52, 'eWindup', { x: R2x, dir: -1 })
  .at(B(32), 'ePunch', { x: R2x, dir: -1, ease: E.outExpo }).at(B(33), 'ePunch', { x: R2x, dir: -1, dlean: -0.1 });
const R3x = ax(B(35), 'footF', 0.1);
R3.at(17.7, 'eGuard', { x: RX[2] - 0.05, dir: -1 }).run(18.5, R3x).at(18.55, 'eWindup', { x: R3x, dir: -1 })
  .at(B(34), 'ePunch', { x: R3x, dir: -1, ease: E.outExpo }).at(19.0, 'eGuard', { x: R3x, dir: -1 }).at(B(35), 'eGuard', { x: R3x, dir: -1 });
const R4x = ax(B(37), 'footF', 0.1);
R4.at(18.9, 'eGuard', { x: RX[3] - 0.05, dir: -1 }).run(19.62, R4x).at(19.66, 'eWindup', { x: R4x, dir: -1 })
  .at(B(36), 'ePunch', { x: R4x, dir: -1, ease: E.outExpo }).at(20.1, 'eGuard', { x: R4x, dir: -1 }).at(B(37), 'eGuard', { x: R4x, dir: -1 });
G(17.35, 'guard', { x: 0.5, dir: 1 });
G(17.56, 'guardLow', { x: 0.46, dir: 1, dh: -0.1, ease: E.outCubic });
G(17.95, 'uppercutLow', { x: 0.5, dir: 1 });
G(B(33), 'uppercutHit', { x: 0.56, dir: 1, ease: E.strike });
G(18.32, 'uppercut', { x: 0.6, dir: 1, ease: E.outCubic });
G(18.6, 'guard', { x: 0.62, dir: 1 });
hit(B(33), R2, { vx: 2.0, vy: 6.8, spin: -9 }, { at: 'handF', s: 0.24, stop: [0.07, 0.09], shake: 8, sfx: 'punchHeavy' });
G(18.66, 'blockX', { x: 0.6, dir: 1, ease: E.outCubic });
spark(B(34), 'handF', { s: 0.12 });
S.sound(B(34), 'block', 0.8);
G(18.95, 'blockX', { x: 0.6, dir: 1 });
G(19.1, 'kickChamber', { x: 0.62, dir: 1 });
G(B(35), 'kickSide', { x: 0.66, dir: 1, ease: E.strike });
G(19.5, 'kickSide', { x: 0.66, dir: 1 });
hit(B(35), R3, { vx: 8, vy: 2.8, spin: -6 }, { at: 'footF', s: 0.24, stop: [0.06, 0.08], shake: 8, sfx: 'kick' });
G(19.72, 'guard', { x: 0.62, dir: 1 });
G(B(36) + 0.02, 'relaxed', { x: 0.52, dir: 1, dlean: -0.3, dhead: -0.2, ease: E.outCubic });
G(20.12, 'kickChamber', { x: 0.56, dir: 1 });
G(B(37), 'roundhouse', { x: 0.62, dir: 1, ease: E.strike });
G(20.65, 'roundhouse', { x: 0.62, dir: 1 });
hit(B(37), R4, { vx: 7.5, vy: 4.2, spin: -8 }, { at: 'footF', s: 0.26, stop: [0.07, 0.09], shake: 10, sfx: 'kick' });
S.sound(B(36), 'whoosh', 0.6);
G(20.85, 'guard', { x: 0.6, dir: 1 });

// --- wave B (left side): she leaps back over the flower
const [L1, L2, L3, L4, L5] = L;
G(21.0, 'guardLow', { x: 0.62, dir: 1, dh: -0.06 });
G(21.4, 'guard', { x: -0.55, dir: -1, jump: 0.35, ease: E.inOutSine });
S.sound(21.05, 'whoosh', 0.5);
const L1x = ax(B(40), 'handF', -0.1);
L1.at(20.45, 'eGuard', { x: LX[0] + 0.05, dir: 1 }).run(21.3, L1x).at(21.33, 'eWindup', { x: L1x, dir: 1 })
  .at(B(39), 'ePunch', { x: L1x, dir: 1, ease: E.outExpo }).at(21.8, 'eFlinch', { x: L1x, dir: 1 }).at(B(40), 'eFlinch', { x: L1x, dir: 1 });
G(B(39) - 0.06, 'blockX', { x: -0.55, dir: -1, ease: E.outCubic });
spark(B(39), 'handF', { s: 0.12 });
S.sound(B(39), 'block', 0.8);
G(21.82, 'guard', { x: -0.55, dir: -1 });
G(B(40), 'palm', { x: -0.58, dir: -1, ease: E.strike });
G(22.2, 'palm', { x: -0.58, dir: -1 });
hit(B(40), L1, { vx: -8, vy: 3.2, spin: -7 }, { at: 'handF', kind: 'wind', s: 0.25, stop: [0.06, 0.08], shake: 9, sfx: 'palm' });
// L2 leaps in; she meets him in the air and smashes him into the ground
L2.at(20.6, 'eGuard', { x: LX[1] + 0.05, dir: 1 }).run(21.9, -1.9)
  .at(22.05, 'eKnee', { x: -1.85, dir: 1 })
  .at(B(41), 'eLeap', { x: ax(B(41), 'footF', -0.12), dir: 1, h: ay(B(41), 'footF', -0.28), ease: E.outCubic });
G(22.28, 'landCrouch', { x: -0.62, dir: -1 });
G(22.42, 'jumpRise', { x: -0.66, dir: -1, h: 0.75, ease: E.outCubic });
G(B(41), 'roundhouse', { x: -0.72, dir: -1, h: 0.95, fB: null, lB: [-0.35, 0.8], ease: E.strike });
G(22.75, 'roundhouse', { x: -0.72, dir: -1, h: 0.9, fB: null, lB: [-0.35, 0.8] });
G(23.02, 'landCrouch', { x: -0.7, dir: -1, ease: E.inQuad });
G(23.45, 'guard', { x: -0.62, dir: -1 });
hit(B(41), L2, { vx: -2.1, vy: 0.4, spin: -10, crater: { R: 0.55, D: 0.14, debris: 18 } }, { at: 'footF', s: 0.3, stop: [0.08, 0.1], shake: 12, sfx: 'kickHeavy' });
S.dust(23.02, { x: -0.7, n: 4, r: 0.06, speed: 0.5 });

// L3 punches, she sweeps him; L4 gets a flip and a back kick
const L3x = ax(B(44) + 0.06, 'footF', -0.1);
L3.at(22.9, 'eGuard', { x: LX[2] + 0.05, dir: 1 }).run(23.95, L3x).at(24.0, 'eWindup', { x: L3x, dir: 1 })
  .at(B(44), 'ePunch', { x: L3x, dir: 1, ease: E.outExpo });
G(24.05, 'guardLow', { x: -0.6, dir: -1, dh: -0.1 });
G(B(44) + 0.04, 'sweep', { x: -0.66, dir: -1, ease: E.strike });
G(24.6, 'sweep', { x: -0.66, dir: -1 });
hit(B(44) + 0.06, L3, { vx: -1.0, vy: 2.6, spin: 8 }, { at: 'footF', s: 0.18, sfx: 'kick', gain: 0.8 });
G(24.95, 'guard', { x: -0.64, dir: -1 });
const L4x = ax(B(47), 'footF', -0.1);
L4.at(23.6, 'eGuard', { x: LX[3] + 0.05, dir: 1 }).run(25.0, L4x).at(25.1, 'eWindup', { x: L4x, dir: 1 })
  .at(B(46), 'ePunch', { x: L4x, dir: 1, ease: E.outExpo }).at(25.5, 'eFlinch', { x: L4x, dir: 1 }).at(B(47), 'eFlinch', { x: L4x, dir: 1 });
G(B(46) - 0.08, 'blockX', { x: -0.66, dir: -1 });
spark(B(46), 'handF', { s: 0.12 });
S.sound(B(46), 'block', 0.7);
G(25.55, 'kickChamber', { x: -0.68, dir: -1 });
G(B(47), 'kickFront', { x: -0.72, dir: -1, ease: E.strike });
G(26.1, 'kickFront', { x: -0.72, dir: -1 });
hit(B(47), L4, { vx: -7.5, vy: 3.5, spin: -7 }, { at: 'footF', s: 0.24, stop: [0.06, 0.08], shake: 9, sfx: 'kick' });
G(26.35, 'guard', { x: -0.62, dir: -1 });

// --- wave C: Wind Cutter through a charging line
const N1 = mk({ x: -9.5, dir: 1, name: 'N1' });
N1.appear(27.1).at(27.1, 'eRun', { x: -9.3, dir: 1 });
L5.at(27.85, 'eGuard', { x: LX[4] + 0.05, dir: 1 });
const lineFoes = [L5, N1];
const N2 = mk({ x: -10.5, dir: 1, name: 'N2' });
N2.appear(27.2).at(27.2, 'eRun', { x: -10.3, dir: 1 });
lineFoes.push(N2);
G(26.9, 'iaiReady', { x: -0.72, dir: -1 });
G(28.3, 'iaiReady', { x: -0.72, dir: -1, dh: -0.02 });
G(B(52), 'iaiFollow', { x: -0.86, dir: -1, ease: E.strike });
G(29.3, 'iaiFollow', { x: -0.86, dir: -1 });
S.face(26.9, 'shut');
S.face(28.3, 'red');
S.face(29.0, 'angry');
S.callout(27.95, '風斬り', 'WIND CUTTER', 'right');
S.sound(B(52), 'windSlash', 1);
S.slash(B(52) + 0.02, () => { const p = S.gP(B(52), 'handF'); return { x: p[0] - 0.2, y: p[1], dir: -1, speed: 11, R: 0.62, life: 0.8 }; });
S.wisps(B(52), () => { const p = S.gP(B(52), 'handF'); return { x: p[0] - 0.4, y: p[1], ang: Math.PI, n: 2, len: 1.2, spreadY: 0.5 }; });
S.windSmear(B(52) - 0.1, B(52) + 0.15);
// blade reaches x at about t = 28.56 + (x0 - x)/10.5
const bladeT = (x) => B(52) + 0.02 + (-1.35 - x) / 10.5;
lineFoes.forEach((f, i) => {
  const hx = -2.0 - i * 0.75;
  const th = bladeT(hx);
  f.run(th, hx);
  hit(th, f, { vx: -7 - i, vy: 3.8 + i * 0.6, spin: -9 }, { at: [hx + 0.05, 0.78], kind: 'wind', s: 0.22, sfx: 'slice', gain: 0.8 });
});
S.stop(bladeT(-2.0), 0.05, 0.08);
S.shake(B(52), 7, 0.35);
S.cam(26.4, { x: -1.4, y: 0.95, z: 240 });
S.cam(28.3, { x: -1.9, y: 0.9, z: 260 });
S.cam(28.9, { x: -2.6, y: 0.95, z: 220 }, E.outCubic);
S.cam(29.9, { x: -1.4, y: 0.9, z: 250 });

G(29.9, 'hipHand', { x: -0.8, dir: -1 });
S.face(29.9, 'normal');
G(30.25, 'hipHand', { x: -0.8, dir: -1, dhead: -0.15 });
// --- wave D (right side)
G(30.55, 'guardLow', { x: -0.78, dir: 1, dh: -0.05 });
G(30.95, 'guard', { x: 0.55, dir: 1, jump: 0.35 });
S.cam(30.9, { x: 1.0, y: 0.88, z: 300 });
S.cam(32.5, { x: 1.05, y: 0.88, z: 320 });
const R5x = ax(32.1, 'handF', 0.16), R5x2 = ax(B(60), 'footF', 0.1);
R5.at(30.7, 'eGuard', { x: RX[4] - 0.05, dir: -1 }).run(31.62, R5x).at(31.66, 'eWindup', { x: R5x, dir: -1 })
  .at(B(58), 'ePunch', { x: R5x, dir: -1, ease: E.outExpo })
  .at(32.0, 'eGuard', { x: R5x, dir: -1 }).at(32.12, 'eFlinch', { x: R5x, dir: -1, ease: E.outExpo })
  .at(B(59) + 0.02, 'eFlinch', { x: R5x2, dir: -1, dlean: -0.2, ease: E.outExpo }).at(B(60), 'eFlinch', { x: R5x2, dir: -1, dlean: -0.1 });
G(31.7, 'guard', { x: 0.55, dir: 1 });
G(B(58) - 0.04, 'blockX', { x: 0.52, dir: 1, ease: E.outCubic });
spark(B(58), 'handF', { s: 0.12 });
S.sound(B(58), 'block', 0.8);
G(32.0, 'guard', { x: 0.56, dir: 1 });
G(32.1, 'jab', { x: 0.6, dir: 1, ease: E.strike });
spark(32.1, 'handF', { s: 0.14 });
S.sound(32.1, 'punch', 0.7);
G(32.24, 'guard', { x: 0.6, dir: 1 });
G(B(59), 'cross', { x: 0.66, dir: 1, ease: E.strike });
spark(B(59), 'handB', { s: 0.18 });
S.sound(B(59), 'punch', 0.9);
G(32.6, 'guard', { x: 0.66, dir: 1 });
G(32.75, 'kickChamber', { x: 0.7, dir: 1 });
G(B(60), 'roundhouse', { x: 0.74, dir: 1, ease: E.strike });
G(33.2, 'roundhouse', { x: 0.74, dir: 1 });
hit(B(60), R5, { vx: 7.5, vy: 3.8, spin: -8 }, { at: 'footF', s: 0.26, stop: [0.07, 0.09], shake: 10, sfx: 'kick' });
G(33.45, 'guard', { x: 0.7, dir: 1 });
const R6x = ax(B(62), 'footF', 0.1), R7x = ax(B(64), 'footF', 0.1);
R6.at(32.8, 'eGuard', { x: RX[5] - 0.05, dir: -1 }).run(33.82, R6x).at(33.86, 'eWindup', { x: R6x, dir: -1 }).at(B(62), 'eWindup', { x: R6x, dir: -1 });
R7.at(32.9, 'eGuard', { x: RX[6] - 0.05, dir: -1 }).run(34.2, R7x).at(34.3, 'eRaise', { x: R7x, dir: -1 })
  .at(B(64), 'eRaise', { x: R7x, dir: -1 });
G(33.85, 'guardLow', { x: 0.72, dir: 1, dh: -0.1 });
G(B(62), 'sweep', { x: 0.76, dir: 1, ease: E.strike });
G(34.25, 'sweep', { x: 0.76, dir: 1 });
hit(B(62), R6, { vx: 1.3, vy: 2.7, spin: 9 }, { at: 'footF', s: 0.2, sfx: 'kick', gain: 0.8 });
G(34.45, 'axeUp', { x: 0.9, dir: 1, ease: E.outCubic });
G(B(63) + 0.15, 'axeUp', { x: 0.95, dir: 1, dh: 0.05 });
G(B(64), 'axeHit', { x: 1.0, dir: 1, ease: E.inCubic });
G(35.22, 'axeDown', { x: 1.04, dir: 1, ease: E.outCubic });
G(35.45, 'axeDown', { x: 1.04, dir: 1 });
hit(B(64), R7, { vx: 0.4, vy: -4.5, spin: 6, crater: { R: 0.42, D: 0.12, debris: 14 } }, { at: 'footF', s: 0.28, stop: [0.08, 0.1], shake: 12, sfx: 'kickHeavy' });
S.cam(33.9, { x: 1.2, y: 0.85, z: 310 });
S.cam(B(64), { x: 1.3, y: 0.82, z: 330 });
// pipe man from the right
const P1 = mk({ x: 8, dir: -1, name: 'P1', weapon: { ...PIPE, hide: [[B(66), 999]] } });
const P1x = ax(B(66), 'footF', 0.5), P1x2 = ax(B(67), 'footF', 0.1);
P1.appear(34.6).at(34.6, 'eRun', { x: 8, dir: -1 }).run(35.95, P1x).at(36.0, 'eRaise', { x: P1x, dir: -1 })
  .at(B(66), 'eSwingSide', { x: P1x, dir: -1, ease: E.inCubic }).at(36.4, 'eFlinch', { x: P1x2, dir: -1 }).at(B(67), 'eFlinch', { x: P1x2, dir: -1 });
G(35.7, 'guard', { x: 1.0, dir: 1 });
G(35.95, 'kickChamber', { x: 1.0, dir: 1 });
G(B(66), 'roundhouse', { x: 1.02, dir: 1, dlean: 0.2, lF: [2.7, 0.2], ease: E.strike });
G(36.4, 'guard', { x: 1.02, dir: 1 });
spark(B(66), 'footF', { kind: 'iron', s: 0.3 });
S.sound(B(66), 'clang', 1);
S.stop(B(66), 0.06, 0.08);
S.prop(B(66), () => { const p = S.gP(B(66), 'footF'); return { x: p[0] + 0.1, y: p[1] + 0.05, ang: 1.2, vx: 2.4, vy: 5.5, spin: 14, len: 0.6, w: 0.035 }; });
G(36.55, 'kickChamber', { x: 1.02, dir: 1 });
G(B(67), 'kickFront', { x: 1.08, dir: 1, ease: E.strike });
G(37.0, 'kickFront', { x: 1.08, dir: 1 });
hit(B(67), P1, { vx: 8, vy: 3, spin: -7 }, { at: 'footF', s: 0.24, stop: [0.06, 0.08], shake: 9, sfx: 'kick' });
G(B(68), 'hipHand', { x: 1.0, dir: 1 });
S.face(B(68), 'normal');
S.cam(35.9, { x: 1.4, y: 0.85, z: 320 });
S.cam(37.3, { x: 1.0, y: 0.9, z: 280 });

// =================================================================== 3: louder
// six drop in from the sky
const DX = [2.2, 3.0, 3.8, -1.5, -2.3, -3.1];
const D = DX.map((x, i) => mk({ x, dir: x > 0 ? -1 : 1, name: 'D' + i }));
D.forEach((f, i) => {
  const x = DX[i], dir = x > 0 ? -1 : 1;
  const t0 = 37.55 + i * 0.07;
  f.appear(t0).at(t0, 'eLeap', { x: x - dir * 1.4, dir, h: 3.6 })
    .at(B(70) - 0.02 + i * 0.03, 'eKnee', { x, dir, ease: E.inQuad })
    .at(B(70) + 0.35 + i * 0.03, 'eGuard', { x, dir, bob: 0.02 });
  S.dust(B(70) + i * 0.03, { x, n: 4, r: 0.07, speed: 0.8 });
  S.sound(B(70) + i * 0.03, 'land', 0.5);
});
S.shake(B(70), 6, 0.3);
S.cam(37.9, { x: 0.8, y: 1.15, z: 190 });
S.say(38.6, 40.3, 'まだやるの？ しつこいわね！', 'Still at it? You’re so persistent!');
S.face(38.6, 'angry');
G(38.9, 'hipHand', { x: 1.0, dir: 1 });
G(39.2, 'guard', { x: 1.02, dir: 1 });
// flurry through the right trio
const [D0, D1, D2, D3, D4, D5] = D;
D0.at(39.2, 'eGuard', { x: DX[0], dir: -1 }).at(B(72), 'eGuard', { x: ax(B(72), 'handF', 0.1), dir: -1 });
D1.at(39.6, 'eGuard', { x: DX[1], dir: -1 }).at(B(73), 'eWindup', { x: ax(B(73), 'footF', 0.1), dir: -1 });
D2.at(40.1, 'eGuard', { x: DX[2], dir: -1 }).at(B(74), 'eWindup', { x: ax(B(74), 'footF', 0.1), dir: -1 });
G(39.36, 'dash', { x: 1.4, dir: 1, ease: E.inCubic });
G(B(72), 'palm', { x: 1.72, dir: 1, ease: E.strike });
hit(B(72), D0, { vx: 8, vy: 3, spin: -7 }, { at: 'handF', kind: 'wind', s: 0.24, shake: 7, sfx: 'palm' });
G(39.72, 'dash', { x: 2.2, dir: 1, ease: E.inOutSine });
G(39.88, 'kickChamber', { x: 2.45, dir: 1 });
G(B(73), 'roundhouse', { x: 2.55, dir: 1, ease: E.strike });
hit(B(73), D1, { vx: 7.5, vy: 4.5, spin: -8 }, { at: 'footF', s: 0.26, shake: 8, sfx: 'kick' });
G(40.22, 'dash', { x: 3.0, dir: 1 });
G(40.36, 'jumpRise', { x: 3.15, dir: 1, h: 0.75 });
G(B(74), 'airKick', { x: 3.35, dir: 1, h: 0.85, ease: E.strike });
hit(B(74), D2, { vx: 9, vy: 3, spin: -7 }, { at: 'footF', s: 0.28, stop: [0.07, 0.09], shake: 10, sfx: 'kickHeavy' });
G(40.9, 'landCrouch', { x: 3.45, dir: 1, ease: E.inQuad });
S.dust(40.9, { x: 3.45, n: 4, r: 0.06, speed: 0.6 });
S.ghost(39.25, 40.6);
S.track(39.1, 40.9, (t) => { const J = S.gJ(t); return { x: J.pelvis[0] + 0.45, y: 0.95, z: 300 }; });
// the left trio heads for the flower; she flies back
D3.at(40.5, 'eGuard', { x: DX[3], dir: 1 }).run(41.6, ax(B(76), 'footF', -0.12)).at(B(76), 'eStomp', { x: ax(B(76), 'footF', -0.12), dir: 1 });
hit(B(76), D3, { vx: -8, vy: 3.6, spin: -8 }, { at: 'footF', s: 0.28, stop: [0.07, 0.09], shake: 10, sfx: 'kickHeavy' });
G(41.0, 'landCrouch', { x: 3.4, dir: -1 });
G(41.2, 'dash', { x: 2.3, dir: -1, ease: E.inCubic });
G(41.42, 'jumpRise', { x: 0.9, dir: -1, h: 0.95 });
G(B(76), 'airKick', { x: -0.12, dir: -1, h: 0.9, ease: E.strike, linearX: true });
G(41.95, 'landCrouch', { x: -0.42, dir: -1, ease: E.inQuad });
S.ghost(41.1, 41.7);
S.cam(41.1, { x: 1.4, y: 0.95, z: 260 });
S.cam(41.7, { x: -0.5, y: 1.0, z: 290 });
D4.at(41.2, 'eGuard', { x: DX[4], dir: 1 }).at(42.0, 'eKnee', { x: -1.95, dir: 1 })
  .at(B(78), 'eLeap', { x: ax(B(78), 'footF', -0.12), dir: 1, h: ay(B(78), 'footF', -0.3), ease: E.outCubic });
D5.at(41.5, 'eGuard', { x: DX[5], dir: 1 }).run(42.5, -2.3).at(42.7, 'eKnee', { x: -2.3, dir: 1 })
  .at(B(79), 'eLeap', { x: ax(B(79), 'footB', -0.12), dir: 1, h: ay(B(79), 'footB', -0.3), ease: E.outCubic });
G(42.2, 'landCrouch', { x: -0.45, dir: -1, dh: -0.04 });
G(42.4, 'jumpRise', { x: -0.55, dir: -1, h: 1.15, ease: E.outCubic });
G(B(78), 'airKick', { x: -0.7, dir: -1, h: 1.45, ease: E.strike });
hit(B(78), D4, { vx: -7, vy: 2.5, spin: -8 }, { at: 'footF', s: 0.26, shake: 8, sfx: 'kick' });
G(43.0, 'tuck', { x: -0.72, dir: -1, h: 1.6, rot: -3.0, ease: E.inOutSine });
G(43.15, 'tuck', { x: -0.73, dir: -1, h: 1.55, rot: -5.3, ease: E.linear });
G(B(79), 'airKick2', { x: -0.74, dir: -1, h: 1.45, rot: -6.28, ease: E.outCubic });
hit(B(79), D5, { vx: -6.5, vy: 5, spin: -9 }, { at: 'footB', s: 0.26, stop: [0.06, 0.08], shake: 8, sfx: 'kick' });
G(43.5, 'airKick2', { x: -0.74, dir: -1, h: 1.1, rot: -6.28 });
G(B(80), 'superLand', { x: -0.76, dir: -1, rot: -6.28, ease: E.inCubic });
G(44.2, 'superLand', { x: -0.76, dir: -1, rot: -6.28 });
S.dust(B(80), { x: -0.9, n: 10, ring: true, r: 0.08, speed: 1.8, life: 0.9 });
S.crack(B(80), -1.05, 0.05, Math.PI * 0.95, 0.9, { width: 0.8 });
S.crack(B(80), -1.05, 0.0, Math.PI * 1.1, 0.7, { width: 0.7 });
S.shake(B(80), 10, 0.35);
S.sound(B(80), 'slam', 1);
S.cam(42.3, { x: -0.8, y: 1.3, z: 280 });
S.cam(B(80), { x: -0.9, y: 0.95, z: 310 });

// --- the whirlwind: four more from the left
G(44.6, 'guard', { x: -0.76, dir: -1, rot: -6.28 });
G(45.3, 'guard', { x: -1.25, dir: -1, rot: -6.28 });
G(45.9, 'guardLow', { x: -1.25, dir: -1, rot: -6.28, dh: -0.06 });
G(47.4, 'guardLow', { x: -1.25, dir: -1, rot: -6.28, dh: -0.1 });
S.face(45.9, 'shut');
S.face(47.0, 'red');
S.windVortex(45.8, 50.0, -1.25, 2.5, 1.3);
S.wisps(45.9, { x: -1.6, y: 0.2, ang: 0.4, n: 3, len: 0.8, spreadX: 0.8, spreadY: 0.2 });
S.wisps(46.7, { x: -0.9, y: 0.35, ang: 2.6, n: 3, len: 0.8, spreadX: 0.8, spreadY: 0.2 });
S.motes(46.0, { x: -1.25, y: 0.05, n: 14, w: 1.2, h: 0.3, spread: 1.5, red: 0.35 });
S.callout(B(86), '旋風脚', 'WHIRLWIND KICK', 'right');
S.sound(45.9, 'windRise', 0.8);
const W = [0, 1, 2, 3].map((i) => ax([B(88), B(89), B(90), B(91)][i], 'footF', -0.08));
const WT = [B(88), B(89), B(90), B(91)];
const Wf = [0, 1, 2, 3].map((i) => mk({ x: -7 - i * 1.3, dir: 1, name: 'W' + i }));
Wf.forEach((f, i) => {
  f.appear(44.0).at(44.0, 'eGuard', { x: -6.8 - i * 1.1, dir: 1 });
  if (i < 3) {
    f.walk(46.2 + i * 0.3, -3.6 - i * 0.7, { menace: 1 }).at(46.5 + i * 0.3, 'eGuard', { x: -3.6 - i * 0.7, dir: 1, bob: 0.02 })
      .at(WT[i] - 0.55, 'eGuard', { x: -3.6 - i * 0.7, dir: 1 }).run(WT[i] - 0.02, W[i]).at(WT[i], 'eWindup', { x: W[i], dir: 1 });
  } else {
    f.walk(48.2, -3.0, { menace: 1 }).at(48.9, 'eKnee', { x: -3.0, dir: 1 }).at(WT[i], 'eLeap', { x: W[i], dir: 1, h: ay(WT[i], 'footF', -0.3), ease: E.outCubic });
  }
});
hit(WT[0], Wf[0], { vx: -6, vy: 7, spin: -12 }, { at: 'footF', s: 0.24, kind: 'wind', sfx: 'kick' });
hit(WT[1], Wf[1], { vx: -8, vy: 5, spin: -10 }, { at: 'footF', s: 0.24, kind: 'wind', sfx: 'kick' });
hit(WT[2], Wf[2], { vx: -5, vy: 8, spin: -12 }, { at: 'footF', s: 0.24, kind: 'wind', sfx: 'kick' });
hit(WT[3], Wf[3], { vx: -9, vy: 3.5, spin: -9 }, { at: 'footF', s: 0.28, kind: 'red', stop: [0.07, 0.1], shake: 12, sfx: 'kickHeavy' });
// the spin: side -> front -> side -> back, rising and falling
{
  const t0 = 47.6, t1 = 49.9, step = 0.095;
  const views = [['roundhouse', -1, 'side'], ['frontSpin', -1, 'front'], ['roundhouse', 1, 'side'], ['backSpin', -1, 'back']];
  let i = 0;
  for (let t = t0; t < t1; t += step, i++) {
    const [p, dir] = views[i % 4];
    const u = (t - t0) / (t1 - t0);
    const h = 0.55 + 0.4 * Math.sin(Math.PI * Math.min(1, u * 1.15));
    const o = { x: -1.25, dir, h, fB: null, lB: [-0.25, 0.7], ease: E.linear };
    if (p === 'roundhouse') Object.assign(o, { lF: [2.2, 0.15] });
    G(t, p, o);
  }
}
G(50.05, 'landCrouch', { x: -1.25, dir: -1, ease: E.inQuad });
G(50.6, 'guard', { x: -1.25, dir: -1 });
S.windSmear(47.6, 49.9);
S.vortex(47.55, { x: -1.25, y0: 0.05, h: 1.35, R: 0.85, life: 2.7, spin: 10, bands: 6, red: true, rise: 0.5 });
S.crater(47.8, -1.25, 0.8, { kind: 'swirl', D: 0.05, rim: 0.01, cracks: 3 });
S.debris(47.9, { x: -1.25, n: 16, speed: 2.2, up: 5, size: 0.04, spread: 1.2, cone: 1.4 });
S.dust(47.7, { x: -1.25, n: 12, ring: true, r: 0.07, speed: 1.4, life: 1.6, stagger: 1.2 });
S.sound(47.6, 'whirl', 1);
S.cam(45.5, { x: -1.6, y: 0.95, z: 300 });
S.cam(47.5, { x: -1.5, y: 0.95, z: 340 });
S.cam(48.2, { x: -2.1, y: 1.1, z: 260 }, E.outCubic);
S.cam(50.3, { x: -1.8, y: 1.05, z: 250 });

// --- the brute
const BR = mk({ x: 11, dir: -1, name: 'BRUTE', scale: 1.45, thick: 1.3, boss: true, weapon: { ...CLUB, hide: [[B(118), 71.64], [B(156), 99.6]] } });
BR.o.boss = true;
BR.appear(49.6).at(49.6, 'eDrag', { x: 11, dir: -1, club: -0.2 }).walk(54.2, 4.45, { menace: 1, stride: 0.95 })
  .at(54.35, 'eStand', { x: 4.45, dir: -1 }).at(B(100), 'eRoar', { x: 4.45, dir: -1, club: 0.2, ease: E.outBack })
  .at(55.35, 'eRaise', { x: 4.4, dir: -1 }).at(B(102), 'eSwing', { x: 4.3, dir: -1, club: 0.45, ease: E.inCubic })
  .at(56.3, 'eSwing', { x: 4.3, dir: -1, club: 0.45 });
[B(92), B(94), B(96), B(98)].forEach((t, i) => {
  S.shake(t, 5, 0.25);
  S.sound(t, 'stomp', 0.9);
  S.dust(t, { x: 11 - (t - 49.6) * 1.43, n: 3, r: 0.07, speed: 0.6 });
  void i;
});
// minions behind him cheering
const M = [0, 1, 2, 3].map((i) => mk({ x: 13 + i * 0.8, dir: -1, name: 'M' + i }));
M.forEach((f, i) => {
  const x = 6.3 + i * 0.75;
  f.appear(49.9).at(49.9, 'eStand', { x: 12.6 + i * 0.9, dir: -1 }).walk(54.6 + i * 0.1, x, { menace: 1 })
    .at(54.9 + i * 0.1, 'eCheer', { x, dir: -1, bob: 0.035 }).at(67.6, 'eCheer', { x, dir: -1, bob: 0.035 });
});
// she hops back over the flower and faces him
G(51.0, 'guardLow', { x: -1.25, dir: 1, dh: -0.05 });
G(51.65, 'guard', { x: 1.5, dir: 1, jump: 0.55 });
G(52.3, 'guard', { x: 1.6, dir: 1 });
G(53.2, 'guard', { x: 2.35, dir: 1 });
G(54.6, 'guard', { x: 2.4, dir: 1 });
S.face(51.8, 'angry');
S.cut(B(92), { x: 6.0, y: 1.3, z: 175 });
S.cam(52.4, { x: 5.0, y: 1.2, z: 185 });
S.cut(B(96), { x: 5.9, y: 0.45, z: 430 });
S.cam(53.6, { x: 5.2, y: 0.5, z: 440 });
S.cut(B(98), { x: 2.45, y: 0.95, z: 620 });
S.cut(54.35, { x: 3.4, y: 1.25, z: 210 });
// the smash: she backflips away
G(55.45, 'guardLow', { x: 2.4, dir: 1, dh: -0.06 });
G(55.62, 'flipTuck', { x: 1.9, dir: 1, h: 0.8, rot: -2.4 });
G(55.85, 'flipTuck', { x: 1.45, dir: 1, h: 0.75, rot: -5.0 });
G(56.05, 'landCrouch', { x: 1.25, dir: 1, rot: -6.28, ease: E.inQuad });
S.crater(B(102), 2.55, 0.85, { D: 0.2 });
S.debris(B(102), { x: 2.55, n: 40, speed: 5, up: 6.5, size: 0.1, spread: 0.6 });
S.dust(B(102), { x: 2.55, n: 16, ring: true, r: 0.11, speed: 3, life: 1.3 });
S.dust(B(102), { x: 2.55, n: 6, r: 0.14, speed: 0.9, spread: 0.7, life: 1.4, vy: 0.6, front: true });
S.stop(B(102), 0.08, 0.1);
S.shake(B(102), 22, 0.5);
S.sound(B(102), 'crater', 1);
S.cam(55.2, { x: 3.1, y: 1.2, z: 250 });
// counter: kick blocked by the club
BR.at(56.6, 'eBlockClub', { x: 4.35, dir: -1, club: 0.9 }).at(B(104) + 0.06, 'eBlockClub', { x: 4.45, dir: -1, club: 0.9, ease: E.outExpo })
  .at(57.6, 'eGuard', { x: 4.4, dir: -1 }).at(57.8, 'eWindup', { x: 4.35, dir: -1, club: -0.5 })
  .at(B(106), 'eSwingSide', { x: 4.25, dir: -1, club: -0.45, ease: E.inCubic }).at(58.3, 'eSwingSide', { x: 4.25, dir: -1, club: -0.3 })
  .at(B(107) + 0.05, 'eFlinch', { x: 4.3, dir: -1, dlean: 0.2 }).at(58.85, 'eGuard', { x: 4.25, dir: -1 })
  .at(B(108), 'eBackhand', { x: 4.2, dir: -1, ease: E.outExpo }).at(59.5, 'eBackhand', { x: 4.2, dir: -1 })
  .at(60.3, 'eLaugh', { x: 4.25, dir: -1, bob: 0.02 }).at(61.3, 'eGuard', { x: 4.25, dir: -1 });
G(56.45, 'dash', { x: 2.3, dir: 1, ease: E.inCubic });
G(56.7, 'jumpRise', { x: 2.9, dir: 1, h: 0.8 });
G(B(104), 'airKick', { x: 3.3, dir: 1, h: 0.95, ease: E.strike });
spark(B(104), 'footF', { kind: 'iron', s: 0.34 });
S.sound(B(104), 'clang', 1);
S.stop(B(104), 0.07, 0.09);
S.shake(B(104), 10, 0.3);
G(57.2, 'flipTuck', { x: 3.0, dir: 1, h: 0.9, rot: -3.1 });
G(57.45, 'landCrouch', { x: 3.1, dir: 1, rot: -6.28 });
G(57.8, 'guard', { x: 3.2, dir: 1, rot: -6.28 });
G(B(106) - 0.08, 'guardLow', { x: 3.25, dir: 1, rot: -6.28, dh: -0.14, ease: E.outCubic });
G(58.2, 'guardLow', { x: 3.3, dir: 1, rot: -6.28, dh: -0.12 });
G(B(107), 'sideKickLow', { x: 3.45, dir: 1, rot: -6.28, ease: E.strike });
spark(B(107), 'footF', { s: 0.16 });
S.sound(B(107), 'kick', 0.7);
S.face(B(107) + 0.05, 'wide');
G(58.85, 'guard', { x: 3.45, dir: 1, rot: -6.28 });
// backhand: she skids away
G(B(108), 'blockX', { x: 3.45, dir: 1, rot: -6.28 });
G(59.35, 'skid', { x: 2.55, dir: 1, rot: -6.28, ease: E.outCubic });
G(59.75, 'handSkid', { x: 1.85, dir: 1, rot: -6.28, ease: E.outCubic });
G(60.2, 'guard', { x: 1.8, dir: 1, rot: -6.28 });
G(60.45, 'wipeCheek', { x: 1.8, dir: 1, rot: -6.28 });
G(61.0, 'wipeCheek', { x: 1.8, dir: 1, rot: -6.28, dhead: 0.05 });
G(61.25, 'guard', { x: 1.8, dir: 1, rot: -6.28 });
S.face(B(108), 'shut');
S.face(60.1, 'angry');
spark(B(108), 'handF', { s: 0.3 });
S.stop(B(108), 0.1, 0.1);
S.shake(B(108), 14, 0.35);
S.sound(B(108), 'hitHeavy', 1);
[59.2, 59.35, 59.5, 59.65].forEach((t) => S.dust(t, { x: 3.2 - (t - 59.1) * 2.4, n: 2, r: 0.05, speed: 0.4, spread: 0.5 }));
S.motes(60.3, { x: 1.8, y: 0.05, n: 12, w: 0.8, h: 0.3, spread: 1.0, red: 0.5 });
S.wisps(60.6, { x: 1.4, y: 0.4, ang: 0.3, n: 2, len: 0.8 });
S.cam(56.4, { x: 3.4, y: 1.1, z: 280 });
S.cam(58.9, { x: 3.4, y: 1.0, z: 300 });
S.cam(59.8, { x: 2.5, y: 0.95, z: 320 });
S.cut(60.35, { x: 1.95, y: 0.82, z: 640 });
S.cut(61.25, { x: 3.0, y: 1.1, z: 270 });
// charge -> clash
G(61.9, 'dash', { x: 2.8, dir: 1, rot: -6.28, ease: E.inCubic });
G(62.4, 'jumpRise', { x: 3.3, dir: 1, h: 0.95, rot: -6.28 });
G(62.9, 'airKick', { x: 3.55, dir: 1, h: 1.15, rot: -6.28, dlean: 0.2, lF: [1.6, 1.6] });
G(B(116), 'airKick', { x: 3.7, dir: 1, h: 1.15, rot: -6.28, ease: E.strike });
BR.at(62.6, 'eWindup', { x: 4.3, dir: -1, club: -0.6 }).at(B(116), 'eSwingSide', { x: 4.25, dir: -1, club: 0.6, dlean: -0.1, ease: E.inCubic })
  .at(63.7, 'eFlinch', { x: 4.7, dir: -1, club: 0.3, ease: E.outCubic }).at(64.1, 'eGuard', { x: 4.9, dir: -1 });
S.ghost(61.8, 62.3);
S.impact(B(116), { frames: [['neg', 2], ['red', 2], ['neg', 1]] });
S.stop(B(116), 0.1, 0.12);
S.shake(B(116), 22, 0.5);
S.sound(B(116), 'clash', 1);
spark(B(116), 'footF', { kind: 'iron', s: 0.45, n: 14 });
S.burst(B(116), () => { const p = S.gP(B(116), 'footF'); return { x: p[0] + 0.1, y: p[1], R: 1.0, flat: 1, life: 0.35, w: 0.06, red: true }; });
S.burst(B(116), { x: 3.9, y: 0, R: 2.6, flat: 0.28, life: 0.6, w: 0.05 });
S.dust(B(116), { x: 3.9, n: 16, ring: true, r: 0.09, speed: 2.6, life: 1.1 });
S.debris(B(116), { x: 3.9, n: 14, speed: 3, up: 4, size: 0.05, spread: 1.4 });
S.crack(B(116), 3.9, 0.15, Math.PI * 0.95, 1.2);
S.crack(B(116), 3.9, 0.1, Math.PI * 0.08, 1.0);
S.crack(B(116), 3.9, -0.1, Math.PI * 1.08, 0.9);
S.gust(B(116), { x: 3.9, y: 0.8, strength: 5, radius: 3, dur: 0.8 });
G(63.75, 'flipTuck', { x: 3.1, dir: 1, h: 0.9, rot: -8.6 });
G(64.0, 'landCrouch', { x: 2.95, dir: 1, rot: -12.566, ease: E.inQuad });
S.cam(62.3, { x: 3.4, y: 1.15, z: 250 });
S.cam(B(116), { x: 3.8, y: 1.1, z: 290 });
S.cam(64.0, { x: 3.7, y: 1.1, z: 250 }, E.outCubic);

// =================================================================== 4: peak
// disarm: the club flies off and sticks in the ground
G(64.2, 'dash', { x: 3.6, dir: 1, rot: -12.566, ease: E.inCubic });
G(64.4, 'kickChamber', { x: 3.95, dir: 1, rot: -12.566 });
G(B(118), 'roundhouse', { x: 4.05, dir: 1, rot: -12.566, dlean: 0.25, lF: [2.75, 0.2], ease: E.strike });
BR.at(64.4, 'eRaise', { x: 4.9, dir: -1, club: 0.2 }).at(B(118), 'eRaise', { x: 4.9, dir: -1, club: 0.2 })
  .at(64.8, 'eFlinch', { x: 4.95, dir: -1, ease: E.outCubic });
spark(B(118), 'footF', { kind: 'iron', s: 0.34 });
S.sound(B(118), 'clang', 1);
S.stop(B(118), 0.06, 0.08);
S.prop(B(118), () => {
  const J = BR.a.joints(S.T(B(118)) - 0.001, S.groundAt);
  return { x: J.handF[0] + 0.2, y: J.handF[1] + 0.4, ang: 1.3, vx: 2.4, vy: 6.5, spin: 11, len: 1.15 * 1.45, w: 0.055 * 1.45, head: 0.36 * 1.45, stick: true, gone: 71.64 };
});
S.sound(65.5, 'thunk', 0.8);
// punch / dodge / combo
const BA = [ax(B(120), 'handF', 0.16), ax(65.91, 'handB', 0.18), ax(B(121), 'handF', 0.24), ax(B(122), 'footF', 0.22)];
BR.at(64.95, 'eWindup', { x: 4.95, dir: -1 }).at(B(119), 'ePunch', { x: 4.8, dir: -1, ease: E.outExpo })
  .at(65.4, 'eGuard', { x: BA[0], dir: -1 }).at(B(120), 'eGuard', { x: BA[0], dir: -1 })
  .at(B(120) + 0.03, 'eFlinch', { x: plus(BA[0], 0.05), dir: -1, dlean: 0.15, ease: E.outExpo })
  .at(65.91, 'eFlinch', { x: BA[1], dir: -1, dlean: 0.15 })
  .at(65.94, 'eFlinch', { x: plus(BA[1], 0.05), dir: -1, dlean: 0.25, ease: E.outExpo })
  .at(B(121), 'eFlinch', { x: BA[2], dir: -1, dlean: 0.2 })
  .at(B(121) + 0.03, 'eFlinch', { x: plus(BA[2], 0.08), dir: -1, dlean: -0.2, dhead: -0.4, ease: E.outExpo })
  .at(66.5, 'eGuard', { x: plus(BA[2], 0.1), dir: -1 }).at(B(122), 'eGuard', { x: BA[3], dir: -1 })
  .at(B(122) + 0.04, 'eFlinch', { x: plus(BA[3], 0.25), dir: -1, dlean: -0.35, dhead: -0.5, ease: E.outExpo })
  .at(B(123), 'eKnee', { x: 5.8, dir: -1, ease: E.inOutSine }).at(70.2, 'eKnee', { x: 5.8, dir: -1 });
G(64.9, 'guard', { x: 4.05, dir: 1, rot: -12.566 });
G(B(119), 'relaxed', { x: 3.95, dir: 1, rot: -12.566, dlean: -0.35, dhead: -0.25, ease: E.outCubic });
G(65.4, 'guard', { x: 4.1, dir: 1, rot: -12.566 });
G(B(120), 'jab', { x: 4.2, dir: 1, rot: -12.566, ease: E.strike });
spark(B(120), 'handF', { s: 0.16 });
S.sound(B(120), 'punch', 0.8);
G(65.78, 'guard', { x: 4.25, dir: 1, rot: -12.566 });
G(65.91, 'cross', { x: 4.3, dir: 1, rot: -12.566, ease: E.strike });
spark(65.91, 'handB', { s: 0.18 });
S.sound(65.91, 'punch', 0.9);
G(66.02, 'uppercutLow', { x: 4.3, dir: 1, rot: -12.566 });
G(B(121), 'uppercut', { x: 4.4, dir: 1, rot: -12.566, h: 0.62, ease: E.strike });
spark(B(121), 'handF', { s: 0.24 });
S.sound(B(121), 'punchHeavy', 1);
S.shake(B(121), 8, 0.25);
G(66.45, 'jumpRise', { x: 4.5, dir: 1, rot: -12.566, h: 0.8 });
G(66.6, 'spinOut', { x: 4.6, dir: -1, rot: -12.566, h: 0.85, fB: null, lB: [0, 0.3] });
G(B(122), 'spinBack', { x: 4.7, dir: -1, rot: -12.566, h: 0.9, fB: null, lB: [-0.3, 0.6], lF: [2.5, 0.05], ease: E.strike });
spark(B(122), 'footF', { s: 0.3, kind: 'wind' });
S.sound(B(122), 'kickHeavy', 1);
S.stop(B(122), 0.07, 0.09);
S.shake(B(122), 12, 0.3);
G(67.0, 'landCrouch', { x: 4.7, dir: -1, rot: -12.566, ease: E.inQuad });
G(67.4, 'guard', { x: 4.72, dir: 1, rot: -12.566 });
S.cam(64.2, { x: 4.3, y: 1.05, z: 300 });
S.cam(66.9, { x: 4.9, y: 1.1, z: 290 });
// the four minions rush in
const [M0, M1, M2, M3] = M;
const Mx = [ax(B(125), 'handF', 0.1), ax(B(126), 'footF', 0.1), ax(B(127), 'footF', 0.1)];
M0.at(67.8, 'eGuard', { x: 6.3, dir: -1 }).run(68.28, Mx[0]).at(68.3, 'eWindup', { x: Mx[0], dir: -1 }).at(B(125), 'eWindup', { x: Mx[0], dir: -1 });
M1.at(67.9, 'eGuard', { x: 7.05, dir: -1 }).run(68.84, Mx[1]).at(68.86, 'eWindup', { x: Mx[1], dir: -1 }).at(B(126), 'eWindup', { x: Mx[1], dir: -1 });
M2.at(68.0, 'eGuard', { x: 7.8, dir: -1 }).run(69.38, Mx[2]).at(69.4, 'eWindup', { x: Mx[2], dir: -1 }).at(B(127), 'eWindup', { x: Mx[2], dir: -1 });
M3.at(68.1, 'eGuard', { x: 8.55, dir: -1 }).run(69.3, 6.3).at(69.45, 'eKnee', { x: 6.2, dir: -1 })
  .at(B(128), 'eLeap', { x: ax(B(128), 'footF', 0.05), dir: -1, h: ay(B(128), 'footF', -0.35), ease: E.outCubic });
G(68.1, 'guard', { x: 4.85, dir: 1, rot: -12.566 });
G(B(125), 'palm', { x: 4.9, dir: 1, rot: -12.566, ease: E.strike });
hit(B(125), M0, { vx: 8, vy: 3.2, spin: -7 }, { at: 'handF', kind: 'wind', s: 0.26, shake: 8, sfx: 'palm' });
G(68.6, 'guard', { x: 4.88, dir: 1, rot: -12.566 });
G(68.72, 'kickChamber', { x: 4.9, dir: 1, rot: -12.566 });
G(B(126), 'roundhouse', { x: 4.95, dir: 1, rot: -12.566, ease: E.strike });
hit(B(126), M1, { vx: 7, vy: 5, spin: -9 }, { at: 'footF', s: 0.26, shake: 8, sfx: 'kick' });
G(69.2, 'guard', { x: 4.9, dir: 1, rot: -12.566 });
G(69.3, 'kickChamber', { x: 4.9, dir: 1, rot: -12.566 });
G(B(127), 'kickSide', { x: 4.95, dir: 1, rot: -12.566, ease: E.strike });
hit(B(127), M2, { vx: 8.5, vy: 2.8, spin: -7 }, { at: 'footF', s: 0.26, shake: 8, sfx: 'kick' });
G(69.75, 'landCrouch', { x: 5.0, dir: 1, rot: -12.566, dh: 0.05 });
G(B(128), 'risingKick', { x: 5.15, dir: 1, rot: -12.566, h: 0.75, ease: E.strike });
hit(B(128), M3, { vx: 4, vy: 7.5, spin: -10 }, { at: 'footF', s: 0.3, stop: [0.07, 0.09], shake: 10, sfx: 'kickHeavy' });
G(70.4, 'landCrouch', { x: 5.2, dir: 1, rot: -12.566, ease: E.inQuad });
G(70.8, 'guard', { x: 5.1, dir: 1, rot: -12.566 });
S.cam(68.0, { x: 5.4, y: 1.05, z: 280 });
// brute retrieves the club, swings, launches a rock at the flower
BR.at(70.6, 'eStand', { x: 5.85, dir: 1 }).walk(71.4, 6.75, { menace: 1, stride: 0.9 })
  .at(B(131), 'eGrab', { x: 6.8, dir: 1, club: -1.6 }).at(71.9, 'eRoar', { x: 6.8, dir: -1, club: 0.2 })
  .at(B(132) - 0.25, 'eWindup', { x: 6.5, dir: -1, club: -0.6 }).at(B(132), 'eSwingSide', { x: 6.2, dir: -1, club: -0.4, ease: E.inCubic })
  .at(72.5, 'eRaise', { x: 6.0, dir: -1 }).at(B(134), 'eSwing', { x: 5.9, dir: -1, club: 0.5, ease: E.inCubic })
  .at(73.8, 'eSwing', { x: 5.9, dir: -1, club: 0.5 }).at(74.4, 'eLaugh', { x: 5.95, dir: -1, bob: 0.02 })
  .at(79.0, 'eLaugh', { x: 5.95, dir: -1, bob: 0.02 }).at(80.4, 'eGuard', { x: 5.9, dir: -1 });
G(71.9, 'guard', { x: 5.1, dir: 1, rot: -12.566 });
G(B(132) - 0.05, 'flipTuck', { x: 4.6, dir: 1, h: 0.8, rot: -15.0 });
G(72.5, 'landCrouch', { x: 4.3, dir: 1, rot: -18.85, ease: E.inQuad });
G(72.9, 'guard', { x: 4.3, dir: 1, rot: -18.85 });
S.sound(B(132), 'swingHeavy', 1);
S.crater(B(134), 4.0, 0.5, { D: 0.13 });
S.debris(B(134), { x: 4.0, n: 16, speed: 3, up: 5, size: 0.07 });
S.dust(B(134), { x: 4.0, n: 10, ring: true, r: 0.09, speed: 2, life: 1.0 });
S.shake(B(134), 14, 0.4);
S.sound(B(134), 'crater', 0.9);
// the rock: hits her back at 74.55 as she shields the flower
S.rock(B(134), { x0: 4.1, y0: 0.35, vx: -4.05, vy: 5.75, size: 0.17, w: 7, gone: 74.56 });
S.rock(B(134) + 0.02, { x0: 4.0, y0: 0.3, vx: -2.6, vy: 4.0, size: 0.07, w: 9 });
S.rock(B(134) + 0.03, { x0: 4.2, y0: 0.3, vx: -1.8, vy: 4.8, size: 0.05, w: 9 });
S.face(B(134) + 0.1, 'wide');
G(73.5, 'guard', { x: 4.25, dir: -1, rot: -18.85 });
G(73.7, 'dash', { x: 3.2, dir: -1, rot: -18.85, ease: E.inCubic });
G(74.15, 'dash', { x: 0.7, dir: -1, rot: -18.85 });
G(B(136), 'shieldKneel', { x: 0.3, dir: -1, rot: -18.85, ease: E.outCubic });
S.ghost(73.6, 74.3);
S.cam(71.3, { x: 5.6, y: 1.1, z: 260 });
S.cam(B(134), { x: 4.6, y: 1.25, z: 200 });
S.cam(74.2, { x: 1.4, y: 0.9, z: 230 }, E.inOutCubic);

// =================================================================== 5: breakdown (slow motion, tender)
S.slow(74.35, 75.3, 0.3);
S.debris(74.56, { x: 0.45, y: 0.55, n: 14, speed: 1.6, up: 2.2, size: 0.05, spread: 0.2, dir: 1 });
S.dust(74.56, { x: 0.5, y: 0.02, n: 3, r: 0.05, speed: 0.4, spread: 1, life: 0.9 });
S.sound(74.56, 'rockHit', 1);
S.shake(74.56, 6, 0.4);
S.face(74.5, 'shut');
S.letterbox(74.3, 0);
S.letterbox(75.0, 1);
G(75.4, 'shieldKneel', { x: 0.3, dir: -1, rot: -18.85, dlean: 0.03 });
G(76.4, 'shieldKneel', { x: 0.3, dir: -1, rot: -18.85, dlean: -0.05 });
G(B(140) + 0.3, 'kneelFlower', { x: 0.32, dir: -1, rot: -18.85, ease: E.inOutCubic });
G(77.5, 'kneelFlower', { x: 0.32, dir: -1, rot: -18.85, dhead: 0.05 });
G(78.4, 'kneeTouch', { x: 0.32, dir: -1, rot: -18.85 });
G(79.1, 'kneeTouch', { x: 0.32, dir: -1, rot: -18.85, dhead: 0.04 });
G(79.45, 'kneelCross', { x: 0.32, dir: -1, rot: -18.85, ease: E.outBack });
G(80.25, 'kneelCross', { x: 0.32, dir: -1, rot: -18.85 });
G(80.6, 'standSoft', { x: 0.4, dir: 1, rot: -18.85, ease: E.outCubic });
G(B(148) - 0.02, 'powerUp', { x: 0.45, dir: 1, rot: -18.85, ease: E.strike });
S.face(76.9, 'soft');
S.face(79.35, 'angry', 1, 'pout');
S.face(80.3, 'angry', 0.6);
S.face(80.62, 'red', 0);
S.say(75.5, 77.1, '……痛いじゃない。', '…That hurt, you know.');
S.say(B(142), 79.2, '大丈夫……あたしが守るから。', 'It’s okay… I’ll protect you.');
S.say(79.35, 80.45, 'べ、別にあんたのためじゃないんだからね！', 'I-it’s not like I’m doing this for you!');
S.say(80.55, 82.0, '……本気で行くわよ。', '…Now I’m getting serious.');
S.wisp(B(142), { x: -0.35, y: 0.08, ang: 0.35, len: 0.55, w: 0.016, life: 1.8, curl: 1 });
S.wisp(B(142) + 0.5, { x: 0.25, y: 0.26, ang: 2.8, len: 0.5, w: 0.014, life: 1.7, curl: -1 });
S.letterbox(80.35, 1);
S.letterbox(80.9, 0);
S.cam(75.2, { x: 0.3, y: 0.55, z: 470 });
S.cut(75.45, { x: 0.12, y: 0.34, z: 700 });
S.cam(77.5, { x: 0.08, y: 0.32, z: 760 });
S.cam(79.2, { x: 0.08, y: 0.34, z: 820 });
S.cut(80.35, { x: 1.6, y: 1.0, z: 230 });
// four more close in on her while she kneels
const C4 = [2.25, 2.85, -1.75, -2.35].map((x, i) => mk({ x: x + Math.sign(x) * 4, dir: -Math.sign(x), name: 'C' + i }));
C4.forEach((f, i) => {
  const x = [2.25, 2.85, -1.75, -2.35][i];
  const dir = -Math.sign(x);
  f.appear(75.5).at(75.5, 'eStand', { x: x - dir * 4, dir }).walk(80.3 + i * 0.1, x, { menace: 1 })
    .at(80.7, 'eGuard', { x, dir });
  f.knock(B(148) + 0.04 + Math.abs(x) * 0.03, { vx: -dir * (6 + i), vy: 3.2, spin: -7 });
});

// =================================================================== 6: the return
S.burst(B(148), { x: 0.45, y: 0.02, R: 4.5, flat: 0.28, life: 0.7, w: 0.07, red: true });
S.gust(B(148), { x: 0.45, y: 0.6, strength: 6, radius: 4, dur: 1.0 });
S.dust(B(148), { x: 0.45, n: 18, ring: true, r: 0.09, speed: 3, life: 1.2 });
S.motes(B(148), { x: 0.45, y: 0.1, n: 20, w: 1.2, h: 0.8, spread: 0.8, red: 0.6 });
for (let i = 0; i < 6; i++) {
  const a = (i / 6) * Math.PI * 2 + 0.3;
  S.wisp(B(148) + i * 0.03, { x: 0.45 + Math.cos(a) * 0.5, y: 0.65 + Math.sin(a) * 0.45, ang: a, len: 1.0, w: 0.03, life: 0.8, red: i % 2 === 0 });
}
S.shake(B(148), 16, 0.45);
S.sound(B(148), 'burst', 1);
// triple beat: punch, punch, kick
G(81.0, 'dash', { x: 1.2, dir: 1, rot: -18.85, ease: E.inCubic });
G(81.3, 'dash', { x: 4.6, dir: 1, rot: -18.85 });
G(81.36, 'guard', { x: 4.95, dir: 1, rot: -18.85 });
G(B(149), 'jab', { x: 5.05, dir: 1, rot: -18.85, ease: E.strike });
G(81.75, 'guard', { x: 5.2, dir: 1, rot: -18.85 });
G(B(150), 'cross', { x: 5.3, dir: 1, rot: -18.85, ease: E.strike });
G(82.3, 'kickChamber', { x: 5.45, dir: 1, rot: -18.85 });
G(B(151), 'kickSide', { x: 5.55, dir: 1, rot: -18.85, ease: E.strike });
G(82.85, 'guard', { x: 5.55, dir: 1, rot: -18.85 });
S.ghost(80.95, 81.4);
[[B(149), 'handF', 0.2], [B(150), 'handB', 0.22], [B(151), 'footF', 0.3]].forEach(([t, at, s]) => {
  spark(t, at, { kind: 'red', s });
  S.sound(t, at === 'footF' ? 'kickHeavy' : 'punchHeavy', 1);
  S.shake(t, 8, 0.2);
});
S.stop(B(151), 0.07, 0.09);
const BT = [ax(B(149), 'handF', 0.16), ax(B(150), 'handB', 0.18), ax(B(151), 'footF', 0.16)];
BR.at(81.0, 'eWindup', { x: BT[0], dir: -1, club: -0.4 }).at(B(149), 'eWindup', { x: BT[0], dir: -1, club: -0.4 })
  .at(B(149) + 0.03, 'eFlinch', { x: plus(BT[0], 0.08), dir: -1, ease: E.outExpo })
  .at(B(150), 'eFlinch', { x: BT[1], dir: -1 })
  .at(B(150) + 0.03, 'eFlinch', { x: plus(BT[1], 0.1), dir: -1, dlean: -0.2, ease: E.outExpo })
  .at(B(151), 'eFlinch', { x: BT[2], dir: -1, dlean: -0.1 })
  .at(B(151) + 0.03, 'eFlinch', { x: plus(BT[2], 0.2), dir: -1, dlean: -0.35, dhead: -0.4, ease: E.outExpo })
  .at(82.8, 'eWindup', { x: 6.3, dir: -1, club: -0.6 })
  .at(B(152), 'eSwingSide', { x: 6.2, dir: -1, club: -0.4, ease: E.inCubic })
  .at(83.4, 'eSwingSide', { x: 6.2, dir: -1, club: -0.2 })
  .at(83.9, 'eGuard', { x: 6.25, dir: 1 }).at(84.3, 'eRaise', { x: 6.3, dir: 1 }).at(84.95, 'eRaise', { x: 6.3, dir: 1 });
// hop over the swing, land behind him
G(83.0, 'jumpRise', { x: 5.7, dir: 1, rot: -18.85, h: 1.0 });
G(83.3, 'tuck', { x: 6.3, dir: 1, rot: -21.99, h: 1.6 });
G(83.64, 'landCrouch', { x: 7.1, dir: 1, rot: -25.13, ease: E.inQuad });
G(83.8, 'landCrouch', { x: 7.1, dir: 1, rot: -25.13 });
G(83.86, 'landCrouch', { x: 7.08, dir: -1, rot: -25.13 });
G(84.2, 'guard', { x: 7.0, dir: -1, rot: -25.13 });
S.sound(B(152), 'swingHeavy', 1);
S.cam(81.1, { x: 3.2, y: 1.05, z: 260 });
S.cam(81.5, { x: 5.4, y: 1.05, z: 300 });
S.cam(82.6, { x: 5.9, y: 1.05, z: 300 });
S.cam(84.0, { x: 6.6, y: 1.2, z: 290 });
// launcher at 85.27, air combo, heel drop, dive: the big crater at 91.55
G(84.9, 'landCrouch', { x: 6.85, dir: -1, rot: -25.13, dh: -0.04 });
G(B(156), 'risingKick', { x: 6.75, dir: -1, rot: -25.13, h: 0.8, ease: E.strike });
spark(B(156), 'footF', { kind: 'red', s: 0.34 });
S.sound(B(156), 'kickHeavy', 1);
S.stop(B(156), 0.08, 0.1);
S.shake(B(156), 14, 0.35);
S.prop(B(156), () => {
  const J = BR.a.joints(S.T(B(156)) - 0.001, S.groundAt);
  return { x: J.handF[0], y: J.handF[1] + 0.5, ang: 1.6, vx: 0.6, vy: 3.5, spin: 6, len: 1.15 * 1.45, w: 0.055 * 1.45, head: 0.36 * 1.45, gone: 99.6 };
});
const LIE = { p: 'hurt', dir: 1 };
const BL = ax(B(156), 'footF', -0.3);
BR.at(84.95, 'eRaise', { x: BL, dir: 1 }).at(B(156), 'eRaise', { x: BL, dir: 1 })
  .at(85.7, 'hurt', { x: plus(BL, -0.1), dir: 1, h: 0.9, rot: 0.6, ease: E.outCubic })
  .at(86.1, 'hurt', { x: plus(BL, -0.2), dir: 1, h: 1.3, rot: 1.2, ease: E.outQuad })
  .at(B(158), 'hurt', { x: ax(B(158), 'handF', -0.22), dir: 1, h: ay(B(158), 'handF', -0.55, 1.45), rot: 1.5 })
  .at(B(158) + 0.04, 'hurt', { x: ax(B(158), 'handF', -0.32), dir: 1, h: ay(B(158), 'handF', -0.45, 1.45), rot: 1.7, ease: E.outExpo })
  .at(86.93, 'hurt', { x: ax(86.93, 'footB', -0.22), dir: 1, h: ay(86.93, 'footB', -0.5, 1.45), rot: 2.2 })
  .at(86.97, 'hurt', { x: ax(86.93, 'footB', -0.34), dir: 1, h: ay(86.93, 'footB', -0.42, 1.45), rot: 2.4, ease: E.outExpo })
  .at(B(160), 'hurt', { x: ax(B(160), 'footF', -0.22), dir: 1, h: ay(B(160), 'footF', -0.5, 1.45), rot: 2.8 })
  .at(B(160) + 0.04, 'hurt', { x: ax(B(160), 'footF', -0.45), dir: 1, h: ay(B(160), 'footF', -0.4, 1.45), rot: 3.1, ease: E.outExpo })
  .at(88.6, 'hurt', { x: ax(89.36, 'footF', 0.02), dir: 1, h: plus(ay(89.36, 'footF', -0.3, 1.45), 0.08), rot: 3.8, ease: E.outQuad })
  .at(89.36, 'hurt', { x: ax(89.36, 'footF', 0), dir: 1, h: ay(89.36, 'footF', -0.3, 1.45), rot: 4.3 })
  .at(B(164), 'eLie', { x: 4.95, dir: 1, rot: 4.71, ease: E.inCubic })
  .at(91.5, 'eLie', { x: 4.95, dir: 1, rot: 4.71 });
void LIE;
G(86.0, 'landCrouch', { x: 6.72, dir: -1, rot: -25.13, dh: -0.08 });
G(86.25, 'jumpRise', { x: 6.65, dir: -1, rot: -25.13, h: 1.9, ease: E.outQuad });
G(B(158), 'jab', { x: 6.55, dir: -1, rot: -25.13, h: 2.15, fB: null, fF: null, lB: [-0.3, 0.9], lF: [0.9, 1.5], ease: E.strike });
G(86.72, 'tuck', { x: 6.45, dir: -1, rot: -25.13, h: 2.35 });
G(86.93, 'airKick2', { x: 6.4, dir: -1, rot: -25.13, h: 2.45, ease: E.strike });
G(87.2, 'kickChamber', { x: 6.2, dir: -1, rot: -25.13, h: 2.6, fB: null, lB: [-0.2, 0.6] });
G(B(160), 'airKick', { x: 6.0, dir: -1, rot: -25.13, h: 2.75, ease: E.strike });
[[B(158), 'handF', 0.2], [86.93, 'footB', 0.24], [B(160), 'footF', 0.3]].forEach(([t, at, s]) => {
  spark(t, at, { kind: 'red', s });
  S.sound(t, at === 'handF' ? 'punchHeavy' : 'kickHeavy', 1);
  S.shake(t, 8, 0.2);
});
G(88.1, 'tuck', { x: 5.6, dir: -1, rot: -28.27, h: 3.3 });
G(88.8, 'tuck', { x: 5.2, dir: -1, rot: -31.42, h: 3.65 });
G(89.15, 'axeUp', { x: 5.1, dir: -1, rot: -31.42, h: 3.5, fB: null, lB: [-0.3, 0.5] });
G(89.36, 'heelDrop', { x: 5.05, dir: -1, rot: -31.42, h: 3.35, ease: E.strike });
spark(89.36, 'footF', { kind: 'red', s: 0.34 });
S.sound(89.36, 'kickHeavy', 1);
S.stop(89.36, 0.07, 0.08);
S.crater(B(164), 4.95, 0.7, { D: 0.16 });
S.debris(B(164), { x: 4.95, n: 24, speed: 4, up: 5, size: 0.08 });
S.dust(B(164), { x: 4.95, n: 14, ring: true, r: 0.1, speed: 2.4, life: 1.2 });
S.shake(B(164), 18, 0.45);
S.sound(B(164), 'crater', 1);
// hang in the air, gather wind, dive
S.slow(89.7, 90.45, 0.45);
G(89.9, 'tuck', { x: 5.08, dir: -1, rot: -31.42, h: 3.75, ease: E.outCubic });
G(90.4, 'tuck', { x: 5.1, dir: -1, rot: -31.42, h: 3.85 });
G(90.6, 'diveKick', { x: 5.12, dir: -1, h: 3.6, ease: E.inOutSine });
G(91.3, 'diveKick', { x: 5.05, dir: -1, h: 2.4, ease: E.inQuad });
G(91.55, 'diveKick', { x: 5.0, dir: -1, h: 0.55, ease: E.linear });
G(91.7, 'superLand', { x: 5.05, dir: -1, ease: E.outCubic });
S.face(89.7, 'red');
S.vortex(89.75, () => ({ x: (tt) => S.gJ(89.9).pelvis[0], y0: S.gJ(89.9).pelvis[1] - 0.6, h: 1.1, R: 0.55, life: 1.5, spin: 12, bands: 5, red: true, rise: 0.6 }));
S.motes(89.8, { x: 5.0, y: 3.5, n: 16, w: 0.8, h: 0.8, spread: 0.8, red: 0.6 });
S.sound(89.7, 'windRise', 1);
S.speedLines(90.95, 91.55, { focus: (tt) => S.girl.joints(tt, S.groundAt).pelvis, ang: -Math.PI / 2 - 0.15, R: 0.5, n: 14 });
S.windSmear(90.4, 91.6);
S.cam(85.0, { x: 6.4, y: 1.35, z: 270 });
S.cam(86.3, { x: 6.1, y: 2.2, z: 260 });
S.cam(88.2, { x: 5.6, y: 3.0, z: 270 });
S.cam(89.5, { x: 5.2, y: 3.3, z: 300 });
S.cam(90.4, { x: 5.1, y: 3.55, z: 440 });
S.cam(91.3, { x: 5.0, y: 2.0, z: 250 }, E.inCubic);
S.cam(91.5, { x: 4.95, y: 1.0, z: 230 }, E.linear);
// the big one
const BIG = 91.55;
S.impact(BIG, { frames: [['neg', 2], ['red', 2], ['neg', 2]] });
S.stop(BIG, 0.12, 0.14);
S.crater(BIG, 4.95, 1.6, { D: 0.44, rim: 0.06, cracks: 14 });
S.debris(BIG, { x: 4.95, n: 70, speed: 6.5, up: 8, size: 0.13, spread: 1.6, bigShare: 0.3 });
S.debris(BIG, { x: 4.95, n: 40, speed: 4, up: 5, size: 0.05, spread: 2.2 });
S.dust(BIG, { x: 4.95, n: 26, ring: true, r: 0.14, speed: 4.5, life: 1.8 });
S.dust(BIG, { x: 4.95, n: 8, r: 0.2, speed: 1.2, spread: 1.2, life: 1.8, vy: 0.8, front: true });
S.burst(BIG, { x: 4.95, y: 0, R: 6, flat: 0.28, life: 0.8, w: 0.08, red: true });
S.gust(BIG, { x: 4.95, y: 0.4, strength: 7, radius: 5, dur: 1.2 });
S.shake(BIG, 34, 0.9);
S.sound(BIG, 'craterBig', 1);
S.shockwave(BIG + 0.02, 4.95, 4.2, 5);
S.cam(92.4, { x: 4.4, y: 1.2, z: 210 }, E.outCubic);
BR.at(91.56, 'eLie', { x: 4.95, dir: 1, rot: 4.71 }).at(98.8, 'eLie', { x: 4.95, dir: 1, rot: 4.71 });
G(92.4, 'superLand', { x: 5.05, dir: -1 });
G(92.8, 'guard', { x: 4.8, dir: -1 });

// =================================================================== 6b: crimson storm
S.face(92.8, 'red');
G(93.05, 'dash', { x: 3.4, dir: -1, ease: E.inCubic });
G(93.45, 'dash', { x: 0.9, dir: -1 });
G(93.7, 'guard', { x: 0.5, dir: -1, ease: E.outCubic });
S.ghost(92.95, 93.55);
G(B(172), 'frontPower', { x: 0.5, dir: 1, ease: E.outCubic });
G(97.1, 'frontPower', { x: 0.5, dir: 1, dhead: -0.1 });
S.callout(B(172), '紅嵐', 'CRIMSON STORM', 'left', { dur: 1.8 });
S.vortex(B(172), { x: 0.25, y0: 0.0, h: 5.2, R: 2.6, life: 3.55, spin: 5.5, bands: 16, red: true, funnel: true, rise: 0.22, w: 2.6 });
S.windVortex(B(172), 97.4, 0.25, 4, 3.5);
S.motes(B(172), { x: 0.25, y: 0.1, n: 40, w: 5, h: 3, spread: 3, red: 0.5 });
S.sound(B(172), 'storm', 1);
S.cam(93.3, { x: 1.5, y: 1.2, z: 220 });
S.cam(B(172), { x: 0.3, y: 2.0, z: 150 }, E.inOutCubic);
S.cam(97.2, { x: 0.3, y: 2.1, z: 140, r: 0.0 });
// eight more rush in and are caught
const RUSH = [-8.5, -7.3, -6.2, -9.6, 7.2, 8.4, 9.5, 6.4].map((x, i) => mk({ x, dir: x < 0 ? 1 : -1, name: 'Q' + i }));
RUSH.forEach((f, i) => {
  const x0 = [-8.5, -7.3, -6.2, -9.6, 7.2, 8.4, 9.5, 6.4][i];
  const dir = x0 < 0 ? 1 : -1;
  f.appear(92.3).at(92.3, 'eRun', { x: x0, dir }).run(94.3 + (i % 4) * 0.12, x0 * 0.33);
  f.orbit(94.3 + (i % 4) * 0.12, { cx: 0.25, r1: 1.6 + (i % 4) * 0.45, y1: 1.0 + i * 0.42, w: 5 + (i % 3) * 0.7, spin: 3 + (i % 2) * 2, rise: 1.2, ccw: false });
});

// ash at the drop: everyone in the storm (and anyone lying around) turns to ash
S.fade(B(178) - 0.01, 0);
S.fade(B(178) + 0.05, 0.85);
S.fade(97.7, 0);
S.burst(B(178), { x: 0.25, y: 0.02, R: 7, flat: 0.28, life: 0.9, w: 0.08, red: true });
S.gust(B(178), { x: 0.25, y: 1.5, strength: 5, radius: 8, dur: 2.2 });
S.shake(B(178), 20, 0.6);
S.sound(B(178), 'blast', 1);
S.sound(B(178) + 0.1, 'ash', 1);
for (let i = 0; i < 8; i++) {
  const a = (i / 8) * Math.PI * 2;
  S.wisp(B(178) + (i % 3) * 0.04, { x: 0.25 + Math.cos(a) * 1.2, y: 2.0 + Math.sin(a) * 1.2, ang: a, len: 1.6, w: 0.035, life: 1.0, red: i % 2 === 1 });
}

// =================================================================== 7: quiet, the brute's last stand
const FIN_T = 100.82;
G(98.2, 'frontPower', { x: 0.5, dir: 1 });
G(98.6, 'standSoft', { x: 0.5, dir: 1 });
G(99.4, 'guard', { x: 0.55, dir: 1 });
S.face(98.4, 'red');
S.cam(97.9, { x: 1.6, y: 1.3, z: 200 });
S.cam(99.4, { x: 2.8, y: 1.1, z: 240 });
BR.at(B(181), 'eKnee', { x: 4.95, dir: -1, ease: E.inOutSine }).at(99.45, 'eStand', { x: 5.2, dir: 1 })
  .at(99.6, 'eGrab', { x: 5.35, dir: 1, club: -1.4 }).at(B(183), 'eRoar', { x: 5.3, dir: -1, club: 0.3, ease: E.outBack })
  .at(100.2, 'eRoar', { x: 5.25, dir: -1, club: 0.3 }).run(100.72, 3.3, { stride: 1.1 })
  .at(100.8, 'eRaise', { x: ax(FIN_T, 'footF', 0.18), dir: -1 }).at(FIN_T, 'eRaise', { x: ax(FIN_T, 'footF', 0.18), dir: -1 });
G(100.25, 'guardLow', { x: 0.55, dir: 1, dh: -0.06 });
G(100.55, 'dash', { x: 1.6, dir: 1, ease: E.inCubic });
G(100.66, 'spinOut', { x: 2.1, dir: -1, h: 0.75, fB: null, lB: [0, 0.3] });
G(100.82, 'spinBack', { x: 2.35, dir: -1, h: 0.82, fB: null, lB: [-0.3, 0.6], lF: [2.6, 0.05], ease: E.strike });
G(101.1, 'spinBack', { x: 2.4, dir: -1, h: 0.8, fB: null, lB: [-0.3, 0.6], lF: [2.6, 0.05] });
G(101.4, 'landCrouch', { x: 2.45, dir: 1, ease: E.inQuad });
G(102.0, 'standSoft', { x: 2.45, dir: 1, dhead: -0.4 });
S.ghost(100.4, 100.8);
S.speedLines(100.45, 100.8, { focus: (tt) => S.girl.joints(tt, S.groundAt).pelvis, ang: 0, R: 0.5, n: 12 });
S.windSmear(100.6, 100.95);
const FIN = 100.82;
S.impact(FIN, { frames: [['neg', 2], ['red', 2], ['neg', 1]] });
S.stop(FIN, 0.12, 0.12);
S.shake(FIN, 26, 0.6);
S.sound(FIN, 'finisher', 1);
spark(FIN, 'footF', { kind: 'red', s: 0.5, n: 14 });
S.burst(FIN, () => { const p = S.gP(FIN, 'footF'); return { x: p[0], y: p[1], R: 1.1, flat: 1, life: 0.35, w: 0.06, red: true }; });
S.burst(FIN, { x: 2.8, y: 0, R: 4, flat: 0.28, life: 0.7, w: 0.06 });
BR.knock(FIN, { vx: 3.6, vy: 7.8, spin: -5 });
BR.a.weapon.hide.push([FIN, 999]);
S.prop(FIN, { x: 3.4, y: 1.6, ang: 2.2, vx: 2.5, vy: 4, spin: -8, len: 1.15 * 1.45, w: 0.055 * 1.45, head: 0.36 * 1.45 });
BR.ash(B(186) - 0.1, 0.9, [0.2, 1], { vx: 0.6, vy: 0.3, life: 3.0 });
S.cam(100.5, { x: 2.3, y: 1.05, z: 280 });
S.cam(FIN, { x: 2.6, y: 1.15, z: 300 });
S.cam(101.8, { x: 3.6, y: 2.3, z: 210 }, E.outCubic);

// =================================================================== 8: back to the flower
S.cam(103.2, { x: 1.5, y: 1.1, z: 230 });
G(102.6, 'standSoft', { x: 2.45, dir: -1 });
S.gWalk(104.55, 0.34, { dir: -1 });
G(B(192), 'kneelFlower', { x: 0.32, dir: -1, ease: E.inOutCubic });
G(106.1, 'kneeTouch', { x: 0.32, dir: -1 });
S.face(102.0, 'normal');
S.face(B(192), 'soft');
S.letterbox(104.7, 0);
S.letterbox(105.3, 1);
S.cam(B(192), { x: 0.25, y: 0.45, z: 480 });
S.cam(106.4, { x: 0.14, y: 0.36, z: 640 });
S.say(105.3, 106.5, '……よかった。', '…Thank goodness.');
S.wisp(105.2, { x: -0.5, y: 0.15, ang: 0.2, len: 0.6, w: 0.014, life: 2.0 });
// she notices us
G(106.72, 'kneeTouch', { x: 0.32, dir: -1, dhead: -0.2 });
G(106.95, 'frontFluster', { x: 0.36, dir: 1, ease: E.outCubic });
G(108.4, 'frontFluster', { x: 0.36, dir: 1, dhead: 0.08 });
G(108.8, 'frontArmsCrossed', { x: 0.36, dir: 1 });
G(110.2, 'frontArmsCrossed', { x: 0.36, dir: 1 });
S.face(106.9, 'wide', 1, 'shout');
S.face(108.7, 'angry', 1, 'pout');
S.cut(106.93, { x: 0.36, y: 0.74, z: 700 });
S.cam(108.5, { x: 0.36, y: 0.76, z: 740 });
S.say(107.0, 108.7, 'な、何見てんのよ！ バカ！', 'Wh-what are you looking at?! Idiot!');
S.seal = { t: 108.75, x: 0.86, y: 0.78, en: 'IRON AND ASH' };
S.sound(108.75, 'stamp', 0.9);
S.letterbox(106.9, 1);
S.fade(109.3, 0);
S.fade(110.2, 1);

// =================================================================== the storm takes the fallen
// every minion knocked down before the storm is pulled in and burns to ash at the drop
for (const f of FOES) {
  if (f === BR) continue;
  if (f.ashSpec) continue;
  const lastKnock = f.knocks.length ? Math.max(...f.knocks.map((k) => k.t)) : null;
  const inStorm = RUSH.includes(f);
  if (!inStorm && lastKnock != null && lastKnock < 94) {
    const k = FOES.indexOf(f);
    f.orbit(94.35 + (k % 9) * 0.13, { cx: 0.25, r1: 1.5 + (k % 5) * 0.4, y1: 0.8 + (k % 11) * 0.36, w: 4.5 + (k % 4) * 0.5, spin: 2 + (k % 3), rise: 1.3, maxDist: 6.5 });
  }
  if (inStorm || lastKnock != null) f.ash(B(178) + (FOES.indexOf(f) % 7) * 0.03, 0.6, [1, 0.3], { vx: 0, vy: 0.2, life: 2.8 });
}

// movement sounds: a swish just before every strike, a whoosh on every dash
for (const k of S.gk) {
  if (k.ease === E.strike) S.sound(k.t - 0.07, 'swish', 0.55);
  if (k.p === 'dash') S.sound(k.t - 0.1, 'dash', 0.5);
}
for (const [a] of S.ghostWin) S.sound(a, 'dash', 0.6);

export default S.build();
