'use strict';

module.exports = ['$q', '$log', '$http', emailService];

function emailService($q, $log, $http){
  $log.debug('emailService');

  let service = {};
  let url = `${__API_URL__}contact`;
  // let config = {
  //   // headers: {
  //   //   'Content-Type': 'application/json',
  //   //   'Accept': 'application/json',
  //   //   'Access-Control-Allow-Origin': '*',
  //   //   'Access-Control-Allow-Headers': '*'
  //   // }
  // };

  service.sendMail = function(form){
    console.log('url = ', url);
    return $http({
      method: 'POST',
      url: url,
      data: JSON.stringify(form)
      // config: config
    }).then(function successCallback(response) {
      $log.debug('email send -- ',response, 'response status -- '+ response.data.responseCode);
    }, function errorCallback(response) {
      $log.debug('error occured -- ', response);
    });
  };

  // service.postRequest = function() {
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     console.log('responseText == ',this.responseText);
  //   };
  //   xhttp.open('POST', url, true);
  //   xhttp.send();
  // };

  return service;
}
