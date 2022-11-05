const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.user, (table) => {
      table.increments('userId').primary();
      table.string('passwordHash');
      table.string('salt');
      table.string('username');
      table.integer('ROLE_roleId').unsigned();
      table.text('template', 'longtext');

      table.foreign('ROLE_roleId', 'fk_user_roleId').references(`${tables.role}.roleId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.user);
  }
};
