'use strict';


const Router = require('express').Router;
const jsonParser = require('body-parser').json();
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');

const sendMail = module.exports = new Router();
var pwd = process.env.pwd;

var mailOptions = {
  from: 'bhavyab@outlook.com',
  to: 'bhavyab@outlook.com',
  subject: 'Email from portfolio',
  text: 'That was easy!'
};

sendMail.post('/contact', jsonParser, function(req, res) {

  var data = req.body;

  mailOptions.text = {
    contact: data.email || 'contact not shared!',
    name: data.name || 'Name not shared!',
    text: data.message || mailOptions.text
  };

  nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: 'bhavyab@outlook.com',
      pass: pwd,
    },

  }).sendMail(mailOptions)
  .then(data => res.send(data))
  .catch(err => res.send(err));
});
