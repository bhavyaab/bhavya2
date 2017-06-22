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
  //
  var slide = document.getElementsByClassName('.slider-single');
  var slideTotal = this.projects.length - 1;
  var slideCurrent = -1;

  this.slideInitial = function() {
    slide.addClass('proactivede');
    setTimeout(function() {
      this.slideRight();
    }, 500);
  };

  this.slideRight = function () {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);

    }

    slide.each(function() {
      var thisSlide = this;
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  };

  this.slideLeft = function () {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function() {
      var thisSlide = this;
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  };

  this.slideInitial();
}
