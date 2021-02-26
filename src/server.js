'use strict';

// 1st party dependencies

// 3rd party dependencies
const express = require('express');


// internal modules
const logger = require('./middleware/logger.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const validator = require('./middleware/validator.js');


// application constants
const app = express();

app.use(express.json());
app.use(logger);


function start(port) {
  app.listen(port, () => {
    console.log(`listening on PORT ${port}`);
  });
}

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({name});
});



app.get('*', notFound);



app.get('/test500', (req, res) => {
  throw new Error ('ERRROORRRRRR!!!!');
});


module.exports = {
  server: app,
  start: start,
};

app.use('*', notFound);
app.use(errors);

