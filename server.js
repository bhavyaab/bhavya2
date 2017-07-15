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

var allowCrossDomain = function(req, res, next) {
  if ('OPTIONS' === req.method) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
