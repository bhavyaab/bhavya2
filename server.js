'use strict';

const express = require('express');
const dotenv = require('dotenv').load();

const app = express();
const PORT = process.env.PORT || 3000;

const sendMail = require('./router/send-mail.js');


app.use(sendMail);
app.use(express.static(`${__dirname}/build`));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.listen(PORT, function(){
  console.log('server up:', PORT);
});
