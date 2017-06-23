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
      description: 'inbox-health is all about xyz',
      technical: 'gamil api jquery js sql Handelbar templates',
      image: 'app/assets/inbox-health.jpg'
    },
    {
      name: 'wheatlessly',
      url: 'http://www.wheatlessly.com/ ',
      github: 'https://github.com/jmpaik/wheatlessly',
      description: 'wheatlessly is all about xyz',
      technical: 'node, angular, sass, webpack',
      image: 'app/assets/bhavya.jpg'
    },
    {
      name: 'wheatlessIn',
      url: 'http://www.wheatlessly.com/ ',
      github: 'https://github.com/jmpaik/wheatlessinv2',
      description: 'wheatlessIn is all about xyz',
      technical: 'REST API node.js, angularJS and expressJS server, uses MongoDB and AWS S3 database',
      image: 'app/assets/bhavya2.jpg'
    }
  ];

  var color = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'green'];
  var width =  document.getElementsByClassName('item');
  console.log('width == ', width, ' width -- ', width.clientWidth);
  this.angle = 360/(this.projects.length);
  this.zindex = width / 2 || '250px';

  this.transform = function(i){
    return {'transform': 'rotateY(' + i * this.angle + 'deg) translateZ(' + this.zindex + ')',
      'background-color' : color[i]};
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
}
