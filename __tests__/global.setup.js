const config = require('config');

const { initializeData, getKnex, tables } = require('../src/data');
const { initializeLogger } = require('../src/core/logging');

const {
  data: { roles, users, loginlog }
} = require('./testData');

module.exports = async () => {
  initializeLogger({
    level: config.get('log.level'),
    disabled: config.get('log.disabled')
  });

  await initializeData();

  const knex = getKnex();
  await knex(tables.role).insert(roles);
  await knex(tables.user).insert(users);
  await knex(tables.loginlog).insert(loginlog);
};
