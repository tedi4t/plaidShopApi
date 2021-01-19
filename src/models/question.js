'use strict';

const mongoose = require('mongoose');

// Question Schema
const orderSchema = mongoose.Schema({
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
  processed: {
    type: Boolean,
    default: false
  },
});

const Order = mongoose.model('Question', orderSchema, 'questions');

module.exports = Order;