'use strict';

const mongoose = require('mongoose');

// Question Schema
const questionSchema = mongoose.Schema({
  question_id: {
    type: Number,
    required: true,
    unique: true
  },
  question: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  },
  processed: {
    type: Boolean,
    default: false
  },
});

const Question = mongoose.model('Question', questionSchema, 'questions');

module.exports = Question;