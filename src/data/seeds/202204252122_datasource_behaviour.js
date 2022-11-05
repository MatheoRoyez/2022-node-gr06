const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.datasource_behaviour).delete();

    await knex(tables.datasource_behaviour).insert([
      {
        behaviour: 'sum'
      },
      {
        behaviour: 'sum'
      },
      {
        behaviour: 'average'
      },
      {
        behaviour: 'average'
      },
      {
        behaviour: 'sum'
      },
      {
        behaviour: 'sum'
      },
      {
        behaviour: 'sum'
      },
      {
        behaviour: 'sum'
      }
    ]);
  }
};
