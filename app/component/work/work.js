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
      description: 'This web app lets you instantly see a list of all your subscription emails. Unsubscribe and delete easily from whatever you don’t want.',
      technical: 'Gamil api, jquery, Sql, Handelbar templates, MVC',
      // image: './assets/inbox-health.svg'
      image: 'http://inbox-health.herokuapp.com/img/fullLogo.svg'
    },
    {
      name: 'wheatlessly',
      url: 'http://www.wheatlessly.com/ ',
      github: 'https://github.com/jmpaik/wheatlessly',
      button: 'Visit site',
      description: ' Wheatlessly, is a dedicated gluten free web and mobile application that allows users to signin/signout and post their business. It also uses Google geocoder API to locate businesses.',
      technical: 'NodeJs, Angular, Sass, webpack, Karma,',
      image: './assets/wheatlessly.jpg'
    },
    {
      name: 'wheatlessIn',
      url: 'https://github.com/jmpaik/wheatlessinv2',
      github: 'https://github.com/jmpaik/wheatlessinv2',
      button: 'Visit DOC',
      description: 'It is web service serving Wheatlessly app, built using node.js, angularJS and expressJS server, uses MongoDB and AWS S3 database.',
      technical: 'REST API node.js, angularJS expressJS MongoDB and AWS S3 database, trivas CI.',
      image: './assets/backend.jpg'
    },
    {
      name: 'Portfolio',
      url: 'https://bhavya2.herokuapp.com/',
      github: 'https://github.com/jmpaik/bhavya2',
      button: 'Visit site',
      description: 'It is a front end portfolio and deployed on heroku.',
      technical: 'Bootstrap, node.js, angularJS, webpack',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/f6/eb/63/f6eb6350bf4032462e74d29f19f4594d.jpg'
    }
  ];


  // var width = document.getElementsByClassName('item')[0].offsetWidth;
  // $log.debug('width == ', width, ' width -- ', width.clientWidth);
  this.angle = 360/(this.projects.length);
  this.zindex = '280px';

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
}
