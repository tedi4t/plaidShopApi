'use strict';
const pool = require('./db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function makeQuery(queryData) {
  const { queryParams, query } = queryData;
  const result = await pool.query(query, queryParams);
  return result.rows;
}

module.exports = {
  makeQuery,
};
