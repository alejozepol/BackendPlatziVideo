const express = require('express');
const UserMoviesService = require('../Services/userMovies');
const validationHandler = require('../utils/middlewere/validationHandlers');
const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/user');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMovieApi(app) {
  const router = express.Router();
  app.use('api/user-movies', router);
  const userMoviesService = new UserMoviesService();

  router.get('/', validationHandler({ userId: userIdSchema }, 'query'),
    async function (req, res, next) {
      const { userId } = req.query;

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });

        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        })

      } catch (error) {
        next(error)
      }
    });

    router.post('/', validationHandler(createUserMovieSchema), async function(req, res, next){
      const {body: userMovie} = req;

      try {
        const createdUserMovieId = await userMoviesService.CreateUserMovies({
          userMovie
        });
        res.status(201).json({
          data: createdUserMovieId,
          message: 'user movie created'
        })
      } catch (error) {
        next(error)
      }
    })

    router.delete(
      '/:userMovieId',
      validationHandler({userMovieId: movieIdSchema}, 'params'),
      async function(req, res, next){
       const {userMovieId} = req.params
       try {
         const deleteUserMovieId = await userMoviesService.deleteUserMovies({userMovieId});
         res.status(200).json({
           data: deleteUserMovieId,
           message: 'user movie deleted'
         })
       } catch (error) {
         next(error)
       }
      }
    )
}

module.exports = userMovieApi;