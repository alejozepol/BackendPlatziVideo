const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./router/movies');


app.use(express.json());

moviesApi(app);
app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`listening http://localhost:${config.port}`);
});
