const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.datasource, (table) => {
      table.increments('datasourceId').primary();

      table.string('soort').notNullable();

      table.string('name').notNullable();

      table.string('source');

      table.text('content', 'longtext');
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.datasource);
  }
};
