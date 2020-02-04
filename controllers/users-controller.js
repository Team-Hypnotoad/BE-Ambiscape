const { insertUser, fetchUserById } = require('../models/users-models');

const postUser = (req, res, next) => {
  insertUser(req.body)
    .then(user => {
      res.status(201).send({ 'user': user[0] });
    })
    .catch(err => {
      next(err);
    })
}

const getUserById = (req, res, next) => {
  fetchUserById(req.params)
    .then(user => {
      res.status(200).send({ 'user': user[0] });
    })
    .catch(err => {
      next(err);
    })
}

module.exports = { postUser, getUserById }