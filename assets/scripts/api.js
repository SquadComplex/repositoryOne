'use strict';
const config = require('../config');

const returnData = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
    data,
  });
};

module.exports = {
  returnData
};
