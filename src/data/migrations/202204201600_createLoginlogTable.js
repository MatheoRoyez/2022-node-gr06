const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.loginlog, (table) => {
      table.increments('loginlogId').primary();
      table.integer('consecutive_failed_tries');
      table.datetime('datetime').defaultTo(knex.fn.now());
      table.string('status');
      table.integer('user_id').unsigned();

      table.foreign('user_id', 'fk_loginlog_userId').references(`${tables.user}.userId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.loginlog);
  }
};
