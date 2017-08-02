'use strict';

module.exports = function(req, res, next) {
  console.log('req = ', req, '  res = ', res, '  next = ', next);
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Headers', '*');
  next();
};
