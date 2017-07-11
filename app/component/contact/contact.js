'use strict';

module.exports = {
  template: require('./contact.html'),
  controller: ['$log', '$location', 'emailService', ContactController],
  controllerAs: 'contactCtrl'
};

function ContactController($log, $location, emailService) {
  $log.debug('ContactController');

  this.form = {
    name: '',
    email: '',
    message: ''
  };

  this.email = function(){
    if(!this.form.name) $log.debug('name not found!');
    if(!this.form.email) $log.debug('email not found!');
    if(!this.form.message) $log.debug('message not found!');



    emailService.sendMail(this.form);
    // var nodemailer = require('nodemailer');
    //
    // var transporter = nodemailer.createTransport({
    //   service: 'Outlook365',
    //   auth: {
    //     user: 'bhavyab@outlook.com',
    //     pass: 'CanCelIt0023',
    //   },
    //
    // });
    //
    // var mailOptions = {
    //   from: 'bhavyab@outlook.com',
    //   to: 'bhavyab@outlook.com',
    //   subject: 'Email from portfolio',
    //   text: 'That was easy!'
    // };
    //
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });


  };
}
