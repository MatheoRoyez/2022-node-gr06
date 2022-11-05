const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.datasource_behaviour, (table) => {
      table.increments('sourceAggregateBehaviourId').primary();
      table.string('behaviour').notNullable();
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.datasource_behaviour);
  }
};
