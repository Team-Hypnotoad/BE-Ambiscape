const apiRouter = require('express').Router();
const usersRouter = require('./users-router');
const scenariosRouter = require('./scenarios-router');
const soundsRouter = require('./sounds-router');

const getApiMap = require('../controllers/api-controller');
const { send405Error } = require('../errorHandling');

apiRouter.route('/')
  .get(getApiMap)
  .all(send405Error);

apiRouter.use('/users', usersRouter);

// apiRouter.use('/scenarios', scenariosRouter);

// apiRouter.use('/sounds', soundsRouter);

module.exports = apiRouter;