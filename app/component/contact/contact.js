'use strict';

module.exports = {
  template: require('./contact.html'),
  controller: ['$log', '$location', 'emailService', ContactController],
  controllerAs: 'contactCtrl'
};

function ContactController($log, $location, emailService) {
  $log.debug('ContactController');

  this.messagePlaceholder = 'Write something..';
  this.form = {};

  this.email = function(){
    if(!this.form.name) $log.debug('name not found!');
    if(!this.form.email) $log.debug('email not found!');
    if(!this.form.message) {
      this.messagePlaceholder = 'Did you forget to write something!!';
    } else {
      emailService.sendMail(this.form)
      .then(this.form = {});
    }
  };
}
