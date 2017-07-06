'use strict';

module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'aboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');
  this.image = 'app/assets/bhavya2.jpg' || 'http://www.cliparts101.com/files/4/EE434F2FDC670AB3C2E50DF1DA3DCEB5/Brush_B.png';
}
