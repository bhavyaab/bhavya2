'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
// const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const sendMail = require('./router/send-mail.js');

// app.use(cors());

app.use(sendMail);
app.use(express.static(`${__dirname}/build`));

app.get('/', function (req, res, next) {
  console.log('header setting');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log('res.header ', res.header);
  next();

});

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
