'use strict';

module.exports = {
  template: require('./skills.html'),
  controller: ['$log', '$location', SkillsController],
  controllerAs: 'skillsCtrl'
};

function SkillsController($log, $location) {
  $log.debug('SkillsController');

}
