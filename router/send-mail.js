'use strict';


const jsonParser = require('body-parser').json();
const Router = require('express').Router;
const sendMail = module.exports = new Router();

const dotenv = require('dotenv').load();
var IFTTTMaker = require('iftttmaker')(process.env.IFTTT_KEY);

sendMail.post('/contact', jsonParser, function(req, res) {
  var data = req.body;

  var request = {
    event: 'portfolio_contact',
    values: {
      value1: data.name || 'Name not shared!',
      value2: data.email || 'Contact not shared!',
      value3: data.message || 'No message'
    }
  };

  IFTTTMaker.send(request)
  .then(data => res.send(data))
  .catch(err => res.err(err));

});
