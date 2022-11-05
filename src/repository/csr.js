const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// Logger for errors.
const errorLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('csr-repository');
  }
  this.logger.debug(message, meta);
};
// Selected columns for all queries.
const selectString = [
  'csr1.csrComponentId',
  'csr1.icon',
  'csr1.name',
  'csr1.thresholdId',
  'csr1.unit',
  'th.behaviour as thresholdBehaviour',
  'th.value as thresholdValue',
  's1.number as sdgNumber',
  'history.date',
  'history.value'
];

const joinSDG = [`${tables.sdg} as s1`, 'csr1.sdgId', '=', 's1.sdgId'];
const joinThreshold = [`${tables.threshold} as th`, 'th.thresholdId', '=', 'csr1.thresholdId'];
const joinCSR = [`${tables.csr} as csr2`, 'csr2.csrComponentId', '=', 'csr1.parentId'];
const joinCSR_History = [
  `${tables.csrhistory} as history`,
  'csr1.csrComponentId',
  '=',
  'history.csrId'
];

// Formatter function for all queries.
const formatCSR = ({
  DTYPE,
  thresholdBehaviour,
  thresholdId,
  thresholdValue,
  csrComponentId,
  sdgNumber,
  date,
  value,
  ...rest
}) => {
  const main = {
    id: csrComponentId,
    type: DTYPE,
    sdgNumber,
    date,
    value,
    ...rest
  };

  const csr_threshold = {
    behaviour: thresholdBehaviour,
    value: thresholdValue
  };

  thresholdId && (main.threshold = csr_threshold);

  return main;
};

// Fetch multiple CSR goals that meet `where` clause requirements.
const find = async (where) => {
  try {
    const csrs = await getKnex()(`${tables.csr} as csr1`)
      .select(...selectString, 'csr1.DTYPE')
      .join(...joinThreshold)
      .join(...joinSDG)
      .leftJoin(...joinCSR)
      .leftJoin(...joinCSR_History)
      .whereRaw(where);

    return csrs.map(formatCSR);
  } catch (error) {
    errorLog('Error in find', { error });
    throw error;
  }
};

// Fetch first CSR goal that meets `where` clause requirements.
const findFirst = async (where) => {
  try {
    const csrs = await getKnex()(`${tables.csr} as csr1`)
      .select(...selectString, 'csr1.DTYPE')
      .join(...joinThreshold)
      .join(...joinSDG)
      .leftJoin(...joinCSR)
      .leftJoin(...joinCSR_History)
      .whereRaw(where)
      .orderBy('history.date', 'desc')
      .first();

    return csrs && formatCSR(csrs);
  } catch (error) {
    errorLog('Error in findFirst', { error });
    throw error;
  }
};

// Fetch history of CSR goal with given `id`.
const findHistory = async (id) => {
  try {
    return await getKnex()(tables.csrhistory)
      .select('csrHistoryId as id', 'date', 'thresholdValue', 'thresholdType', 'value')
      .where('csrId', id)
      .orderBy('date');
  } catch (error) {
    errorLog('Error in findHistory', { error });
    throw error;
  }
};

// Fetch subobjectives of CSR goal with given id `parentId`.
const findSubobjectivesById = async (parentId) => {
  try {
    const csrs = await getKnex()(`${tables.csr} as csr1`)
      .select(...selectString)
      .join(...joinSDG)
      .join(...joinThreshold)
      .join(...joinCSR_History)
      .orderBy('history.date', 'desc')
      .where('csr1.parentId', parentId)
      .where(
        'history.date',
        getKnex().raw('(SELECT MAX(`date`) FROM csrhistory WHERE csrId = csr1.csrComponentId)')
      );

    return csrs.map(formatCSR);
  } catch (error) {
    errorLog('Error in findSubobjectivesById', { error });
    throw error;
  }
};

module.exports = {
  find,
  findHistory,
  findSubobjectivesById,
  findFirst,
  formatCSR
};
