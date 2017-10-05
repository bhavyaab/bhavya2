'use strict';
require ('newrelic');
const express = require('express');
const dotenv = require('dotenv').load();
const app = express();
const PORT = process.env.PORT || 3000;

const sendMail = require('./router/send-mail.js');

app.use(express.static(`${__dirname}/build`));
app.use(sendMail);

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
