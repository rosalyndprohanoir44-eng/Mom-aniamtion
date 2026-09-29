// Page bootstrap: loads fonts, then either runs the interactive player
// (synced to the audio) or exposes window.__renderAt(t) for the renderer.
import { renderFrame, W, H } from './scene.js';
import zenmaru from '../assets/fonts/zenmaru-700-sub.woff2';
import yuji from '../assets/fonts/yujisyuku-400-sub.woff2';
import nunito800 from '../assets/fonts/nunito-latin-800-normal.woff2';
import nunito900 from '../assets/fonts/nunito-latin-900-normal.woff2';
import bebas from '../assets/fonts/bebas-neue-latin-400-normal.woff2';

async function loadFonts() {
  const faces = [
    new FontFace('ZenMaru', `url(${zenmaru})`, { weight: '700' }),
    new FontFace('YujiSyuku', `url(${yuji})`, { weight: '400' }),
    new FontFace('Nunito', `url(${nunito800})`, { weight: '800' }),
    new FontFace('Nunito', `url(${nunito900})`, { weight: '900' }),
    new FontFace('Bebas', `url(${bebas})`, { weight: '400' }),
  ];
  await Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff))));
}

export async function boot(S) {
  const params = new URLSearchParams(location.search);
  const RENDER = params.has('render');
  await loadFonts();
  const stage = document.getElementById('stage');
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  stage.appendChild(canvas);
  const ctx = canvas.getContext('2d', { alpha: false });
  const DURATION = S.duration;
  let frameNo = 0;
  const draw = (t) => renderFrame(ctx, t, S, frameNo++);

  if (RENDER) {
    document.body.classList.add('render');
    window.__renderAt = (t) => {
      frameNo = Math.round(t * 60);
      renderFrame(ctx, t, S, frameNo);
      return true;
    };
    window.__story = S;
    draw(0);
    window.__ready = true;
    return;
  }

  const audio = document.getElementById('song');
  const ui = {
    play: document.getElementById('play'),
    big: document.getElementById('bigplay'),
    bar: document.getElementById('bar'),
    fill: document.getElementById('fill'),
    time: document.getElementById('time'),
    full: document.getElementById('full'),
  };
  let t = params.has('t') ? parseFloat(params.get('t')) : 0;
  let started = params.has('t');
  let lastPerf = performance.now();
  let lastAudio = -1;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const setPlaying = (p) => {
    document.body.classList.toggle('playing', p);
    ui.play.setAttribute('aria-label', p ? 'Pause' : 'Play');
  };
  const toggle = () => {
    if (audio.paused) {
      if (audio.ended || t >= DURATION - 0.05) audio.currentTime = 0;
      audio.play();
    } else audio.pause();
  };
  audio.addEventListener('play', () => { started = true; setPlaying(true); });
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('ended', () => setPlaying(false));
  ui.play.addEventListener('click', toggle);
  ui.big.addEventListener('click', toggle);
  stage.addEventListener('click', toggle);
  const seek = (e) => {
    const r = ui.bar.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    audio.currentTime = k * DURATION;
    t = audio.currentTime;
    started = true;
  };
  let dragging = false;
  ui.bar.addEventListener('pointerdown', (e) => { dragging = true; ui.bar.setPointerCapture(e.pointerId); seek(e); });
  ui.bar.addEventListener('pointermove', (e) => dragging && seek(e));
  ui.bar.addEventListener('pointerup', () => { dragging = false; });
  ui.full.addEventListener('click', () => {
    const el = document.documentElement;
    if (document.fullscreenElement) document.exitFullscreen();
    else (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
  });
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { e.preventDefault(); toggle(); }
    if (e.code === 'ArrowRight') { audio.currentTime = Math.min(DURATION, audio.currentTime + 5); started = true; }
    if (e.code === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 5); started = true; }
    if (e.key === 'f') ui.full.click();
  });
  if (params.has('t')) audio.currentTime = t;
  const fit = () => {
    const s = Math.min(window.innerWidth / W, window.innerHeight / H);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  };
  window.addEventListener('resize', fit);
  fit();
  const loop = (now) => {
    if (!audio.paused) {
      if (audio.currentTime !== lastAudio) {
        lastAudio = audio.currentTime;
        lastPerf = now;
      }
      t = lastAudio + (now - lastPerf) / 1000;
    } else {
      t = audio.currentTime;
    }
    t = Math.min(Math.max(t, 0), DURATION);
    draw(started ? t : S.poster);
    ui.fill.style.width = `${(t / DURATION) * 100}%`;
    ui.time.textContent = `${fmt(t)} / ${fmt(DURATION)}`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  document.body.classList.add('ready');
}
