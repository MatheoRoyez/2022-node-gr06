const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// Logger for errors.
const errorLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('sdg-repository');
  }
  this.logger.debug(message, meta);
};
// Selected columns for query `findByCategoryId`.
const categorySelect = [
  'sdgId AS id',
  'description',
  'icon',
  'name',
  'number',
  'parentId',
  'color'
];

// Formatter function for query `findByCategoryId`.
const formatByCategory = (sdgs) => {
  const parents = new Map();

  sdgs.forEach((sdg) => {
    if (!sdg.parentId) {
      parents.set(sdg.id, [sdg]);
    } else {
      const children = parents.get(sdg.parentId);
      children.push(sdg);
      parents.set(sdg.parentId, children);
    }
  });

  return [...parents].reduce((data, sdg) => {
    sdg = sdg[1];

    // Remove unnecessary properties.
    sdg.forEach((s, index) => {
      delete s.parentId;
      if (index > 0) {
        delete s.name;
        delete s.icon;
        delete s.color;
      }
    });

    // Formatting.
    const container = { ...sdg.shift(), children: sdg };
    data.push(container);
    return data;
  }, []);
};

// Fetch all SDGs linked to category with given `id`.
const findByCategoryId = async (id) => {
  try {
    const sdgs = await getKnex()(tables.sdg)
      .select(...categorySelect)
      .where('categoryId', id)
      .orderBy(['parentId', { column: 'number' }]);

    return formatByCategory(sdgs);
  } catch (error) {
    errorLog('Error in findByCategoryId', { error });
    throw error;
  }
};

module.exports = {
  findByCategoryId
};
