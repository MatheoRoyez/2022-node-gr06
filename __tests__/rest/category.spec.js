const each = require('jest-each').default;

const { withServer, loginMvoCoordinator, loginDirector } = require('../supertest.setup');
const { tables } = require('../../src/data');
const { supplyData, deleteData } = require('../globalFunctions');

describe('category', () => {
  let request;
  let knex;
  let loginheader;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });

  beforeAll(async () => {
    loginheader = await loginMvoCoordinator(request);
  });

  const url = '/api/categories';

  describe('GET /api/category', () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        category_role: tables.category_role
      });
    });

    afterAll(async () => {
      await deleteData(knex, {
        category_role: tables.category_role,
        category: tables.category
      });
    });

    it('should 200 and return all categories that belong to MVO-coordinator', async () => {
      const response = await request.get(url).set('Authorization', loginheader);
      expect(response.status).toBe(200);
      expect(response.body.data).toEqual([
        { icon: '#F9C74F', id: 1, name: 'Energie' },
        { icon: '#90BE6D', id: 3, name: 'Milieu' },
        { icon: '#F94144', id: 4, name: 'Sociaal' }
      ]);
      expect(response.body.count).toBe(3);
    });

    it('should 200 and return the category template that belongs to the director', async () => {
      const response = await request.get(url).set('Authorization', await loginDirector(request));
      expect(response.status).toBe(200);
      expect(response.body.data).toEqual([
        { icon: '#F9C74F', id: 1, name: 'Energie' },
        { icon: '#43AA8B', id: 2, name: 'Economie' },
        { icon: '#90BE6D', id: 3, name: 'Milieu' },
        { icon: '#F94144', id: 4, name: 'Sociaal' }
      ]);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(url);
      expect(response.status).toBe(401);
    });
  });

  describe(`GET ${url}/:id/csrs`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role
      });
    });

    afterAll(async () => {
      await deleteData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role
      });
    });

    it('should 200 and return csrs linked to category with given id', async () => {
      const categoryId = 3;
      const response = await request
        .get(`${url}/${categoryId}/csrs`)
        .set('Authorization', loginheader);
      expect(response.status).toBe(200);
      expect(response.body.data).toEqual([
        {
          icon: '#277DA1',
          id: 2,
          name: 'Waterverbruik',
          sdgNumber: '6.2',
          unit: 'm³',
          threshold: {
            behaviour: 'lowerThanValue',
            id: 2,
            value: '2000.00'
          },
          value: '3000.00'
        },
        {
          icon: '#F9C74F',
          id: 3,
          name: 'Geluidspollutie',
          unit: 'dB',
          sdgNumber: '15',
          threshold: {
            behaviour: 'lowerThanValue',
            id: 3,
            value: '200.00'
          },
          value: '180.00'
        },
        {
          icon: '#4D908E',
          id: 4,
          name: 'Grondstofgebruik',
          unit: 'kg',
          sdgNumber: '14.5',
          threshold: {
            behaviour: 'lowerThanValue',
            id: 4,
            value: '500.00'
          },
          value: '430.00'
        },
        {
          icon: '#F9C74F',
          id: 7,
          name: 'Netverliezen',
          unit: '%',
          sdgNumber: '13.3',
          threshold: {
            behaviour: 'lowerThanValue',
            id: 7,
            value: '20000.00'
          },
          value: '17000.00'
        },
        {
          icon: '#90BE6D',
          id: 8,
          name: 'CO2 Uitstoot',
          sdgNumber: '13',
          unit: 'ppm',
          threshold: {
            behaviour: 'lowerThanValue',
            id: 8,
            value: '35000.00'
          },
          value: '29000.00'
        }
      ]);
    });

    it('should 404 for an unknown category', async () => {
      const unknownCategoryId = 99;
      const response = await request
        .get(`${url}/${unknownCategoryId}/csrs`)
        .set('Authorization', loginheader);
      expect(response.status).toBe(404);
    });

    each([[0], [-1], ['abc']]).it('should 400 for invalid category id', async (invalidId) => {
      const response = await request
        .get(`${url}/${invalidId}/csrs`)
        .set('Authorization', loginheader);
      expect(response.status).toBe(400);
    });

    it('should 401 for request without authentication', async () => {
      const categoryId = 3;
      const response = await request.get(`${url}/${categoryId}/csrs`);
      expect(response.status).toBe(401);
    });
  });
});
