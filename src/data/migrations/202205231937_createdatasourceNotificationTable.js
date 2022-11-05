const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.datasouce_notification, (table) => {
      table.increments('datasourceNotificationId').primary();
      table.date('date').notNullable();
      table.string('message').notNullable();
      table.integer('datasourceId').unsigned();

      table
        .foreign('datasourceId', 'fk_datasource_datasourceId')
        .references(`${tables.datasource}.datasourceId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.datasouce_notification);
  }
};
