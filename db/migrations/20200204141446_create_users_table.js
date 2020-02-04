
exports.up = function (knex) {
  return knex.schema.createTable('users', (usersTable) => {
    usersTable.increments('id').primary();
    usersTable.string('username').notNullable();
    usersTable.string('name').notNullable();
    usersTable.string('avatar_url');
    usersTable.string('saved_scenarios');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
