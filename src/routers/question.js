'use strict';

const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const Question = require('../models/question');

// get all questions
router.get('/all', async (req, res) => {
  mongo.openConnection().then(async () => {
    try{
      const result = await mongo.readFromMongo({}, Question);
      res.json(result);
    } catch(e) {
      mongo.closeConnection();
      console.log(err.message);
      res.status(200).json('Something went wrong...');
    }
  })
});

// add new question
router.post('/add', async (req, res) => {
  mongo.openConnection().then(async () => {
    try{
      const { question, contact } = req.query;
      const count = await mongo.count({}, Question);
      mongo.writeToMongo({
        question_id: count + 1,
        question,
        contact,
      }, Question, () => {
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
