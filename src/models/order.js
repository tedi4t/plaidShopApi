'use strict';

const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
    unique: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: false
  },
  called: {
    type: Boolean,
    default: false
  },
  sent: {
    type: Boolean,
    default: false
  },
  received: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('Order', orderSchema, 'orders');

module.exports = Order;