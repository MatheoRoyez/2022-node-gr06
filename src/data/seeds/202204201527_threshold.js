const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.threshold).delete();

    await knex(tables.threshold).insert([
      {
        behaviour: 'higherThanValue',
        value: 50000
      },
      {
        behaviour: 'lowerThanValue',
        value: 2000
      },
      {
        behaviour: 'lowerThanValue',
        value: 200
      },
      {
        behaviour: 'lowerThanValue',
        value: 500
      },
      {
        behaviour: 'lowerThanValue',
        value: 10000
      },
      {
        behaviour: 'lowerThanValue',
        value: 1500
      },
      {
        behaviour: 'lowerThanValue',
        value: 20000
      },
      {
        behaviour: 'lowerThanValue',
        value: 35000
      }
    ]);
  }
};
