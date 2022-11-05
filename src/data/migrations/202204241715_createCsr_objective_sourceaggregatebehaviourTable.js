const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csr_sourceBehaviour, (table) => {
      table.integer('CSR_Objective_csrComponentId').unsigned();

      table.integer('datasources_sourceAggregateBehaviourId').unsigned();

      table.integer('datasources_KEY').unsigned();

      table
        .foreign('CSR_Objective_csrComponentId', 'fk_objective')
        .references(`${tables.csr}.csrComponentId`)
        .onDelete('CASCADE');
      table
        .foreign('datasources_sourceAggregateBehaviourId', 'fk_aggregateBehaviour')
        .references(`${tables.datasource_behaviour}.sourceAggregateBehaviourId`)
        .onDelete('CASCADE');

      table.foreign('datasources_KEY').references(`${tables.datasource}.datasourceId`)
        .onDelete('CASCADE');
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.csr_sourceBehaviour);
  }
};
