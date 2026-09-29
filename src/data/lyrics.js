// Lyrics of the song (embedded in the MP3's ID3 USLT tag) with word start times.
//
// Word times were measured with speech recognition (NVIDIA Parakeet TDT via
// sherpa-onnx, cross-checked with Whisper) - see tools/transcribe_lyrics.py.
// Each word is [text, startSeconds]; a word lasts until the next word starts,
// the last word lasts until the line's `end`.
//
// `who` decides which character sings the line (drives the mouths):
//   'bear' = White Bear, 'pet' = Claude Pet, 'both' = duet.

export const LYRIC_SHIFT = -0.05; // ASR timestamps land a hair late; nudge earlier

export const LYRICS = [
  { who: 'bear', end: 37.15, words: [['I', 33.92], ['want', 35.2], ['to', 35.52], ['sing', 35.84], ['a', 36.4], ['song', 36.56]] },
  { who: 'bear', end: 39.05, words: [['I', 37.44], ['want', 37.6], ['to', 37.76], ['sing', 37.92], ['a', 38.3], ['song', 38.48]] },
  { who: 'bear', end: 42.1, words: [['I', 39.36], ['am', 39.52], ['so', 39.92], ['scary', 40.16], ['of', 40.96], ['you', 41.44]] },
  { who: 'pet', end: 45.5, words: [["I'm", 43.36], ['scary', 43.68], ['of', 44.4], ['for', 44.78], ['you', 45.12]] },
  { who: 'bear', end: 47.25, words: [['You', 45.76], ['are', 45.92], ['so', 46.16], ['scary', 46.4]] },
  { who: 'pet', end: 50.3, words: [['I', 47.84], ['am', 48.08], ['afraid', 48.64], ['of', 49.68]] },
  { who: 'both', end: 54.9, words: [['We', 51.76], ['are', 52.08], ['cute,', 52.48], ['we', 53.12], ['are', 53.36], ['bear', 53.76]] },
  { who: 'both', end: 59.1, words: [['We', 56.0], ['are', 56.24], ['cute,', 56.64], ['we', 57.36], ['are', 57.64], ['bear', 58.0]] },
  { who: 'both', end: 63.3, words: [['We', 60.24], ['are', 60.48], ['cute,', 60.88], ['we', 61.6], ['are', 61.9], ['bear', 62.16]] },
  { who: 'both', end: 67.4, words: [['We', 64.5], ['are', 64.72], ['cute,', 65.04], ['we', 65.76], ['are', 65.96], ['bear', 66.4]] },
];

// Normalised lines: [{who, start, end, text, words:[{text,start,end}]}]
export const LINES = LYRICS.map((line) => {
  const words = line.words.map(([text, start], i) => {
    const next = line.words[i + 1];
    const s = start + LYRIC_SHIFT;
    const e = next ? next[1] + LYRIC_SHIFT : line.end + LYRIC_SHIFT;
    return { text, start: s, end: e };
  });
  return {
    who: line.who,
    start: words[0].start,
    end: line.end + LYRIC_SHIFT,
    text: words.map((w) => w.text).join(' '),
    words,
  };
});
