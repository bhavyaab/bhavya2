'use strict';

module.exports = ['$q', '$log', '$http', emailService];

function emailService($q, $log, $http){
  $log.debug('emailService');

  let service = {};
  service.sendMail = function(form){
    console.log($http);
  };
  return service;
}
