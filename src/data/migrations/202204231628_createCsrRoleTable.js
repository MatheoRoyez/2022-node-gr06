const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.csr_role, (table) => {
      table.integer('CSR_Component_csrComponentId').unsigned();
      table.integer('roles_roleId').unsigned();

      table
        .foreign('CSR_Component_csrComponentId')
        .references(`${tables.csr}.csrComponentId`);
      //.onDelete('CASCADE');

      table
        .foreign('roles_roleId')
        .references(`${tables.role}.roleId`)
        .onDelete('CASCADE');
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.csr_role);
  }
};
