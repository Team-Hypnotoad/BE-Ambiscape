const {
  usersData,
  soundsData,
  scenariosData
} = require('../data/index');

exports.seed = (knex) => {
  return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest() })
    .then(() => {
      return knex.insert(usersData).into('users');
    })
    .then(() => {
      return knex.insert(soundsData).into('sounds');
    })
    .then(() => {
      return knex.insert(scenariosData).into('scenarios');
    })
}