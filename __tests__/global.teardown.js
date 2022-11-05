const { shutdownData, getKnex, tables } = require('../src/data');

module.exports = async () => {
  await getKnex()(tables.csr_sourceBehaviour).delete();
  await getKnex()(tables.datasource).delete();
  await getKnex()(tables.csr_role).delete();
  await getKnex()(tables.csrhistory).delete();
  await getKnex()(tables.csr).delete();
  await getKnex()(tables.csr_behaviour).delete();
  await getKnex()(tables.threshold).delete();
  await getKnex()(tables.sdg).delete();
  await getKnex()(tables.loginlog).delete();
  await getKnex()(tables.user).delete();
  await getKnex()(tables.category).delete();
  await getKnex()(tables.role).delete();
  await shutdownData();
};
