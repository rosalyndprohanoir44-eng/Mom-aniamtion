// Reusable, beat-aware motion building blocks. All pure functions of time.
import { beatAt, beatPhase, BEAT, tBeat } from '../core/music.js';
import { clamp, invLerp, E, lerp, noise, hash, wobble, TAU } from '../core/util.js';

/** natural blinking: 0 open .. 1 closed */
export function blink(t, seed = 0) {
  // blink roughly every 2.4-4.2 s, sometimes a double blink
  const period = 3.1;
  const i = Math.floor((t + seed * 1.7) / period);
  const off = hash(i * 3.3 + seed) * (period - 0.4);
  const local = t + seed * 1.7 - i * period - off;
  const one = (x) => (x > 0 && x < 0.16 ? 1 - Math.abs(x - 0.08) / 0.08 : 0);
  let v = one(local);
  if (hash(i * 7.1 + seed) > 0.7) v = Math.max(v, one(local - 0.22));
  return clamp(v * 1.4);
}

export const breathe = (t, amp = 0.012, rate = 2.1) => 1 + Math.sin(t * rate) * amp;

/**
 * Jump with anticipation, stretch, apex and squashy landing.
 * t0 = take-off time, dur = air time, h = height.
 * returns { y, squash, air (0..1 while airborne) }
 */
export function jump(t, t0, dur, h, antic = 0.14) {
  let y = 0, squash = 1, air = 0;
  if (t < t0 - antic) return { y, squash, air };
  if (t < t0) {
    const k = E.inOutSine(invLerp(t0 - antic, t0, t));
    squash = 1 - 0.16 * Math.sin(k * Math.PI * 0.5);
  } else if (t < t0 + dur) {
    const k = (t - t0) / dur;
    y = h * 4 * k * (1 - k);
    air = 1;
    const v = 1 - 2 * k; // +1 up .. -1 down
    squash = 1 + 0.14 * Math.abs(v) * (k < 0.15 ? k / 0.15 : 1);
  } else {
    const k = t - (t0 + dur);
    squash = 1 - 0.2 * Math.exp(-k * 9) * Math.cos(k * 22);
  }
  return { y, squash, air };
}

/** bouncy idle groove on the beat: returns {squash, bob, sway} */
export function groove(t, amt = 1) {
  const ph = beatPhase(t);
  const b = beatAt(t);
  const bounce = Math.pow(Math.sin(ph * Math.PI), 1.5);
  return {
    squash: 1 - 0.035 * amt * Math.exp(-ph * 7) + 0.02 * amt * bounce,
    bob: 0.03 * amt * bounce,
    sway: Math.sin(((b % 2) + ph) * Math.PI) * 0.06 * amt,
  };
}

/**
 * White Bear walk cycle: one step per beat.
 * returns partial pose (legs, arms, bob, sway, bag)
 */
export function bearWalk(t, amt = 1, stepsPerBeat = 1) {
  const cyc = beatAt(t) * stepsPerBeat * 0.5; // full cycle = 2 steps
  const a = cyc * TAU;
  const s = Math.sin(a);
  const lift = Math.abs(Math.sin(a));
  return {
    legLSwing: s * 0.55 * amt,
    legRSwing: -s * 0.55 * amt,
    legL: Math.max(0, Math.sin(a)) * 0.06 * amt,
    legR: Math.max(0, -Math.sin(a)) * 0.06 * amt,
    armLSwing: -s * 0.45 * amt,
    armRSwing: s * 0.45 * amt,
    bob: lift * 0.07 * amt,
    squash: 1 + (lift - 0.5) * 0.05 * amt,
    bendX: Math.sin(a) * 0.035 * amt,
    bagSwing: Math.sin(a - 0.8) * 0.28 * amt,
    tailWag: Math.sin(a * 2) * amt,
  };
}

/** Claude pet scuttle: fast little steps */
export function petScuttle(t, amt = 1, rate = 2) {
  const cyc = beatAt(t) * rate * 0.5;
  const a = cyc * TAU;
  return {
    walk: amt,
    stepPhase: cyc,
    bob: Math.abs(Math.sin(a)) * 0.035 * amt,
    tiltZ: Math.sin(a) * 0.05 * amt,
    squash: 1 + Math.abs(Math.sin(a)) * 0.04 * amt,
  };
}

/** a hop cycle on every beat (pet happy bounce) */
export function beatHop(t, h = 0.18, every = 1) {
  const b = beatAt(t) / every;
  const ph = b - Math.floor(b);
  const air = 0.62;
  if (ph < air) {
    const k = ph / air;
    return { y: h * 4 * k * (1 - k), squash: 1 + 0.12 * Math.abs(1 - 2 * k) };
  }
  const k = (ph - air) / (1 - air);
  return { y: 0, squash: 1 - 0.18 * Math.sin(k * Math.PI) };
}

/** smooth random look-around (for idle eyes) */
export const lookAround = (t, seed = 0, amp = 1) => ({
  lookX: noise(t * 0.7, seed) * amp,
  lookY: noise(t * 0.5, seed + 5) * amp * 0.5,
});

/** trembling offset (scared) */
export const tremble = (t, amp = 0.012, seed = 0) => noise(t * 38, seed) * amp;

/** decaying wobble after an impact at t0 */
export const impact = (t, t0, amp = 0.15, freq = 4.5, damp = 7) => wobble(t - t0, freq, damp) * amp;

/**
 * Pose-to-pose on beats: poses[] are objects of numbers; each beat snaps
 * to the next pose with an overshooting ease. Returns interpolated object.
 */
export function beatPoses(t, poses, startBeat = 0, lead = 0.13, settle = 0.2, everyBeats = 1) {
  // pose i "hits" exactly on beat (startBeat + i*everyBeats); the move starts
  // `lead` seconds earlier and overshoots a little, settling after the beat.
  const n = poses.length;
  const span = everyBeats * BEAT;
  const rel = t - tBeat(startBeat) + lead;
  const i = Math.floor(rel / span);
  const local = rel - i * span;
  const A = poses[(((i - 1) % n) + n) % n];
  const Bp = poses[((i % n) + n) % n];
  const k = E.outBack(clamp(local / (lead + settle)), 1.9);
  const out = {};
  for (const key in Bp) {
    const a = A[key] ?? Bp[key];
    out[key] = typeof Bp[key] === 'number' ? lerp(a, Bp[key], k) : k > 0.5 ? Bp[key] : a;
  }
  return out;
}

export { tBeat, BEAT };
