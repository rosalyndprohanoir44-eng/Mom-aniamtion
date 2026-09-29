// Entry point: builds the stacked canvases, loads fonts, and either runs the
// interactive player (audio-synced) or exposes a deterministic frame API for
// the video renderer (?render=1 -> window.__renderAt(t)).
import { Director } from './director.js';
import { DURATION } from './core/music.js';
import fredoka600 from '../assets/fonts/fredoka-latin-600-normal.woff2';
import fredoka700 from '../assets/fonts/fredoka-latin-700-normal.woff2';
import gaegu400 from '../assets/fonts/gaegu-latin-400-normal.woff2';
import gaegu700 from '../assets/fonts/gaegu-latin-700-normal.woff2';

const params = new URLSearchParams(location.search);
const RENDER = params.has('render');

async function loadFonts() {
  const faces = [
    new FontFace('Fredoka', `url(${fredoka600})`, { weight: '600' }),
    new FontFace('Fredoka', `url(${fredoka700})`, { weight: '700' }),
    new FontFace('Gaegu', `url(${gaegu400})`, { weight: '400' }),
    new FontFace('Gaegu', `url(${gaegu700})`, { weight: '700' }),
  ];
  await Promise.all(faces.map((f) => f.load().then((ff) => document.fonts.add(ff))));
}

function makeStage() {
  const stage = document.getElementById('stage');
  const mk = (cls) => {
    const c = document.createElement('canvas');
    c.width = 1920;
    c.height = 1080;
    c.className = 'layer ' + cls;
    stage.appendChild(c);
    return c;
  };
  return { stage, gl: mk('gl'), scene2d: mk('s2d'), overlay: mk('ovl') };
}

async function main() {
  await loadFonts();
  const { stage, gl, scene2d, overlay } = makeStage();
  const director = new Director({ gl, scene2d, overlay });

  if (RENDER) {
    document.body.classList.add('render');
    window.__renderAt = (t) => {
      director.renderAt(t);
      return true;
    };
    director.renderAt(0);
    window.__ready = true;
    return;
  }

  // ---------------------------------------------------------------- player
  const audio = document.getElementById('song');
  const ui = {
    play: document.getElementById('play'),
    big: document.getElementById('bigplay'),
    bar: document.getElementById('bar'),
    fill: document.getElementById('fill'),
    time: document.getElementById('time'),
    full: document.getElementById('full'),
    controls: document.getElementById('controls'),
  };
  let t = params.has('t') ? parseFloat(params.get('t')) : 0;
  let started = params.has('t');
  const POSTER_T = 7.6; // title card with both characters, shown before first play
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

  // fit the 16:9 stage into the window
  const fit = () => {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  };
  window.addEventListener('resize', fit);
  fit();

  const frame = (now) => {
    // audio.currentTime updates in coarse steps; extrapolate smoothly between them
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
    director.renderAt(started ? t : POSTER_T);
    ui.fill.style.width = `${(t / DURATION) * 100}%`;
    ui.time.textContent = `${fmt(t)} / ${fmt(DURATION)}`;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  document.body.classList.add('ready');
}

main();
