const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csr, (table) => {
      table.increments('csrComponentId').primary();
      table.string('DTYPE').notNullable();
      table.string('icon').notNullable();
      table.string('name').notNullable();
      table.string('unit');

      table.integer('csrAggregationBehaviorId').unsigned();
      table.integer('sdgId').unsigned();
      table.integer('thresholdId').unsigned();
      table.integer('parentId').unsigned();

      table
        .foreign(
          'csrAggregationBehaviorId',
          'fk_csrAggregationBehaviour_csrAggregateBehaviourId'
        )
        .references(`${tables.csr_behaviour}.csrAggregateBehaviourId`);

      table.foreign('sdgId', 'fk_sdg_sdgId').references(`${tables.sdg}.sdgId`);

      table
        .foreign('thresholdId', 'fk_threshold_thresholdId')
        .references(`${tables.threshold}.thresholdId`);

      table
        .foreign('parentId', 'fk_csrComponent_parentId')
        .references(`${tables.csr}.csrComponentId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.csr);
  }
};
