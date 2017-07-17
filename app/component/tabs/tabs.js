'use strict';

module.exports = {
  template: require('./tabs.html'),
  controller: ['$log', '$location', '$anchorScroll', TabsController],
  controllerAs: 'tabsCtrl',
  bindings:{
    display: '='
  }
};

function TabsController($log, $location, $anchorScroll) {
  $log.debug('TabsController');

  $anchorScroll.yOffset = 100;

  this.gotoAnchor = function(id) {
    console.log(' id clicked' , id);
    if ($location.hash() !== id) {
        // set the $location.hash to `id` and
        // $anchorScroll will automatically scroll to it
      $location.hash(id);
    } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
      $anchorScroll();
    }
  };
}
