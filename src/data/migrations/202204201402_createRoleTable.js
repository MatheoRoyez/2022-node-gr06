const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.role, (table) => {
      table.increments('roleId').primary();
      table.string('name').notNullable();
      table.text('template', 'longtext');
      table.boolean('customizable').defaultTo(true);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.role);
  }
};
