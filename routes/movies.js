const express = require('express');
const MoviesService = require('../Services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies')

const validationHandlers = require('../utils/middlewere/validationHandlers')

const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECUNDS, 
  SEXTY_MINUTES_IN_SECUNDS } = require('../utils/time');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MoviesService();

  router.get('/', async function (req, res, next) {
    cacheResponse(res,FIVE_MINUTES_IN_SECUNDS);
    const { tags } = req.query;

    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', validationHandlers({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res,SEXTY_MINUTES_IN_SECUNDS);
      const { movieId } = req.params;

      try {
        const movie = await movieService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: 'movie retrived'
        });
      } catch (error) {
        next(error);
      }
    });

  router.post('/', validationHandlers(createMovieSchema), async function (req, res, next) {
    const { body: movie } = req;

    try {
      const createMovieId = await movieService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', validationHandlers({ movieId: movieIdSchema }, 'params'), validationHandlers(updateMovieSchema), async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const UpdateMovieId = await movieService.updateMovie({ movieId, movie });
      res.status(200).json({
        data: UpdateMovieId,
        message: 'movie update'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', validationHandlers({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deleteMovieId = await movieService.deleteMovie({ movieId });
      res.status(200).json({
        data: deleteMovieId,
        message: 'movie deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
