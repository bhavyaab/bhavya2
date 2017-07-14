'use strict';

const mongoose = require('mongoose');
const Promise = require('bluebird');
const debug = require('debug')('Portfolio:emailModel');
const Schema = mongoose.Schema;

const senderSchema = new Schema({
  name: { type: String},
  email: { type: String },
  message: { type: String},
});


module.exports = mongoose.model('sender', senderSchema);
