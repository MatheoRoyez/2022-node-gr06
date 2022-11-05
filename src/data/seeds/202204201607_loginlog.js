const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.loginlog).delete();

    await knex(tables.loginlog).insert([
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 4
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 2
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 1
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 3
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 5
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 6
      },
      {
        consecutive_failed_tries: 0,
        status: 'ACTIVE',
        user_id: 7
      }
    ]);
  }
};
