'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', '$document', '$window', homeController];

function homeController($log, $location, $document, $window){
  $log.debug('homeController');

  let url = $location.url();
  this.showHome = url === '/about' || '' || '/';

  this.toTheTop = function() {
    $document.scrollTop(30, 3000);
  };

  function showOnScroll(ev){
    // $log.debug('yoffset - ', $window.pageYOffset, $window.innerHeight);
    if(window.pageYOffset>950) {
      // $log.debug('winow scrolled to 950');
      document.getElementById('showTopScoller').style.display = 'block';
    }
    else {
      document.getElementById('showTopScoller').style.display = 'none';
      // $log.debug('not scrolled yet');
    }
  }
  window.onscroll=showOnScroll;
}
