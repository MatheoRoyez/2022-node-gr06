const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.category_role, (table) => {
      table.integer('Category_categoryId').unsigned();
      table.integer('roles_roleId').unsigned();

      table
        .foreign('Category_categoryId')
        .references(`${tables.category}.categoryId`)
        .onDelete('CASCADE');

      table.foreign('roles_roleId').references(`${tables.role}.roleId`).onDelete('CASCADE');
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.category_role);
  }
};
