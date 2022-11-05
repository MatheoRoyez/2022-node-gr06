const each = require('jest-each').default;

const { tables } = require('../../src/data');
const { withServer, loginManager, loginDirector } = require('../supertest.setup');
const { supplyData, deleteData } = require('../globalFunctions');

describe('datasource', () => {
  // eslint-disable-next-line no-unused-vars
  let request, knex, loginHeader;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });

  beforeAll(async () => {
    loginHeader = await loginManager(request);
  });

  const url = '/api/datasources';

  describe(`GET ${url}/:id`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        datasource: tables.datasource
      });
    });

    afterAll(async () => {
      await deleteData(knex, {
        datasource: tables.datasource
      });
    });
    it('should 200 and return a datasource', async () => {
      const datasourceId = 1;
      const response = await request
        .get(`${url}/${datasourceId}`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 1,
        name: 'Donaties lagere scholen',
        source: 'donaties_lagere_scholen.csv',
        content:
          'info,data;schoolnaam,euro;HoGent,654781;HoWest,87632;UGent,32747;KULeuven,687684;VUB,365735'
      });
    });

    it('should 404 for unknown datasource', async () => {
      const id = 99;
      const response = await request.get(`${url}/${id}`).set('Authorization', loginHeader);
      expect(response.status).toBe(404);
    });

    each([-1, 0, 'abc', null]).it('should 400 for incorrect id', async (invalidId) => {
      const response = await request.get(`${url}/${invalidId}`).set('Authorization', loginHeader);
      expect(response.status).toBe(400);
    });

    it('should 403 for user with role that is not manager', async () => {
      const id = 1;
      const response = await request
        .get(`${url}/${id}`)
        .set('Authorization', await loginDirector(request));

      expect(response.status).toBe(403);
      expect(response.body.code).toEqual('FORBIDDEN');
    });
  });
});
