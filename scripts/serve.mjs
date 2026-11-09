import http from 'http'; import fs from 'fs'; import path from 'path';
const roots = process.argv.slice(3); const port = +process.argv[2] || 8123;
const types = { '.html':'text/html', '.js':'text/javascript', '.glb':'model/gltf-binary', '.css':'text/css', '.png':'image/png' };
http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]); const rel = u === '/' ? '/index.html' : u;
  for (const r of roots) { const f = path.join(r, rel); if (fs.existsSync(f) && fs.statSync(f).isFile()) { res.writeHead(200, {'Content-Type': types[path.extname(f)] || 'application/octet-stream'}); return fs.createReadStream(f).pipe(res); } }
  res.writeHead(404); res.end('nf');
}).listen(port, () => console.log('serving', port));
