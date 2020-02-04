const express = require('express');
const apiRouter = require('./routers/api-router');
const { noRouteError, errorHandler } = require('./errorHandling');

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.use('/*', noRouteError);

app.use(errorHandler);

module.exports = { app };