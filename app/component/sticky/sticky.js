'use strict';

module.exports = {
  template: require('./sticky.html'),
  controller: ['$log', '$location', sickyController],
  controllerAs: 'stickyCtrl'
};

function sickyController($log, $location) {
$log.debug('stickyController');

this.allContact = [
  {
    name: 'linkedIn',
    image: 'http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png',
    link: 'https://www.linkedin.com/in/bhavyabharti/',
    target: '_blank'
  },
  {
    name: 'github',
    image:'https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png',
    link: 'https://github.com/bhavyaab',
    target: '_blank'
  },
  {
    name: 'mail',
    image:'https://www.firstcambridgecapital.com/wp-content/themes/fcc_metro/img/mail.png',
    link: '#contactB',
    target: '_self'
  }
]
}
