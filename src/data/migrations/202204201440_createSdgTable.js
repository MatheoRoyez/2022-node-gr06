const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.sdg, (table) => {
      table.increments('sdgId').primary();
      table.text('description', 'longtext').notNullable();
      table.string('icon');
      table.string('name');
      table.string('number');
      table.string('color');

      table.integer('categoryId').unsigned();
      table.integer('parentId').unsigned();

      table.foreign('categoryId', 'fk_sdg_categoryId').references(`${tables.category}.categoryId`);

      table.foreign('parentId', 'fk_sdg_parentId').references(`${tables.sdg}.sdgId`);
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.sdg);
  }
};
