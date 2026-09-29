// Dev helper: screenshot an HTML page (optionally at song times) with headless Chromium.
//   node tools/shot.mjs page.html out.png [t1,t2,...]
// When times are given the page must expose window.__renderAt(t) (async ok);
// files are written as out-<t>.png.
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const [page_, out, times] = process.argv.slice(2);
const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-accelerated-2d-canvas'],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', (m) => console.log('[page]', m.text()));
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
await page.goto('file://' + resolve(page_) + (page_.includes('?') ? '' : '?render=1'));
await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
if (times) {
  for (const t of times.split(',')) {
    const t0 = Date.now();
    await page.evaluate((tt) => window.__renderAt(tt), parseFloat(t));
    await page.screenshot({ path: out.replace(/\.png$/, `-${t}.png`) });
    console.log(`t=${t} rendered in ${Date.now() - t0} ms`);
  }
} else {
  await page.screenshot({ path: out });
}
await browser.close();
