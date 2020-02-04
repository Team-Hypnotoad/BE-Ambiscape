const apiRouter = require('express').Router();
const usersRouter = require('./users-router');
const scenariosRouter = require('./scenarios-router');
const soundsRouter = require('./sounds-router');

const { send405Error } = require('../errorHandling');

apiRouter.route('/')
  .all(send405Error);

apiRouter.use('/users')

module.exports = apiRouter;