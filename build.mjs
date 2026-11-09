// Builds the app into dist/ (standalone site) and dist-artifact/ (page body for claude.ai Artifacts).
import { build } from 'esbuild';
import fs from 'fs';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'dist/app.js',
  legalComments: 'none',
});
const page = fs.readFileSync('src/page.html', 'utf8');
fs.writeFileSync('dist/index.html',
  `<!doctype html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${page}\n</html>\n`);
fs.copyFileSync('assets/Xbot.glb', 'dist/Xbot.glb');
fs.mkdirSync('dist-artifact', { recursive: true });
fs.writeFileSync('dist-artifact/index.html', page.replace('<script src="app.js"></script>', '<script>window.MODEL_URL = "Xbot.glb.txt";</script>\n<script src="app.js"></script>'));
fs.writeFileSync('dist-artifact/Xbot.glb.txt', fs.readFileSync('assets/Xbot.glb').toString('base64'));
fs.copyFileSync('dist/app.js', 'dist-artifact/app.js');
console.log('built dist/ (', (fs.statSync('dist/app.js').size / 1024).toFixed(0), 'KB js )');
