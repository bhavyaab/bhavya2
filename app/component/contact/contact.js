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
    $log.debug(this.form);
    if(!this.form.name) return $log.debug('name not found!');
    if(!this.form.email) return $log.debug('email not found!');
    if(!this.form.message) return $log.debug('message not found!');

    emailService.mailOptions = {
      from: this.form.email,
      text: {
        name: this.form.name,
        text: this.form.message
      }
    };

    emailService.transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  };
}
