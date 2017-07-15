'use strict';

module.exports = ['$q', '$log', '$http', emailService];

function emailService($q, $log, $http){
  $log.debug('emailService');

  let service = {};
  let url = `${__API_URL__}/contact`;
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };

  service.sendMail = function(form){

    return $http({
      method: 'POST',
      url: url,
      data: JSON.stringify(form),
      config: config,
      Origin: url
    }).then(function successCallback(response) {
      $log.debug('email send -- ',response, 'response status -- '+ response.data.responseCode);
    }, function errorCallback(response) {
      $log.debug('error occured -- ', response);
    });
  };
  return service;
}
