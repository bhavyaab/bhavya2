'use strict';


const Router = require('express').Router;
const jsonParser = require('body-parser').json();
var nodemailer = require('nodemailer');
const dotenv = require('dotenv').load();
var pwd = process.env.PWD;
const sendMail = module.exports = new Router();

const Sender = require('../model/sender.js');

var mailOptions = {
  from: 'bhavyab@outlook.com',
  to: 'bhavya@outlook.com',
  subject: 'Email from portfolio',
  text: 'That was easy!'
};

sendMail.post('/contact', jsonParser, function(req, res) {
  var data = req.body;
  mailOptions.text = {
    contact: data.email || 'Contact not shared!',
    name: data.name || 'Name not shared!',
    text: data.message || mailOptions.text
  };

  new Sender(mailOptions).save();
  Sender.find()
  .then(data => res.send(data))
  .catch(err => res.err(err));

  // nodemailer.createTransport({
  //   service: 'Outlook365',
  //   auth: {
  //     user: 'bhavyab@outlook.com',
  //     pass: pwd,
  //   }
  // })
  // .sendMail(mailOptions)
  // .then(data => res.send(data))
  // .catch(err => res.send(err));


});
