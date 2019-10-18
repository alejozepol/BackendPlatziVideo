const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./router/movies');

moviesApi(app);

app.listen(config.port, function() {
  console.log(`listening http://localhost:${config.port}`);
});
