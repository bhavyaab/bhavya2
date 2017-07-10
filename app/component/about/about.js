'use strict';

module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'aboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');
  this.image = 'https://avatars3.githubusercontent.com/u/20171729?v=3&u=a418448e141c9b43bd34aa4d1dcb80623cf7649d&s=400';
}
