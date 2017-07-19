'use strict';

module.exports = {
  template: require('./contact.html'),
  controller: ['$log', '$location', '$timeout', 'emailService', ContactController],
  controllerAs: 'contactCtrl'
};

function ContactController($log, $location, $timeout, emailService) {
  $log.debug('ContactController');
  this.hello = true;
  this.placeholder = {
    name: 'Your name ..',
    email: 'Your email..',
    message: 'Write something..'

  };
  this.form = {};
  this.hide= function(){
    console.log('hide called');
    setTimeout(function () {
      ContactController.hello = true;
      console.log(ContactController);
    }, 3000);
  };
  this.email = function(){
    if(!this.form.name) $log.debug('name not found!');
    if(!this.form.email) this.placeholder.email = 'How I can Contact You?';
    if(!this.form.message) {
      this.placeholder.message = 'Did you forget to write something!!';
    } else {
      emailService.sendMail(this.form)
      .then(this.form = {})
      .then(this.hello = false)
      .then(this.hide());
    }
  };
}
