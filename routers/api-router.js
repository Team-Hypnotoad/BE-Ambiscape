const apiRouter = require('express').Router();

const { send405Error } = require('../errorHandling');

apiRouter.route('/')
  .all(send405Error);

module.exports = apiRouter;