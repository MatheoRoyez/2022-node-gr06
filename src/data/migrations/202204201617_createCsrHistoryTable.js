const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csrhistory, (table) => {
      table.increments('csrHistoryId').primary();
      table.string('aggregateType').notNullable();
      table.date('date').notNullable();
      table.decimal('thresholdValue', 8, 2).notNullable();
      table.string('thresholdType').notNullable();
      table.decimal('value', 8, 2).notNullable();

      table.integer('csrId').unsigned();

      table
        .foreign('csrId', 'fk_csrComponent_csrComponentId')
        .references(`${tables.csr}.csrComponentId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.csrhistory);
  }
};
