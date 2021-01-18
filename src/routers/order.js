'use strict';

const express = require('express');
const { makeQuery, makeRequest } = require('../db/resources');
const queries = require('../resources/queries.json');
const order = require('../resources/order.json');
const router = express.Router();

// get all districts
router.get('/all', async (req, res) => {
  const reqData = {
    req, res,
    query: queries['Order.all'],
    queryParamsOrder: order['Order.all'],
  };
  await makeRequest(reqData);
});

// get all regions
router.post('/add', async (req, res) => {
  if (req.query.processed === undefined) req.query.processed = false;
  const reqData = {
    req, res,
    query: queries['Order.add'],
    queryParamsOrder: order['Order.add'],
  };
  await makeRequest(reqData);
});

module.exports = router;
