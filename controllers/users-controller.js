const { insertUser } = require('../models/users-models');

const addUser = (req, res, next) => {
  insertUser(req.body)
    .then(user => {
      res.status(201).send({ 'user': user[0] });
    })
    .catch(err => {
      next(err);
    })
  res.status()
}

module.exports = { addUser }