const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system').statusCode = 200;
  res.end();
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`).statusCode = 200;
  res.end();
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
