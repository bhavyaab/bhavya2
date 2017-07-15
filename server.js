'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const sendMail = require('./router/send-mail.js');

app.use(cors());

app.use(sendMail);
app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio...');
});

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
