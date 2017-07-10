'use strict';


const jsonParser = require('body-parser').json();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'bhavyab@outlook.com',
    pass: 'CanCelIt0023',
  },

});

var mailOptions = {
  from: 'bhavyab@outlook.com',
  to: 'bhavyab@outlook.com',
  subject: 'Email from portfolio',
  text: 'That was easy!'
};

/**
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {

  var data = req.body;

  transporter.sendMail({
    from: 'bhavyab@outlook.com',
    to: 'bhavyab@outlook.com',
    subject: 'Email from portfolio',
    text: data.contactMsg
  });

  res.json(data);
};
