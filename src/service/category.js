const categoryRepository = require('../repository/category');
const { getChildLogger } = require('../core/logging');

const debugLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('category-service');
  }
  this.logger.debug(message, meta);
};

/**
 * Get all categories. Categorie must be visible to role of user.
 */
const getAll = async (roles) => {
  debugLog('Fetching all categories');
  const data = await categoryRepository.findAll(roles);
  return { data, count: data.length };
};

/**
 * Get all CSR goals linked to category with given `id`. CSR goal must be visible to role of user.
 *
 * @param {Object} ctx - Context.
 * @param {Number} id- Id of the category.
 */
const getCsrGoalsById = async (id, role) => {
  debugLog(`Fetching all CSR goals linked to category with given ${id}`);
  const data = await categoryRepository.findCsrGoalsById(id, role);

  return { data, count: data.length };
};

module.exports = {
  getAll,
  getCsrGoalsById
};
