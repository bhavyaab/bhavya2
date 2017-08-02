'use strict';

module.exports = {
  template: require('./about.html'),
  controller: ['$log', '$location', AboutController],
  controllerAs: 'aboutCtrl'
};

function AboutController($log, $location) {
  $log.debug('AboutController');
  this.image = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/black-paint-splatter-icons-alphanumeric/069063-black-paint-splatter-icon-alphanumeric-letter-b.png';
}
