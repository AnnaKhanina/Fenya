// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:3000/',
//       changeOrigin: true,
//     })
//   );
// };
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const testProxy = createProxyMiddleware ({
  target: 'http://localhost:3000/',
  changeOrigin: true,
});

app.use('/api', testProxy);
app.listen(3000);
