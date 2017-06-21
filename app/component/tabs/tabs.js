'use strict';

module.exports = {
  template: require('./tabs.html'),
  controller: ['$log', '$location', TabsController],
  controllerAs: 'tabsCtrl',
  bindings:{
    showAbout: '=',
    showSkills: '='
  }
};

function TabsController($log, $location) {
  $log.debug('TabsController');

  var element = document.querySelector('.about');

  this.changeAbout = function(){
    console.log('call about');
    this.showAbout = !this.showAbout;
  };
  this.changeSkills = function(){
    console.log('call Skills');
    this.showSkills = !this.showSkills;
  };
}
