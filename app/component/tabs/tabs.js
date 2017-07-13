'use strict';

module.exports = {
  template: require('./tabs.html'),
  controller: ['$log', '$location', TabsController],
  controllerAs: 'tabsCtrl',
  bindings:{
    display: '='
  }
};

function TabsController($log, $location) {
  $log.debug('TabsController');

}
