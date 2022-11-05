const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// Logger for errors.
const errorLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('category-repository');
  }
  this.logger.debug(message, meta);
};

// Formatter function for query `findCsrGoalsById`.
const formatCsrGoals = ({
  id,
  icon,
  name,
  unit,
  sdgNumber,
  value,
  thresholdId,
  behaviour,
  thresholdValue
}) => {
  return {
    id,
    icon,
    name,
    unit,
    sdgNumber,
    value,
    threshold: {
      id: thresholdId,
      behaviour,
      value: thresholdValue
    }
  };
};

// Selected columns for query `findAll`.
const categorySelect = ['c.categoryId as id', 'c.icon', 'c.name'];

// Selected columns for query `findCsrGoalsById`.
const csrSelect = [
  'csr.csrComponentId as id',
  'csr.icon',
  'csr.name',
  'csr.unit',
  'sdg.number as sdgNumber',
  'h.value',
  't.thresholdId',
  't.behaviour',
  't.value as thresholdValue'
];

// Join statements for query `findCsrGoalsById`.
const joinSdg = [`${tables.sdg} as sdg`, 'sdg.categoryId', '=', 'c.categoryId'];
const joinCsrGoals = [`${tables.csr} as csr`, 'csr.sdgId', '=', 'sdg.sdgId'];
const joinCsrHistory = [`${tables.csrhistory} as h`, 'csr.csrComponentId', '=', 'h.csrId'];
const joinThreshold = [`${tables.threshold} as t`, 'csr.thresholdId', '=', 't.thresholdId'];
const joinCsrRole = [
  `${tables.csr_role} as csrRole`,
  'CSR_Component_csrComponentId',
  '=',
  'csrComponentId'
];
const joinRole = [`${tables.role} `, 'roleId', '=', 'roles_roleId'];

const findAll = async (roles) => {
  try {
    const categories = getKnex()(`${tables.category} as c`)
      .select(...categorySelect)
      .join(`${tables.category_role} as cr`, 'c.categoryId', 'cr.Category_categoryId')
      .join(`${tables.role} as r`, 'cr.roles_roleId', 'r.roleId')
      .where('r.name', roles);

    return categories;
  } catch (error) {
    errorLog('Error in findAll', {
      error
    });
    throw error;
  }
};

const findCategoryForRole = async (roleId) => {
  try {
    return await getKnex()(tables.category_role)
      .select('categoryId', 'name', 'icon')
      .where('roles_roleId', roleId)
      .join(tables.category, 'Category_categoryId', '=', 'categoryId');
  } catch (error) {
    errorLog('Error in findCategoryForRole', {
      error
    });
    throw error;
  }
};

const findCsrGoalsById = async (id, role) => {
  try {
    const csrs = await getKnex()(`${tables.category} as c`)
      .select(...csrSelect)
      .join(...joinSdg)
      .join(...joinCsrGoals)
      .join(...joinCsrHistory)
      .join(...joinThreshold)
      .join(...joinCsrRole)
      .join(...joinRole)
      .where('c.categoryId', id)
      .where(
        'h.date',
        getKnex().raw('(SELECT MAX(`date`) FROM csrhistory WHERE csrId = csr.csrComponentId)')
      )
      .where('role.name', role);

    return csrs.map(formatCsrGoals);
  } catch (error) {
    errorLog('Error in findCsrGoalsById', {
      error
    });
    throw error;
  }
};

module.exports = {
  findAll,
  findCsrGoalsById,
  findCategoryForRole
};
