'use strict';

module.exports = {
  template: require('./contact.html'),
  controller: ['$log', '$location', ContactController],
  controllerAs: 'contactCtrl'
};

function ContactController($log, $location) {
  $log.debug('ContactController');

  this.form = {
    name: '',
    email: '',
    message: ''
  };

  this.data = {
    'Message': {
      'Subject': 'Profolio Email',
      'Body': {
        'ContentType': 'Text',
        'Content': this.form.message,
      },
      'ToRecipients': [
        {
          'EmailAddress': {
            'Address': 'bhavyab@outlook.com'
          }
        }
      ]
    },
    'SaveToSentItems': 'false'
  };
  this.email = function(){
    if(!this.form.name) return $log.debug('name not found!');
    if(!this.form.email) return $log.debug('email not found!');
    if(!this.form.message) return $log.debug('message not found!');



  };
}
