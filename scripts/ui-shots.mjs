import { createRequire } from 'module'; const require = createRequire(import.meta.url);
const { chromium, devices } = require('playwright');
const out = process.argv[2];
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errs = [];
async function shot(ctxOpts, name, fn) {
  const ctx = await b.newContext(ctxOpts); const p = await ctx.newPage();
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('http://localhost:8124/index.html#' + (fn || 'rotazione-esterna'));
  await p.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 60000 });
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: name.includes('full') });
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(name, 'horizontal overflow px:', ov);
  await ctx.close();
}
await shot({ ...devices['iPhone 13'] }, 'phone', 'pallof-press');
await shot({ ...devices['iPhone 13'] }, 'phone-full', 'affondo-rotazione');
await shot({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }, 'desktop', 'ponte-glutei');
console.log('errors:', errs);
await b.close();
