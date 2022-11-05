const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.category_role).delete();

    await knex(tables.category_role).insert([
      {
        Category_categoryId: 1,
        roles_roleId: 1
      },
      {
        Category_categoryId: 2,
        roles_roleId: 1
      },
      {
        Category_categoryId: 3,
        roles_roleId: 1
      },
      {
        Category_categoryId: 4,
        roles_roleId: 1
      },
      {
        Category_categoryId: 1,
        roles_roleId: 2
      },
      {
        Category_categoryId: 2,
        roles_roleId: 2
      },
      {
        Category_categoryId: 1,
        roles_roleId: 3
      },
      {
        Category_categoryId: 3,
        roles_roleId: 3
      },
      {
        Category_categoryId: 4,
        roles_roleId: 3
      },
      {
        Category_categoryId: 1,
        roles_roleId: 4
      },
      {
        Category_categoryId: 2,
        roles_roleId: 4
      },
      {
        Category_categoryId: 3,
        roles_roleId: 4
      },
      {
        Category_categoryId: 4,
        roles_roleId: 4
      }
    ]);
  }
};
