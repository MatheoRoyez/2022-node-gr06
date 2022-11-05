const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csr_behaviour, (table) => {
      table.increments('csrAggregateBehaviourId').primary();
      table.string('behaviour').notNullable();
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.csr_behaviour);
  }
};
