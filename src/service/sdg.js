const sdgRepository = require('../repository/sdg');
const { getChildLogger } = require('../core/logging');

const debugLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('sdg-service');
  }
  this.logger.debug(message, meta);
};

/**
 * Get all SDGs linked to category with given `id`.
 *
 * @param {Number} id - Id of the category.
 */
const getByCategoryId = async (id) => {
  debugLog(`Fetching all SDG belonging to category with ${id}`);
  const data = await sdgRepository.findByCategoryId(id);

  return { data, count: data.length };
};

module.exports = {
  getByCategoryId
};
