const csrRepository = require('../repository/csr');
const datasourceRepository = require('../repository/datasource');
const { getChildLogger } = require('../core/logging');

const debugLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('csr-service');
  }
  this.logger.debug(message, meta);
};

/**
 * Get CSR goal by given `id`.
 *
 * @param {Number} id - Id of CSR goal.
 */
const getById = async (id) => {
  debugLog(`Fetching CSR with id ${id}`);
  const csr = await csrRepository.findFirst(`csr1.csrComponentId = ${id}`);

  if (!csr) {
    return {};
  }

  csr.history = await csrRepository.findHistory(csr.id);

  if (csr.type === 'CSR_Objective') {
    csr.datasources = await datasourceRepository.findByCsrId(csr.id);
  } else {
    csr.csrs = await csrRepository.findSubobjectivesById(csr.id);
  }

  return csr;
};

module.exports = {
  getById
};
