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
<<<<<<< HEAD

  var width = $element[0].childNodes[0].childNodes[1].childNodes[1].offsetWidth * 0.6;
  this.angle = 360/(this.projects.length);
  this.zindex = width + 'px' || '280px';

  this.transform = function(i){
    return {'transform': 'rotateY(' + i * this.angle + 'deg) translateZ(' + this.zindex + ')',
      // 'background-color' : color[i]
    };
  };
  var currAngle = 0;
  this.rotate = function(event){
    var elementClass = event.target.className;
    if(elementClass === 'next'){
      currAngle = currAngle - this.angle;
    } else if(elementClass === 'prev'){
      currAngle = currAngle + this.angle;
    }

    document.getElementsByClassName('carousel')[0].style.transform = 'rotateY(' + currAngle + 'deg)';
  };
=======
>>>>>>> 32db4267a88d0c1b0122a819e898cd745ae8b0d8
}
