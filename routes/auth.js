const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeyService = require('../Services/apiKeys');
const UsersServices = require('../Services/user');
const validationHandler = require('../utils/middlewere/validationHandlers');
const { createUserSchema } = require('../utils/schemas/user');

const { config } = require('../config');

//Basic
require('../utils/auth/strategies/basic');

function authApi(app) {

  const router = express.Router();
  app.use('/api/auth', router);
  const apiKeyService = new ApiKeyService();
  const usersServices = new UsersServices();

  router.post(
    '/sign-in',
    async function (req, res, next) {
      const { apiKeyToken } = req.body;
      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      };

      passport.authenticate('basic', function (error, user) {
        try {
          if (error || !user) {
            next(boom.unauthorized());
          }
          req.login(user, { session: false }, async function (error) {
            if (error) {
              next(error)
            }

            const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken })
            if (!apiKey) {
              next(boom.unauthorized());
            }

            const { _id: id, name, email } = user;
            const payload = {
              sub: id,
              name,
              email,
              scopes: apiKey.scopes
            }

            const token = jwt.sign(payload, config.authJwtSecret, {
              expiresIn: '15m'
            });
            res.status(200).json({
              token,
              user: {
                id,
                name,
                email
              }
            })

          })
        } catch (error) {
          next(error)
        }
      })(req, res, next);
    })

  router.post(
    '/sign-up',
    validationHandler(createUserSchema),
    async function (req, res, next) {
      const { body: user } = req;
      try {
        const createUserId = await usersServices.createUser({ user });
        res.status(201).json({
          data: createUserId,
          message: 'user created' 
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = authApi;
