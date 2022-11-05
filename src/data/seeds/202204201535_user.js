const { tables } = require('..');
const { director_template, management_template } = require('../template_examples');

module.exports = {
  seed: async (knex) => {
    await knex(tables.user).delete();

    await knex(tables.user).insert([
      {
        passwordHash:
          '22de637cbb46d58e28a7fb8104757ccfae454d7f6693120b84397b6cf8f2d0a0a4d2b5d44c872b7c4ba4ee28cc22ed85fd770ead6749a227c0e31ccf848a9f37',
        salt: 'rAnd0m',
        username: 'mvo-coordinator', // password = mvo-coordinator
        ROLE_roleId: 4,
        template: null
      },
      {
        passwordHash:
          'bb421ccc6ce12579ebc05da26aab904467a1360375f6b386ee5c6f0b22031ebc46f654a326598e1256db6e99c6e7d4fe084de5b383f3aaf6fe7a3a1cb83c4441',
        salt: 'rAnd0m',
        username: 'directie', // password = directie
        ROLE_roleId: 1,
        template: JSON.stringify(director_template)
      },
      {
        passwordHash:
          '7de09c544aa8b5b4fff92b3d824c08fd6e25c1e6d35222c74f13dd913edcc60e46578a6a2c3276f2796c22451d52ed79afa22632af5aca6e1ef93f3fa10b3ce3',
        salt: 'rAnd0m',
        username: 'management', // password = management
        ROLE_roleId: 2,
        template: JSON.stringify(management_template)
      },
      {
        passwordHash:
          '53eb3c3a31f6fe0dcd85e706c7f6c8fac3a531c8c5347ec961bbf8d0f58c0a104a28b4bc8324deed3e6a1d346786b6dfee8005799fe91b9d1959eb188719ebcf',
        salt: 'rAnd0m',
        username: 'stakeholder', // password = stakeholder
        ROLE_roleId: 3,
        template: null
      },
      {
        passwordHash:
          '73f66aa72f141a6e8e7e31f3707a4fd54e7ebaeb50a248234f6ff6b0b51a0308facf6aaf6c8d147b12f77ceaea0e0eb0a41eec54fe461d2c5adc25209128acf3',
        salt: 'rAnd0m',
        username: 'f',
        ROLE_roleId: 4,
        template: null
      },
      {
        passwordHash:
          '1f4440e1f0742bdf3ee23698f03f2f8a42c445e3a69f6473d309c4ebf7e3cfe41b55d7ebb543b86397577c729e5134ea4f82d1e4a35ee85cb4d530f0490ce431',
        salt: 'rAnd0m',
        username: 'Bob',
        ROLE_roleId: 3,
        template: null
      },
      {
        passwordHash:
          '2a8aea12f72107e95e6d39d76d8960c4c13afb1e2222ae80be893241d2c584ffe418fe86f68936778f36c3a49c773d6cbbb48a060c7d485be11478fd99a25925',
        salt: 'rAnd0m',
        username: 'docent',
        ROLE_roleId: 4,
        template: null
      },
      {
        passwordHash:
          'a7f3cfff3627f91d99dab0c135992644a8a05b037e37e3a591ade4671b331ff0830302a0dc92fbb93b104ce6c6e37ef8abaf8d9773dd082c08ba58301f1d834d',
        salt: 'rAnd0m',
        username: 'Bart',
        ROLE_roleId: 2,
        template: null
      }
    ]);
  }
};
