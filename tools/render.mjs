// Renders the animation to an MP4 with the song.
//
// Each worker runs its own headless Chromium, asks the page to draw frame
// t = i / fps (window.__renderAt), grabs the pixels and pipes them straight
// into ffmpeg. Segments are then joined and muxed with assets/song.mp3.
//
//   node tools/render.mjs                          # 1080p30 -> output/white-bear-and-claude-pet.mp4
//   node tools/render.mjs --fps 60 --workers 4
//   node tools/render.mjs --from 30 --to 40 --out /tmp/clip.mp4   (a clip)
//   node tools/render.mjs --bench 20               # time 20 frames and exit
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const arg = (k, d) => {
  const i = argv.indexOf(k);
  return i >= 0 ? argv[i + 1] : d;
};
const FPS = parseFloat(arg('--fps', '30'));
const DURATION = 78.36;
const FROM = parseFloat(arg('--from', '0'));
const TO = Math.min(DURATION, parseFloat(arg('--to', String(DURATION))));
const WORKERS = parseInt(arg('--workers', String(Math.max(1, Math.min(4, os.cpus().length - 1)))), 10);
const CRF = arg('--crf', '17');
const OUT = resolve(ROOT, arg('--out', 'output/white-bear-and-claude-pet.mp4'));
const BENCH = argv.includes('--bench') ? parseInt(arg('--bench', '20'), 10) : 0;
const TMP = resolve(ROOT, '.render-tmp');

const first = Math.round(FROM * FPS);
const last = Math.round(TO * FPS); // exclusive
const total = last - first;

async function openPage() {
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-accelerated-2d-canvas', '--disable-background-timer-throttling'],
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.error('[pageerror]', e.message));
  await page.goto('file://' + resolve(ROOT, 'index.html') + '?render=1');
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
  const cdp = await page.context().newCDPSession(page);
  return { browser, page, cdp };
}

async function grab(page, cdp, t) {
  await page.evaluate((tt) => new Promise((res) => {
    window.__renderAt(tt);
    requestAnimationFrame(() => res());
  }), t);
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 96, optimizeForSpeed: true });
  return Buffer.from(data, 'base64');
}

async function worker(id, from, to, segPath, progress) {
  const { browser, page, cdp } = await openPage();
  const ff = spawn('ffmpeg', [
    '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', CRF, '-pix_fmt', 'yuv420p', '-tune', 'animation',
    '-g', String(Math.round(FPS * 2)), '-r', String(FPS), segPath,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', (c) => (c === 0 ? res() : rej(new Error('ffmpeg ' + c)))));
  for (let i = from; i < to; i++) {
    const jpg = await grab(page, cdp, i / FPS);
    if (!ff.stdin.write(jpg)) await new Promise((r) => ff.stdin.once('drain', r));
    progress(id);
  }
  ff.stdin.end();
  await done;
  await browser.close();
}

async function bench() {
  const { browser, page, cdp } = await openPage();
  const t0 = Date.now();
  let renderMs = 0;
  for (let i = 0; i < BENCH; i++) {
    const t = FROM + (i * (TO - FROM)) / BENCH;
    const a = Date.now();
    await page.evaluate((tt) => window.__renderAt(tt), t);
    renderMs += Date.now() - a;
    await grab(page, cdp, t);
  }
  const per = (Date.now() - t0) / BENCH;
  console.log(`avg ${per.toFixed(0)} ms/frame (draw ~${(renderMs / BENCH).toFixed(0)} ms, rest = capture)`);
  await browser.close();
}

async function main() {
  if (BENCH) return bench();
  mkdirSync(TMP, { recursive: true });
  mkdirSync(dirname(OUT), { recursive: true });
  const per = Math.ceil(total / WORKERS);
  const segs = [];
  const counts = new Array(WORKERS).fill(0);
  const started = Date.now();
  let lastLog = 0;
  const progress = (id) => {
    counts[id]++;
    const n = counts.reduce((a, b) => a + b, 0);
    const now = Date.now();
    if (now - lastLog > 5000 || n === total) {
      lastLog = now;
      const el = (now - started) / 1000;
      const eta = (el / n) * (total - n);
      console.log(`${n}/${total} frames  ${(n / el).toFixed(2)} fps  eta ${Math.round(eta)} s`);
    }
  };
  const jobs = [];
  for (let w = 0; w < WORKERS; w++) {
    const a = first + w * per;
    const b = Math.min(last, a + per);
    if (a >= b) continue;
    const seg = resolve(TMP, `seg-${w}.mp4`);
    segs.push(seg);
    jobs.push(worker(w, a, b, seg, progress));
  }
  await Promise.all(jobs);
  const list = resolve(TMP, 'list.txt');
  writeFileSync(list, segs.map((s) => `file '${s}'`).join('\n'));
  const song = resolve(ROOT, 'assets/song.mp3');
  await new Promise((res, rej) => {
    const ff = spawn('ffmpeg', [
      '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
      '-ss', String(FROM), '-t', String(TO - FROM), '-i', song,
      '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k',
      '-shortest', '-movflags', '+faststart', OUT,
    ], { stdio: 'inherit' });
    ff.on('close', (c) => (c === 0 ? res() : rej(new Error('mux failed ' + c))));
  });
  if (existsSync(TMP)) rmSync(TMP, { recursive: true, force: true });
  console.log(`done: ${OUT} (${((Date.now() - started) / 60000).toFixed(1)} min)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
