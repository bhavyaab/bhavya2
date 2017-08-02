'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('./lib/cors-middleware.js');
const errors = require('./lib/error-middleware.js');
const sendMail = require('./router/send-mail.js');


app.use(express.static(`${__dirname}/build`));
app.use(cors);
app.use(sendMail);
app.use(errors); // always the last middleware

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio...');
});

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
