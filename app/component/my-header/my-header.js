'use strict';

module.exports = {
  template: require('./my-header.html'),
  controller: ['$log', '$location', MyHeaderController],
  controllerAs: 'myHeaderCtrl',
  bindings:{
    isCollapsedHorizontal: '='
  }
};

function MyHeaderController($log, $location) {
  $log.debug('MyHeaderController');

  var element = document.querySelector('.about');

  this.showAbout = function(){
    // if(this.isCollapsedHorizontal){
    //   console.log('class added');
    // } else {
    //   console.log('class removed!!');
    // }
    this.isCollapsedHorizontal = !this.isCollapsedHorizontal;
  };
}
