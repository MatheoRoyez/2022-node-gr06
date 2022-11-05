const { data, dataToDelete } = require('./testData');

const supplyData = async (
  knex,
  {
    role,
    category,
    category_role,
    sdg,
    threshold,
    csr_behaviour,
    csr,
    csrhistory,
    csr_role,
    datasource,
    datasource_behaviour,
    csr_sourceBehaviour
  }
) => {
  role && (await knex(role).insert(data.roles));
  category && (await knex(category).insert(data.categories));
  category_role && (await knex(category_role).insert(data.category_role));
  sdg && (await knex(sdg).insert(data.sdgs));
  threshold && (await knex(threshold).insert(data.threshold));
  csr_behaviour && (await knex(csr_behaviour).insert(data.csrBehaviours));
  csr && (await knex(csr).insert(data.csrComposites));
  csr && (await knex(csr).insert(data.csrObjectives));
  csrhistory && (await knex(csrhistory).insert(data.csrhistory));
  csr_role && (await knex(csr_role).insert(data.csrRoles));
  datasource && (await knex(datasource).insert(data.datasources));
  datasource_behaviour && (await knex(datasource_behaviour).insert(data.sourceAggregateBehaviour));
  csr_sourceBehaviour && (await knex(csr_sourceBehaviour).insert(data.csrSourceBehaviour));
};

const deleteData = async (
  knex,
  {
    role,
    category,
    category_role,
    sdg,
    threshold,
    csr_behaviour,
    csr,
    csrhistory,
    csr_role,
    datasource,
    datasource_behaviour,
    csr_sourceBehaviour
  }
) => {
  csr_sourceBehaviour &&
    (await knex(csr_sourceBehaviour).whereIn('datasources_KEY', dataToDelete.datasources).delete());
  datasource_behaviour &&
    (await knex(datasource_behaviour)
      .whereIn('sourceAggregateBehaviourId', dataToDelete.sourceAggregateBehaviour)
      .delete());
  datasource && (await knex(datasource).whereIn('datasourceId', dataToDelete.datasources).delete());
  csr_role && (await knex(csr_role).whereIn('roles_roleId', dataToDelete.roles).delete());

  csrhistory && (await knex(csrhistory).whereIn('csrHistoryId', dataToDelete.csrhistory).delete());
  csr && (await knex(csr).whereIn('csrComponentId', dataToDelete.csrObjectives).delete());
  csr && (await knex(csr).whereIn('csrComponentId', dataToDelete.csrComposites).delete());

  csr_behaviour &&
    (await knex(csr_behaviour)
      .whereIn('csrAggregateBehaviourId', dataToDelete.csrBehaviour)
      .delete());

  threshold && (await knex(threshold).whereIn('thresholdId', dataToDelete.threshold).delete());
  sdg && (await knex(sdg).whereIn('sdgId', dataToDelete.subSdg).delete());
  sdg && (await knex(sdg).whereIn('sdgId', dataToDelete.parentSdg).delete());
  category_role &&
    (await knex(category_role).whereIn('Category_categoryId', dataToDelete.category_role).delete());
  role && (await knex(role).whereIn('roleId', dataToDelete.roles).delete());
  category && (await knex(category).whereIn('categoryId', dataToDelete.categories).delete());
};

// Create invalid bodies for testing Joi validation.
const createInvalidBodies = (correctValues, incorrectValues) => {
  const invalidBodies = [{}];

  for (const [key, value] of Object.entries(incorrectValues)) {
    let body = {};
    value.forEach((incorrectValue) => {
      body = { ...correctValues };
      body[key] = incorrectValue;
      invalidBodies.push(body);
      invalidBodies.push(Object.assign({}, { [key]: body[key] })); // Leaves only one wrong parameter in object.
    });
  }
  return invalidBodies;
};

module.exports = { supplyData, deleteData, createInvalidBodies };
