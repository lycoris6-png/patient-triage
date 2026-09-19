'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.md': 'text/plain; charset=utf-8', '.json': 'application/json', '.otf': 'font/otf' };
http.createServer((request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
    const url = new URL(request.url, 'http://127.0.0.1:4179');
    const relative = decodeURIComponent(url.pathname === '/' ? '/coach-editor.html' : url.pathname);
    const file = path.resolve(root, '.' + relative);
    if (!file.startsWith(root + path.sep) || relative.split(/[\\/]/).some(part => part.startsWith('.')) || !types[path.extname(file)]) { response.writeHead(403).end(); return; }
    fs.readFile(file, (error, bytes) => {
      if (error) { response.writeHead(404).end('Not found'); return; }
      response.writeHead(200, { 'Content-Type': types[path.extname(file)], 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      response.end(request.method === 'HEAD' ? undefined : bytes);
    });
  } catch { response.writeHead(400).end(); }
}).listen(4179, '127.0.0.1', () => console.log('コーチ工房: http://127.0.0.1:4179/coach-editor.html （終了: Ctrl+C）'));
