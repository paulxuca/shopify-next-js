const express = require('express');
const next = require('next');

const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/product/:handle', (req, res) => {
    app.render(req, res, '/product', req.query);
  });

  server.get('*', (req, res) => handler(req, res));

  server.listen(3000, err => {
    if (err) {
      throw err;
    }

    console.log('> Starting on port 3000');
  });
});