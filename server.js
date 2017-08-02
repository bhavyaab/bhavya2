'use strict';

const express = require('express');
const dotenv = require('dotenv').load();
const app = express();
const PORT = process.env.PORT || 3000;

// const cors = require('./lib/cors-middleware.js');
// const errors = require('./lib/error-middleware.js');
const sendMail = require('./router/send-mail.js');

app.use(express.static(`${__dirname}/build`));
app.use(sendMail);

// app.get('/', (req, res, next) => {
//   res.send('Welcome to my portfolio...');
// });

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
