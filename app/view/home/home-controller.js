'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', '$document', homeController];

function homeController($log, $location, $document){
  $log.debug('homeController');

  let url = $location.url();
  this.showHome = url === '/about' || '' || '/';

  this.toTheTop = function() {
    $document.scrollTop(30, 3000);
  };

}
