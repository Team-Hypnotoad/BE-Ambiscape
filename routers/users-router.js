const usersRouter = require('express').Router();
const { send405Error } = require('../errorHandling');
const { getUsers, addUser } = require('../controllers/users-controller');

usersRouter.route('/')
  .post(addUser)
  .all(send405Error);

// usersRouter.route('/:user_id')
//   .get(getUsers)
//   .all(send405Error);

// usersRouter.route('/:user_id/scenarios')
//   .get(getScenariosByUserId)
//   .all(send405Error);

module.exports = usersRouter;