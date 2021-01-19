'use strict';

const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const Order = require('../models/order');
const mongoose = require('mongoose');
// get all districts
router.get('/all', async (req, res) => {

});

// get all regions
router.post('/add', async (req, res) => {

});

module.exports = router;
