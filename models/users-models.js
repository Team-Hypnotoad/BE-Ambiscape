const connection = require('../db/connection');

const insertUser = (params) => {
  return connection('users')
    .insert({
      username: params.username,
      name: params.name,
      avatar_url: params.avatar_url,
      saved_scenarios: params.saved_scenarios || ""
    })
    .returning('*');
}

module.exports = { insertUser };