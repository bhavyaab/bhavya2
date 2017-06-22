'use strict';

module.exports = {
  template: require('./skills.html'),
  controller: ['$log', '$location', SkillsController],
  controllerAs: 'skillsCtrl'
};

function SkillsController($log, $location) {
  $log.debug('SkillsController');

  this.getStars = function(stars) {
    return new Array(stars);
  };

  this.mySkills = {
    html : {
      name: 'HTML 5',
      star: 5,
      detail:'htmlhtmlhtmlhtmlhtmlhtml'
    },
    css : {
      name: 'CSS 3',
      star: 3,
      detail:'css css css css css css css '
    },
    js: {
      name: 'JAVASCRIPT',
      star: 4,
      detail: 'JAVASCRIPT JAVASCRIPT JAVASCRIPT JAVASCRIPT',
    },
    jq: {
      name: 'JQUERY',
      star: 4,
      detail: 'jquery jquery jquery jquery',
    },
    node: {
      name: 'NODE JS',
      star: 4,
      detatl: 'node node node node '
    },
    angular: {
      name: 'ANGULAR JS',
      star: 4,
      detatl: 'angular angular angular angular'
    },
    responsive: {
      name: 'RESPONSIVE',
      star: 5,
      detatl:'responsive responsive responsive '
    }
  };

  this.displayContent = function(){
    console.log('displayContent clicked');


  };
}
