const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.threshold, (table) => {
      table.increments('thresholdId').primary();
      table.string('behaviour').notNullable();
      table.decimal('value', 8, 2).notNullable();
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.threshold);
  }
};
