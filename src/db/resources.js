'use strict';
const pool = require('./db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function getQueryParamsArr(queryParams, queryParamsOrder) {
  if (!queryParamsOrder)
    return Object.values(queryParams);
  const queryParamsArr = [];
  queryParamsOrder.forEach(key => queryParamsArr.push(queryParams[key]));
  return queryParamsArr;
}

function precessEmptyFields(queryParams) {
  queryParams.forEach((param, index) => {
    if (param === undefined) queryParams[index] = 'empty element';
  })
}

async function makeQuery(queryData) {
  const { queryParams, query } = queryData;
  const result = await pool.query(query, queryParams);
  return result.rows;
}

async function makeRequest(reqData) {
  const { req, res, query, queryParamsOrder } = reqData;
  const reqParams = req.params;
  const reqQuery = req.query;
  const queryParamsUnordered = { ...reqQuery, ...reqParams };

  const queryParamsOrdered =
    getQueryParamsArr(queryParamsUnordered, queryParamsOrder);
  precessEmptyFields(queryParamsOrdered);

  const queryData = {
    queryParams: queryParamsOrdered,
    query
  };

  const result = await makeQuery(queryData);
  res.json(result);
}

module.exports = {
  makeQuery,
  makeRequest
};
