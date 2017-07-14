'use strict';


const jsonParser = require('body-parser').json();
const Router = require('express').Router;
const sendMail = module.exports = new Router();
const dotenv = require('dotenv').load();


var apiKey = process.env.IFTTT_KEY;
var IFTTTMaker = require('iftttmaker')(apiKey);

sendMail.post('/contact', jsonParser, function(req, res) {
  var data = req.body;

  var request = {
    event: 'portfolio_contact',
    values: {
      value1: data.name || 'Name not shared!',
      value2: data.email || 'Contact not shared!',
      value3: data.message || 'hello from portfolio!'
    }
  };

  IFTTTMaker.send(request, function (error) {
    if (error) {
      console.log('The request could not be sent:', error);
    } else {
      console.log('Request was sent');
    }
  })
  .then(data => res.send(data))
  .catch(err => res.err(err));

});
