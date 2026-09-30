"""Original phonk track for SG vs 67 (140 BPM, A Phrygian), fully synthesized.

    python3 sgvs67/tools/music.py      -> sgvs67/tools/music.wav

Drift-phonk ingredients: a pitched 808 cowbell riff, distorted 808 bass with
glides, a hard kick, claps on 2 and 4, busy hats with rolls, risers and
impacts. The arrangement follows the film bar by bar:

  bars  0-8   intro: the riff on a tinny hawker-centre radio, opening up
  bar   7     build to the VS card, silence, drop
  bars  8-24  drop A
  bars 24-28  break: half-time giant steps, dark pad, build
  bars 28-44  drop B (impact on KIASU MODE at bar 32, 16th arps for QUEUE RUSH)
  bars 44-48  final build under the beam clash
  bar  48     impact, then silence
  bars 49-54  outro: the riff back on the radio
"""
import os
import wave
import numpy as np
from scipy.signal import butter, sosfilt, fftconvolve

HERE = os.path.dirname(os.path.abspath(__file__))
SR = 44100
BPM = 140
BEAT = 60 / BPM
BAR = 4 * BEAT
STEP = BEAT / 4
DUR = 92.5
N = int(DUR * SR)
rng = np.random.default_rng(67)


def bar(b, step=0):
    return b * BAR + step * STEP


def t_(d):
    return np.arange(int(round(d * SR))) / SR


def noise(d):
    return rng.standard_normal(int(round(d * SR)))


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, min(hi, SR / 2 - 200)], btype='band', fs=SR, output='sos'), x)


def lp(x, f, order=2):
    return sosfilt(butter(order, min(f, SR / 2 - 200), btype='low', fs=SR, output='sos'), x)


def hp(x, f, order=2):
    return sosfilt(butter(order, f, btype='high', fs=SR, output='sos'), x)


def note(n):
    """semitones from A4"""
    return 440.0 * 2 ** (n / 12)


class Bus:
    def __init__(self):
        self.x = np.zeros((N, 2))

    def add(self, snd, t, gain=1.0, pan=0.0):
        i0 = int(round(t * SR))
        if i0 >= N or i0 + len(snd) <= 0:
            return
        s = snd * gain
        if i0 < 0:
            s = s[-i0:]
            i0 = 0
        i1 = min(N, i0 + len(s))
        l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
        self.x[i0:i1, 0] += s[: i1 - i0] * l * 1.414
        self.x[i0:i1, 1] += s[: i1 - i0] * r * 1.414


# ------------------------------------------------------------------ instruments
def kick(punch=1.0):
    d = 0.5
    t = t_(d)
    f = 44 + 120 * np.exp(-t * 32)
    ph = 2 * np.pi * np.cumsum(f) / SR
    body = np.sin(ph) * np.exp(-t * 5.0)
    click = hp(noise(d), 2500) * np.exp(-t * 400) * 0.5
    return np.tanh((1.4 + 0.6 * punch) * (body + click))


def clap():
    d = 0.4
    t = t_(d)
    n = bp(noise(d), 900, 6000)
    e = np.zeros_like(t)
    for k, off in enumerate([0, 0.011, 0.023]):
        e += (t >= off) * np.exp(-np.maximum(0, t - off) * (180 if k < 2 else 16))
    body = np.sin(2 * np.pi * 185 * t) * np.exp(-t * 30) * 0.5
    return np.tanh(1.5 * (n * e * 0.8 + body))


def snare_roll_hit():
    d = 0.12
    t = t_(d)
    return np.tanh(1.3 * (bp(noise(d), 1200, 7000) * np.exp(-t * 35) + np.sin(2 * np.pi * 200 * t) * np.exp(-t * 40) * 0.4))


def hat(open_=False):
    d = 0.3 if open_ else 0.06
    t = t_(d)
    return hp(noise(d), 7500 if not open_ else 6000) * np.exp(-t * (11 if open_ else 75))


def crash():
    d = 2.4
    t = t_(d)
    ring = sum(np.sin(2 * np.pi * f * t + rng.uniform(0, 6)) * a for f, a in [(3450, 0.3), (5230, 0.25), (6870, 0.2), (8120, 0.15)])
    return (hp(noise(d), 3500) * 0.8 + ring * 0.2) * np.exp(-t * 1.6) * np.minimum(1, t / 0.002)


def cowbell(f, d=0.26, bright=1.0):
    t = t_(d)
    sq = lambda ff: np.sign(np.sin(2 * np.pi * ff * t))
    x = 0.62 * sq(f) + 0.38 * sq(f * 1.4829)
    x = bp(x, max(300, f * 0.9), 5200 * bright)
    e = np.exp(-t * 11) * np.minimum(1, t / 0.0015)
    return np.tanh(1.8 * x * e)


def b808(f0, d, f1=None, glide=0.08, drive=3.0):
    t = t_(d)
    f = np.full_like(t, f0)
    if f1 is not None:
        k = np.clip((t - (d - glide - 0.02)) / glide, 0, 1)
        f = f0 * (f1 / f0) ** (k * k * (3 - 2 * k))
    f = f * (1 + 0.9 * np.exp(-t * 45))
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = np.sin(ph) * np.minimum(1, t / 0.003) * np.exp(-t * 0.9)
    x *= np.minimum(1, (d - t) / 0.03).clip(0, 1)
    return np.tanh(drive * x) * 0.75 + np.sin(ph) * x * 0.25


def saw_chord(freqs, d, cutoff=900):
    t = t_(d)
    x = np.zeros_like(t)
    for f in freqs:
        for det in (-0.004, 0, 0.0045):
            ph = (f * (1 + det) * t + rng.uniform()) % 1
            x += 2 * ph - 1
    x = lp(x / (3 * len(freqs)), cutoff, 3)
    e = np.minimum(1, t / 0.35) * np.minimum(1, (d - t) / 0.4).clip(0, 1)
    return x * e


def riser(d, f0=400, f1=9000):
    t = t_(d)
    n = noise(d)
    out = np.zeros_like(n)
    steps = 40
    seg = len(n) // steps + 1
    for i in range(steps):
        c = f0 * (f1 / f0) ** (i / (steps - 1))
        part = bp(n, max(60, c * 0.7), min(SR / 2 - 300, c * 1.3))
        w = np.zeros_like(n)
        a, b = max(0, (i - 1) * seg), min(len(n), (i + 2) * seg)
        w[a:b] = np.hanning(b - a)
        out += part * w
    tone_f = 180 * (1600 / 180) ** (t / d)
    tone = np.sin(2 * np.pi * np.cumsum(tone_f) / SR) * 0.25
    return (out * 0.8 + tone) * (t / d) ** 2


def reverse_swell(d=1.2):
    t = t_(d)
    return hp(noise(d), 2500) * (t / d) ** 3


def impact(size=1.0):
    d = 2.6 * size
    t = t_(d)
    f = 30 + 90 * np.exp(-t * 6)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 1.3 / size)
    body = lp(noise(d), 900) * np.exp(-t * 3) * 0.6
    x = np.tanh(2.2 * (sub + body)) * 0.9
    c = crash()
    L = min(len(c), len(x))
    x[:L] += c[:L] * 0.5
    return x


def radio(x, t0, t1, amount):
    """tinny transistor radio on a slice of a stereo buffer"""
    i0, i1 = int(t0 * SR), int(t1 * SR)
    seg = x[i0:i1]
    for c in range(2):
        y = bp(seg[:, c], 380, 3200, 3)
        y = np.tanh(2.2 * y) * 0.7
        seg[:, c] = seg[:, c] * (1 - amount) + y * amount
    x[i0:i1] = seg


# ------------------------------------------------------------------ score
RIFF = [
    [(0, 12), (3, 12), (6, 10), (8, 8), (10, 7), (12, 8), (14, 7)],
    [(0, 5), (3, 5), (6, 7), (8, 8), (10, 7), (11, 5), (12, 3), (14, 1)],
    [(0, 12), (3, 12), (6, 10), (8, 8), (10, 7), (12, 8), (14, 7)],
    [(0, 5), (3, 5), (6, 3), (8, 1), (10, 0), (12, 1), (14, 0)],
]
BASS_ROOT = [-36, -36, -40, -38]          # A1, A1, F1, G1 (semitones from A4)
KICKS = [0, 6, 10]
CLAPS = [4, 12]

drums, bells, bass, pads, fxb, amb = Bus(), Bus(), Bus(), Bus(), Bus(), Bus()
K, CL, OH, CR = kick(), clap(), hat(True), crash()
CH = [hat() for _ in range(4)]
kick_times = []


def play_kick(t, g=1.0):
    drums.add(K, t, 0.95 * g)
    kick_times.append(t)


def groove(b, full=True, halftime=False, busy=False):
    """one bar of drums"""
    if halftime:
        play_kick(bar(b, 0), 1.1)
        if b % 2 == 1:
            play_kick(bar(b, 10), 0.8)
        drums.add(CL, bar(b, 8), 0.6)
        for s in range(0, 16, 4):
            drums.add(CH[s % 4], bar(b, s + 2), 0.16, 0.25)
        return
    for s in KICKS:
        play_kick(bar(b, s))
    if b % 4 == 3:
        play_kick(bar(b, 14), 0.7)
    for s in CLAPS:
        drums.add(CL, bar(b, s), 0.62 if full else 0.4, -0.05)
    for s in range(0, 16, 2 if not busy else 1):
        acc = 0.2 if s % 4 == 2 else 0.13
        drums.add(CH[s % 4], bar(b, s), acc if full else acc * 0.7, 0.3)
    if b % 2 == 1:
        # hat triplet roll into the next bar
        for k in range(6):
            drums.add(CH[k % 4], bar(b, 12) + k * BEAT / 6, 0.12, 0.3)
    drums.add(OH, bar(b, 14), 0.1, -0.3)


def riff(b, gain=1.0, octave=0, bright=1.0, pan=0.12):
    for s, n in RIFF[b % 4]:
        bells.add(cowbell(note(n + octave * 12), bright=bright), bar(b, s), 0.36 * gain, pan)


def bassline(b, gain=1.0, up=0):
    root = BASS_ROOT[b % 4] + up
    nxt = BASS_ROOT[(b + 1) % 4] + up
    hits = [(0, 6), (6, 4), (10, 6)]
    for i, (s, ln) in enumerate(hits):
        f0 = note(root + (12 if i == 1 else 0))
        f1 = note(nxt) if i == 2 and nxt != root else None
        bass.add(b808(f0, ln * STEP, f1), bar(b, s), 0.52 * gain)


def arp(b, gain=1.0):
    seq = [0, 3, 7, 12, 7, 3, 12, 15]
    root = BASS_ROOT[b % 4] + 36
    for s in range(16):
        bells.add(cowbell(note(root + seq[s % 8] + 12), d=0.12, bright=1.1), bar(b, s), 0.16 * gain, -0.35 if s % 2 else 0.35)


# ---- intro: bars 0-7 (radio), build in bar 7
for b in range(0, 7):
    riff(b, 0.9)
    if b >= 2:
        for s in (0, 8):
            play_kick(bar(b, s), 0.45 if b < 4 else 0.7)
        for s in range(2, 16, 4):
            drums.add(CH[s % 4], bar(b, s), 0.1, 0.3)
    if b >= 4:
        bassline(b, 0.45 if b < 5 else 0.6)
        drums.add(CL, bar(b, 12), 0.3 if b < 5 else 0.45)
# bar 7: VS hit, riser, snare roll, hold, gap before the drop
fxb.add(impact(0.8), bar(7), 0.55)
drums.add(CR, bar(7), 0.35)
play_kick(bar(7), 1.0)
fxb.add(riser(BAR - 0.16), bar(7), 0.5)
roll = snare_roll_hit()
t = bar(7)
k = 0
while t < bar(8) - 0.2:
    gap = STEP if t < bar(7, 8) else STEP / 2
    drums.add(roll, t, 0.18 + 0.4 * (t - bar(7)) / BAR, 0.1 * np.sin(k))
    t += gap
    k += 1
bass.add(b808(note(-36), BAR - 0.18, note(-24), glide=BAR * 0.7, drive=2.5), bar(7), 0.4)

# ---- drop A: bars 8-23
for b in range(8, 24):
    groove(b, busy=b >= 20)
    riff(b, 1.0)
    if b >= 16:
        riff(b, 0.35, octave=1, bright=1.2, pan=-0.3)
    bassline(b)
    if b in (8, 16):
        drums.add(CR, bar(b), 0.45)
        fxb.add(impact(0.7), bar(b), 0.35)

# ---- break: bars 24-27 (half time, giant steps)
CHORDS = [[-12, -9, -5], [-16, -12, -9], [-14, -11, -7], [-11, -7, -4]]  # Am, F, Gm, Bb
fxb.add(impact(1.2), bar(24), 0.6)
drums.add(CR, bar(24), 0.4)
for i, b in enumerate(range(24, 28)):
    pads.add(saw_chord([note(n) for n in CHORDS[i]], BAR + 0.3, 1100), bar(b), 0.55)
    bass.add(b808(note(BASS_ROOT[i % 4]), BAR * 0.95, drive=2.0), bar(b), 0.5)
    if b < 27:
        groove(b, halftime=True)
    # the riff at half density, washed in reverb
    for s, n in RIFF[i % 4]:
        if s % 4 == 0:
            bells.add(cowbell(note(n), d=0.4, bright=0.8), bar(b, s), 0.3, 0.2)
# bar 27: build to drop B
fxb.add(riser(BAR - 0.12, 300, 10000), bar(27), 0.6)
t, k = bar(27), 0
while t < bar(28) - 0.12:
    gap = STEP if t < bar(27, 8) else STEP / 2 if t < bar(27, 12) else STEP / 4
    drums.add(roll, t, 0.2 + 0.45 * (t - bar(27)) / BAR, 0.1 * np.sin(k))
    t += gap
    k += 1

# ---- drop B: bars 28-43
for b in range(28, 44):
    groove(b, busy=b >= 32)
    riff(b, 1.0)
    riff(b, 0.3, octave=1, bright=1.2, pan=-0.3)
    bassline(b, 1.05)
    if 34 <= b < 38:
        arp(b, 0.9)
    if b in (28, 32, 36, 40):
        drums.add(CR, bar(b), 0.5)
        fxb.add(impact(0.9 if b != 32 else 1.3), bar(b), 0.4 if b != 32 else 0.7)
fxb.add(reverse_swell(1.0), bar(32) - 1.0, 0.35)

# ---- final build: bars 44-47
for b in range(44, 48):
    for s in range(0, 16, 4):
        play_kick(bar(b, s), 0.7 + 0.1 * (b - 44))
    riff(b, 0.8 + 0.1 * (b - 44), bright=0.6 + 0.2 * (b - 44))
    bass.add(b808(note(-36 + (b - 44) * 2), BAR, drive=3.5), bar(b), 0.5)
fxb.add(riser(4 * BAR - 0.1, 200, 12000), bar(44), 0.75)
t, k = bar(44), 0
while t < bar(48) - 0.05:
    u = (t - bar(44)) / (4 * BAR)
    gap = STEP * 2 if u < 0.25 else STEP if u < 0.6 else STEP / 2 if u < 0.85 else STEP / 4
    drums.add(roll, t, 0.15 + 0.5 * u, 0.15 * np.sin(k))
    t += gap
    k += 1
fxb.add(reverse_swell(1.6), bar(48) - 1.6, 0.5)

# ---- bar 48: the impact
fxb.add(impact(1.8), bar(48), 1.0)
drums.add(CR, bar(48), 0.7)
play_kick(bar(48), 1.3)

# ---- outro: bars 50-53 on the radio
for b in range(50, 54):
    riff(b, 0.8)
    if b >= 51:
        for s in (0, 8):
            play_kick(bar(b, s), 0.45)
        drums.add(CL, bar(b, 12), 0.3)

# ---- hawker-centre ambience under the intro and outro
def murmur(d):
    t = t_(d)
    x = bp(noise(d), 250, 1400) * (0.6 + 0.4 * np.sin(2 * np.pi * 0.37 * t) * np.sin(2 * np.pi * 0.11 * t + 1))
    return x * 0.25


for t0, d in ((0, 13.4), (83.0, 9.5)):
    m = murmur(d)
    fade = np.minimum(1, np.minimum(t_(d) / 1.0, (d - t_(d)) / 1.2))
    amb.add(m * fade, t0, 0.5)
    for k in range(int(d * 1.3)):
        tt = t0 + rng.uniform(0.2, d - 0.3)
        f = rng.uniform(2200, 4200)
        tk = t_(0.35)
        amb.add(np.sin(2 * np.pi * f * tk) * np.exp(-tk * 18) * 0.12, tt, 1.0, rng.uniform(-0.6, 0.6))

# ------------------------------------------------------------------ mix
def duck_env():
    e = np.ones(N)
    for tk in kick_times:
        i0 = int(tk * SR)
        L = int(0.28 * SR)
        if i0 >= N:
            continue
        seg = 1 - 0.55 * np.exp(-np.arange(min(L, N - i0)) / SR / 0.09)
        e[i0: i0 + len(seg)] = np.minimum(e[i0: i0 + len(seg)], seg)
    return e[:, None]


def reverb(x, secs=1.6, wet=0.3):
    t = t_(secs)
    ir = rng.standard_normal((len(t), 2)) * np.exp(-t * 3.2)[:, None]
    ir[:, 0] = lp(ir[:, 0], 5000)
    ir[:, 1] = lp(ir[:, 1], 5000)
    out = np.zeros_like(x)
    for c in range(2):
        out[:, c] = fftconvolve(x[:, c], ir[:, c])[: len(x)]
    out *= wet / (np.max(np.abs(out)) + 1e-9) * np.max(np.abs(x))
    return x + out


duck = duck_env()
bells_wet = reverb(bells.x, 1.4, 0.35)
pads_wet = reverb(pads.x, 2.2, 0.5)
mix = drums.x * 0.9 + bells_wet * duck * 0.9 + bass.x * duck * 0.95 + pads_wet * duck * 0.6 + fxb.x * 0.8 + amb.x
# radio sections: intro (fully tinny until bar 4, opening through bar 7) and outro
radio(mix, 0, bar(4), 1.0)
i0, i1 = int(bar(4) * SR), int(bar(7) * SR)
seg = mix[i0:i1].copy()
tiny = seg.copy()
radio(tiny, 0, (i1 - i0) / SR, 1.0)
k = np.linspace(1, 0, i1 - i0)[:, None] ** 1.5
mix[i0:i1] = tiny * k + seg * (1 - k)
radio(mix, bar(49.5), DUR, 1.0)
# crackle on the radio parts
for t0, t1 in ((0, bar(7)), (bar(49.5), DUR)):
    for _ in range(int((t1 - t0) * 9)):
        tt = rng.uniform(t0, t1)
        i = int(tt * SR)
        L = int(rng.uniform(0.001, 0.004) * SR)
        if i + L < N:
            mix[i: i + L] += rng.standard_normal((L, 1)) * 0.03
# fade out the tail
tail = np.minimum(1, np.maximum(0, (DUR - np.arange(N) / SR) / 2.5))[:, None]
mix *= tail
# glue + limiter
mix = np.tanh(mix * 1.1) / np.tanh(1.1)
mix *= 0.95 / np.max(np.abs(mix))

out = os.path.join(HERE, 'music.wav')
with wave.open(out, 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype(np.int16).tobytes())
print('wrote', out, f'{DUR:.1f}s')
