// Bundles the animation into dist/app.js (classic script, works from file://)
// and also writes a single self-contained HTML file (JS + audio inlined).
//
//   node tools/build.mjs            -> dist/app.js + dist/white-bear-and-claude-pet.html
//   node tools/build.mjs --entry src/dev/sheet.js --out /tmp/x.js   (dev pages)
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};

const entry = resolve(ROOT, opt('--entry', 'src/main.js'));
const out = resolve(ROOT, opt('--out', 'dist/app.js'));
mkdirSync(dirname(out), { recursive: true });

await build({
  entryPoints: [entry],
  bundle: true,
  format: 'iife',
  minify: !args.includes('--dev'),
  sourcemap: false,
  target: ['chrome110', 'firefox115', 'safari16'],
  loader: { '.woff2': 'dataurl' },
  outfile: out,
  legalComments: 'none',
  logLevel: 'info',
});

if (!args.includes('--entry')) {
  // single-file player: inline the script and the song
  const html = readFileSync(resolve(ROOT, 'index.html'), 'utf8');
  const js = readFileSync(out, 'utf8').replace(/<\/script/gi, '<\\/script');
  const mp3 = readFileSync(resolve(ROOT, 'assets/song.mp3')).toString('base64');
  const single = html
    .replace('<script src="dist/app.js"></script>', () => `<script>${js}</script>`)
    .replace('src="assets/song.mp3"', () => `src="data:audio/mpeg;base64,${mp3}"`);
  const target = resolve(ROOT, 'dist/white-bear-and-claude-pet.html');
  writeFileSync(target, single);
  console.log(`wrote ${target} (${(single.length / 1e6).toFixed(2)} MB)`);
}
