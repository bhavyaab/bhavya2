'use strict';

module.exports = {
  template: require('./tabs.html'),
  controller: ['$log', '$location', '$document','$window', TabsController],
  controllerAs: 'tabsCtrl',
  bindings:{
    display: '='
  }
};

function TabsController($log, $location, $ducoment, $window) {
  $log.debug('TabsController');
  this.brand = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/black-paint-splatter-icons-alphanumeric/069063-black-paint-splatter-icon-alphanumeric-letter-b.png';
  this.show = false;
  if($window.innerWidth > 450){
    this.show = true;
  }
  this.gotoAnchor = function(id){
    var section = angular.element(document.getElementById(id));
    $document.scrollTo(section, 30, 10000);
  };

}
