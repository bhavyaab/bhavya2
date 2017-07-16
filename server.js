'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
// const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const sendMail = require('./router/send-mail.js');

const cors = function() {
  return function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  };
};

app.use(cors());
app.use(sendMail);
app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio...');
});

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
