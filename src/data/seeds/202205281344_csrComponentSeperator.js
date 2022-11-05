const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csrcomposite).insert([
      {
        csrComponentId: 8
      }
    ]);
    await knex(tables.csrobjective).insert([
      {
        csrComponentId: 1
      },
      {
        csrComponentId: 2
      },
      {
        csrComponentId: 3
      },
      {
        csrComponentId: 4
      },
      {
        csrComponentId: 5
      },
      {
        csrComponentId: 6
      },
      {
        csrComponentId: 7
      }
    ]);
  }
};
