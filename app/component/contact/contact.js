'use strict';

module.exports = {
  template: require('./contact.html'),
  controller: ['$log', '$location', ContactController],
  controllerAs: 'contactCtrl'
};

function ContactController($log, $location) {
  $log.debug('ContactController');

}
