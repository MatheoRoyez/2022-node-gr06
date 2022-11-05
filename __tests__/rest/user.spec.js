const each = require('jest-each').default;

const {
  withServer,
  loginMvoCoordinator,
  loginDirector,
  loginManager,
  loginStakeholder,
  login,
  loginUserWithDisabledCustomizableAndNoRoleTemplate
} = require('../supertest.setup');
const { createInvalidBodies, supplyData, deleteData } = require('../globalFunctions');
const { tables } = require('../../src/data');
const { stakeholder_template } = require('../../src/data/template_examples');

describe('users', () => {
  // eslint-disable-next-line no-unused-vars
  let request, knex;

  withServer(({ request: r, knex: k }) => {
    request = r;
    knex = k;
  });

  const url = '/api/users';

  const correctUsername = 'Bob';
  const correctPassword = 'wachtwoord123';

  describe(`POST ${url}/login`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role,
        category_role: tables.category_role
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
        csr_role: tables.csr_role,
        category_role: tables.category_role
      });
    });

    it('should 200 and return token and user', async () => {
      const response = await request.post(`${url}/login`).send({
        username: correctUsername,
        password: correctPassword
      });
      expect(response.status).toBe(200);
      expect(response.body.token).toBeTruthy();

      expect(response.body.user).toEqual({
        id: 2,
        username: correctUsername,
        role: 'director',
        status: 'ACTIVE',
        customizable: 1,
        template: {
          tiles: [
            {
              id: 1,
              name: 'Energie',
              icon: '#F9C74F',
              csrs: []
            },
            {
              id: 2,
              name: 'Economie',
              icon: '#43AA8B',
              csrs: []
            },
            {
              id: 4,
              name: 'Sociaal',
              icon: '#F94144',
              csrs: []
            }
          ],
          layout: {
            wide: {
              areas: '"c1 c1 c4 c4" "c2 c2 c4 c4"',
              rowCount: 4
            },
            narrow: {
              areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
              rowCount: 2
            }
          }
        }
      });
    });

    it('should 400 for unknown user', async () => {
      const response = await request.post(`${url}/login`).send({
        username: 'unknown_user',
        password: 'password'
      });
      expect(response.status).toBe(400);
      expect(response.body.code).toBe('VALIDATION_FAILED');
    });

    it('should 400 for incorrect password', async () => {
      const response = await request.post(`${url}/login`).send({
        username: correctUsername,
        password: 'incorrect_password'
      });
      expect(response.status).toBe(400);
      expect(response.body.code).toBe('VALIDATION_FAILED');
    });

    each(
      createInvalidBodies(
        {
          username: correctUsername,
          password: correctPassword
        },
        {
          username: ['', 'wrong-username', 1],
          password: ['', 'wrong-password', 1]
        }
      )
    ).it('should 400 for incorrect request body', async (invalidBody) => {
      const response = await request.post(`${url}/login`).send(invalidBody);
      expect(response.status).toBe(400);
    });

    it('should deactivate account after 3 consecutive failed login attempts', async () => {
      const response = await request.post(`${url}/login`).send({
        username: 'accountBlocked',
        password: 'wrong-password'
      });

      expect(response.status).toBe(403);
      expect(response.body.code).toBe('BLOCKED');
    });
  });

  describe(`GET ${url}/:id`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role,
        category_role: tables.category_role
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
        csr_role: tables.csr_role,
        category_role: tables.category_role
      });
    });
    it('should 200 and return user', async () => {
      const id = 1;
      const response = await request.get(`${url}/${id}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 1,
        username: 'f',
        role: 'mvo_coordinator',
        customizable: 1,
        template: {
          tiles: [
            {
              id: 1,
              name: 'Energie',
              icon: '#F9C74F',
              csrs: [
                {
                  id: 2,
                  icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
                  name: 'Schoon water en sanitair',
                  unit: 'm³',
                  sdgNumber: '6.2',
                  value: '3000.00',
                  threshold: {
                    id: 2,
                    behaviour: 'smallerthan',
                    value: '2000.00'
                  }
                },
                {
                  id: 8,
                  icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
                  name: 'Klimaatactie',
                  unit: 'ppm',
                  sdgNumber: '13',
                  value: '29000.00',
                  threshold: {
                    id: 8,
                    behaviour: 'smallerthan',
                    value: '35000.00'
                  }
                }
              ]
            },
            {
              id: 2,
              name: 'Economie',
              icon: '#43AA8B',
              csrs: []
            },
            {
              id: 3,
              name: 'Milieu',
              icon: '#90BE6D',
              csrs: []
            },
            {
              id: 4,
              name: 'Sociaal',
              icon: '#F94144',
              csrs: [
                {
                  id: 1,
                  icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
                  name: 'Kwaliteitsonderwijs',
                  unit: 'Euro',
                  sdgNumber: '4',
                  value: '65000.00',
                  threshold: {
                    id: 1,
                    behaviour: 'higherthan',
                    value: '50000.00'
                  }
                }
              ]
            }
          ],
          layout: {
            wide: {
              areas: '"c1 c2 c3 c3" "c4 c4 c3 c3"',
              rowCount: 4
            },
            narrow: {
              areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
              rowCount: 2
            }
          }
        }
      });
    });

    it('should 404 for unknown user', async () => {
      const id = 99;
      const response = await request.get(`${url}/${id}`);
      expect(response.status).toBe(404);
    });

    each([-1, 0, 'abc', null]).it('should 400 for incorrect id', async (invalidId) => {
      const response = await request.get(`${url}/${invalidId}`);
      expect(response.status).toBe(400);
    });
  });

  describe(`GET ${url}/template`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role,
        category_role: tables.category_role
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
        csr_role: tables.csr_role,
        category_role: tables.category_role
      });
    });

    it('should 200 and return personalised template', async () => {
      const response = await request
        .get(`${url}/template`)
        .set('Authorization', await loginMvoCoordinator(request));

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        tiles: [
          {
            id: 1,
            name: 'Energie',
            icon: '#F9C74F',
            csrs: [
              {
                id: 2,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
                name: 'Schoon water en sanitair',
                unit: 'm³',
                sdgNumber: '6.2',
                value: '3000.00',
                threshold: {
                  id: 2,
                  behaviour: 'smallerthan',
                  value: '2000.00'
                }
              },
              {
                id: 8,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
                name: 'Klimaatactie',
                unit: 'ppm',
                sdgNumber: '13',
                value: '29000.00',
                threshold: {
                  id: 8,
                  behaviour: 'smallerthan',
                  value: '35000.00'
                }
              }
            ]
          },
          {
            id: 2,
            name: 'Economie',
            icon: '#43AA8B',
            csrs: []
          },
          {
            id: 3,
            name: 'Milieu',
            icon: '#90BE6D',
            csrs: []
          },
          {
            id: 4,
            name: 'Sociaal',
            icon: '#F94144',
            csrs: [
              {
                id: 1,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-04.jpg',
                name: 'Kwaliteitsonderwijs',
                unit: 'Euro',
                sdgNumber: '4',
                value: '65000.00',
                threshold: {
                  id: 1,
                  behaviour: 'higherthan',
                  value: '50000.00'
                }
              }
            ]
          }
        ],
        layout: {
          wide: {
            areas: '"c1 c2 c3 c3" "c4 c4 c3 c3"',
            rowCount: 4
          },
          narrow: {
            areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
            rowCount: 2
          }
        }
      });
    });

    it('should 200 and return role template', async () => {
      const response = await request
        .get(`${url}/template`)
        .set('Authorization', await loginDirector(request));

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        tiles: [
          {
            id: 1,
            name: 'Energie',
            icon: '#F9C74F',
            csrs: []
          },
          {
            id: 2,
            name: 'Economie',
            icon: '#43AA8B',
            csrs: []
          },
          {
            id: 4,
            name: 'Sociaal',
            icon: '#F94144',
            csrs: []
          }
        ],
        layout: {
          wide: {
            areas: '"c1 c1 c4 c4" "c2 c2 c4 c4"',
            rowCount: 4
          },
          narrow: {
            areas: '"c1 c2" "c3 c3" "c3 c3" "c4 c4"',
            rowCount: 2
          }
        }
      });
    });

    it('should 200 and return visible categories for role', async () => {
      const response = await request
        .get(`${url}/template`)
        .set('Authorization', await loginManager(request));

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        tiles: [
          {
            id: 1,
            name: 'Energie',
            icon: '#F9C74F'
          },
          {
            id: 2,
            name: 'Economie',
            icon: '#43AA8B'
          },
          {
            id: 3,
            name: 'Milieu',
            icon: '#90BE6D'
          },
          {
            id: 4,
            name: 'Sociaal',
            icon: '#F94144'
          }
        ]
      });
    });

    it('should 200 and return role template after disabling customizability', async () => {
      const response = await request
        .get(`${url}/template`)
        .set('Authorization', await login(request, 'userWithNonCustomizableTemplate', 'f'));

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
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
            id: 3,
            icon: '#90BE6D',
            name: 'Milieu',
            csrs: [
              {
                id: 2,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
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
                id: 8,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
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
            ]
          },
          {
            id: 4,
            icon: '#F94144',
            name: 'Sociaal',
            csrs: []
          }
        ]
      });
    });

    it('should 200 and return visible categories after disabling customizability', async () => {
      const response = await request
        .get(`${url}/template`)
        .set('Authorization', await loginUserWithDisabledCustomizableAndNoRoleTemplate(request));
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        tiles: [
          {
            id: 1,
            name: 'Energie',
            icon: '#F9C74F'
          },
          {
            id: 2,
            name: 'Economie',
            icon: '#43AA8B'
          }
        ]
      });
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.get(`${url}/template`);
      expect(response.status).toBe(401);
    });
  });

  describe(`PUT ${url}/template`, () => {
    beforeAll(async () => {
      await supplyData(knex, {
        category: tables.category,
        sdg: tables.sdg,
        csr: tables.csr,
        threshold: tables.threshold,
        csrhistory: tables.csrhistory,
        datasource: tables.datasource,
        csr_behaviour: tables.csr_behaviour,
        csr_role: tables.csr_role,
        category_role: tables.category_role
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
        csr_role: tables.csr_role,
        category_role: tables.category_role
      });

      // TODO: Reset template.
    });

    const updatedTemplate = JSON.stringify(stakeholder_template);

    it('should 200 and update personalised template', async () => {
      const response = await request
        .put(`${url}/template`)
        .set('Authorization', await loginMvoCoordinator(request))
        .send({
          template: updatedTemplate
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
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
            id: 3,
            icon: '#90BE6D',
            name: 'Milieu',
            csrs: [
              {
                id: 2,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-06.jpg',
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
                id: 8,
                icon: '/content/images/SDG/SDG-icon-NL-RGB-13.jpg',
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
            ]
          },
          {
            id: 4,
            icon: '#F94144',
            name: 'Sociaal',
            csrs: []
          }
        ]
      });
    });

    each(['', ' ', 'abc', 1, true]).it(
      'should 400 for invalid updated personalised template',
      async (invalidTemplate) => {
        const response = await request
          .put(`${url}/template`)
          .set('Authorization', await loginMvoCoordinator(request))
          .send({
            template: invalidTemplate
          });
        expect(response.status).toBe(400);
      }
    );

    it('should 401 for request without authentication', async () => {
      const response = await request.put(`${url}/template`).send({
        template: updatedTemplate
      });
      expect(response.status).toBe(401);
    });

    it('should 404 for user with role that cannot personalize template', async () => {
      const response = await request
        .put(`${url}/template`)
        .set('Authorization', await loginStakeholder(request))
        .send({
          template: updatedTemplate
        });

      expect(response.status).toBe(403);
    });
  });

  describe(`DELETE ${url}/template`, () => {
    it('should 204 and delete personalised template', async () => {
      const response = await request
        .delete(`${url}/template`)
        .set('Authorization', await loginManager(request));

      expect(response.status).toBe(204);
    });

    it('should 403 for user with role that cannot personalize template', async () => {
      const response = await request
        .delete(`${url}/template`)
        .set('Authorization', await loginStakeholder(request));

      expect(response.status).toBe(403);
    });

    it('should 401 for request without authentication', async () => {
      const response = await request.delete(`${url}/template`);
      expect(response.status).toBe(401);
    });
  });
});
