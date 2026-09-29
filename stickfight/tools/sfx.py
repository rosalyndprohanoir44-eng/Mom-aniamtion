"""Synthesize the fight's sound effects and mix them under the song.

    node stickfight/tools/sfx-events.mjs > stickfight/tools/sfx-events.json
    python3 stickfight/tools/sfx.py            -> stickfight/assets/mix.mp3

Every sound is generated procedurally (filtered noise, sine sweeps,
inharmonic partials for iron), placed at its event time and mixed under
assets/iron-and-ash.mp3 with a soft limiter. The mix is padded with silence
to the film's length so the end card plays out.
"""
import json
import os
import subprocess
import numpy as np
from scipy.signal import butter, sosfilt

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SR = 44100
rng = np.random.default_rng(7)


def t_(dur):
    return np.arange(int(round(dur * SR))) / SR


def env(dur, a=0.004, d=None, shape=4.0):
    """fast attack, exponential decay"""
    t = t_(dur)
    e = np.minimum(1, t / max(a, 1e-4))
    e *= np.exp(-shape * t / (d or dur))
    return e


def noise(dur):
    return rng.standard_normal(int(round(dur * SR)))


def bp(x, lo, hi, order=2):
    sos = butter(order, [lo, hi], btype='band', fs=SR, output='sos')
    return sosfilt(sos, x)


def lp(x, f, order=2):
    return sosfilt(butter(order, f, btype='low', fs=SR, output='sos'), x)


def hp(x, f, order=2):
    return sosfilt(butter(order, f, btype='high', fs=SR, output='sos'), x)


def sweep(f0, f1, dur, curve=3.0):
    t = t_(dur)
    f = f1 + (f0 - f1) * np.exp(-curve * t / dur)
    return np.sin(2 * np.pi * np.cumsum(f) / SR)


def swept_noise(dur, f0, f1, width=0.6, steps=24):
    """noise through a band-pass whose centre moves from f0 to f1"""
    n = noise(dur)
    out = np.zeros_like(n)
    seg = len(n) // steps + 1
    for i in range(steps):
        c = f0 * (f1 / f0) ** (i / max(1, steps - 1))
        lo, hi = max(40, c * (1 - width / 2)), min(SR / 2 - 100, c * (1 + width / 2))
        part = bp(n, lo, hi)
        w = np.zeros_like(n)
        a, b = max(0, (i - 1) * seg), min(len(n), (i + 2) * seg)
        w[a:b] = np.hanning(b - a)
        out += part * w
    return out


def norm(x, peak=1.0):
    m = np.max(np.abs(x)) or 1
    return x / m * peak


def pad(x, dur):
    n = int(dur * SR)
    return np.pad(x, (0, max(0, n - len(x))))[:n] if len(x) < n else x


def mixl(*parts):
    n = max(len(p) for p in parts)
    out = np.zeros(n)
    for p in parts:
        out[: len(p)] += p
    return out


def thump(f0=110, f1=50, dur=0.12, shape=5):
    return sweep(f0, f1, dur) * env(dur, 0.002, shape=shape)


def crackles(dur, n, lo=800, hi=5000, amp=1.0):
    out = np.zeros(int(dur * SR))
    for _ in range(n):
        at = int(rng.uniform(0, 0.85) * len(out))
        L = int(rng.uniform(0.004, 0.02) * SR)
        burst = bp(rng.standard_normal(L), lo, hi) * np.exp(-np.linspace(0, 6, L)) * rng.uniform(0.3, 1) * amp
        out[at: at + L] += burst[: len(out) - at]
    return out * np.exp(-2.5 * t_(dur) / dur)


# ---------------------------------------------------------------- recipes
def s_punch():
    return mixl(thump(130, 60, 0.12) * 0.9, bp(noise(0.03), 1200, 3500) * env(0.03, 0.001) * 0.5)


def s_punch_heavy():
    body = np.tanh(2.2 * thump(110, 45, 0.2, 4)) * 0.9
    return mixl(body, bp(noise(0.05), 900, 3000) * env(0.05, 0.001) * 0.6, lp(noise(0.25), 900) * env(0.25, 0.005) * 0.25)


def s_kick():
    return mixl(thump(120, 55, 0.14) * 0.9, bp(noise(0.12), 500, 1800) * env(0.12, 0.002) * 0.45)


def s_kick_heavy():
    body = np.tanh(2.5 * thump(100, 40, 0.24, 4))
    return mixl(body, bp(noise(0.07), 700, 2600) * env(0.07, 0.001) * 0.6, lp(noise(0.35), 700) * env(0.35, 0.01) * 0.3)


def s_palm():
    air = hp(noise(0.45), 1500) * env(0.45, 0.02, shape=3.5) * 0.35
    return mixl(thump(140, 55, 0.18) * 0.9, air, bp(noise(0.04), 1000, 3000) * env(0.04, 0.001) * 0.4)


def s_block():
    return mixl(bp(noise(0.05), 700, 2400) * env(0.05, 0.001) * 0.8, thump(180, 90, 0.06) * 0.4)


def s_swish():
    d = 0.18
    return swept_noise(d, 500, 2600, 0.8) * np.sin(np.pi * np.clip(t_(d) / d, 0, 1)) ** 2 * 0.6


def s_dash():
    d = 0.32
    return swept_noise(d, 300, 1800, 0.9) * np.sin(np.pi * np.clip(t_(d) / d, 0, 1)) ** 1.5 * 0.55


def s_whoosh():
    d = 0.3
    return swept_noise(d, 250, 1400, 0.9) * np.sin(np.pi * t_(d) / d) ** 2 * 0.6


def s_swing_heavy():
    d = 0.42
    return swept_noise(d, 120, 700, 0.9) * np.sin(np.pi * t_(d) / d) ** 1.5 * 0.9


def s_slice():
    d = 0.14
    return mixl(swept_noise(d, 2500, 7000, 0.7) * env(d, 0.004, shape=3) * 0.7, thump(160, 80, 0.08) * 0.35)


def s_wind_slash():
    d = 0.7
    air = swept_noise(d, 900, 4500, 0.9) * np.sin(np.pi * np.clip(t_(d) / d * 1.3, 0, 1)) ** 1.2 * 0.8
    t = t_(0.9)
    ring = (np.sin(2 * np.pi * 1850 * t) + 0.5 * np.sin(2 * np.pi * 2790 * t)) * np.exp(-5 * t) * 0.18
    return mixl(air, ring)


def s_clang():
    t = t_(1.3)
    parts = [(523, 1.0, 1.8), (1307, 0.7, 2.6), (2210, 0.55, 3.2), (3170, 0.4, 4.0), (4410, 0.3, 5.5), (5870, 0.2, 7.0)]
    ring = sum(a * np.sin(2 * np.pi * f * t + rng.uniform(0, 6)) * np.exp(-k * t) for f, a, k in parts)
    click = bp(noise(0.02), 2000, 8000) * env(0.02, 0.0005) * 1.2
    return mixl(norm(ring) * 0.55, click, thump(200, 110, 0.05) * 0.4)


def s_land():
    return mixl(thump(90, 45, 0.08) * 0.6, lp(noise(0.18), 1200) * env(0.18, 0.004) * 0.35)


def s_body(soft=False):
    g = 0.55 if soft else 1.0
    return mixl(thump(85, 40, 0.1, 5) * 0.8 * g, lp(noise(0.2), 1400) * env(0.2, 0.003) * 0.4 * g)


def s_slam():
    return mixl(np.tanh(2 * thump(90, 35, 0.35, 3.5)), lp(noise(0.5), 900) * env(0.5, 0.005) * 0.45, crackles(0.6, 18, amp=0.35))


def s_stomp():
    return mixl(np.tanh(1.8 * thump(65, 32, 0.32, 3.5)), lp(noise(0.3), 500) * env(0.3, 0.01) * 0.3)


def s_crater(big=False):
    d = 1.6 if big else 0.9
    boom = np.tanh(2.2 * sweep(95 if big else 110, 28, d) * env(d, 0.003, shape=3.2)) * 1.0
    rumble = lp(noise(d), 600 if big else 800) * env(d, 0.01, shape=2.8) * 0.6
    grit = crackles(d, 60 if big else 30, 600, 4500, 0.6)
    snap = bp(noise(0.06), 800, 3500) * env(0.06, 0.001) * 0.7
    return mixl(boom, rumble, grit, snap)


def s_thunk():
    t = t_(0.5)
    ring = (np.sin(2 * np.pi * 380 * t) + 0.4 * np.sin(2 * np.pi * 1040 * t)) * np.exp(-9 * t) * 0.3
    return mixl(thump(120, 50, 0.15) * 0.8, ring, lp(noise(0.2), 1500) * env(0.2, 0.003) * 0.3)


def s_rock_hit():
    return mixl(bp(noise(0.2), 300, 2500) * env(0.2, 0.002, shape=5) * 0.8, thump(100, 50, 0.12) * 0.6, crackles(0.4, 12, amp=0.4))


def s_wind_soft():
    d = 3.2
    n = lp(noise(d), 900)
    mod = 0.6 + 0.4 * np.sin(2 * np.pi * 0.7 * t_(d) + 1)
    return n * mod * np.sin(np.pi * t_(d) / d) * 0.25


def s_wind_rise():
    d = 1.6
    return swept_noise(d, 250, 2600, 0.7, 32) * (t_(d) / d) ** 1.6 * np.minimum(1, (d - t_(d)) / 0.08) * 0.7


def s_whirl():
    d = 2.4
    n = swept_noise(d, 400, 1800, 0.8, 32)
    am = 0.55 + 0.45 * np.sin(2 * np.pi * 9 * t_(d))
    return n * am * np.sin(np.pi * t_(d) / d) ** 0.6 * 0.8


def s_burst():
    d = 1.4
    rise = swept_noise(0.3, 300, 2500, 0.8) * np.linspace(0, 1, int(0.3 * SR)) ** 2 * 0.6
    blast = mixl(np.tanh(2 * thump(90, 30, 0.6, 3)), swept_noise(d, 3000, 300, 0.9) * env(d, 0.005, shape=3) * 0.8)
    return mixl(rise, np.concatenate([np.zeros(int(0.28 * SR)), blast]))


def s_storm():
    d = 3.4
    t = t_(d)
    roar = lp(noise(d), 700) * (0.5 + 0.5 * np.sin(2 * np.pi * 0.9 * t)) * 0.8
    howl = swept_noise(d, 300, 1600, 0.6, 40) * (0.6 + 0.4 * np.sin(2 * np.pi * 3.1 * t)) * 0.6
    grow = np.minimum(1, t / 0.4) * (0.55 + 0.45 * t / d)
    return (roar + howl) * grow


def s_blast():
    d = 1.8
    return mixl(np.tanh(2.6 * sweep(80, 25, d) * env(d, 0.003, shape=3)), lp(noise(d), 1200) * env(d, 0.005, shape=3) * 0.8,
                swept_noise(1.2, 4000, 400, 0.9) * env(1.2, 0.01, shape=3) * 0.5)


def s_ash():
    d = 2.2
    hiss = hp(noise(d), 3000) * env(d, 0.05, shape=2.5) * 0.18
    return mixl(hiss, crackles(d, 120, 2500, 9000, 0.45))


def s_finisher():
    return mixl(s_kick_heavy() * 1.1, s_crater(False) * 0.6, np.concatenate([np.zeros(int(0.02 * SR)), s_clang() * 0.35]))


def s_clash():
    return mixl(s_clang(), s_crater(False) * 0.7)


def s_stamp():
    return mixl(thump(150, 60, 0.12) * 0.9, bp(noise(0.05), 1000, 4500) * env(0.05, 0.001) * 0.6)


RECIPES = {
    'punch': s_punch, 'punchHeavy': s_punch_heavy, 'hitHeavy': s_punch_heavy, 'kick': s_kick, 'kickHeavy': s_kick_heavy,
    'palm': s_palm, 'block': s_block, 'swish': s_swish, 'dash': s_dash, 'whoosh': s_whoosh, 'swingHeavy': s_swing_heavy,
    'slice': s_slice, 'windSlash': s_wind_slash, 'clang': s_clang, 'land': s_land, 'body': s_body,
    'bodySoft': lambda: s_body(True), 'slam': s_slam, 'stomp': s_stomp, 'crater': s_crater,
    'craterBig': lambda: s_crater(True), 'thunk': s_thunk, 'rockHit': s_rock_hit, 'windSoft': s_wind_soft,
    'windRise': s_wind_rise, 'whirl': s_whirl, 'burst': s_burst, 'storm': s_storm, 'blast': s_blast, 'ash': s_ash,
    'finisher': s_finisher, 'clash': s_clash, 'stamp': s_stamp,
}
LEVEL = {  # per-type loudness (linear), tuned against the song
    'swish': 0.35, 'dash': 0.35, 'whoosh': 0.4, 'body': 0.5, 'bodySoft': 0.45, 'land': 0.45, 'windSoft': 0.5,
    'storm': 0.55, 'ash': 0.5, 'windRise': 0.45, 'whirl': 0.5, 'crater': 0.85, 'craterBig': 1.0, 'blast': 0.9,
}


def main():
    ev = json.load(open(os.path.join(HERE, 'sfx-events.json')))
    dur = ev['duration']
    n = int(dur * SR)
    fx = np.zeros((n, 2))
    cache = {}
    for e in ev['events']:
        kind = e['type']
        if kind not in RECIPES:
            print('no recipe for', kind)
            continue
        # a few variants per type so repeats don't sound identical
        cache.setdefault(kind, [])
        if len(cache[kind]) < 3:
            cache[kind].append(norm(RECIPES[kind]()))
        snd = cache[kind][hash((e['t'] * 1000) // 1) % len(cache[kind])] * e['gain'] * LEVEL.get(kind, 0.7)
        pitch = 1 + (hash(round(e['t'], 3)) % 7 - 3) * 0.015
        if abs(pitch - 1) > 1e-3:
            idx = np.arange(0, len(snd) - 1, pitch)
            snd = np.interp(idx, np.arange(len(snd)), snd)
        i0 = int(max(0, e['t']) * SR)
        i1 = min(n, i0 + len(snd))
        pan = 0.5 + 0.12 * np.sin(e['t'] * 3.1)
        fx[i0:i1, 0] += snd[: i1 - i0] * (1 - pan) * 1.4
        fx[i0:i1, 1] += snd[: i1 - i0] * pan * 1.4
    # song
    song_path = os.path.join(ROOT, 'assets', 'iron-and-ash.mp3')
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', song_path, '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'],
                         capture_output=True, check=True).stdout
    song = np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64)
    song = np.pad(song, ((0, max(0, n - len(song))), (0, 0)))[:n]
    fx_peak = np.max(np.abs(fx))
    fx *= 0.5 / max(fx_peak, 1e-6)
    mix = song * 0.9 + fx
    # soft limiter
    mix = np.tanh(mix * 1.05) / np.tanh(1.05)
    peak = np.max(np.abs(mix))
    mix *= min(1.0, 0.98 / peak)
    wav = os.path.join(HERE, 'mix.wav')
    pcm = (mix * 32767).astype(np.int16)
    import wave
    with wave.open(wav, 'wb') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    out = os.path.join(ROOT, 'assets', 'mix.mp3')
    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', wav, '-c:a', 'libmp3lame', '-b:a', '192k', out], check=True)
    os.remove(wav)
    print('wrote', out, f'{dur:.1f}s', 'fx peak', round(float(fx_peak), 2))


if __name__ == '__main__':
    main()
