const { default: each } = require('jest-each');

const { withServer, loginMvoCoordinator, loginDirector } = require('../supertest.setup');
const roleRepository = require('../../src/repository/role');
const {
  data: { roles }
} = require('../testData');
const { tables } = require('../../src/data');
const { stakeholder_template } = require('../../src/data/template_examples');
const { supplyData, deleteData } = require('../globalFunctions');

describe('role', () => {
  // eslint-disable-next-line no-unused-vars
  let request, knex, loginHeader;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });

  beforeAll(async () => {
    loginHeader = await loginMvoCoordinator(request);
  });

  const url = '/api/roles';

  const roleName = 'director';
  const unknownRoleName = 'unknown';
  const roleTemplate = roles.find((r) => r.name === roleName).template;

  describe(`GET ${url}`, () => {
    it('should 200 and return all roles', async () => {
      const response = await request.get(`${url}`).set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: [
          {
            id: 1,
            name: 'stakeholder',
            customizable: 0
          },
          {
            id: 2,
            name: 'director',
            customizable: 1
          },
          {
            id: 3,
            name: 'mvo_coordinator',
            customizable: 1
          },
          {
            id: 4,
            name: 'management',
            customizable: 1
          },
          {
            id: 5,
            name: 'disable_customizable_role_template',
            customizable: 0
          },
          {
            id: 6,
            name: 'disable_customizable_visible_categories',
            customizable: 0
          }
        ],
        count: 6
      });
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}`);
      expect(response.status).toBe(401);
    });
  });

  describe(`GET ${url}/:name/template`, () => {
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
    it('should 200 and return template', async () => {
      const response = await request
        .get(`${url}/${roleName}/template`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        customizable: 1,
        template: {
          layout: {
            narrow: {
              areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
              rowCount: 2
            },
            wide: {
              areas: '"c1 c1 c4 c4" "c2 c2 c4 c4"',
              rowCount: 4
            }
          },
          tiles: [
            {
              icon: '#F9C74F',
              id: 1,
              name: 'Energie',
              csrs: []
            },
            {
              icon: '#43AA8B',
              id: 2,
              name: 'Economie',
              csrs: []
            },
            {
              icon: '#F94144',
              id: 4,
              name: 'Sociaal',
              csrs: []
            }
          ]
        }
      });
    });

    it('should 204 for role without template', async () => {
      const response = await request
        .get(`${url}/stakeholder/template`)
        .set('Authorization', loginHeader);
      expect(response.status).toBe(204);
    });

    it('should 400 for role name that does not exist', async () => {
      const response = await request
        .get(`${url}/${unknownRoleName}/template`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(400);
    });

    it('should 403 for user with role other than csr-coordinator', async () => {
      const response = await request
        .get(`${url}/${roleName}/template`)
        .set('Authorization', await loginDirector(request));

      expect(response.status).toBe(403);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}/${roleName}/template`);
      expect(response.status).toBe(401);
    });
  });

  describe(`PUT ${url}/:name/template`, () => {
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
      await roleRepository.updateTemplateByName(roleName, roleTemplate);
    });

    const newTemplate = JSON.stringify(stakeholder_template);

    it('should 200 and update template', async () => {
      const response = await request
        .put(`${url}/${roleName}/template`)
        .set('Authorization', loginHeader)
        .send({
          template: newTemplate
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        customizable: 1,
        template: {
          layout: {
            narrow: {
              areas: '"c3 c3" "c3 c3" "c4 ."',
              rowCount: 2
            },
            wide: {
              areas: '"c3 c3 . ." "c3 c3 c4 ."',
              rowCount: 4
            }
          },
          tiles: [
            {
              csrs: [
                {
                  icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
                  id: 2,
                  name: 'Schoon water en sanitair',
                  sdgNumber: '6.2',
                  threshold: {
                    behaviour: 'smallerthan',
                    id: 2,
                    value: '2000.00'
                  },
                  unit: 'm³',
                  value: '3000.00'
                },
                {
                  icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
                  id: 8,
                  name: 'Klimaatactie',
                  sdgNumber: '13',
                  threshold: {
                    behaviour: 'smallerthan',
                    id: 8,
                    value: '35000.00'
                  },
                  unit: 'ppm',
                  value: '29000.00'
                }
              ],
              icon: '#90BE6D',
              id: 3,
              name: 'Milieu'
            },
            {
              csrs: [],
              icon: '#F94144',
              id: 4,
              name: 'Sociaal'
            }
          ]
        }
      });
    });

    it('should 400 for role name that does not exist', async () => {
      const response = await request
        .put(`${url}/${unknownRoleName}/template`)
        .set('Authorization', loginHeader)
        .send({
          template: newTemplate
        });

      expect(response.status).toBe(400);
    });

    it('should 403 for user with role other than csr-coordinator', async () => {
      const response = await request
        .put(`${url}/${roleName}/template`)
        .set('Authorization', await loginDirector(request))
        .send({
          template: newTemplate
        });

      expect(response.status).toBe(403);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.put(`${url}/${roleName}/template`).send({
        template: newTemplate
      });

      expect(response.status).toBe(401);
    });
  });

  describe(`GET ${url}/:name/template/resources`, () => {
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
        csr_sourceBehaviour: tables.csr_sourceBehaviour,
        category_role: tables.category_role
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
        csr_sourceBehaviour: tables.csr_sourceBehaviour,
        datasource: tables.datasource,
        datasource_behaviour: tables.datasource_behaviour,
        category_role: tables.category_role
      });
    });

    it('should 200 and return the CSRs and categories that are visible for the mvo_coordinator', async () => {
      const response = await request
        .get(`${url}/mvo_coordinator/template/resources`)
        .set('Authorization', await loginMvoCoordinator(request));

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        categories: [
          {
            categoryId: 1,
            icon: '#F9C74F',
            name: 'Energie'
          },
          {
            categoryId: 3,
            icon: '#90BE6D',
            name: 'Milieu'
          },
          {
            categoryId: 4,
            icon: '#F94144',
            name: 'Sociaal'
          }
        ],
        csrs: [
          {
            cat_id: 4,
            icon: '#F8961E',
            id: 1,
            name: 'Donaties onderwijs',
            sdgNumber: '4',
            threshold: {
              behaviour: 'higherThanValue',
              id: 1,
              value: '50000.00'
            },
            unit: 'Euro',
            value: '65000.00'
          },
          {
            cat_id: 3,
            icon: '#277DA1',
            id: 2,
            name: 'Waterverbruik',
            sdgNumber: '6.2',
            unit: 'm³',
            value: '3000.00',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 2,
              value: '2000.00'
            }
          },
          {
            cat_id: 3,
            icon: '#F9C74F',
            id: 3,
            name: 'Geluidspollutie',
            sdgNumber: '15',
            unit: 'dB',
            value: '180.00',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 3,
              value: '200.00'
            }
          },
          {
            cat_id: 3,
            icon: '#4D908E',
            id: 4,
            name: 'Grondstofgebruik',
            sdgNumber: '14.5',
            unit: 'kg',
            value: '430.00',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 4,
              value: '500.00'
            }
          },
          {
            cat_id: 3,
            icon: '#F9C74F',
            id: 7,
            name: 'Netverliezen',
            sdgNumber: '13.3',
            unit: '%',
            value: '17000.00',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 7,
              value: '20000.00'
            }
          },
          {
            cat_id: 3,
            icon: '#90BE6D',
            id: 8,
            name: 'CO2 Uitstoot',
            sdgNumber: '13',
            unit: 'ppm',
            value: '29000.00',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 8,
              value: '35000.00'
            }
          }
        ]
      });
    });

    it('should 200 and return the CSRs and categories that are visible for the director', async () => {
      const response = await request
        .get(`${url}/director/template/resources`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        categories: [
          {
            categoryId: 1,
            icon: '#F9C74F',
            name: 'Energie'
          },
          {
            categoryId: 2,
            icon: '#43AA8B',
            name: 'Economie'
          },
          {
            categoryId: 3,
            icon: '#90BE6D',
            name: 'Milieu'
          },
          {
            categoryId: 4,
            icon: '#F94144',
            name: 'Sociaal'
          }
        ],
        csrs: [
          {
            cat_id: 4,
            icon: '#F8961E',
            id: 1,
            name: 'Donaties onderwijs',
            sdgNumber: '4',
            threshold: {
              behaviour: 'higherThanValue',
              id: 1,
              value: '50000.00'
            },
            unit: 'Euro',
            value: '65000.00'
          },
          {
            cat_id: 3,
            icon: '#277DA1',
            id: 2,
            name: 'Waterverbruik',
            sdgNumber: '6.2',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 2,
              value: '2000.00'
            },
            unit: 'm³',
            value: '3000.00'
          },
          {
            cat_id: 3,
            icon: '#F9C74F',
            id: 3,
            name: 'Geluidspollutie',
            sdgNumber: '15',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 3,
              value: '200.00'
            },
            unit: 'dB',
            value: '180.00'
          },
          {
            cat_id: 3,
            icon: '#4D908E',
            id: 4,
            name: 'Grondstofgebruik',
            sdgNumber: '14.5',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 4,
              value: '500.00'
            },
            unit: 'kg',
            value: '430.00'
          },
          {
            cat_id: 3,
            icon: '#F94144',
            id: 5,
            name: 'Bedrijfsvoortuigen',
            sdgNumber: '13',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 5,
              value: '10000.00'
            },
            unit: '',
            value: '12000.00'
          },
          {
            cat_id: 3,
            icon: '#577590',
            id: 6,
            name: 'Leasingvloot',
            sdgNumber: '14',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 6,
              value: '1500.00'
            },
            unit: '',
            value: '850.00'
          },
          {
            cat_id: 3,
            icon: '#F9C74F',
            id: 7,
            name: 'Netverliezen',
            sdgNumber: '13.3',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 7,
              value: '20000.00'
            },
            unit: '%',
            value: '17000.00'
          },
          {
            cat_id: 3,
            icon: '#90BE6D',
            id: 8,
            name: 'CO2 Uitstoot',
            sdgNumber: '13',
            threshold: {
              behaviour: 'lowerThanValue',
              id: 8,
              value: '35000.00'
            },
            unit: 'ppm',
            value: '29000.00'
          }
        ]
      });
    });

    it('should 400 for role name that does not exist', async () => {
      const response = await request
        .get(`${url}/${unknownRoleName}/template/resources`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(400);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}/${roleName}/template/resources`);

      expect(response.status).toBe(401);
    });
  });

  describe(`DELETE ${url}/:name/template`, () => {
    afterAll(async () => {
      await roleRepository.updateTemplateByName(roleName, roleTemplate);
    });

    it('should 204 and delete template', async () => {
      const response = await request
        .delete(`${url}/${roleName}/template`)
        .set('Authorization', loginHeader);

      expect(response.status).toBe(204);
    });
  });

  describe(`PUT ${url}/:name/template/customizable`, () => {
    afterAll(async () => {
      roleRepository.updateCustomizable(roleName, true);
    });

    it('should 200 and update customizability', async () => {
      const response = await request
        .put(`${url}/${roleName}/template/customizable`)
        .set('Authorization', loginHeader)
        .send({
          customizable: false
        });

      expect(response.status).toBe(200);
    });

    each(['', ' ', 'abc', 1]).it('should 400 for incorrect body', async (invalid) => {
      const response = await request
        .put(`${url}/${roleName}/template/customizable`)
        .set('Authorization', loginHeader)
        .send({
          customizable: invalid
        });

      expect(response.status).toBe(400);
    });

    it('should 400 for role name that does not exist', async () => {
      const response = await request
        .put(`${url}/${unknownRoleName}/template/customizable`)
        .set('Authorization', loginHeader)
        .send({
          customizable: false
        });

      expect(response.status).toBe(400);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.put(`${url}/${roleName}/template/customizable`).send({
        customizable: false
      });

      expect(response.status).toBe(401);
    });

    it('should 403 for user with role other than csr-coordinator', async () => {
      const response = await request
        .put(`${url}/${roleName}/template/customizable`)
        .set('Authorization', await loginDirector(request))
        .send({
          customizable: false
        });

      expect(response.status).toBe(403);
    });
  });
});
