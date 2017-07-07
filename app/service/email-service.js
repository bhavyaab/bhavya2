'use strict';

module.exports = ['$q', '$log', '$http', 'nodemailer', emailService];

function emailService($q, $log, $http, nodemailer){
  $log.debug('emailService');

  let service = {};
  service.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bhavyamacet@gmail.com',
      pass: 'CanCel0023',
    },

  });

  service.mailOptions = {
    from: 'bhavyamacet@gmail.com',
    to: 'bhavyamacet@gmail.com',
    subject: 'Email from portfolio',
    text: 'That was easy!'
  };

  service.transporter.sendMail(service.mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  return service;
}
