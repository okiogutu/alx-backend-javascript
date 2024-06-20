const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system').statusCode = 200;
  res.end();
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`).statusCode = 200;
  res.end();
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  }).statusCode = 200;
  res.end();
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`).statusCode = 200;
  res.end();
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
