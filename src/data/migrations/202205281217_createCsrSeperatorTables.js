const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csrcomposite, (table) => {
      table.increments('csrComponentId').primary();

      table
        .foreign('csrComponentId', 'fk_csrcomposite_csrComponentId')
        .references(`${tables.csr}.csrComponentId`);
    });

    await knex.schema.createTable(tables.csrobjective, (table) => {
      table.increments('csrComponentId').primary();

      table
        .foreign('csrComponentId', 'fk_csrobjective_csrComponentId')
        .references(`${tables.csr}.csrComponentId`);
    });
  },
  down: (knex) => {
    knex.schema.dropTableIfExists(tables.csrcomposite);
    knex.schema.dropTableIfExists(tables.csrobjective);
  }
};
