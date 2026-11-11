const http = require('http');

const req = http.get('http://localhost:3000/assets/home-hero-bg.jpg', (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  res.resume();
});

req.on('error', (e) => {
  console.log('Connection failed:', e.message);
});

