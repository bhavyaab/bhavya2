'use strict';

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const sendMail = require('./router/send-mail.js');
dotenv.load();
const PORT = process.env.PORT || 3000;

app.use(sendMail);
app.use(express.static(`${__dirname}/build`));

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
