const connection = require('../db/connection');

const insertUser = (params) => {
  //needs error handling
  return connection('users')
    .insert({
      username: params.username,
      name: params.name,
      avatar_url: params.avatar_url,
      saved_scenarios: params.saved_scenarios || ""
    })
    .returning('*');
}

const fetchUserById = (params) => {
  return connection.select('users.*')
    .from('users')
    .where('users.id', '=', params.user_id)
    .then(user => {
      if (user.length === 0) {
        return Promise.reject({ 'err': ['404', 'User Not Found'] });
      } else {
        return user;
      }
    })

}

module.exports = { insertUser, fetchUserById };