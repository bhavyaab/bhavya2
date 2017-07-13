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
  };
}
