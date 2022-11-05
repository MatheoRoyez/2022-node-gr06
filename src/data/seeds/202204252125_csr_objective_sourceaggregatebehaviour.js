const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csr_sourceBehaviour).insert([
      {
        CSR_Objective_csrComponentId: 1,
        datasources_sourceAggregateBehaviourId: 1,
        datasources_KEY: 1
      },
      {
        CSR_Objective_csrComponentId: 1,
        datasources_sourceAggregateBehaviourId: 3,
        datasources_KEY: 2
      },
      {
        CSR_Objective_csrComponentId: 1,
        datasources_sourceAggregateBehaviourId: 2,
        datasources_KEY: 3
      },
      {
        CSR_Objective_csrComponentId: 2,
        datasources_sourceAggregateBehaviourId: 5,
        datasources_KEY: 4
      },
      {
        CSR_Objective_csrComponentId: 2,
        datasources_sourceAggregateBehaviourId: 4,
        datasources_KEY: 5
      },
      {
        CSR_Objective_csrComponentId: 5,
        datasources_sourceAggregateBehaviourId: 8,
        datasources_KEY: 6
      },
      {
        CSR_Objective_csrComponentId: 5,
        datasources_sourceAggregateBehaviourId: 8,
        datasources_KEY: 7
      },
      {
        CSR_Objective_csrComponentId: 3,
        datasources_sourceAggregateBehaviourId: 6,
        datasources_KEY: 8
      },
      {
        CSR_Objective_csrComponentId: 4,
        datasources_sourceAggregateBehaviourId: 7,
        datasources_KEY: 8
      },
      {
        CSR_Objective_csrComponentId: 6,
        datasources_sourceAggregateBehaviourId: 8,
        datasources_KEY: 8
      },
      {
        CSR_Objective_csrComponentId: 7,
        datasources_sourceAggregateBehaviourId: 8,
        datasources_KEY: 8
      }
    ]);
  }
};
