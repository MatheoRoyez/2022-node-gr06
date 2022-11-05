const supertest = require('supertest');

const createServer = require('../src/createServer');
const { getKnex } = require('../src/data');

const withServer = (setter) => {
  let server;

  beforeAll(async () => {
    server = await createServer();
    setter({
      request: supertest(server.getApp().callback()),
      knex: getKnex()
    });
  });

  afterAll(async () => {
    await server.stop();
  });
};
const login = async (supertest, username, password) => {
  const response = await supertest.post('/api/users/login').send({
    username,
    password
  });

  if (response.statusCode !== 200) {
    throw new Error(response.body.message || 'Unknown error occured');
  }

  return `Bearer ${response.body.token}`;
};

const loginStakeholder = async (supertest) => {
  return await login(supertest, 'Ben', 'simpson');
};

const loginManager = async (supertest) => {
  return await login(supertest, 'Bart', 'simpson');
};

const loginMvoCoordinator = async (supertest) => {
  return await login(supertest, 'f', 'f');
};

const loginDirector = async (supertest) => {
  return await login(supertest, 'Bob', 'wachtwoord123');
};
const loginUserWithDisabledCustomizableAndNoRoleTemplate = async (supertest) => {
  return await login(supertest, 'userWithNonCustomizableTemplateAndNoRoleTemplate', 'f');
};


module.exports = {
  withServer,
  loginStakeholder,
  loginManager,
  loginDirector,
  loginMvoCoordinator,
  loginUserWithDisabledCustomizableAndNoRoleTemplate,
  login
};
