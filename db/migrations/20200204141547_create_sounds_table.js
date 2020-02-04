
exports.up = function (knex) {
  return knex.schema.createTable('sounds', (soundsTable => {
    soundsTable.increments('id').primary();
    soundsTable.string('name').notNullable();
    soundsTable.string('slug').notNullable();
    soundsTable.string('type').notNullable();
    soundsTable.boolean('loop').defaultTo(false);
    soundsTable.text('urls').notNullable();
  }))
};

exports.down = function (knex) {
  return knex.schema.dropTable('sounds');
};