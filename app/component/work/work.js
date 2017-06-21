'use strict';

module.exports = {
  template: require('./work.html'),
  controller: ['$log', '$location', WorkController],
  controllerAs: 'workCtrl'
};

function WorkController($log, $location) {
  $log.debug('WorkController');

}
