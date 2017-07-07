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
  $log.debug('tabs - ',this.display);

  this.$onInit = function(){
    $log.debug('tabs on init- ',this.display);
    return this.display;
  };
  var hideAll = function(){
    this.$onInit = function(){
      for (var prop in this.display){
        this.display[prop] = false;
      }
    };
  };

  this.changeAbout = function(){
    $log.debug('call about');
    hideAll();
    this.$onInit = function(){
      this.display.about = true;
    };
  };
  this.changeSkills = function(){
    $log.debug('call Skills');
    hideAll();
    this.display.skills = true;
  };

}
