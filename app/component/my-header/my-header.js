'use strict';

module.exports = {
  template: require('./my-header.html'),
  controller: ['$log', '$location', MyHeaderController],
  controllerAs: 'myHeaderCtrl',
  bindings:{
    showAbout: '='
  }
};

function MyHeaderController($log, $location) {
  $log.debug('MyHeaderController');

  var element = document.querySelector('.about');

  this.changeAbout = function(){
    console.log('call about');
    this.showAbout = !this.showAbout;
  };
}
