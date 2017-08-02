'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', '$document', '$element', homeController];

function homeController($log, $location, $document, $element){
  $log.debug('homeController');

  let url = $location.url();
  this.showHome = url === '/about' || '' || '/';
  document.getElementById('showTopScoller').style.display = 'none';

  this.toTheTop = function() {
    $document.scrollTop(30, 3000);
  };
  function showOnScroll(ev){
    if(window.pageYOffset>950) {
      document.getElementById('showTopScoller').style.display = 'block';
    }
    else {
      document.getElementById('showTopScoller').style.display = 'none';
    }
  }
  window.onscroll=showOnScroll;
}
