'use strict';

function validation(req, res, next) {
  if (!req.query.name) {
    console.log(req.query.name);
    next('Sorry we did not receive a name!');
  } else {
    next();
  }
}

module.exports = validation;


