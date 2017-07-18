'use strict';

module.exports = {
  template: require('./work.html'),
  controller: ['$log', '$location', WorkController],
  controllerAs: 'workCtrl'
};

function WorkController($log, $location) {
  $log.debug('WorkController');


  this.projects = [
    {
      name: 'Inbox Health',
      url: 'http://inbox-health.herokuapp.com/',
      github: 'https://github.com/bhavyaab/inbox-health',
      button: 'Visit site',
      description: 'inbox-health is all about xyz',
      technical: 'gamil api jquery js sql Handelbar templates',
      image: 'http://inbox-health.herokuapp.com/img/fullLogo.svg'
    },
    {
      name: 'wheatlessly',
      url: 'http://www.wheatlessly.com/ ',
      github: 'https://github.com/jmpaik/wheatlessly',
      button: 'Visit site',
      description: 'wheatlessly is all about xyz',
      technical: 'node, angular, sass, webpack',
      image: 'app/assets/wheatlessly.jpg' || 'http://www.wheatlessly.com/image/990e4c2724a57f2d2da3aca1f3bb211c.jpg',
    },
    {
      name: 'wheatlessIn',
      url: 'https://github.com/jmpaik/wheatlessinv2',
      github: 'https://github.com/jmpaik/wheatlessinv2',
      button: 'Visit github',
      description: 'wheatlessIn is all about xyz',
      technical: 'REST API node.js, angularJS and expressJS server, uses MongoDB and AWS S3 database',
      image: 'app/assets/backend.jpg' || 'http://devana.rs/blog/wp-content/uploads/2015/10/backend.jpg',
    }
  ];
}
