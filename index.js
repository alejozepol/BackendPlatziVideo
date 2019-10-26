const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middlewere/errorHandlers');

const notFoundHandler = require('./utils/middlewere/notFoundHandler')

//body parser
app.use(express.json());

moviesApi(app);

//catch 404
app.use(notFoundHandler);


//Error middlewere
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`listening http://localhost:${config.port}`);
});
