'use strict';

module.exports = {
  template: require('./skills.html'),
  controller: ['$log', '$location', SkillsController],
  controllerAs: 'skillsCtrl'
};

function SkillsController($log, $location) {
  $log.debug('SkillsController');
  this.default = true;
  this.getStars = function(stars) {
    return new Array(stars);
  };

  this.mySkills = {
    html : {
      name: 'HTML 5',
      star: 5,
      detail:'Quality is what makes me stand out. My work meets professional website guidelines including markup standards, accessibility and compatibility.',
      showDetail: false
    },
    css : {
      name: 'CSS 3',
      star: 3,
      detail:'I write CSS3 code following guidelines and standards for compatibility. I can use new CSS3 features especially "Animation" and "Transition", so I can develop simple animation without using flash. ',
      showDetail: false
    },
    js: {
      name: 'JAVASCRIPT',
      star: 4,
      detail: 'I use JavaScript to develop the application for client-side to make web pages interactive.',
      showDetail: false
    },
    jq: {
      name: 'JQUERY',
      star: 4,
      detail: 'I use the jQuery library to handling events, to produce effects and simple animations, to DOM manipulation.',
      showDetail: false
    },
    node: {
      name: 'NODE JS',
      star: 4,
      detail: 'I use node environment to integrate different library.',
      showDetail: false
    },
    angular: {
      name: 'ANGULAR JS',
      star: 4,
      detail: 'I use angular to develop this application front end. I can use and develop angularJS directive component service to develop a custom build module.',
      showDetail: false
    },
    saas: {
      name: 'SAAS',
      star: 4,
      detail: 'I use saas for styling purpose and to develop the theme for sites. I this application saas is been transformed CSS3 by using web pack.',
      showDetail: false
    },
    responsive: {
      name: 'RESPONSIVE',
      star: 5,
      detail:'Good knowledge developing responsive web layout. Try to resize your browser to see what happen or try to view this website with your iPhone.',
      showDetail: false
    }
  };

  this.displayContent = function(){
    console.log('displayContent clicked');


  };
}
