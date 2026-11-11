import http from 'http';
import { spawn } from 'child_process';

const vite = spawn('npx.cmd', ['vite', '--port', '3000'], { shell: true });

setTimeout(() => {
  http.get('http://localhost:3000/images/xenedion-hero-bg.jpg', (res) => {
    console.log('GET /images/xenedion-hero-bg.jpg -> StatusCode:', res.statusCode);
    console.log('Headers:', res.headers['content-type'], res.headers['content-length']);
    res.resume();
    vite.kill();
    process.exit(0);
  }).on('error', (err) => {
    console.error('Request error:', err.message);
    vite.kill();
    process.exit(1);
  });
}, 3500);

