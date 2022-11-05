const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    await knex(tables.csr_role).delete();

    await knex(tables.csr_role).insert([
      { CSR_Component_csrComponentId: 1, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 2, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 3, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 4, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 5, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 6, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 7, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 8, roles_roleId: 1 },
      { CSR_Component_csrComponentId: 1, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 2, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 3, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 4, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 5, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 6, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 7, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 8, roles_roleId: 2 },
      { CSR_Component_csrComponentId: 1, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 2, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 3, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 4, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 7, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 8, roles_roleId: 3 },
      { CSR_Component_csrComponentId: 1, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 2, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 3, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 4, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 5, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 6, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 7, roles_roleId: 4 },
      { CSR_Component_csrComponentId: 8, roles_roleId: 4 }
    ]);
  }
};
