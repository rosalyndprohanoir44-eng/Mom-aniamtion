// Dump the story's sound events (song time) to JSON for the synthesizer.
//   node stickfight/tools/sfx-events.mjs > stickfight/tools/sfx-events.json
const S = (await import('../src/story.js')).default;
const ev = S.sfx.map((e) => ({ t: +e.t.toFixed(4), type: e.type, gain: +(e.gain ?? 1).toFixed(3) })).sort((a, b) => a.t - b.t);
process.stdout.write(JSON.stringify({ duration: S.duration, events: ev }, null, 0));
