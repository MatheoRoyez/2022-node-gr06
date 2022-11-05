const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// Logger for errors.
const errorLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('datasource-repository');
  }
  this.logger.debug(message, meta);
};

// Fetch all datasources linked to CSR goal with given `id`.
const findByCsrId = async (csrId) => {
  try {
    const datasources = await getKnex()(tables.datasource)
      .select('datasourceId as id', 'name', 'source')
      .join(
        `${tables.csr_sourceBehaviour} as sb`,
        'sb.datasources_KEY',
        '=',
        'datasource.datasourceId'
      )
      .where('CSR_Objective_csrComponentId', csrId);
    return datasources;
  } catch (error) {
    errorLog('Error in findByCsrId', { error });
    throw error;
  }
};

// Fetch the datasource with given `id`.
const findById = async (id) => {
  try {
    const datasources = await getKnex()(tables.datasource)
      .select('datasourceId as id', 'name', 'source', 'content')
      .where('datasourceId', id)
      .first();
    return datasources;
  } catch (error) {
    errorLog('Error in findById', { error });
    throw error;
  }
};

module.exports = {
  findById,
  findByCsrId
};
