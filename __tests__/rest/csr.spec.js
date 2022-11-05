const each = require('jest-each').default;

const { withServer, loginMvoCoordinator } = require('../supertest.setup');
const { tables } = require('../../src/data');
const { supplyData, deleteData } = require('../globalFunctions');

describe('csr', () => {
  let request, knex, loginHeader;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });

  beforeAll(async () => {
    loginHeader = await loginMvoCoordinator(request);
  });

  const url = '/api/csrs';

  describe(`GET ${url}/:id`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        threshold: tables.threshold,
        csr_behaviour: tables.csr_behaviour,
        csr: tables.csr,
        csrhistory: tables.csrhistory,
        csr_role: tables.csr_role,
        datasource: tables.datasource,
        datasource_behaviour: tables.datasource_behaviour,
        csr_sourceBehaviour: tables.csr_sourceBehaviour
      });
    });

    afterAll(async () => {
      await deleteData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        threshold: tables.threshold,
        csr_behaviour: tables.csr_behaviour,
        csr: tables.csr,
        csrhistory: tables.csrhistory,
        csr_role: tables.csr_role,
        datasource: tables.datasource,
        datasource_behaviour: tables.datasource_behaviour,
        csr_sourceBehaviour: tables.csr_sourceBehaviour
      });
    });

    it('should 200 and return csr composite and its children (subobjectives)', async () => {
      const compositeId = 8;
      const response = await request.get(`${url}/${compositeId}`).set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(compositeId);
      expect(response.body).toEqual({
        id: 8,
        type: 'CSR_Composite',
        sdgNumber: '13',
        date: '2021-12-31T23:00:00.000Z',
        value: '29000.00',
        icon: '#90BE6D',
        name: 'CO2 Uitstoot',
        unit: 'ppm',
        threshold: {
          behaviour: 'lowerThanValue',
          value: '35000.00'
        },
        history: [
          {
            date: '2016-12-31T23:00:00.000Z',
            id: 40,
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '11000.00'
          },
          {
            id: 41,
            date: '2017-12-31T23:00:00.000Z',
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '15500.00'
          },
          {
            id: 42,
            date: '2018-12-31T23:00:00.000Z',
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '18100.00'
          },
          {
            id: 43,
            date: '2019-12-31T23:00:00.000Z',
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '20800.00'
          },
          {
            id: 44,
            date: '2020-12-31T23:00:00.000Z',
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '26500.00'
          },

          {
            id: 45,
            date: '2021-12-31T23:00:00.000Z',
            thresholdValue: '35000.00',
            thresholdType: 'smallerthan',
            value: '29000.00'
          }
        ],
        csrs: [
          {
            id: 5,
            sdgNumber: '13',
            date: '2021-12-31T23:00:00.000Z',
            value: '12000.00',
            icon: '#F94144',
            name: 'Bedrijfsvoortuigen',
            unit: '',
            threshold: {
              behaviour: 'lowerThanValue',
              value: '10000.00'
            }
          },
          {
            id: 7,
            sdgNumber: '13.3',
            date: '2021-12-31T23:00:00.000Z',
            value: '17000.00',
            icon: '#F9C74F',
            name: 'Netverliezen',
            unit: '%',
            threshold: {
              behaviour: 'lowerThanValue',
              value: '20000.00'
            }
          }
        ]
      });
    });

    it('should 200 and return csr objective and its children (datasources)', async () => {
      const objectiveId = 1;
      const response = await request.get(`${url}/${objectiveId}`).set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(objectiveId);
      expect(response.body).toEqual({
        id: 1,
        type: 'CSR_Objective',
        sdgNumber: '4',
        date: '2022-04-30T22:00:00.000Z',
        value: '65000.00',
        icon: '#F8961E',
        name: 'Donaties onderwijs',
        unit: 'Euro',
        threshold: {
          behaviour: 'higherThanValue',
          value: '50000.00'
        },
        history: [
          {
            id: 1,
            date: '2021-12-31T23:00:00.000Z',
            thresholdValue: '50000.00',
            thresholdType: 'higherthan',
            value: '12500.00'
          },
          {
            id: 2,
            date: '2022-01-31T23:00:00.000Z',
            thresholdValue: '50000.00',
            thresholdType: 'higherthan',
            value: '17000.00'
          },
          {
            id: 3,
            date: '2022-02-28T23:00:00.000Z',
            thresholdValue: '50000.00',
            thresholdType: 'higherthan',
            value: '25500.00'
          },
          {
            id: 4,
            date: '2022-03-31T22:00:00.000Z',
            thresholdValue: '50000.00',
            thresholdType: 'higherthan',
            value: '45000.00'
          },
          {
            id: 5,
            date: '2022-04-30T22:00:00.000Z',
            thresholdValue: '50000.00',
            thresholdType: 'higherthan',
            value: '65000.00'
          }
        ],
        datasources: [
          {
            id: 1,
            name: 'Donaties lagere scholen',
            source: 'donaties_lagere_scholen.csv'
          },
          {
            id: 2,
            name: 'Donaties middelbare scholen',
            source: 'donaties_middelbare_scholen.csv'
          },
          {
            id: 3,
            name: 'Donaties hogescholen en universiteiten',
            source: 'donaties_universiteiten_hogescholen.csv'
          }
        ]
      });
    });

    it('should 204 for an unknown csr', async () => {
      const unkownCsrId = 99;
      const response = await request.get(`${url}/${unkownCsrId}`).set('Authorization', loginHeader);
      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
    });

    each([[0], [-1], ['abc']]).it('should 400 for invalid csr id', async (invalidId) => {
      const response = await request.get(`${url}/${invalidId}`).set('Authorization', loginHeader);
      expect(response.status).toBe(400);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}/1`);
      expect(response.status).toBe(401);
    });
  });
});
