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
    }
  };

  service.sendMail = function(form){
    console.log('email service form recieved - ' , form, ' url = ',url);

    return $http({
      method: 'POST',
      url: url,
      data: JSON.stringify(form),
      config: config,
      origin: url
    }).then(function successCallback(response) {
      $log.debug('email send -- ',response, 'response status -- '+ response.data.responseCode);
    }, function errorCallback(response) {
      $log.debug('error occured -- ', response);
    });
  };
  return service;
}
