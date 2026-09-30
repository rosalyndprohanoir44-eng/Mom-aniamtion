"""Synthesize SG vs 67's sound effects and mix them with the phonk track.

    python3 sgvs67/tools/music.py                                   -> tools/music.wav
    node sgvs67/tools/sfx-events.mjs > sgvs67/tools/sfx-events.json
    python3 sgvs67/tools/sfx.py                                     -> assets/mix.mp3

Every sound is procedural: filtered noise, sine sweeps, inharmonic partials,
a formant-filtered "lion", a brassy "doot", glass tinkles and concrete
crumble. Each event is placed at its song time and mixed under the music with
a soft limiter.
"""
import json
import os
import subprocess
import wave
import numpy as np
from scipy.signal import butter, sosfilt

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SR = 44100
rng = np.random.default_rng(76)


def t_(d):
    return np.arange(int(round(d * SR))) / SR


def env(d, a=0.004, shape=4.0):
    t = t_(d)
    return np.minimum(1, t / max(a, 1e-4)) * np.exp(-shape * t / d)


def noise(d):
    return rng.standard_normal(int(round(d * SR)))


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, min(hi, SR / 2 - 200)], btype='band', fs=SR, output='sos'), x)


def lp(x, f, order=2):
    return sosfilt(butter(order, min(f, SR / 2 - 200), btype='low', fs=SR, output='sos'), x)


def hp(x, f, order=2):
    return sosfilt(butter(order, f, btype='high', fs=SR, output='sos'), x)


def sweep(f0, f1, d, curve=3.0):
    t = t_(d)
    f = f1 + (f0 - f1) * np.exp(-curve * t / d)
    return np.sin(2 * np.pi * np.cumsum(f) / SR)


def swept_noise(d, f0, f1, width=0.7, steps=28):
    n = noise(d)
    out = np.zeros_like(n)
    seg = len(n) // steps + 1
    for i in range(steps):
        c = f0 * (f1 / f0) ** (i / max(1, steps - 1))
        part = bp(n, max(40, c * (1 - width / 2)), min(SR / 2 - 300, c * (1 + width / 2)))
        w = np.zeros_like(n)
        a, b = max(0, (i - 1) * seg), min(len(n), (i + 2) * seg)
        w[a:b] = np.hanning(b - a)
        out += part * w
    return out


def norm(x, peak=1.0):
    m = np.max(np.abs(x)) or 1
    return x / m * peak


def mixl(*parts):
    n = max(len(p) for p in parts)
    out = np.zeros(n)
    for p in parts:
        out[: len(p)] += p
    return out


def delay(x, secs):
    return np.concatenate([np.zeros(int(secs * SR)), x])


def thump(f0=110, f1=50, d=0.12, shape=5):
    return sweep(f0, f1, d) * env(d, 0.002, shape)


def crackles(d, n, lo=800, hi=5000, amp=1.0):
    out = np.zeros(int(d * SR))
    for _ in range(n):
        at = int(rng.uniform(0, 0.85) * len(out))
        L = int(rng.uniform(0.004, 0.02) * SR)
        burst = bp(rng.standard_normal(L), lo, hi) * np.exp(-np.linspace(0, 6, L)) * rng.uniform(0.3, 1) * amp
        out[at: at + L] += burst[: len(out) - at]
    return out * np.exp(-2.5 * t_(d) / d)


def tinkles(d, n, amp=1.0):
    """glass: many short high inharmonic pings"""
    out = np.zeros(int(d * SR))
    for _ in range(n):
        at = int(rng.uniform(0, 0.8) ** 1.6 * len(out))
        f = rng.uniform(2500, 7500)
        L = int(rng.uniform(0.05, 0.25) * SR)
        tt = np.arange(L) / SR
        ping = (np.sin(2 * np.pi * f * tt) + 0.5 * np.sin(2 * np.pi * f * 1.73 * tt)) * np.exp(-tt * rng.uniform(20, 45))
        out[at: at + L] += ping[: len(out) - at] * rng.uniform(0.3, 1) * amp
    return out


# ------------------------------------------------------------------ recipes
def s_tap():
    return mixl(thump(170, 90, 0.07) * 0.6, bp(noise(0.03), 1500, 4000) * env(0.03, 0.001) * 0.5)


def s_punch():
    return mixl(np.tanh(1.6 * thump(140, 55, 0.13)), bp(noise(0.04), 1200, 3800) * env(0.04, 0.001) * 0.7)


def s_heavy():
    body = np.tanh(2.4 * thump(115, 42, 0.24, 4))
    return mixl(body, bp(noise(0.06), 900, 3200) * env(0.06, 0.001) * 0.7, lp(noise(0.3), 900) * env(0.3, 0.004) * 0.35)


def s_smash():
    body = np.tanh(2.8 * thump(100, 32, 0.5, 3.4))
    snap = bp(noise(0.08), 700, 4200) * env(0.08, 0.001) * 0.9
    tail = lp(noise(0.9), 1400) * env(0.9, 0.005, 3) * 0.45
    return mixl(body, snap, tail, crackles(0.8, 30, amp=0.35))


def s_clash():
    t = t_(1.4)
    parts = [(410, 1.0, 2.0), (1190, 0.7, 2.8), (2230, 0.5, 3.4), (3350, 0.35, 4.4)]
    ring = sum(a * np.sin(2 * np.pi * f * t + rng.uniform(0, 6)) * np.exp(-k * t) for f, a, k in parts)
    return mixl(s_smash() * 0.9, norm(ring) * 0.45)


def s_whoosh():
    d = 0.28
    return swept_noise(d, 300, 1900, 0.9) * np.sin(np.pi * t_(d) / d) ** 2 * 0.7


def s_land():
    return mixl(thump(95, 45, 0.09) * 0.6, lp(noise(0.2), 1300) * env(0.2, 0.004) * 0.4)


def s_jump():
    d = 0.22
    return mixl(thump(120, 70, 0.06) * 0.4, swept_noise(d, 400, 1600, 0.8) * np.sin(np.pi * t_(d) / d) * 0.4)


def s_run():
    out = np.zeros(int(1.6 * SR))
    for k in range(12):
        s = mixl(thump(130, 80, 0.05) * 0.5, lp(noise(0.06), 2000) * env(0.06, 0.002) * 0.3)
        i = int(k * 0.13 * SR)
        out[i: i + len(s)] += s[: len(out) - i]
    return out


def s_flick():
    d = 0.16
    return mixl(swept_noise(d, 1200, 5000, 0.6) * env(d, 0.003, 3) * 0.7, bp(noise(0.02), 3000, 8000) * env(0.02, 0.0005) * 0.5)


def s_tick():
    return bp(noise(0.05), 1500, 6000) * env(0.05, 0.001, 6) * 0.8


def s_stick():
    return mixl(bp(noise(0.08), 600, 4000) * env(0.08, 0.001, 5), thump(200, 120, 0.05) * 0.3)


def s_seal():
    t = t_(1.6)
    chime = sum(np.sin(2 * np.pi * f * t) * np.exp(-t * k) * a for f, a, k in [(880, 0.5, 2.5), (1320, 0.35, 3.0), (1760, 0.3, 3.5), (2640, 0.2, 5)])
    stamp = mixl(np.tanh(2 * thump(150, 60, 0.15)), bp(noise(0.06), 800, 4000) * env(0.06, 0.001) * 0.6)
    return mixl(stamp, chime * 0.5)


def s_numfire():
    d = 0.3
    t = t_(d)
    zap = np.sign(np.sin(2 * np.pi * np.cumsum(1400 * np.exp(-t * 6) + 300) / SR)) * np.exp(-t * 9)
    return lp(zap, 5000) * 0.35


def s_numhit():
    d = 0.7
    return mixl(np.tanh(2 * thump(130, 40, 0.3, 4)), swept_noise(d, 3000, 400, 0.9) * env(d, 0.003, 4) * 0.6, crackles(0.5, 14, amp=0.3))


def s_charge():
    d = 1.6
    t = t_(d)
    f = 90 + 500 * (t / d) ** 2
    hum = np.sin(2 * np.pi * np.cumsum(f) / SR) + 0.4 * np.sin(2 * np.pi * np.cumsum(f * 2.01) / SR)
    return (hum * 0.4 + swept_noise(d, 300, 5000, 0.5) * 0.4) * (t / d) ** 1.5


def s_aura():
    d = 1.8
    t = t_(d)
    roar = lp(noise(d), 900) * (0.6 + 0.4 * np.sin(2 * np.pi * 11 * t))
    return (roar * 0.8 + crackles(d, 50, 1500, 7000, 0.5)) * np.minimum(1, t / 0.06) * np.exp(-t * 1.2)


def s_crackle():
    return crackles(1.0, 70, 2000, 9000, 0.9)


def s_break():
    t = t_(1.5)
    chime = sum(np.sin(2 * np.pi * f * t) * np.exp(-t * 3) * a for f, a in [(1175, 0.4), (1568, 0.3), (2349, 0.25)])
    return mixl(s_smash() * 0.6, swept_noise(0.6, 800, 7000, 0.8) * env(0.6, 0.003, 3) * 0.6, chime * 0.4)


def s_doot():
    """a brassy synth 'doot' plus a basketball bounce"""
    d = 0.26
    t = t_(d)
    f = 330 * (1 + 0.06 * np.exp(-t * 30))
    ph = 2 * np.pi * np.cumsum(f) / SR
    saw = sum(np.sin(k * ph) / k for k in range(1, 12))
    brass = bp(saw, 500, 2600) * np.minimum(1, t / 0.015) * np.exp(-t * 5)
    ball = mixl(thump(160, 70, 0.1) * 0.8, bp(noise(0.05), 300, 1500) * env(0.05, 0.001) * 0.4)
    return mixl(norm(brass) * 0.8, ball)


def s_dunk():
    d = 2.2
    boom = np.tanh(2.6 * sweep(90, 26, d) * env(d, 0.003, 3))
    return mixl(boom, lp(noise(d), 800) * env(d, 0.01, 2.8) * 0.6, crackles(d, 80, 600, 4500, 0.5), bp(noise(0.08), 800, 3000) * env(0.08, 0.001))


def s_crater(big=False):
    d = 1.6 if big else 0.9
    boom = np.tanh(2.2 * sweep(95 if big else 110, 28, d) * env(d, 0.003, 3.2))
    rumble = lp(noise(d), 600 if big else 800) * env(d, 0.01, 2.8) * 0.6
    return mixl(boom, rumble, crackles(d, 60 if big else 30, 600, 4500, 0.6), bp(noise(0.06), 800, 3500) * env(0.06, 0.001) * 0.7)


def s_glass():
    d = 2.2
    return mixl(tinkles(d, 140, 0.35), bp(noise(0.12), 2000, 9000) * env(0.12, 0.001) * 0.8)


def s_wallcrash():
    d = 1.2
    return mixl(s_smash() * 0.8, crackles(d, 70, 400, 3500, 0.7), lp(noise(d), 700) * env(d, 0.01, 3) * 0.5)


def s_catch():
    return mixl(bp(noise(0.07), 600, 3000) * env(0.07, 0.001, 5), thump(150, 80, 0.08) * 0.5)


def s_grow():
    d = 2.2
    t = t_(d)
    f = 35 + 50 * (t / d)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * (t / d) ** 0.7
    return mixl(np.tanh(2 * sub), lp(noise(d), 500) * (t / d) * 0.6, crackles(d, 90, 1500, 8000, 0.4))


def s_stomp():
    return mixl(np.tanh(2.2 * thump(60, 28, 0.5, 3.2)), lp(noise(0.5), 400) * env(0.5, 0.01) * 0.4)


def s_collapse():
    d = 3.0
    t = t_(d)
    rumble = lp(noise(d), 350) * np.minimum(1, t / 0.05) * np.exp(-t * 0.9)
    return mixl(s_smash(), np.tanh(2 * rumble) * 0.9, crackles(d, 220, 300, 4000, 0.7), tinkles(d, 90, 0.25))


def s_rumble():
    d = 2.5
    t = t_(d)
    return np.tanh(2 * lp(noise(d), 250)) * np.sin(np.pi * t / d) * 0.9 + crackles(d, 120, 300, 3000, 0.5)


def s_launch():
    d = 0.9
    return mixl(swept_noise(d, 200, 3500, 0.9) * np.sin(np.pi * t_(d) / d) ** 0.8 * 0.8, np.tanh(2 * thump(90, 35, 0.4, 3)) * 0.8)


def s_pop():
    d = 0.12
    t = t_(d)
    return np.sin(2 * np.pi * np.cumsum(900 - 500 * t / d) / SR) * np.exp(-t * 30) * 0.8 + bp(noise(d), 1500, 5000) * env(d, 0.001, 8) * 0.3


def s_clap():
    d = 0.5
    t = t_(d)
    e = sum((t >= o) * np.exp(-np.maximum(0, t - o) * 90) for o in (0, 0.012, 0.024))
    return mixl(bp(noise(d), 800, 5000) * e, lp(noise(d), 3000) * np.exp(-t * 6) * 0.2)


def s_kick():
    return mixl(np.tanh(1.8 * thump(125, 55, 0.15)), bp(noise(0.12), 500, 1800) * env(0.12, 0.002) * 0.45)


def s_beam():
    d = 5.2
    t = t_(d)
    hum = sum(np.sin(2 * np.pi * f * t + rng.uniform(0, 6)) * a for f, a in [(55, 1.0), (110.4, 0.6), (165.2, 0.3), (220.6, 0.2)])
    hiss = hp(noise(d), 2500) * (0.5 + 0.5 * np.sin(2 * np.pi * 13 * t)) * 0.35
    grit = crackles(d, 300, 1500, 9000, 0.35)
    grow = np.minimum(1, t / 0.15) * (0.5 + 0.5 * t / d) * np.minimum(1, (d - t) / 0.05)
    return (np.tanh(1.6 * hum) * 0.6 + hiss + grit) * grow


def s_roar():
    """a lion-ish roar: growling noise through moving vocal formants"""
    d = 1.6
    t = t_(d)
    growl = noise(d) * (0.6 + 0.4 * np.sin(2 * np.pi * 28 * t))
    buzz = np.sign(np.sin(2 * np.pi * np.cumsum(95 + 30 * np.sin(np.pi * t / d)) / SR)) * 0.5
    src = growl * 0.6 + buzz
    f1 = bp(src, 450, 900) * 1.0
    f2 = bp(src, 1000, 1800) * 0.6
    f3 = bp(src, 2300, 3200) * 0.3
    e = np.minimum(1, t / 0.12) * np.minimum(1, (d - t) / 0.5)
    return np.tanh(1.8 * (f1 + f2 + f3)) * e


def s_explosion():
    d = 4.0
    boom = np.tanh(3.0 * sweep(70, 22, d) * env(d, 0.003, 2.6))
    return mixl(boom, lp(noise(d), 1400) * env(d, 0.005, 2.6) * 0.9, swept_noise(2.5, 5000, 300, 0.9) * env(2.5, 0.01, 3) * 0.6,
                crackles(d, 260, 500, 6000, 0.6), tinkles(d, 120, 0.25))


def s_vs():
    t = t_(1.2)
    ring = sum(np.sin(2 * np.pi * f * t) * np.exp(-t * k) * a for f, a, k in [(523, 0.6, 3), (1046, 0.4, 4), (1568, 0.3, 5)])
    return mixl(swept_noise(0.25, 6000, 1500, 0.7) * env(0.25, 0.002, 3) * 0.7, ring * 0.6, np.tanh(2 * thump(110, 40, 0.3)))


RECIPES = {
    'tap': s_tap, 'punch': s_punch, 'heavy': s_heavy, 'smash': s_smash, 'clash': s_clash, 'whoosh': s_whoosh,
    'land': s_land, 'jump': s_jump, 'run': s_run, 'flick': s_flick, 'tick': s_tick, 'stick': s_stick, 'seal': s_seal,
    'numFire': s_numfire, 'numHit': s_numhit, 'charge': s_charge, 'aura': s_aura, 'crackle': s_crackle, 'break': s_break,
    'doot': s_doot, 'dunk': s_dunk, 'crater': s_crater, 'craterBig': lambda: s_crater(True), 'glass': s_glass,
    'wallcrash': s_wallcrash, 'catch': s_catch, 'grow': s_grow, 'stomp': s_stomp, 'collapse': s_collapse,
    'rumble': s_rumble, 'launch': s_launch, 'pop': s_pop, 'clap': s_clap, 'kick': s_kick, 'beam': s_beam,
    'roar': s_roar, 'explosion': s_explosion, 'vs': s_vs,
}
LEVEL = {  # per-type loudness against the music
    'whoosh': 0.45, 'land': 0.5, 'jump': 0.45, 'run': 0.4, 'tick': 0.5, 'flick': 0.6, 'numFire': 0.45, 'numHit': 0.55,
    'crackle': 0.5, 'beam': 0.75, 'charge': 0.6, 'aura': 0.7, 'explosion': 1.1, 'collapse': 1.0, 'dunk': 1.0,
    'glass': 0.6, 'doot': 0.9, 'roar': 0.95, 'vs': 0.7, 'rumble': 0.8, 'grow': 0.9, 'pop': 0.5,
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
        cache.setdefault(kind, [])
        if len(cache[kind]) < 3:
            cache[kind].append(norm(RECIPES[kind]()))
        snd = cache[kind][int(e['t'] * 1000) % len(cache[kind])] * e['gain'] * LEVEL.get(kind, 0.75)
        pitch = 1 + (int(e['t'] * 997) % 7 - 3) * 0.015
        if abs(pitch - 1) > 1e-3 and kind not in ('beam', 'doot'):
            idx = np.arange(0, len(snd) - 1, pitch)
            snd = np.interp(idx, np.arange(len(snd)), snd)
        i0 = int(max(0, e['t']) * SR)
        i1 = min(n, i0 + len(snd))
        pan = 0.5 + 0.14 * np.sin(e['t'] * 3.1)
        fx[i0:i1, 0] += snd[: i1 - i0] * (1 - pan) * 1.4
        fx[i0:i1, 1] += snd[: i1 - i0] * pan * 1.4
    with wave.open(os.path.join(HERE, 'music.wav')) as w:
        music = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).reshape(-1, 2).astype(np.float64) / 32768
    music = np.pad(music, ((0, max(0, n - len(music))), (0, 0)))[:n]
    fx *= 0.6 / max(np.max(np.abs(fx)), 1e-6)
    # duck the music under loud effects so hits cut through the phonk
    level = np.abs(fx).max(axis=1)
    k = int(0.04 * SR)
    level = np.convolve(level, np.ones(k) / k, mode='same')
    duck = 1 - 0.45 * np.clip(level / 0.12, 0, 1)
    mix = music * 0.85 * duck[:, None] + fx
    mix = sosfilt(butter(2, 28, btype='high', fs=SR, output='sos'), mix, axis=0)
    mix = np.tanh(mix * 1.1) / np.tanh(1.1)
    mix *= 0.97 / np.max(np.abs(mix))
    wav = os.path.join(HERE, 'mix.wav')
    with wave.open(wav, 'wb') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((mix * 32767).astype(np.int16).tobytes())
    out = os.path.join(ROOT, 'assets', 'mix.mp3')
    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', wav, '-c:a', 'libmp3lame', '-b:a', '192k', out], check=True)
    os.remove(wav)
    print('wrote', out, f'{dur:.1f}s', len(ev['events']), 'events')


if __name__ == '__main__':
    main()
