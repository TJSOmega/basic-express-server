'use strict';

function handleNotFound(req, res, next) {
  res.status(404).json({status: 404, message: 'Not Found '});
}

module.exports = handleNotFound;

