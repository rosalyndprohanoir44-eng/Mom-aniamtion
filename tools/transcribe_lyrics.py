#!/usr/bin/env python3
"""Measure when each lyric word is sung (used to fill src/data/lyrics.js).

The song's official lyrics are embedded in the MP3 (ID3 USLT tag); this script
prints them, then runs speech recognition with word timestamps so the karaoke
can be synced. Results were checked by hand and copied into src/data/lyrics.js.

Models (downloaded from the sherpa-onnx GitHub releases, ~0.5 GB each):
  https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-nemo-parakeet-tdt-0.6b-v2-int8.tar.bz2
  https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-whisper-turbo.tar.bz2

Usage:
  pip install sherpa-onnx soundfile numpy
  python3 tools/transcribe_lyrics.py --parakeet /path/to/sherpa-onnx-nemo-parakeet-tdt-0.6b-v2-int8
"""
import argparse
import os
import subprocess
import tempfile

import numpy as np
import soundfile as sf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SONG = os.path.join(ROOT, "assets", "song.mp3")


def embedded_lyrics(path):
    data = open(path, "rb").read(64 * 1024)
    i = data.find(b"USLT")
    if i < 0:
        return None
    size = (data[i + 4] << 21) | (data[i + 5] << 14) | (data[i + 6] << 7) | data[i + 7]
    body = data[i + 10:i + 10 + size]
    text = body[4:].partition(b"\x00")[2]
    return text.decode("utf-8", "replace").strip("\x00")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--parakeet", required=True, help="directory of the Parakeet TDT model")
    ap.add_argument("--windows", default="30:52,48:70", help="comma separated start:end windows (s)")
    args = ap.parse_args()

    print("Embedded lyrics:\n" + (embedded_lyrics(SONG) or "(none)") + "\n")

    import sherpa_onnx

    m = args.parakeet.rstrip("/") + "/"
    rec = sherpa_onnx.OfflineRecognizer.from_transducer(
        encoder=m + "encoder.int8.onnx", decoder=m + "decoder.int8.onnx",
        joiner=m + "joiner.int8.onnx", tokens=m + "tokens.txt",
        num_threads=4, model_type="nemo_transducer")

    with tempfile.TemporaryDirectory() as d:
        wav = os.path.join(d, "song16k.wav")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", SONG, "-ac", "1", "-ar", "16000", wav],
                       check=True)
        y, sr = sf.read(wav, dtype="float32")

    for w in args.windows.split(","):
        s, e = (float(v) for v in w.split(":"))
        st = rec.create_stream()
        st.accept_waveform(sr, y[int(s * sr):int(e * sr)])
        rec.decode_stream(st)
        r = st.result
        print(f"[{s:.1f}-{e:.1f}] {r.text}")
        print("   " + " ".join(f"{tok}@{s + ts:.2f}" for tok, ts in zip(r.tokens, r.timestamps)))


if __name__ == "__main__":
    main()
