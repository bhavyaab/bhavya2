'use strict';

module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'aboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');
  this.image = 'app/assets/bhavya2.jpg';
}
