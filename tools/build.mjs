// Bundles an animation into <project>/dist/app.js (classic script, works from
// file://) and also writes a single self-contained HTML file (JS + audio inlined).
//
//   node tools/build.mjs                        -> dist/app.js + dist/white-bear-and-claude-pet.html
//   node tools/build.mjs --project stickfight   -> stickfight/dist/app.js + stickfight/dist/iron-and-ash.html
//   node tools/build.mjs --entry src/x.js --out /tmp/x.js   (dev pages, no single-file output)
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

const PROJECTS = {
  bear: { dir: '.', entry: 'src/main.js', audio: 'assets/song.mp3', single: 'dist/white-bear-and-claude-pet.html' },
  stickfight: { dir: 'stickfight', entry: 'src/main.js', audio: 'assets/mix.mp3', single: 'dist/iron-and-ash.html' },
};
const P = PROJECTS[opt('--project', 'bear')];
const base = resolve(ROOT, P.dir);

const entry = args.includes('--entry') ? resolve(ROOT, opt('--entry')) : resolve(base, P.entry);
const out = args.includes('--out') ? resolve(ROOT, opt('--out')) : resolve(base, 'dist/app.js');
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
  // single-file player: inline the script and the audio
  const html = readFileSync(resolve(base, 'index.html'), 'utf8');
  const js = readFileSync(out, 'utf8').replace(/<\/script/gi, '<\\/script');
  const mp3 = readFileSync(resolve(base, P.audio)).toString('base64');
  const single = html
    .replace('<script src="dist/app.js"></script>', () => `<script>${js}</script>`)
    .replace(`src="${P.audio}"`, () => `src="data:audio/mpeg;base64,${mp3}"`);
  const target = resolve(base, P.single);
  writeFileSync(target, single);
  console.log(`wrote ${target} (${(single.length / 1e6).toFixed(2)} MB)`);
}
