'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('Portfolio:server');
const Promise = require('bluebird');
const express = require('express');
const dotenv = require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;
debug('Connecting to:',process.env.MONGODB_URI);
var mongoOptions = {
  db: {safe: true},
  server: {
    socketOptions: {
      keepAlive: 1
    }
  },
};
mongoose.connect(process.env.MONGODB_URI, mongoOptions);

mongoose.connection.on('error', function(err) {
  console.log('Mongo Error:\n');
  console.log(err);
}).on('open', function() {
  console.log('Connection opened');
});

const sendMail = require('./router/send-mail.js');
app.use(sendMail);


app.use(express.static(`${__dirname}/build`));

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
