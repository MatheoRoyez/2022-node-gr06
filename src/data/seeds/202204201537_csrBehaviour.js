const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csr_behaviour).delete();

    await knex(tables.csr_behaviour).insert([
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
