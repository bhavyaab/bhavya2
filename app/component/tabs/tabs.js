'use strict';

module.exports = {
  template: require('./tabs.html'),
  controller: ['$log', '$location', '$document', TabsController],
  controllerAs: 'tabsCtrl',
  bindings:{
    display: '='
  }
};

function TabsController($log, $location, $ducoment) {
  $log.debug('TabsController');

  this.gotoAnchor = function(id){
    var section = angular.element(document.getElementById(id));
    $document.scrollTo(section, 30, 10000);
  };

  this.toTheTop = function() {
    $document.scrollTop(30, 5000);
  };

}
