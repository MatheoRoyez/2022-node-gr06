const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.category).delete();

    await knex(tables.category).insert([
      {
        icon: '#F9C74F',
        name: 'Energie'
      },
      {
        icon: '#4D908E',
        name: 'Economie'
      },
      {
        icon: '#43AA8B',
        name: 'Milieu'
      },
      {
        icon: '#277DA1',
        name: 'Sociaal'
      }
    ]);
  }
};
