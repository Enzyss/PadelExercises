// usage: node scripts/shoot.mjs out.png '[{"ex":0,"t":0,"cam":{"p":[..],"t":[..]}}, ...]' [cols]
import { createRequire } from 'module'; const require = createRequire(import.meta.url); const { chromium } = require('playwright');
import fs from 'fs'; import { execSync } from 'child_process'; import path from 'path';
const out = process.argv[2]; const shots = JSON.parse(process.argv[3]); const cols = +process.argv[4] || 4;
const tmp = fs.mkdtempSync('/tmp/claude-0/shots-');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 720, height: 900 } });
page.on('console', m => { if (m.type() === 'error' || m.type()==='warning') console.log('[page]', m.text()); });
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://localhost:8123/index.html');
await page.waitForFunction(() => window.ready === true, null, { timeout: 60000 });
let i = 0;
for (const s of shots) {
  const info = await page.evaluate((s) => { const r = window.show(s.ex, s.t, s.side || 0, s.cam); const f = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, typeof v === 'number' ? Math.round(v) : v])); return JSON.stringify({ legs: Object.fromEntries(Object.entries(r.legs).map(([k,v]) => [k, {flex: Math.round(v.flex), re: +v.reachError.toFixed(3)}])), arms: { L: f(r.arms.L), R: f(r.arms.R) } }); }, s);
  if (s.log) console.log(i, info);
  if (s.low) console.log(i, "low", await page.evaluate(() => JSON.stringify(window.lowByBone())));
  await page.locator('#v canvas').screenshot({ path: `${tmp}/s_${String(i).padStart(3,'0')}.png` });
  i++;
}
await browser.close();
execSync(`ffmpeg -v error -y -i ${tmp}/s_%03d.png -vf "scale=360:-1,tile=${cols}x${Math.ceil(shots.length/cols)}" -frames:v 1 ${out}`);
console.log('wrote', out);
