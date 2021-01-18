'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
require("./routers/order.js")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

const order = require('./routers/order.js');
app.use('/order/', order);

app.get('/', (req, res) => {
  res.json('Seccessfully connected to voting system');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
