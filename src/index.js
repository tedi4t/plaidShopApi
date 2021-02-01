'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

// check request origin
// app.all('*', (req, res, next) => {
//   if (req.headers['origin'] !== 'amberpuffy.com') {
//     res.sendStatus(403);
//   } else {
//     next();
//   }
// })

const order = require('./routers/order');
app.use('/order', order);

const question = require('./routers/question');
app.use('/question', question);

app.get('/', (req, res) => {
  res.json('Seccessfully connected to voting system');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
