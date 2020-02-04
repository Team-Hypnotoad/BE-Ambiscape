
exports.up = function (knex) {
  return knex.schema.createTable('scenarios', (scenariosTable => {
    scenariosTable.increments('id').primary();
    scenariosTable.string('name').notNullable();
    scenariosTable.string('slug').notNullable();
    scenariosTable.integer('creator_id').references('users.id').notNullable();
    scenariosTable.string('color_scheme');
    scenariosTable.boolean('is_public').defaultTo(false);
    scenariosTable.integer('likes').defaultTo(0);
    scenariosTable.text('sounds');
  }))
};

exports.down = function (knex) {
  return knex.schema.dropTable('scenarios');
};
