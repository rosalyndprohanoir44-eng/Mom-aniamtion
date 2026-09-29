// Beat grid, audio envelopes and lip-sync, all derived from precomputed data.
import { AUDIO } from '../data/audio.js';
import { LINES } from '../data/lyrics.js';
import { clamp, fract, invLerp } from './util.js';

export const DURATION = 78.36;
export const BEAT = AUDIO.beat; // seconds per beat (~0.526 s, 114 BPM)
export const OFFSET = AUDIO.offset; // time of beat 0 (a downbeat)
export const BAR = BEAT * 4;

/** fractional beat number at time t */
export const beatAt = (t) => (t - OFFSET) / BEAT;
/** time of beat number b */
export const tBeat = (b) => OFFSET + b * BEAT;
/** time of the downbeat of bar n */
export const tBar = (n) => OFFSET + n * BAR;
/** phase (0..1) inside the current beat */
export const beatPhase = (t) => fract(beatAt(t));
/** 1 on the beat, decaying exponentially until the next */
export const beatHit = (t, sharp = 6) => Math.exp(-beatPhase(t) * sharp);
/** bouncy 0..1..0 arc once per beat (ground contact on the beat) */
export const beatBounce = (t) => Math.sin(beatPhase(t) * Math.PI);

function sample(arr, t) {
  const x = t * AUDIO.fps;
  const i = Math.floor(x);
  const f = x - i;
  const n = arr.length - 1;
  const a = arr[clamp(i, 0, n)];
  const b = arr[clamp(i + 1, 0, n)];
  return (a + (b - a) * f) / 99;
}
export const kick = (t) => sample(AUDIO.kick, t);
export const hat = (t) => sample(AUDIO.hat, t);
export const energy = (t) => sample(AUDIO.energy, t);
export const vocal = (t) => sample(AUDIO.vocal, t);

/** the lyric line active at t (with lead-in / tail), or null */
export function lineAt(t, lead = 0.6, tail = 0.35) {
  for (const l of LINES) if (t >= l.start - lead && t <= l.end + tail) return l;
  return null;
}

/**
 * Mouth opening (0..1) for a character at time t, from the words it sings.
 * who: 'bear' | 'pet'
 */
export function mouthOpen(t, who) {
  for (const l of LINES) {
    if (l.who !== who && l.who !== 'both') continue;
    if (t < l.start - 0.1 || t > l.end + 0.1) continue;
    for (const w of l.words) {
      if (t < w.start - 0.03 || t > w.end) continue;
      const dur = Math.max(0.12, w.end - w.start);
      const k = (t - w.start + 0.03) / dur;
      // attack, sustain, release - with a syllable dip for longer words
      const env = Math.min(1, k * 7) * Math.min(1, (1 - k) * 5);
      const syll = w.text.length > 4 ? 0.75 + 0.25 * Math.cos(k * Math.PI * 4) : 1;
      const v = 0.55 + 0.45 * vocal(t);
      return clamp(env * syll * v * (w.text.length <= 1 ? 0.75 : 1));
    }
    return 0;
  }
  return 0;
}

/** is `who` singing right now (inside a line)? returns 0..1 with soft edges */
export function singing(t, who) {
  for (const l of LINES) {
    if (l.who !== who && l.who !== 'both') continue;
    const a = invLerp(l.start - 0.3, l.start, t);
    const b = 1 - invLerp(l.end, l.end + 0.4, t);
    const v = Math.min(a, b);
    if (v > 0) return v;
  }
  return 0;
}
