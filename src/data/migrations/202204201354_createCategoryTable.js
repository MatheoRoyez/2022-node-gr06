const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.category, (table) => {
      table.increments('categoryId').primary();

      table.string('icon').notNullable();

      table.string('name').notNullable();

      table.unique('name', 'idx_category_name_unique');
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.category);
  }
};
