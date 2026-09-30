// SG vs 67 — the whole film, authored in song time on a 140 BPM grid.
//   Intro   bars 0-8    hawker centre: SG chopes a table, 67 sits there anyway
//   Drop A  bars 8-24   plaza fight, SIX-SEVEN SCALES, CHOPE!, the DUNK, up BLK 67
//   Break   bars 24-28  GIANT 67 rises over the rooftop
//   Drop B  bars 28-44  the giant wrecks BLK 67, KIASU MODE, QUEUE RUSH
//   Finale  bars 44-48  LION CITY ROAR vs SIX-SEVEN HELIX beam clash
//   Outro   bars 48-54  the table survives; an auntie chopes it
import { Story } from './director.js';
import { SG as SGC, P67 } from './chars.js';
import { rng, lerp, clamp, E } from './util.js';

const S = new Story({ duration: 92.5, bpm: 140 });
const B = (b, k = 0) => S.bar(b, k);
const BEAT = S.beatLen;

// ------------------------------------------------------------------ the estate
const TABLE_X = -6;
{
  const rnd = rng(1965);
  const accents = ['#e0a33c', '#8ab17d', '#6fb3c6', '#d4a373', '#90a4c8', '#e76f51', '#b7a3d9'];
  for (let x = -96; x < 110; x += 15 + rnd() * 5) {
    S.city.addBlock({ layer: 'far', x, w: 10 + rnd() * 4, floors: 14 + Math.floor(rnd() * 10), accent: accents[Math.floor(rnd() * accents.length)] });
  }
}
const BLK68 = S.city.addBlock({ layer: 'mid', x: -36, w: 15, floors: 13, accent: '#8ab17d', no: '68' });
S.city.addBlock({ layer: 'mid', x: 36, w: 14, floors: 14, accent: '#90a4c8', no: '69' });
S.city.addBlock({ layer: 'mid', x: 55, w: 13, floors: 12, accent: '#d4a373', no: '70' });
const BLK67 = S.city.addBlock({ layer: 'fight', x: 13, w: 14, floors: 12, y0: 1.4, accent: '#e0a33c', no: '67' });
S.hawker = [-15, 3];
S.trees = [
  { layer: 'mid', x: -21, s: 1.2, seed: 3 },
  { layer: 'midFront', x: 7, s: 1.1, seed: 5 },
  { layer: 'mid', x: 27, s: 1.3, seed: 8 },
];
S.foreLamps = [-19, 6];
S.sunAt = () => ({ x: 26, y: 34, r: 4.2, col: '#fff1d0', a: 1 });
S.sky(0, '#fffdf8', '#f3eee3');

S.prop({
  kind: 'table', x: TABLE_X,
  state: (tau) => ({ tissue: tau >= S.T(2.78), tissueX: 0.12, plate: tau >= S.T(11.36), plateX: -0.16 }),
});

// ------------------------------------------------------------------ the cast
// 67 is built first: some of SG's moves are placed on 67's body
const P = S.fighter('67', { kind: '67', scale: 1.18, x: -15, dir: 1, seed: 6 });
const G = S.fighter('SG', { kind: 'sg', scale: 1, x: -13, dir: 1, seed: 2 });

// ================================================================== INTRO
S.letterbox(0, 1);
S.letterbox(B(7, 3), 1);
S.letterbox(B(8), 0);
S.cut(0, { x: 7, y: 17, z: 38 });
S.cam(1.1, { x: 5, y: 14.5, z: 40 });
S.cam(3.3, { x: -5.4, y: 1.35, z: 118 });
S.cam(5.2, { x: -6.1, y: 1.2, z: 148 });
S.cam(6.9, { x: -5.5, y: 0.95, z: 205 });
S.cam(8.4, { x: -5.4, y: 0.85, z: 245 });
S.cam(10.2, { x: -5.45, y: 0.82, z: 262 });
S.cam(11.2, { x: -5.6, y: 0.9, z: 250 });
S.cam(12.0, { x: -5.9, y: 1.45, z: 275 });
S.punch(8.48, 0.07);

// SG strolls in and chopes the table with a flick of a tissue packet
G.at(0, 'stand', { x: -13, dir: 1 });
G.walk(2.05, -7.55);
G.at(2.2, 'stand');
G.at(2.36, 'flickWind');
G.at(2.5, 'flick');
G.at(2.9, 'thumb');
G.at(3.3, 'stand');
G.walk(5.5, 3.2);
G.at(5.7, 'stand', { dir: -1 });
G.at(6.8, 'carry', { x: 3.0, dir: -1 });
G.walk(8.3, -4.35, { p: 'carry' });
G.at(8.36, 'carry');
G.at(8.5, 'shock').face(8.5, 'wide');
G.at(8.95, 'carry', { aB: [1.45, 0.05], aBz: 0.2 }).face(8.95, 'angry', 'shout');
G.at(10.0, 'carry', { aB: [1.4, 0.1], aBz: 0.2 });
G.at(10.35, 'carry').face(10.3, 'wide');
G.at(10.95, 'carry').face(10.95, 'angry', 'shout');
G.at(11.2, 'placePlate');
G.at(11.36, 'placePlate');
G.at(11.7, 'stand');
G.at(11.95, 'crackKnuckles').face(11.95, 'angry');
G.at(13.2, 'crackKnuckles');
S.packet(2.52, 2.78, () => G.P(2.52, 'handF'), [TABLE_X + 0.12, 0.66], { arc: 0.5, spin: 26 });
S.hold(G, 6.8, 11.36);
S.sound(2.5, 'flick');
S.sound(2.78, 'tick', 0.6);

// 67 wanders in, ignores the tissue packet and sits down
P.at(0, 'stand', { x: -15, dir: 1 });
P.at(3.4, 'stand', { x: -15 });
P.walk(5.3, -6.62);
P.at(5.45, 'stand');
P.at(5.85, 'sit', { x: -6.62 });
P.at(6.15, 'sitGesture', { yaw: 0.95, g67: 1 });
P.at(7.6, 'sitGesture', { yaw: 0.95, g67: 1 });
P.at(8.0, 'sit', { yaw: 0.3, g67: 0 });
P.at(9.9, 'sit', { yaw: 0.25, headYaw: 0.1 });
P.at(10.1, 'sitGesture', { yaw: 0.35, g67: 1 });
P.at(10.9, 'sitGesture', { yaw: 0.3, g67: 1 });
P.at(11.2, 'sit', { yaw: 0.2, g67: 0 });
P.at(11.95, 'standTall', { x: -6.9, dir: 1 });
P.at(13.2, 'standTall');
P.face(0, 'normal').face(6.1, 'shut').face(7.6, 'normal').face(10.1, 'shut').face(10.9, 'normal');

S.say(6.2, 7.5, 67, '6… 7…');
S.say(8.6, 10.0, 'sg', 'Oi! This table I chope already leh!', { gloss: 'chope (v.): to reserve a seat by leaving a packet of tissue on it' });
S.say(10.1, 10.85, 67, '6… 7!');
S.say(10.95, 12.0, 'sg', 'Walao eh… you want to fight is it?!');

// VS card on bar 7
S.vs = { t0: B(7), t1: B(7, 3.6) };
S.sound(B(7), 'vs');

// ------------------------------------------------------------------ helpers
const pt = (a) => (typeof a === 'function' ? a() : a);
const midpt = (a, b, k = 0.5) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
const INKHIT = { col: '#141414', inner: '#ffffff', ring: SGC.main };
const GOLDHIT = { col: P67.deep, inner: P67.gold, ring: P67.main };
const GOLD_AURA = { outer: 'rgba(255,198,41,0.32)', mid: 'rgba(255,214,102,0.55)', core: 'rgba(255,248,214,0.85)' };
const RED_AURA = { outer: 'rgba(227,36,43,0.35)', mid: 'rgba(255,106,92,0.6)', core: 'rgba(255,240,236,0.9)' };
const whoosh = (t, g = 0.5) => S.sound(t, 'whoosh', g);

/** effects of a landed blow at `at` ([x, y] or fn); k = 0 (tap) .. 3 (huge) */
function fxHit(t, at, k = 1, o = {}) {
  const style = o.by === 67 ? GOLDHIT : INKHIT;
  const sc = o.scale ?? 1;
  S.spark(t, () => { const p = pt(at); return { x: p[0], y: p[1], s: (0.2 + 0.1 * k) * sc, ang: o.ang ?? 0.3, n: 9 + 2 * k, life: 0.12 + 0.035 * k, ...style }; });
  if (k >= 1 && !o.noStop) S.stop(t, o.stop?.[0] ?? 0.025 + 0.025 * k, o.stop?.[1] ?? 0.1 + 0.05 * k);
  S.shake(t, (4 + 7 * k) * (o.shake ?? 1), 0.2 + 0.08 * k);
  if (k >= 2) S.punch(t, 0.025 + 0.02 * k);
  if (k >= 3 && !o.noFlash) S.impact(t, o.by === 67 ? [['neg', 2], ['purple', 2], ['neg', 1]] : [['neg', 2], ['red', 2], ['neg', 1]]);
  S.sound(t, o.snd ?? (k >= 3 ? 'smash' : k >= 2 ? 'heavy' : k >= 1 ? 'punch' : 'tap'), o.gain ?? 0.5 + 0.17 * k);
  if (k >= 2 || o.ring) {
    S.burst(t, () => { const p = pt(at); return { x: p[0], y: p[1], R: (0.4 + 0.3 * k) * sc, life: 0.3 + 0.05 * k, flat: 0.85, w: 0.05 * sc, col: style.ring, col2: '#ffffff' }; });
  }
}
/** f's limb lands on target's body part at t (aligned), with hit effects */
function strike(t, f, limb, target, part, k = 1, o = {}) {
  const at = S.blow(t, f, limb, target, part, o);
  fxHit(t, at, k, { by: f === P ? 67 : 'sg', ...o });
  return at;
}
/** crater + debris + dust + shake */
function slam(t, x, R, o = {}) {
  S.crater(t, x, R, o);
  S.debris(t, () => ({ x: pt(x), n: Math.round(R * 22), speed: 2 + R * 2.4, up: 3 + R * 3, size: 0.05 + R * 0.035, spread: R * 0.6 }));
  S.dust(t, () => ({ x: pt(x), n: Math.round(8 + R * 8), ring: true, r: 0.06 + R * 0.045, speed: 1.4 + R * 2, life: 0.8 + R * 0.35 }));
  S.dust(t, () => ({ x: pt(x), n: 3, r: 0.07 + R * 0.04, speed: 0.8, spread: 0.6, life: 0.9, vy: 0.5, front: true }));
  S.shake(t, 10 + R * 11, 0.45);
  S.sound(t, R > 1.4 ? 'craterBig' : 'crater', 1);
}
/** a flying 6 or 7 fired from `from` that explodes at `to` */
function numeral(t0, t1, from, to, digit, o = {}) {
  const big = o.big ?? 1;
  S.number(t0, t1, from, to, digit, { size: 0.42 * big, spread: o.spread, lift: o.lift });
  const at = () => pt(to);
  S.burst(t1, () => { const p = at(); return { x: p[0], y: Math.max(0.05, p[1]), R: 0.8 * big, life: 0.35, flat: 0.55, w: 0.07 * big, col: P67.gold, col2: '#ffffff' }; });
  S.spark(t1, () => { const p = at(); return { x: p[0], y: Math.max(0.12, p[1]), s: 0.34 * big, n: 11, life: 0.18, ...GOLDHIT }; });
  if (o.ground !== false) {
    S.crack(t1, () => at()[0], 0, Math.PI * (t1 % 1), 0.5 * big, { grow: 0.15 });
    S.debris(t1, () => ({ x: at()[0], n: Math.round(7 * big), speed: 2.4, up: 3.2, size: 0.05 * big, spread: 0.2 }));
    S.dust(t1, () => ({ x: at()[0], n: 5, r: 0.08 * big, speed: 1.4, spread: 0.8, life: 0.7 }));
  }
  S.shake(t1, 5 * big, 0.25);
  S.sound(t0, 'numFire', 0.3);
  S.sound(t1, 'numHit', 0.55 * big);
}
const skidDust = (t, f, n = 4) => S.dust(t, () => ({ x: f.P(t, 'footF')[0], n, r: 0.06, speed: 0.9, spread: 0.5, life: 0.6 }));

// ================================================================== DROP A: bars 8-16
// under the VS card both move to the open plaza
S.cut(13.4, { x: 1.7, y: 1.05, z: 172 });
G.at(13.3, 'guard', { x: 4.9, dir: -1, interp: 'step' }).face(13.3, 'angry');
P.at(13.3, 'guard', { x: -1.0, dir: 1, interp: 'step' }).face(13.3, 'normal');

// ---- the first clash (downbeat of the drop)
G.at(B(8), 'guard', { x: 4.9 });
G.at(B(8, 0.3), 'dash', { x: 3.7 }).ghost(B(8), 13.95);
G.at(13.93, 'bigPunch', { x: 2.05, interp: 'in' }).face(13.93, 'angry', 'shout');
P.at(B(8), 'guard', { x: -1.0 });
P.at(B(8, 0.3), 'dash', { x: 0.1 }).ghost(B(8), 13.95);
P.at(13.93, 'bigPunch', { x: 0.95, interp: 'in' });
fxHit(13.93, () => midpt(G.P(13.93, 'handF'), P.P(13.93, 'handF')), 3, { snd: 'clash', stop: [0.14, 0.26] });
S.burst(13.93, { x: 1.55, y: 0.02, R: 3.4, life: 0.55, flat: 0.28, w: 0.1, col: '#141414', col2: '#ffffff' });
S.dust(13.93, { x: 1.55, n: 18, ring: true, r: 0.1, speed: 3.4, life: 1.0 });
S.crack(13.95, 1.25, 0.3, Math.PI + 0.3, 1.8);
S.crack(13.95, 1.85, -0.2, -0.2, 1.8);
S.shake(13.93, 18, 0.5);
S.cam(13.93, { x: 1.55, y: 0.95, z: 245, r: -0.03 });
S.cam(14.45, { x: 1.8, y: 0.95, z: 250, r: 0 });
G.at(14.16, 'skid', { x: 2.85 });
P.at(14.16, 'skid', { x: 0.25 });
skidDust(14.05, G); skidDust(14.05, P);

// ---- 67's reach: jab, roundhouse; SG slips, ducks, knees
P.at(14.28, 'guard', { x: 0.45 });
P.at(14.36, 'jab', { x: 1.25, interp: 'in' });
whoosh(14.32);
G.at(14.28, 'guard', { x: 2.8 });
G.at(14.36, 'guard', { x: 2.95, lean: -0.32, head: -0.4 });
P.at(14.47, 'kickChamber', { x: 1.2 });
P.at(14.57, 'roundhouse', { x: 1.3, interp: 'in' });
whoosh(14.52, 0.6);
G.at(14.5, 'guard', { x: 2.9 });
G.at(14.57, 'landCrouch', { x: 2.9 });
G.at(14.7, 'guardLow', { x: 2.5 });
G.at(14.84, 'flyingKnee', { x: 1.45, h: 0.75, interp: 'in' });
P.at(14.72, 'guard', { x: 1.1 });
P.at(14.84, 'blockX', { x: 1.0 });
strike(14.84, G, 'kneeF', P, 'guard', 1);
// spinning back kick through SG's block
P.at(14.95, 'guard', { x: 1.0, yaw: 0 });
P.at(15.04, 'kickChamber', { x: 1.5, yaw: Math.PI * 1.15 });
P.at(15.14, 'spinBack', { x: 1.85, yaw: Math.PI * 2, interp: 'in' });
whoosh(15.05, 0.7);
G.at(14.98, 'landCrouch', { x: 2.1 });
G.at(15.08, 'blockX', { x: 2.3 });
strike(15.14, P, 'footF', G, 'guard', 2);
G.at(15.2, 'blockX', { x: 2.65 });
G.at(15.5, 'skid', { x: 4.3 });
for (const t of [15.22, 15.32, 15.42]) skidDust(t, G, 2);

// ---- bar 9: SG's jab-cross-sweep, 67's axe kick cracks the paving
G.at(15.62, 'dash', { x: 3.5 }).ghost(15.55, 15.8);
G.at(15.75, 'jab', { x: 2.0, interp: 'in' });
P.at(15.62, 'guard', { x: 1.35, dir: 1 });
P.at(15.75, 'blockX', { x: 1.3 });
strike(15.75, G, 'handF', P, 'guard', 0);
G.at(15.8, 'guard', { x: 2.2 });
G.at(15.86, 'cross', { x: 2.1, interp: 'in' });
P.at(15.86, 'guard', { x: 1.2, lean: -0.25, head: -0.3 });
whoosh(15.83, 0.4);
G.at(15.98, 'guardLow', { x: 2.5 });
G.at(16.07, 'sweep', { x: 2.35, interp: 'in' });
whoosh(16.03);
P.at(15.98, 'guardLow', { x: 1.25 });
P.at(16.14, 'jumpRise', { x: 1.5, h: 1.25, interp: 'out' });
P.at(16.26, 'axeUp', { x: 1.9, h: 1.45 });
P.at(16.45, 'axeDown', { x: 2.35, h: 0.5, interp: 'in' });
whoosh(16.36, 0.8);
G.at(16.2, 'tuck', { x: 3.1, h: 0.95, drot: -2.4 });
G.at(16.4, 'tuck', { x: 3.9, h: 0.95, drot: -2.2 });
G.at(16.62, 'landCrouch', { x: 4.6, rot: -2 * Math.PI });
slam(16.45, () => P.P(16.45, 'footF')[0], 0.8);
fxHit(16.45, () => P.P(16.45, 'footF'), 2, { by: 67 });
P.at(16.62, 'landCrouch', { x: 2.35 });
P.at(16.95, 'guard', { x: 2.0 });
G.at(16.95, 'guard', { x: 5.0 });
S.cam(15.2, { x: 2.3, y: 0.95, z: 238 });
S.cam(15.6, { x: 2.7, y: 0.95, z: 215 });
S.cam(16.45, { x: 3.0, y: 1.0, z: 200, r: 0.025 });
S.cam(17.1, { x: 3.2, y: 1.1, z: 172, r: 0 });

// ---- bars 10-11: SIX-SEVEN SCALES, an Itano circus of 6s and 7s
P.at(17.2, 'guardLow', { x: 1.9 });
P.at(17.38, 'jumpRise', { x: 0.9, h: 0.9, interp: 'out' });
P.at(17.56, 'sixSeven', { x: -0.3, dir: 1 }).face(17.56, 'glow');
P.at(17.7, 'sixSeven', { g67: 1.4 });
P.at(19.95, 'sixSeven', { g67: 1.4 });
P.at(20.1, 'guard', { g67: 0 }).face(20.1, 'normal');
S.aura(17.6, 20.1, P, GOLD_AURA);
S.callout(17.5, 67, '六七天秤', 'SIX-SEVEN SCALES', { side: 'left' });
S.say(17.75, 18.55, 67, 'Six! Seven! Six! Seven!');
S.sound(17.56, 'charge', 0.7);
G.at(17.2, 'guard', { x: 5.0 });
G.at(17.42, 'dash', { x: 5.4, dir: 1 });
G.run(18.3, 10.0, { dir: 1 });
G.at(18.48, 'skid', { x: 10.6, dir: 1 });
skidDust(18.45, G, 5);
G.at(18.64, 'dash', { x: 10.1, dir: -1 });
G.run(19.05, 7.5, { dir: -1 });
G.at(19.25, 'jumpRise', { x: 6.7, h: 1.0 });
G.at(19.42, 'tuck', { x: 5.9, h: 0.9 });
G.at(19.56, 'landCrouch', { x: 5.3 });
G.at(19.72, 'handSkid', { x: 4.2 });
G.at(19.88, 'handSkid', { x: 3.3 });
G.at(20.02, 'dash', { x: 2.3 });
S.say(18.65, 19.55, 'sg', 'Can or not?!');
for (const t of [19.66, 19.76, 19.86]) skidDust(t, G, 2);
for (let k = 0; k < 11; k++) {
  const t0 = B(10, 1.5) + (k * BEAT) / 2, t1 = t0 + 0.56;
  const hand = k % 2 ? 'handF' : 'handB';
  const off = 0.55 + (k % 3) * 0.3;
  const over = k === 9; // this one skims over SG's slide
  numeral(t0, t1, () => P.P(t0, hand), () => {
    const g = G.P(t1);
    const d = G.Js(t1).pose.dir;
    return over ? [g[0] + 1.4, 0.05] : [g[0] - d * off, 0.05];
  }, k % 2 ? '7' : '6', { lift: over ? 0.4 : 1.8, big: 1.6 });
}
S.cam(17.5, { x: 3.4, y: 1.4, z: 128 });
S.cam(18.45, { x: 5.6, y: 1.5, z: 112 });
S.cam(19.4, { x: 4.0, y: 1.3, z: 122 });
S.cam(20.2, { x: 1.2, y: 1.0, z: 205 });

// ---- bars 12-13: CHOPE! three tissue packets seal 67; SG's combo
P.at(20.2, 'guard', { x: -0.2 });
P.at(20.3, 'swat', { x: 0.1, interp: 'in' });
whoosh(20.27, 0.6);
G.at(20.15, 'dash', { x: 1.9 });
G.at(20.3, 'landCrouch', { x: 1.5 });
G.arc(20.55, 'flickWind', { x: 3.1, jump: 0.35 });
const chopes = [
  { t: 20.72, arrive: 20.86, body: (J) => midpt(J.neck, J.pelvis, 0.35) },
  { t: 20.83, arrive: 20.97, body: (J) => midpt(J.shoulderF, J.elbowF, 0.4) },
  { t: 20.94, arrive: 21.08, body: (J) => midpt(J.hipF, J.kneeF, 0.6) },
];
for (const c of chopes) {
  G.at(c.t - 0.06, 'flickWind');
  G.at(c.t, 'flick', { interp: 'in' });
  S.packet(c.t, c.arrive, () => G.P(c.t, 'handF'), () => c.body(P.Js(c.arrive)), { arc: 0.3, spin: 30, stick: (tau) => c.body(P.J(tau)), tEnd: 25.3 });
  S.sound(c.t, 'flick', 0.7);
  S.sound(c.arrive, 'stick', 0.7);
}
S.callout(20.6, 'sg', '霸位', 'CHOPE!', { side: 'right' });
P.at(20.45, 'guard', { x: 0.0 });
P.at(20.95, 'stagger', { x: -0.1 });
P.at(21.08, 'bound', { x: -0.2 }).face(21.08, 'wide');
S.seal(21.08, 25.3, (tau) => midpt(P.J(tau).neck, P.J(tau).pelvis, 0.4), 0.72);
S.flash(21.08, 'red', 2);
S.sound(21.08, 'seal', 1);
S.shake(21.08, 10, 0.3);
S.say(21.25, 22.6, 'sg', 'Tissue on it means CHOPED already!');
// the combo
G.at(21.35, 'guard', { x: 3.0 });
G.at(21.47, 'dash', { x: 0.9 }).ghost(21.4, 21.6);
const combo = [
  [21.55, 'jab', 'handF', 'chest'], [21.66, 'cross', 'handB', 'chest'],
  [21.76, 'jab', 'handF', 'head'], [21.87, 'cross', 'handB', 'chest'],
];
for (const [t, pose, limb, part] of combo) {
  G.at(t - 0.05, 'guard', { x: 0.55 });
  G.at(t, pose, { x: 0.45, interp: 'in' });
  strike(t, G, limb, P, part, 1, { stop: [0.035, 0.08] });
  P.at(t + 0.02, 'bound', { lean: -0.1 - Math.random() * 0 - 0.06, head: -0.25 });
}
G.at(21.98, 'uppercutLow', { x: 0.5 });
G.at(22.08, 'uppercut', { x: 0.3, interp: 'in' });
strike(22.08, G, 'handF', P, 'head', 2);
P.at(22.1, 'bound', { h: 0.6, lean: -0.3, head: -0.6 });
// spinning heel kick launches the sealed 67
G.at(22.18, 'kickChamber', { x: 0.55, yaw: Math.PI * 2.1 });
G.at(22.29, 'roundhouse', { x: 0.5, yaw: Math.PI * 3, interp: 'in' });
strike(22.29, G, 'footF', P, 'chest', 2);
whoosh(22.22, 0.8);
P.at(22.29, 'hurt', { h: 0.7 });
P.arc(22.75, 'hurt', { x: -1.0, h: 2.9, drot: -1.2 });
P.at(23.14, 'hurt', { x: -1.25, h: 2.75 });
G.at(22.42, 'landCrouch', { x: 0.7 });
G.at(22.62, 'jumpRise', { x: 0.25, h: 1.6, interp: 'out' });
G.at(22.9, 'airKick', { x: -0.95, h: 2.8 });
strike(22.93, G, 'footF', P, 'chest', 1);
G.at(23.05, 'axeUp', { x: -0.95, h: 3.6 });
G.at(23.14, 'heelDrop', { x: -0.95, h: 3.55, interp: 'in' });
strike(23.14, G, 'footF', P, 'chest', 2);
P.at(23.45, 'down', { x: -1.3, interp: 'in' });
slam(23.45, -1.3, 1.6);
fxHit(23.45, [-1.3, 0.15], 3, { snd: 'crater', noStop: false });
G.at(23.38, 'tuck', { x: 0.1, h: 1.7, drot: -3 });
G.at(23.72, 'superLand', { x: 1.3, drot: -3.28 });
S.dust(23.72, { x: 1.3, n: 5, r: 0.06, speed: 1.2, spread: 0.8, life: 0.7 });
S.sound(23.72, 'land', 0.6);
S.cam(20.9, { x: 1.3, y: 1.0, z: 232 });
S.cam(21.5, { x: 0.45, y: 1.0, z: 275, r: -0.02 });
S.cam(22.3, { x: 0.3, y: 1.5, z: 195, r: 0 });
S.cam(23.1, { x: -0.3, y: 2.4, z: 150 });
S.cam(23.5, { x: -0.2, y: 1.15, z: 172 });
S.speed(22.95, 23.5, () => P.P(23.3), { n: 60, clear: 0.3 });

// ---- bars 14-15: the seal breaks; a golden basketball
G.at(24.0, 'guard', { x: 1.6 });
P.at(24.3, 'lieBack', { x: -1.3 });
for (let k = 0; k < 6; k++) {
  const t = 24.25 + k * 0.12;
  S.bolt(t, () => P.P(t, 'neck'), () => { const p = P.P(t, 'neck'); return [p[0] + Math.cos(k * 2.1) * 0.9, p[1] + Math.abs(Math.sin(k * 2.1)) * 0.8]; }, { col: P67.main, life: 0.12 });
}
S.sound(24.3, 'crackle', 0.6);
P.at(24.95, 'lieBack', { x: -1.3 });
P.at(25.3, 'hang', { x: -1.3, h: 0.95 });
S.flash(25.3, 'gold', 2);
S.shake(25.3, 22, 0.5);
S.punch(25.3, 0.06);
S.shatter(25.3, () => P.P(25.3, 'neck')[0], () => P.P(25.3, 'neck')[1] - 0.2, 46, { paper: true, speed: 7, up: 4, w: 0.6, h: 0.8 });
S.burst(25.3, () => { const p = P.P(25.3, 'neck'); return { x: p[0], y: p[1], R: 2.4, life: 0.5, flat: 0.9, w: 0.08, col: P67.gold, col2: '#ffffff' }; });
S.sound(25.3, 'break', 1);
P.face(25.3, 'glow');
P.at(25.5, 'powerUp', { x: -1.3, h: 0.72 });
P.at(25.8, 'powerUp', { x: -1.3 });
S.aura(25.3, 27.3, P, GOLD_AURA);
S.say(25.45, 26.4, 67, 'SIX… SEVEN.', { big: true });
G.at(25.3, 'blockX', { x: 1.8 }).face(25.3, 'wide');
G.at(25.8, 'guard', { x: 2.4 });
const orbPos = (tau) => {
  const t = S.W.inverse(tau);
  const J = P.J(tau);
  const h = [J.handF[0] + 0.05, J.handF[1] + 0.28];
  if (t > 25.98 && t < 26.8) {
    const k = Math.abs(Math.sin((Math.PI * (t - 26.14)) / BEAT));
    return [h[0] + 0.12, lerp(0.28, h[1] - 0.08, k)];
  }
  return h;
};
S.orb(25.9, 28.12, orbPos, (tau) => lerp(0.28, 0.85, clamp((S.W.inverse(tau) - 27.2) / 0.6)));
P.at(26.0, 'dribble', { x: -1.1 });
P.at(26.8, 'dribble', { x: -0.9 });
S.sound(26.14, 'doot', 0.9);
S.sound(26.57, 'doot', 0.9);
S.callout(26.57, 67, '灌篮', 'DOOT DOOT DUNK', { side: 'left' });
G.at(26.9, 'guard', { x: 3.6 });
P.at(27.02, 'chargeLow', { x: -0.9 });
P.at(27.25, 'dunkUp', { x: 0.5, h: 3.3, interp: 'out' });
P.at(27.75, 'dunkUp', { x: 2.6, h: 9.6 });
S.sound(27.2, 'jump', 0.8);
S.cam(24.2, { x: 0.2, y: 1.0, z: 210 });
S.cam(25.3, { x: -0.3, y: 1.2, z: 235 });
S.cam(26.4, { x: 0.5, y: 1.1, z: 222 });
S.cam(27.1, { x: 1.0, y: 1.8, z: 140 });

// ================================================================== bars 16-17: THE DUNK
G.at(27.5, 'lookUpStand', { x: 4.4, dir: -1 }).face(27.5, 'wide');
G.at(27.95, 'lookUpStand', { x: 4.4 });
P.at(28.1, 'dunkDown', { x: 3.3, h: 1.1, interp: 'in' });
const DUNK_X = 3.9;
S.dome(28.1, DUNK_X, 5.5, { col: P67.gold, col2: P67.main, life: 0.85 });
S.blast(28.1, DUNK_X, 0.4, 2.6, { cols: ['#ffffff', '#ffe08a', P67.main], life: 0.6, rays: 12 });
slam(28.1, DUNK_X, 2.6);
fxHit(28.1, [DUNK_X, 0.3], 3, { by: 67, snd: 'dunk', stop: [0.12, 0.3] });
S.shake(28.1, 30, 0.7);
S.punch(28.1, 0.1);
S.breakAt(28.25, BLK67, 16, 5.5, 8);
for (const [x, y, n] of [[14.2, 4.6, 16], [16.5, 6.2, 16], [18.6, 4.4, 14], [15.2, 8.4, 12], [19.5, 7.8, 10]]) {
  S.shatter(28.28 + (x - 13) * 0.01, x, y, n, { speed: 3, up: 2.5, vx: -1.5, floor: 0.05, w: 1.6, h: 0.9 });
}
S.sound(28.3, 'glass', 0.9);
S.dust(28.15, { x: DUNK_X, n: 10, r: 0.35, speed: 1.2, spread: 1.4, life: 1.6, vy: 0.9, front: true });
G.at(28.1, 'hurt', { x: 4.7, h: 0.6 });
G.arc(28.52, 'hurt', { x: 14.3, h: 3.4, drot: 1.2, jump: 0.8 });
S.hole(28.52, BLK67, 14.45, 4.1, 0.95);
fxHit(28.52, [14.4, 3.9], 2, { snd: 'wallcrash' });
S.debris(28.52, { x: 14.4, y: 3.9, n: 14, speed: 2.6, up: 2.2, size: 0.07, spread: 0.3, dir: -1 });
G.at(28.9, 'hang', { x: 14.35, h: 3.3, rot: 0 });
G.at(29.3, 'kneeHurt', { x: 14.0 }).face(29.3, 'shut');
S.sound(29.3, 'land', 0.5);
P.at(28.42, 'landCrouch', { x: 3.6 });
P.at(28.95, 'standTall', { x: 3.7, g67: 0.9 });
P.at(29.8, 'standTall', { g67: 0.9 });
P.at(30.0, 'guard', { g67: 0, x: 4.0 });
S.say(29.05, 29.85, 67, '6-7.');
G.at(29.95, 'wipeCheek', { x: 14.0, dir: -1 }).face(29.95, 'angry');
S.say(30.0, 30.95, 'sg', 'Okay. Now I angry already.');
S.cam(27.5, { x: 2.8, y: 5.6, z: 78 });
S.cam(27.9, { x: 3.4, y: 3.8, z: 82 });
S.cam(28.1, { x: 5.0, y: 2.3, z: 92, r: 0.03 });
S.cam(28.5, { x: 8.8, y: 3.0, z: 74, r: 0 });
S.cam(29.3, { x: 12.2, y: 2.0, z: 140 });
S.cut(29.9, { x: 13.75, y: 0.66, z: 300 });
S.cam(30.8, { x: 13.6, y: 0.66, z: 320 });
S.cut(30.86, { x: 11.2, y: 1.6, z: 150 });

// ================================================================== bars 18-19: up BLK 67
P.at(30.9, 'dash', { x: 7.2 }).ghost(30.85, 31.3);
P.at(31.25, 'flyingKnee', { x: 12.6, h: 0.9, interp: 'in' });
S.hole(31.25, BLK67, 13.5, 2.3, 0.55);
fxHit(31.25, [13.2, 2.1], 2, { by: 67, snd: 'wallcrash' });
G.at(30.98, 'guardLow', { x: 13.9 });
G.at(31.2, 'jumpRise', { x: 13.1, h: 2.2, interp: 'out' });
G.at(31.38, 'wallRun', { x: 12.55, h: 3.0, rot: -Math.PI / 2, dir: 1 });
G.at(33.4, null, { cycle: 'run', axis: 'y', x: 12.55, h: 21.9, rot: -Math.PI / 2, stride: 1.2 });
G.ghost(31.5, 33.35);
S.sound(31.4, 'run', 0.6);
// 67 bounds up the corridor parapets on the facade
const ledge = (f) => 1.4 + f * 1.75 + 0.62;
const hops = [[31.62, 2, 15.4], [32.06, 4, 17.8], [32.49, 6, 15.6], [32.92, 8, 18.0], [33.35, 10, 16.0], [33.8, 12.3, 20.6]];
P.at(31.45, 'landCrouch', { x: 13.5 });
let prevGy = 0;
for (const [t, f, x] of hops) {
  const gy = f > 12 ? 22.9 : ledge(f);
  P.at(t - 0.05, 'landCrouch', { gy: prevGy });
  P.at(t + 0.15, 'tuck', { x: x - 0.6, gy, h: 1.25 });
  P.at(t + 0.33, 'landCrouch', { x, gy, h: 0.3 });
  S.sound(t, 'jump', 0.4);
  S.sound(t + 0.33, 'land', 0.4);
  prevGy = gy;
}
S.follow(31.25, 34.1, (t) => ({ x: 14.6, y: (G.P(t)[1] * 0.6 + P.P(t)[1] * 0.4) + 0.5, z: 116 }), { step: 0.08, smooth: 0.16 });
// SG vaults over the parapet onto the roof
G.at(33.58, 'tuck', { x: 13.35, gy: 22.9, h: 1.25, rot: Math.PI * 0.55, interp: 'linear' });
G.at(33.78, 'tuck', { x: 14.2, h: 1.05, rot: Math.PI * 1.45 });
G.at(33.97, 'landCrouch', { x: 14.8, rot: Math.PI * 2 });
S.sound(33.97, 'land', 0.6);

// ================================================================== bars 20-21: rooftop
S.cam(34.25, { x: 17.4, y: 23.6, z: 205 });
G.at(34.22, 'guard', { x: 14.9, dir: 1 });
P.at(34.22, 'guard', { x: 20.5, dir: -1 });
G.at(34.45, 'dash', { x: 16.2 }).ghost(34.3, 34.5);
P.at(34.45, 'dash', { x: 18.7 }).ghost(34.3, 34.5);
P.at(34.53, 'guard', { x: 18.45 });
P.at(34.61, 'jab', { x: 18.2, interp: 'in' });
whoosh(34.58, 0.5);
G.at(34.53, 'guard', { x: 16.45 });
G.at(34.61, 'guardLow', { x: 16.5, h: 0.34, lean: 0.55 });
G.at(34.71, 'cross', { x: 17.75, interp: 'in' });
strike(34.71, G, 'handB', P, 'head', 1);
P.at(34.73, 'jab', { head: -0.45, lean: -0.1 });
P.at(34.83, 'guard', { x: 18.5 });
P.at(34.87, 'kickChamber', { x: 17.7 });
P.at(34.95, 'roundhouse', { x: 17.4, interp: 'in' });
G.at(34.86, 'guard', { x: 16.8 });
G.at(34.95, 'blockX', { x: 16.7 });
strike(34.95, P, 'footF', G, 'guard', 1);
G.at(35.06, 'guardLow', { x: 16.8 });
G.at(35.15, 'sweep', { x: 16.9, interp: 'in' });
whoosh(35.11, 0.5);
P.at(35.06, 'guardLow', { x: 17.8 });
P.at(35.2, 'jumpRise', { x: 17.6, h: 1.0, interp: 'out' });
P.at(35.29, 'axeUp', { x: 17.45, h: 0.95 });
P.at(35.37, 'axeDown', { x: 17.3, h: 0.6, interp: 'in' });
G.at(35.28, 'guard', { x: 16.75 });
G.at(35.37, 'eGrab', { x: 16.75 });
fxHit(35.37, () => P.P(35.37, 'footF'), 1, { by: 67, snd: 'catch' });
// over the shoulder throw; 67 twists in the air and lands facing SG
G.at(35.5, 'eGrab', { x: 16.75, lean: 0.1 });
G.at(35.64, 'throwOver', { x: 16.7, interp: 'in' });
P.at(35.48, 'hurt', { x: 17.2, h: 0.95 });
P.arc(35.64, 'hurt', { x: 16.7, h: 1.9, drot: 3.1 });
P.at(35.86, 'landCrouch', { x: 15.1, rot: Math.PI * 2, dir: 1 });
whoosh(35.6, 0.7);
S.sound(35.86, 'land', 0.6);
G.at(35.8, 'throwOver', { x: 16.8 });
G.at(35.93, 'guard', { x: 16.7, dir: -1 });
P.at(35.93, 'guardLow', { x: 15.5 });
P.at(36.0, 'kickFront', { x: 15.95, interp: 'in' });
strike(36.0, P, 'footF', G, 'chest', 1);
G.at(36.02, 'stagger', { x: 16.95 });
G.at(36.3, 'stagger', { x: 17.55 });
P.at(36.2, 'sixSeven', { x: 15.3, g67: 1 });
P.at(36.75, 'sixSeven', { g67: 1 });
P.at(36.84, 'guard', { g67: 0 });
S.say(36.2, 36.85, 67, '6… 7…');
G.at(36.45, 'guard', { x: 17.5 }).face(36.45, 'angry');
G.at(36.63, 'dash', { x: 16.1 }).ghost(36.55, 36.85);
G.at(36.76, 'kickChamber', { x: 15.75, yaw: Math.PI * 4.1 });
G.at(36.86, 'spinBack', { x: 15.5, yaw: Math.PI * 5, interp: 'in' });
strike(36.86, G, 'footF', P, 'chest', 2);
whoosh(36.8, 0.8);
P.at(36.86, 'hurt', { x: 15.2, h: 0.6 });
P.arc(37.3, 'hurt', { x: 12.3, h: 1.4, drot: -2, jump: 0.5 });
P.arc(37.7, 'hurt', { x: 11.0, gy: 0, h: 18.2, drot: -1.5 });
P.at(38.05, 'hurt', { x: 9.9, h: 9.5, drot: -1.2 });
P.at(38.4, 'down', { x: 9.0, interp: 'in' });
G.at(37.1, 'guard', { x: 15.6 });
G.run(37.55, 13.5, { dir: -1 });
G.at(37.72, 'standSoft', { x: 13.3, head: 0.8 }).face(37.72, 'wide');
S.cam(34.7, { x: 17.3, y: 23.55, z: 250 });
S.cam(35.6, { x: 16.6, y: 23.9, z: 215 });
S.cam(36.3, { x: 16.4, y: 23.6, z: 245 });
S.cam(36.9, { x: 15.3, y: 23.8, z: 190 });
S.cam(37.5, { x: 14.0, y: 23.4, z: 170 });

// ================================================================== bars 22-23: 67 grows
S.cut(37.75, { x: 11.6, y: 17.5, z: 62 });
S.cam(38.3, { x: 10.2, y: 5.0, z: 70 });
S.cam(38.9, { x: 8.8, y: 1.6, z: 165 });
slam(38.4, 9.0, 1.8);
fxHit(38.4, [9.0, 0.2], 2, { by: 67, snd: 'crater' });
P.at(38.95, 'down', { x: 9.0 });
P.at(39.45, 'powerUp', { x: 8.6, dir: 1, scale: 1 }).face(39.3, 'glow');
P.at(39.9, 'powerUp', { scale: 2.4 });
P.at(40.4, 'powerUp', { scale: 6.5 });
P.at(40.8, 'standTall', { x: 8.2, scale: 13 });
P.at(41.14, 'standTall', { x: 8.0, scale: 18 });
for (let k = 0; k < 14; k++) {
  const t = 38.9 + k * 0.16;
  S.bolt(t, () => P.P(t, 'pelvis'), () => { const p = P.P(t, 'pelvis'); const r = 1.5 + k * 0.5; return [p[0] + Math.cos(k * 2.3) * r, Math.max(0, p[1] + Math.sin(k * 2.3) * r)]; }, { col: k % 3 ? P67.main : P67.gold, life: 0.14, w: 0.1 + k * 0.02 });
}
for (let k = 0; k < 6; k++) S.dust(39.5 + k * 0.25, () => ({ x: 8.2, n: 5, r: 0.3 + k * 0.12, speed: 1.2 + k * 0.4, spread: 1.6, life: 1.4, vy: 0.4 }));
S.sound(39.4, 'grow', 1);
for (let k = 0; k < 8; k++) S.shake(39.4 + k * 0.22, 6 + k * 3, 0.3, 14);
S.say(39.55, 40.9, 'sg', '…Eh? Eh eh eh—');
S.cam(39.5, { x: 8.7, y: 1.9, z: 150 });
S.cam(40.1, { x: 9.0, y: 4.6, z: 88 });
S.cam(40.6, { x: 9.6, y: 9.0, z: 55 });
S.cam(41.1, { x: 10.5, y: 13.0, z: 40 });

// ================================================================== BREAK: bars 24-28, the giant
S.sky(40.5, '#fffdf8', '#f3eee3');
S.sky(41.6, '#f4efff', '#efe4d8');
S.cut(41.14, { x: 11.4, y: 21.9, z: 108 });
S.cam(42.9, { x: 11.7, y: 22.2, z: 118 });
S.cut(43.2, { x: 9.0, y: 12.6, z: 38 });
S.cam(45.6, { x: 9.5, y: 12.8, z: 36 });
S.cut(45.72, { x: 12.8, y: 20.2, z: 62 });
S.cam(47.9, { x: 13.4, y: 21.0, z: 84 });
S.shake(41.14, 14, 0.8, 10);
G.at(41.14, 'lookUpStand', { x: 13.4, dir: -1 }).face(41.14, 'wide');
G.at(43.0, 'lookUpStand', { x: 13.5 });
G.at(45.8, 'guardLow', { x: 14.3 }).face(45.8, 'angry');
G.at(47.6, 'guardLow', { x: 14.4 });
P.at(42.9, 'standTall', { scale: 18, head: 0.2 });
P.at(43.5, 'sixSeven', { scale: 18, g67: 1 });
P.at(45.3, 'sixSeven', { g67: 1 });
P.at(45.9, 'eWindup', { g67: 0 });
P.at(47.55, 'eWindup', { lean: -0.2, head: 0.05 });
P.rate(43.3, 1.1667).rate(45.7, 140 / 60);
S.callout(43.25, 67, '巨人六七', 'GIANT 67', { side: 'left' });
S.say(41.9, 43.4, 'sg', 'Wah lau… so big for what?!');
S.say(43.7, 45.3, 67, 'SIX… SEVEN…', { big: true });
for (let k = 0; k < 4; k++) S.sound(43.55 + k * 2 * BEAT, 'stomp', 0.7);

// ================================================================== DROP B: bars 28-44
// ---- the giant's punch takes the top off BLK 67; SG runs down his arm
S.sky(47.9, '#f4efff', '#efe4d8');
S.sky(48.4, '#fff6ea', '#f1e2d2');
P.at(47.86, 'bigPunch', { h: 0.46, aF: [1.9, 0.05], interp: 'in' });
P.at(48.0, 'bigPunch', { h: 0.48, aF: [1.9, 0.02] });
P.at(49.3, 'bigPunch', { h: 0.48, aF: [1.9, 0.02], head: 0.1 });
const fist = () => P.P(48.0, 'handF');
S.collapse(48.0, BLK67, 16.3, 13.0, 27.0, 1);
fxHit(48.0, fist, 3, { by: 67, scale: 3, snd: 'collapse', stop: [0.12, 0.3] });
S.shake(48.0, 34, 0.9, 16);
S.debris(48.0, () => ({ x: fist()[0], y: fist()[1], n: 40, speed: 5, up: 4, size: 0.22, spread: 1.4, dir: 1, gravity: 16 }));
S.dust(48.0, () => ({ x: fist()[0], y: fist()[1] - 0.5, n: 16, r: 0.5, speed: 2.2, spread: 1.6, life: 1.6, vy: 0.3, rise: 0.05 }));
S.breakAt(48.02, BLK67, 20, 14, 8);
for (let k = 0; k < 6; k++) S.shatter(48.05 + k * 0.03, 14 + k * 2, 15 - (k % 3) * 2.2, 14, { speed: 4, up: 3, vx: 2, floor: 1.4, w: 1.6, h: 1.2 });
S.dust(49.4, { x: 20, y: 1.4, n: 14, r: 0.9, speed: 2.5, spread: 1.6, life: 2.2, vy: 0.6, rise: 0.05 });
S.sound(49.35, 'rumble', 1);
S.shake(49.35, 16, 1.0, 8);
// arm geometry (the giant holds the punch)
const armAt = (k) => () => { const J = P.Js(48.6); return midpt(J.handF, J.elbowF, k); };
const armTop = (k) => () => armAt(k)()[1] + P.Js(48.6).lw * 0.5;
G.at(47.8, 'guardLow', { x: 14.4, gy: 22.9 });
G.at(47.9, 'jumpRise', { x: 14.3, h: 1.6, interp: 'out' });
G.at(48.22, 'tuck', { x: 14.4, h: 3.0 });
G.at(48.55, 'landCrouch', { x: () => armAt(0.15)()[0], gy: armTop(0.15), h: 0.32 }).face(48.55, 'angry');
G.at(49.25, null, { cycle: 'run', x: () => armAt(0.95)()[0], gy: armTop(0.95), dir: -1, ramp: 0.05 });
S.sound(48.55, 'land', 0.6);
S.sound(48.7, 'run', 0.5);
// flying knee to the giant's jaw
G.at(49.38, 'jumpRise', { x: () => armAt(1.2)()[0], h: 1.0, interp: 'out' });
G.at(49.71, 'flyingKnee', { x: () => P.P(49.71, 'head')[0] + 1.9, gy: () => P.P(49.71, 'head')[1] - 2.2, h: 0.62, interp: 'in' });
fxHit(49.71, () => { const h = P.P(49.71, 'head'); return [h[0] + 1.8, h[1] - 1.4]; }, 3, { scale: 3, snd: 'smash', stop: [0.14, 0.3] });
S.burst(49.71, () => { const h = P.P(49.71, 'head'); return { x: h[0] + 1.5, y: h[1] - 1.2, R: 5, life: 0.5, flat: 0.9, w: 0.2, col: SGC.main, col2: '#ffffff' }; });
P.at(49.78, 'bigPunch', { head: -0.75, lean: 0.15, h: 0.49 });
P.at(50.25, 'stagger', { head: -0.4 });
// SG tumbles; the giant swats him away into BLK 68 far behind
G.at(50.05, 'tuck', { dx: 0.8, h: 1.6, drot: -2.6 });
G.at(50.45, 'tuck', { dx: 0.4, h: 0.4, drot: -2.4 });
P.at(50.4, 'stagger', { aB: [1.8, 0.4] });
P.at(50.57, 'swat', { aB: [-0.2, 0.3], aF: [2.0, 0.2], interp: 'in' });
const swatPt = () => G.P(50.57, 'pelvis');
G.at(50.57, 'hurt', {});
fxHit(50.57, swatPt, 3, { by: 67, scale: 2, snd: 'heavy', stop: [0.08, 0.2] });
G.arc(51.43, 'hurt', { lay: 1, x: -28.4, gy: 0, h: 12.2, drot: 7 });
G.ghost(50.6, 51.4).trail(50.6, 51.43, SGC.main);
S.cam(48.0, { x: 13.0, y: 20.5, z: 70, r: -0.04 });
S.cam(48.6, { x: 12.8, y: 20.0, z: 90, r: 0 });
S.cam(49.3, { x: 11.4, y: 20.4, z: 110 });
S.cam(49.72, { x: 10.9, y: 20.6, z: 132, r: 0.04 });
S.cam(50.5, { x: 10.6, y: 20.0, z: 118, r: 0 });
S.cut(50.75, { x: -8.5, y: 12.2, z: 50 });
S.cam(51.43, { x: -10.5, y: 12.2, z: 52 });
S.hole(51.43, BLK68, -28.4, 12.2, 1.45);
S.dust(51.43, { layer: 'mid', x: -28.4, y: 12.0, n: 10, r: 0.4, speed: 2, spread: 1.2, life: 1.2, vy: 0.2 });
S.debris(51.43, { layer: 'mid', x: -28.4, y: 12.0, n: 20, speed: 3, up: 2.5, size: 0.12, spread: 0.6, floor: 0 });
S.shatter(51.45, -28.4, 12.2, 26, { layer: 'mid', speed: 3.5, up: 2.5, floor: 0.2 });
S.shake(51.43, 22, 0.6);
S.sound(51.43, 'wallcrash', 1);
S.flash(51.43, 'neg', 2);

// ---- bars 30-31: the giant laughs; SG in the rubble
P.at(51.6, 'eLaugh', {});
P.at(51.9, 'sixSeven', { g67: 1 });
P.at(52.9, 'sixSeven', { g67: 1 });
P.at(53.2, 'standTall', { g67: 0, dir: -1 });
S.say(51.95, 52.95, 67, '6-7! 6-7!', { big: true });
S.cut(51.9, { x: 7.5, y: 12.0, z: 42 });
G.at(51.6, 'lieBack', { lay: 1, x: -28.4, gy: 11.05, h: 0.1, rot: -1.5 });
G.at(54.7, 'lieBack', {}).face(51.6, 'shut');
S.cut(53.0, { x: -28.4, y: 12.4, z: 200 });
S.cam(53.95, { x: -28.4, y: 12.35, z: 225 });
S.say(53.35, 53.95, 'sg', 'Cannot… lose…');
// flash of what he is fighting for
S.cut(54.0, { x: TABLE_X, y: 0.75, z: 480 });
S.cam(54.45, { x: TABLE_X + 0.05, y: 0.75, z: 520 });
S.cut(54.5, { x: -28.4, y: 12.4, z: 230 });

// ---- bars 32-33: KIASU MODE
G.face(54.86, 'glow');
S.flash(54.86, 'red', 2);
S.aura(54.95, 66.2, G, RED_AURA);
S.callout(55.05, 'sg', '怕输模式', 'KIASU MODE', { side: 'center', y: 0.2 });
S.tint(54.9, SGC.main, 0);
S.tint(55.1, SGC.main, 0.16);
S.tint(65.0, SGC.main, 0.16);
S.tint(65.6, SGC.main, 0);
S.sound(54.95, 'aura', 1);
G.at(55.15, 'kneeHurt', { rot: 0, h: 0.27 });
G.at(55.7, 'powerUp', {});
G.at(56.9, 'powerUp', {});
S.say(55.35, 57.0, 'sg', 'Die die must win! Cannot lose!', { big: true });
S.breakAt(56.0, BLK68, -28.4, 12.2, 7);
S.shatter(56.02, -28.4, 12.2, 30, { layer: 'mid', speed: 4, up: 3, floor: 0.2, w: 4, h: 3 });
for (let k = 0; k < 8; k++) {
  const t = 55.2 + k * 0.2;
  S.bolt(t, [-28.4, 12.0], [-28.4 + Math.cos(k * 2.4) * 2.4, 12.0 + Math.sin(k * 2.4) * 2.0], { layer: 'mid', col: SGC.main, life: 0.14, w: 0.07 });
}
S.shake(56.0, 14, 0.5);
S.cam(55.3, { x: -28.4, y: 12.5, z: 215 });
S.cam(56.9, { x: -28.4, y: 12.6, z: 180 });
// launch out of the hole, straight at the giant's belly
G.at(57.15, 'chargeLow', {});
G.at(58.29, 'bigPunch', { lay: 0, x: () => P.P(58.29, 'belly')[0] - 1.0, gy: 0, h: () => P.P(58.29, 'belly')[1] - 0.25, interp: 'in' });
G.ghost(57.2, 58.3).trail(57.2, 58.29, SGC.main);
S.cut(57.3, { x: -9.5, y: 11.5, z: 52 });
S.cam(58.29, { x: 3.0, y: 10.0, z: 70 });
S.sound(57.2, 'launch', 1);
P.at(58.2, 'standTall', { dir: -1 });
fxHit(58.29, () => P.P(58.29, 'belly'), 3, { scale: 3.5, snd: 'smash', stop: [0.15, 0.3] });
S.burst(58.29, () => { const b = P.P(58.29, 'belly'); return { x: b[0], y: b[1], R: 9, life: 0.6, flat: 0.95, w: 0.3, col: SGC.main, col2: '#ffffff' }; });
P.at(58.5, 'stagger', { lean: 0.65, head: 0.4, dir: -1 });

// ---- bars 34-37: QUEUE RUSH (six numbered clones, one hit per beat)
G.at(58.55, 'tuck', { dx: -1.0, h: 7.0, drot: -3 });
G.at(58.95, 'superLand', { x: -3.3, h: 0.2, rot: 0, dir: 1 });
S.dust(58.95, { x: -3.3, n: 6, r: 0.08, speed: 1.4, spread: 0.8, life: 0.8 });
G.at(59.05, 'guard', { x: -3.3 });
G.at(59.14, 'clap', { x: -3.3 });
S.sound(59.14, 'clap', 1);
G.at(59.5, 'clap', {});
G.at(59.8, 'guard', {});
S.callout(59.2, 'sg', '排队冲锋', 'QUEUE RUSH', { side: 'right' });
S.say(59.25, 60.3, 'sg', 'Everybody… QUEUE UP!');
S.cut(59.0, { x: 0.2, y: 1.3, z: 175 });
S.cam(59.9, { x: 1.2, y: 2.4, z: 110 });
const clones = [];
const targets = ['shin', 'legs', 'belly', 'chest', 'head', 'head'];
const moves = [
  ['airKick', 'footF', [0, 0]], ['flyingKnee', 'kneeF', [0, 0.1]], ['airKick', 'footF', [0, 0.1]],
  ['bigPunch', 'handF', [0, 0]], ['uppercut', 'handF', [0, -0.1]], ['heelDrop', 'footF', [0, 0.2]],
];
const shrink = [18, 15, 12, 9.2, 6.8, 4.4, 2.8];
for (let k = 0; k < 6; k++) {
  const tPop = 59.36 + k * 0.107;
  const tHit = B(35, 1) + k * BEAT;
  const qx = 2.7 - k * 1.0;
  const c = S.fighter('clone' + (k + 1), { kind: 'clone', x: qx, dir: 1, appear: tPop, gone: tHit + 0.16, z: -1 });
  c.alpha = 0.92;
  clones.push(c);
  c.at(tPop, 'guard', { x: qx, dir: 1, d: -0.4 });
  c.at(tHit - 0.42 - k * 0.1, 'guard', { x: qx, d: -0.4 });
  const tgt = () => S.targetPoint(P, targets[k], tHit);
  const [pose, limb] = moves[k];
  c.at(tHit - 0.26, 'dash', { x: () => tgt()[0] - 2.2, d: 0 });
  c.at(tHit - 0.12, 'jumpRise', { x: () => tgt()[0] - 1.4, h: () => Math.max(0.6, tgt()[1] - 0.9) });
  c.at(tHit, pose, { x: () => tgt()[0] - 0.6, h: () => Math.max(0.5, tgt()[1] - 0.45), interp: 'in' });
  c.at(tHit + 0.16, pose, { dx: 0.1 });
  c.ghost(tHit - 0.3, tHit);
  strike(tHit, c, limb, P, targets[k], 2, { scale: 1 + (6 - k) * 0.25, stop: [0.05, 0.14], snd: 'punch' });
  S.burst(tHit + 0.15, () => { const p = c.P(tHit + 0.1, 'neck'); return { x: p[0], y: p[1], R: 0.8, life: 0.3, flat: 0.9, w: 0.06, col: SGC.main, col2: '#ffffff' }; });
  S.at(() => S.fx.motes2(S.T(tHit + 0.15), { ...(() => { const p = c.P(tHit + 0.1, 'neck'); return { x: p[0], y: p[1] - 0.4 }; })(), n: 16, w: 0.6, h: 0.8, red: 1, spread: 0.1, vy: 0.2, spreadV: 1.6, cols: [SGC.main, SGC.light, '#ffffff'] }));
  S.tag(tPop, tHit - 0.3, (tau) => { const J = c.J(tau); return [J.head[0], J.head[1] + 0.3]; }, '#00' + (k + 1));
  S.burst(tPop, { x: qx, y: 0.6, R: 0.7, life: 0.25, flat: 0.9, w: 0.05, col: SGC.main, col2: '#ffffff' });
  S.sound(tPop, 'pop', 0.6);
  S.sound(tHit - 0.26, 'whoosh', 0.4);
  // the giant shrinks a step with every hit
  P.at(tHit, 'stagger', { scale: shrink[k + 1], lean: 0.3 + k * 0.05, head: 0.2, dir: -1, x: 8.0 });
  P.at(tHit + 0.2, 'stagger', { lean: 0.45, head: 0.3 });
}
S.cam(60.3, { x: 4.6, y: 9.5, z: 48 });
S.cam(61.3, { x: 5.4, y: 6.8, z: 64 });
S.cam(62.2, { x: 5.9, y: 4.0, z: 92 });
S.cam(62.8, { x: 6.3, y: 2.8, z: 122 });
// the original finishes it: axe kick drives the shrunken 67 into the plaza
G.at(62.45, 'guard', { x: -3.0 });
G.at(62.8, 'dash', { x: 2.2 }).ghost(62.5, 63.0);
G.at(63.02, 'jumpRise', { x: 5.0, h: 2.6, interp: 'out' });
G.at(63.25, 'axeUp', { x: 6.9, h: 2.6 });
G.at(63.43, 'heelDrop', { x: 7.2, h: 1.75, interp: 'in' });
strike(63.43, G, 'footF', P, 'head', 3, { stop: [0.14, 0.3] });
P.at(63.3, 'stagger', { scale: 2.2 });
P.at(63.43, 'stagger', { scale: 1.6, lean: 0.8 });
P.at(63.7, 'down', { scale: 1, x: 8.0, rot: 1.5, interp: 'in' });
slam(63.7, 8.0, 2.2);
fxHit(63.7, [8.0, 0.2], 3, { snd: 'craterBig', noStop: true });
G.at(63.7, 'tuck', { x: 6.9, h: 1.6, drot: -3.1 });
G.at(64.0, 'superLand', { x: 6.0, drot: -3.18 });
G.at(64.6, 'standSoft', { x: 6.0, head: 0.4 });
S.say(64.05, 65.05, 'sg', 'Wait your turn lah!');
S.cam(63.1, { x: 6.3, y: 2.6, z: 150 });
S.cam(63.7, { x: 7.0, y: 1.3, z: 165, r: 0.03 });
S.cam(64.6, { x: 6.8, y: 1.1, z: 210, r: 0 });

// ---- bars 38-41: 67 is back up; exchange; SIX-SEVEN SCALES MAX; SG returns a 7
P.at(64.9, 'down', { rot: 1.5 });
P.at(65.14, 'powerUp', { x: 8.0, rot: 0, dir: -1 }).face(65.14, 'glow');
S.flash(65.14, 'gold', 2);
S.aura(65.14, 72.0, P, GOLD_AURA);
S.burst(65.14, { x: 8.0, y: 0.5, R: 3, life: 0.5, flat: 0.5, w: 0.1, col: P67.gold, col2: '#ffffff' });
S.sound(65.14, 'aura', 0.8);
G.at(65.2, 'guard', { x: 5.9, dir: 1 });
P.at(65.4, 'dash', { x: 7.0 }).ghost(65.3, 65.55);
P.at(65.57, 'jab', { x: 6.9, interp: 'in' });
G.at(65.57, 'blockX', { x: 5.9 });
strike(65.57, P, 'handF', G, 'guard', 1);
P.at(65.68, 'guard', { x: 6.9 });
P.at(65.79, 'cross', { x: 6.8, interp: 'in' });
G.at(65.79, 'guard', { x: 5.8, lean: -0.3, head: -0.4 });
whoosh(65.75, 0.5);
G.at(65.9, 'guard', { x: 5.95 });
G.at(66.0, 'jab', { x: 6.1, interp: 'in' });
strike(66.0, G, 'handF', P, 'head', 1);
P.at(66.02, 'guard', { x: 7.0, head: -0.4 });
G.at(66.11, 'kickChamber', { x: 6.0, yaw: Math.PI * 1.1 });
G.at(66.21, 'spinBack', { x: 6.0, yaw: Math.PI * 2, interp: 'in' });
P.at(66.21, 'blockX', { x: 7.0 });
strike(66.21, G, 'footF', P, 'guard', 1);
P.at(66.35, 'guardLow', { x: 7.5 });
P.at(66.43, 'flyingKnee', { x: 6.6, h: 0.8, interp: 'in' });
G.at(66.43, 'blockX', { x: 5.9 });
strike(66.43, P, 'kneeF', G, 'guard', 2);
G.at(66.7, 'skid', { x: 4.4 });
P.at(66.7, 'landCrouch', { x: 6.3 });
skidDust(66.55, G, 4);
// the callback: fists meet again
G.at(66.76, 'guard', { x: 4.6 });
P.at(66.76, 'guard', { x: 6.4 });
G.at(66.86, 'bigPunch', { x: 5.1, interp: 'in' });
P.at(66.86, 'bigPunch', { x: 5.9, interp: 'in' });
fxHit(66.86, () => midpt(G.P(66.86, 'handF'), P.P(66.86, 'handF')), 3, { snd: 'clash', stop: [0.12, 0.25] });
S.burst(66.86, { x: 5.5, y: 0.02, R: 4, life: 0.55, flat: 0.28, w: 0.12, col: '#141414', col2: '#ffffff' });
S.dust(66.86, { x: 5.5, n: 18, ring: true, r: 0.1, speed: 3.6, life: 1.0 });
G.at(67.05, 'skid', { x: 3.8 });
P.at(67.05, 'skid', { x: 6.9 });
P.at(67.3, 'jumpRise', { x: 8.0, h: 1.2, interp: 'out' });
P.at(67.55, 'sixSeven', { x: 8.6, g67: 1.5 });
P.at(70.4, 'sixSeven', { g67: 1.5 });
S.callout(67.55, 67, '六七天秤', 'SIX-SEVEN SCALES · MAX', { side: 'left' });
S.cam(65.2, { x: 6.6, y: 1.0, z: 230 });
S.cam(66.0, { x: 6.3, y: 1.0, z: 255, r: -0.02 });
S.cam(66.86, { x: 5.5, y: 1.0, z: 250, r: 0.02 });
S.cam(67.4, { x: 6.0, y: 1.4, z: 170, r: 0 });
// the rain of numerals: SG weaves left, then kicks a 7 straight back
G.at(67.8, 'guard', { x: 3.6 });
G.run(68.9, 0.6, { dir: -1 });
G.at(69.1, 'jumpRise', { x: -0.2, h: 1.1 });
G.at(69.35, 'tuck', { x: -1.1, h: 0.9, drot: -3.1 });
G.at(69.55, 'landCrouch', { x: -1.6, drot: -3.18 });
G.at(69.75, 'guard', { x: -1.5, dir: 1 });
G.at(70.05, 'kickChamber', { x: -1.3 });
G.at(70.2, 'kickSide', { x: -1.1, interp: 'in' });
G.at(70.5, 'guard', { x: -1.3 });
for (let k = 0; k < 14; k++) {
  const t0 = 67.75 + k * 0.16, t1 = t0 + 0.75;
  if (t1 > 70.15) break;
  const hand = k % 2 ? 'handF' : 'handB';
  numeral(t0, t1, () => { const p = P.P(t0, hand); return [p[0] - 0.4, p[1] + 1.8 + (k % 3)]; }, () => {
    const g = G.P(t1);
    return [g[0] + 0.9 + (k % 3) * 0.45, 0.05];
  }, k % 2 ? '7' : '6', { big: 1.7, lift: 3.5, spread: 3 });
}
// the returned 7: flies off SG's foot into 67
S.number(70.2, 70.62, () => G.P(70.2, 'footF'), () => P.P(70.62, 'chest'), '7', { size: 0.9, lift: 0.6, spread: 0.4 });
S.sound(70.2, 'kick', 1);
fxHit(70.2, () => G.P(70.2, 'footF'), 1, {});
fxHit(70.62, () => P.P(70.62, 'chest'), 3, { by: 67, snd: 'numHit', scale: 1.5 });
S.say(69.6, 70.55, 'sg', 'Here — take back your seven!');
P.at(70.62, 'hurt', { x: 8.6, h: 0.7, g67: 0 });
P.arc(71.1, 'hurt', { x: 10.4, h: 0.5, drot: 1.5, jump: 0.6 });
P.at(71.4, 'landCrouch', { x: 10.6, rot: 0 });
P.at(71.9, 'guard', { x: 10.9, dir: -1 });
G.at(71.3, 'guard', { x: -2.4 });
G.at(71.9, 'guard', { x: -3.4 });
S.cam(68.0, { x: 4.8, y: 2.0, z: 150 });
S.cam(69.2, { x: 1.6, y: 1.5, z: 175 });
S.cam(70.2, { x: 2.8, y: 1.3, z: 150 });
S.cam(71.0, { x: 4.6, y: 1.2, z: 140 });

// ---- bars 42-43: standoff
S.cut(72.0, { x: -3.3, y: 0.95, z: 600 });
S.cam(72.9, { x: -3.28, y: 0.95, z: 640 });
S.say(72.1, 73.3, 'sg', 'This table… I chope already.');
S.cut(73.43, { x: 10.8, y: 1.12, z: 600 });
S.cam(74.2, { x: 10.78, y: 1.12, z: 640 });
S.say(73.5, 74.25, 67, '…6. 7.');
S.cut(74.29, { x: 3.75, y: 1.3, z: 116 });
S.cam(75.4, { x: 3.75, y: 1.25, z: 124 });
G.at(73.0, 'guard', { x: -3.4 });
P.at(74.0, 'guard', { x: 10.9 });
for (let k = 0; k < 6; k++) S.dust(72.0 + k * 0.55, { x: 3.75, n: 3, r: 0.1, speed: 1.5, spread: 3, life: 1.2, vx: 1.2, vy: 0.1 });

// ================================================================== FINALE: bars 44-48
G.at(75.43, 'chargeLow', { x: -3.4 }).face(75.43, 'glow');
P.at(75.43, 'chargeLow', { x: 10.9 });
S.aura(75.43, 82.3, P, GOLD_AURA);
S.callout(75.55, 'sg', '狮城咆哮', 'LION CITY ROAR', { side: 'left' });
S.callout(76.3, 67, '六七螺旋', 'SIX-SEVEN HELIX', { side: 'right' });
S.say(75.6, 76.45, 'sg', 'Lion City…');
S.say(76.45, 77.1, 67, 'Six… Seven…');
S.sound(75.43, 'charge', 1);
for (let k = 0; k < 10; k++) {
  const t = 75.6 + k * 0.15;
  S.bolt(t, () => G.P(t, 'handF'), () => { const p = G.P(t, 'handF'); return [p[0] + Math.cos(k * 2.2) * 0.6, p[1] + Math.sin(k * 2.2) * 0.6]; }, { col: SGC.main, life: 0.1, w: 0.04 });
  S.bolt(t + 0.07, () => P.P(t, 'handF'), () => { const p = P.P(t, 'handF'); return [p[0] + Math.cos(k * 1.9) * 0.7, p[1] + Math.sin(k * 1.9) * 0.7]; }, { col: P67.gold, life: 0.1, w: 0.04 });
}
G.at(77.0, 'chargeLow', {});
P.at(77.0, 'chargeLow', {});
G.at(77.14, 'fireBoth', { interp: 'in' });
P.at(77.14, 'fireBoth', { interp: 'in' });
G.at(82.29, 'fireBoth', { dx: 0.3 });
P.at(82.29, 'fireBoth', { dx: -0.3 });
const clashKeys = [[77.14, 3.9], [77.4, 3.6], [78.2, 2.6], [78.9, 1.2], [79.5, 0.8], [80.3, 2.8], [81.0, 4.6], [81.7, 4.2], [82.29, 4.0]];
const clashAt = (tau) => {
  const t = S.W.inverse(tau);
  let x = clashKeys[0][1];
  for (let i = 1; i < clashKeys.length; i++) {
    const [a, va] = clashKeys[i - 1], [b, vb] = clashKeys[i];
    if (t >= a && t <= b) x = lerp(va, vb, E.inOutSine((t - a) / (b - a)));
    if (t > b) x = vb;
  }
  return x + 0.05 * Math.sin(tau * 31);
};
const handsOf = (f) => (tau) => { const J = f.J(tau); return midpt(J.handB, J.handF); };
S.beam(77.14, 82.3, { kind: 'lion', origin: handsOf(G), frontAt: clashAt, width: 0.95 });
S.beam(77.14, 82.3, { kind: 'helix', origin: handsOf(P), frontAt: clashAt, width: 0.9 });
S.clash(77.2, 82.3, (tau) => [clashAt(tau), handsOf(G)(tau)[1]], 0.75);
S.say(79.45, 80.6, 'sg', '…ROAAAR!!!', { big: true });
S.sound(77.14, 'beam', 1);
S.sound(79.5, 'roar', 1);
for (let k = 0; k < 18; k++) S.shake(77.2 + k * 0.28, 6 + k * 1.4, 0.35, 18);
for (let k = 0; k < 12; k++) S.debris(77.6 + k * 0.38, { x: 3.8 + (k % 3) - 1, n: 5, speed: 0.6, up: 3.5 + k * 0.2, size: 0.07, spread: 3, gravity: 1.2 });
for (let k = 0; k < 8; k++) S.crack(77.8 + k * 0.5, 3.8 + (k % 2 ? 1 : -1) * (0.5 + k * 0.4), (k % 3) - 1, k % 2 ? 0 : Math.PI, 1.2);
S.speed(80.5, 82.28, (tau) => [clashAt(tau), 0.9], { n: 70, clear: 0.28 });
S.cut(75.43, { x: -3.0, y: 0.75, z: 330 });
S.cam(76.25, { x: -2.9, y: 0.75, z: 360 });
S.cut(76.3, { x: 10.5, y: 0.8, z: 330 });
S.cam(77.08, { x: 10.4, y: 0.8, z: 360 });
S.cut(77.14, { x: 3.75, y: 1.1, z: 132, r: 0 });
S.cam(78.9, { x: 2.0, y: 1.0, z: 170, r: -0.03 });
S.cam(79.5, { x: 1.2, y: 1.0, z: 200, r: -0.04 });
S.cam(80.3, { x: 2.8, y: 1.0, z: 185, r: 0.02 });
S.cam(81.2, { x: 4.2, y: 1.0, z: 160, r: 0 });
S.cam(82.2, { x: 4.0, y: 1.0, z: 190 });
S.sky(76.0, '#fff6ea', '#f1e2d2');
S.sky(77.5, '#ffe9d6', '#f3d9c8');

// ---- bar 48: the explosion
const BOOM = B(48);
S.flash(BOOM, 'white', 3);
S.impact(BOOM + 0.05, [['neg', 2], ['red', 2]]);
S.fade(BOOM + 0.35, 0);
S.fade(BOOM + 0.75, 1);
S.fade(BOOM + 1.0, 1);
S.fade(BOOM + 2.0, 0);
S.dome(BOOM, 4.0, 16, { col: '#ffffff', col2: SGC.main, life: 1.2 });
S.blast(BOOM, 4.0, 1.0, 6.5, { cols: ['#ffffff', '#ffd27a', SGC.main], life: 1.1, rays: 18 });
S.cam(BOOM + 0.02, { x: 4.0, y: 1.6, z: 120 });
S.cam(BOOM + 0.7, { x: 4.0, y: 2.4, z: 80 });
slam(BOOM, 4.0, 3.8);
S.breakAt(BOOM + 0.1, BLK67, 16, 6, 12);
S.breakAt(BOOM + 0.2, BLK68, -24, 8, 16);
S.shake(BOOM, 60, 1.6, 12);
S.sound(BOOM, 'explosion', 1);
G.at(BOOM, 'hurt', { x: -3.3 });
G.arc(BOOM + 0.5, 'hurt', { x: -3.9, h: 0.9, drot: -2, jump: 0.8 });
G.at(BOOM + 0.8, 'lieBack', { x: -3.9, rot: -1.5 }).face(BOOM, 'shut');
P.at(BOOM, 'hurt', { x: 10.9 });
P.arc(BOOM + 0.5, 'hurt', { x: 11.6, h: 0.9, drot: 2, jump: 0.8 });
P.at(BOOM + 0.8, 'lieBack', { x: 11.6, rot: -1.5, dir: -1 }).face(BOOM, 'shut');
for (let k = 0; k < 8; k++) S.dust(BOOM + 0.8 + k * 0.4, { x: 4 + (k % 3 - 1) * 2, n: 3, r: 0.5, speed: 0.3, spread: 1.4, life: 2.6, vy: 0.4, rise: 0.02 });

// ================================================================== OUTRO
S.cut(BOOM + 0.95, { x: 3.8, y: 1.8, z: 96 });
S.cam(BOOM + 2.2, { x: 3.5, y: 1.6, z: 100 });
S.letterbox(BOOM + 1.6, 0);
S.letterbox(BOOM + 2.6, 1);
S.sky(BOOM, '#fffdf8', '#f3eee3');
S.cam(85.0, { x: TABLE_X + 0.8, y: 0.9, z: 230 });
S.cam(88.3, { x: TABLE_X + 0.6, y: 0.9, z: 250 });
S.cut(88.55, { x: -3.75, y: 0.35, z: 360 });
S.cam(89.55, { x: -3.7, y: 0.35, z: 390 });
S.cut(89.62, { x: 11.35, y: 0.35, z: 360 });
S.cam(90.6, { x: 11.3, y: 0.35, z: 390 });
const A = S.fighter('auntie', { kind: 'auntie', x: -13, dir: 1, appear: 84.6, scale: 0.9, seed: 9 });
A.at(84.6, 'stand', { x: -13, dir: 1 });
A.walk(86.6, -7.4, { stride: 0.5 });
A.at(86.75, 'stand', { x: -7.4 });
A.at(86.95, 'flick', { x: -7.35 });
A.at(87.3, 'stand', {});
A.at(87.9, 'sit', { x: TABLE_X - 0.62 });
A.at(92.5, 'sit', {});
S.packet(86.95, 87.12, () => A.P(86.95, 'handF'), [TABLE_X - 0.1, 0.66], { arc: 0.15, spin: 10, tEnd: 99 });
S.say(87.15, 88.6, 'auntie', 'Got tissue means got people ah… never mind lah.');
G.at(88.5, 'lieBack', {});
G.at(88.85, 'headUp', {}).face(88.85, 'normal');
P.at(89.4, 'lieBack', {});
P.at(89.7, 'lieBack', { aB: [1.6, 1.35], aF: [1.6, 1.35], g67: 0.5 });
P.at(90.5, 'lieBack', { g67: 0.4 });
S.say(88.9, 89.85, 'both', '…Walao eh.');
S.say(89.9, 90.6, 67, '6… 7…');
S.fade(90.4, 0);
S.fade(91.0, 1);
S.end = { t: 91.0 };
S.letterbox(90.4, 1);
S.letterbox(91.0, 0);

export default S.build();
