'use strict';


module.exports = ['$q', '$log', '$http', emailService];

let baseUrl = 'https://outlook.office.com/api/v2.0/me/sendmail';
let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

function emailService($q, $log, $http){
  $log.debug('emailService');

  let service = {};

  service.sendEmail = function(data){
    return $http.post(baseUrl, data, config())
    .then( res => {
      $log.debug(res.data);
      return $q.resolve(res.data);
    });
  };
  return service;
}
