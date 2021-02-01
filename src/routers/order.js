'use strict';

const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const Order = require('../models/order');
const mongoose = require('mongoose');

// get all districts
router.get('/all', async (req, res) => {
  mongo.openConnection().then(async () => {
    try{
      const result = await mongo.readFromMongo({}, Order);
      res.json(result);
    } catch(e) {
      mongo.closeConnection();
      console.log(err.message);
      res.status(200).json('Something went wrong...');
    }
  })
});

// get all regions
router.post('/add', async (req, res) => {
  mongo.openConnection().then(async () => {
    try{
      const { color, size, price, phone } = req.query;
      const count = await mongo.count({}, Order);
      const order = {
        order_id: count + 1,
        color,
        size,
        price,
        phone,
        date: JSON.stringify(new Date())
      };
      mongo.writeToMongo(order, Order, () => {
        mongo.closeConnection();
        res.json('Success!');
      })
    } catch(err) {
      mongo.closeConnection();
      console.log(err.message);
      res.status(200).json('Something went wrong...');
    }
  })
});

module.exports = router;
