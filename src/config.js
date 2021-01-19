'use strict';

require('dotenv').config();
// MongoDB database config
const mongoUrl = `mongodb+srv://tedi4t:${process.env.DB_PASS}@cluster0-9gang.mongodb.net/plaidShopDatabase?retryWrites=true&w=majority`;

module.exports = { mongoUrl };