'use strict';

const mongoose = require('mongoose');

const { mongoUrl } = require('../config');

async function openConnection(URL = mongoUrl) {
  mongoose.connect(URL, { useNewUrlParser: true })
}

async function readFromMongo(obj, model) {
  return await model.find(obj);
}

async function writeToMongo(obj, Model, callback) {
  const model = new Model(obj);
  model.save(async err => {
    if (err) return console.log(err.message);
    if (callback) callback();
  });
}

async function count(obj, model) {
  return await model.find(obj).count();
}

async function closeConnection() {
  mongoose.connection.close();
}

async function overwrite(baseName, newObj, model) {
  await model.replaceOne({ baseName }, newObj);
}

module.exports = {
  openConnection,
  readFromMongo,
  writeToMongo,
  closeConnection,
  overwrite,
  count,
};
