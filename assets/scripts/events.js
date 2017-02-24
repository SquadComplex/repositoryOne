'use strict';
const api = require('./api');
const ui = require('./ui');

const onReturnData = function(event) {
  event.preventDefault();
  api.returnData()
  .then(ui.success);
};

const addHandlers = () => {
  $('.get-books-btn').on('click', onReturnData);
};

module.exports = {
  addHandlers,
};
