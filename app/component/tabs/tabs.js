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
  console.log('tabs - ',this.display);
  var hideAll = function(){
    for (var prop in this.display){
      this.display[prop] = false;
    }
  };

  this.changeAbout = function(){
    console.log('call about');
    hideAll();
    this.display.about = true;
  };
  this.changeSkills = function(){
    console.log('call Skills');
    hideAll();
    this.display.skills = true;
  };
}
