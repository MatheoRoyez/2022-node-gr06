const { tables } = require('..');
const { coordinator_template } = require('../template_examples');

module.exports = {
  seed: async (knex) => {
    await knex(tables.role).delete();

    await knex(tables.role).insert([
      {
        name: 'director',
        template: JSON.stringify(coordinator_template),
        customizable: true
      },
      {
        name: 'management',
        template: JSON.stringify(coordinator_template),
        customizable: true
      },
      {
        name: 'stakeholder',
        template: null,
        customizable: false
      },
      {
        name: 'mvo_coordinator',
        template: JSON.stringify(coordinator_template),
        customizable: true
      }
    ]);
  }
};
