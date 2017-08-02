'use strict';


const jsonParser = require('body-parser').json();
const Router = require('express').Router;
const dotenv = require('dotenv').load();
const sendMail = module.exports = new Router();


var apiKey = process.env.IFTTT_KEY;
var IFTTTMaker = require('iftttmaker')(apiKey);

sendMail.post('/contact', jsonParser, function(req, res, next) {
  var data = req.body;

  var request = {
    event: 'portfolio_contact',
    values: {
      value1: data.name || 'Name not shared!',
      value2: data.email || 'Contact not shared!',
      value3: data.message || 'hello from portfolio!'
    }
  };
  console.log('request = ', request, 'key ', apiKey);
  IFTTTMaker.send(request, function (error) {
    if (error) {
      return new Error('The request could not be sent: ' + error);
    } else {
      return ('Request was sent');
    }
  })
  .then(data => res.send(data))
  .catch(err => next(err));

});
