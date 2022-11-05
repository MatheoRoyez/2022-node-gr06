const { tables, getKnex } = require('../data');
const { getChildLogger } = require('../core/logging');

const categoryRepository = require('./category');

// Logging for errors.
const errorLog = (msg, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('user-repository');
  }
  this.logger.error(msg, meta);
};

// Select columns for `findByUsername`.
const selectUser = [
  'u.userId as id',
  'u.username',
  'u.passwordHash',
  'u.salt',
  'role.name as role',
  'u.template',
  'role.customizable'
];

// Select columns for `findTemplate`.
const selectTemplates = [
  'u.template as userTemplate',
  'r.template as roleTemplate',
  'r.customizable',
  'ROLE_roleId as roleId'
];

// Formatter for function `findByUsername`.
const formatUser = ({
  id,
  username,
  passwordHash,
  salt,
  role,
  template,
  consecutive_failed_tries,
  status,
  customizable
}) => {
  const user = {
    id,
    username,
    passwordHash,
    salt,
    role,
    status,
    consecutive_failed_tries,
    customizable
  };
  return Object.assign(
    user,
    template === null
      ? null
      : {
        ...user,
        template
      }
  );
};

// Fetch user with given `username`.
const findByUsername = async (username) => {
  try {
    const user = await getKnex()(`${tables.user} as u`)
      .select(...selectUser, 'consecutive_failed_tries', 'status')
      .join(tables.role, 'role.roleId', 'ROLE_roleId')
      .join(tables.loginlog, 'u.userId', '=', 'loginlog.user_id')
      .where('u.username', username)
      .orderBy('datetime', 'DESC')
      .first();

    if (user) {
      user.template = await findTemplate(user.id);
    }

    return user ? formatUser(user) : '';
  } catch (error) {
    errorLog('Error in findByUsername', {
      error
    });
    throw error;
  }
};

// Fetch user with given `id`.
const findById = async (id) => {
  try {
    const user = await getKnex()(`${tables.user} as u`)
      .select(...selectUser)
      .join(tables.role, 'role.roleId', 'ROLE_roleId')
      .where('u.userId', id)
      .first();

    if (user) {
      user.template = await findTemplate(user.id);
    }

    return user ? formatUser(user) : '';
  } catch (error) {
    errorLog('Error in findById', {
      error
    });
    throw error;
  }
};

//insert loginLog when user tires to log in
const insertLoginLog = async (user, isFailed) => {
  try {
    let userStatus = user.status;
    if (user.consecutive_failed_tries === 2 && isFailed) {
      userStatus = 'BLOCKED';
    }

    const loginLog = await getKnex()(`${tables.loginlog}`).insert({
      user_id: user.id,
      datetime: new Date(),
      consecutive_failed_tries: isFailed ? user.consecutive_failed_tries + 1 : 0,
      status: userStatus
    });

    return loginLog;
  } catch (error) {
    errorLog('Error in insertLoginLog', {
      error
    });
    throw error;
  }
};

// Formatter function for query `findAll`.
const formatCategory = (cat) => {
  const category = {
    id: cat.categoryId,
    name: cat.name,
    icon: cat.icon
  };
  if (cat.csrs) {
    category.csrs = [];
    cat.csrs.forEach((csr) => {
      category.csrs.push({
        id: csr.csrComponentId,
        icon: csr.icon,
        name: csr.name,
        unit: csr.unit,
        sdgNumber: csr.number,
        value: csr.value,
        threshold: {
          id: csr.thresholdId,
          behaviour: csr.thresholdType,
          value: csr.thresholdValue
        }
      });
    });
  }

  return category;
};

// Helper function: Fetch all information in `template` necessary for displaying it in the frontend.
const parseTemplate = async (template) => {
  const templateObj = JSON.parse(template); // Template stored as String in database.
  const categories = [];
  const csrs = new Map();

  templateObj.tiles.forEach((obj) => {
    categories.push(obj.id);
    csrs.set(obj.id, obj.csr_ids);
  });

  const data_categorie = await getKnex()(tables.category)
    .select()
    .whereIn('categoryId', categories);

  const data_csrs = new Map();

  const joinSDG = [`${tables.sdg} as s1`, 'csr1.sdgId', '=', 's1.sdgId'];
  const joinThreshold = [`${tables.threshold} as th`, 'th.thresholdId', '=', 'csr1.thresholdId'];
  const joinCSR_History = [
    `${tables.csrhistory} as history`,
    'csr1.csrComponentId',
    '=',
    'history.csrId'
  ];

  for (const [k, v] of csrs.entries()) {
    data_csrs.set(
      k,
      await getKnex()(`${tables.csr} as csr1`)
        .select()
        .join(...joinThreshold)
        .join(...joinSDG)
        .leftJoin(...joinCSR_History)
        .where(
          'history.date',
          getKnex().raw('(SELECT MAX(date) FROM csrhistory WHERE csrId = csr1.csrComponentId)')
        )
        .whereIn('csrComponentId', v)
    );
  }

  data_categorie.forEach((e) => {
    e.csrs = data_csrs.get(e.categoryId);
  });

  const data = data_categorie.map(formatCategory);
  return {
    tiles: data,
    layout: templateObj.layout
  };
};

// Fetch template of user with given `id`.
const findTemplate = async (id) => {
  try {
    const { userTemplate, roleTemplate, customizable, roleId } = await getKnex()(
      `${tables.user} as u`
    )
      .select(...selectTemplates)
      .join(`${tables.role} as r`, 'u.ROLE_roleId', 'r.roleId')
      .where('userId', id)
      .first();

    // Check if user has personalisered template and has access to it.
    if (userTemplate && customizable === 1) {
      return parseTemplate(userTemplate);
    }

    // User does not have personalisered template or cannot access it.
    // Check for role template.
    if (roleTemplate) {
      return parseTemplate(roleTemplate);
    }

    // Role template does not exist. Return all categories visible for role.
    const categories = await categoryRepository.findCategoryForRole(roleId);
    const data = categories.map(formatCategory);

    return { tiles: data };
  } catch (error) {
    errorLog('Error in findTemplate', {
      error
    });
    throw error;
  }
};

// Update template of user with given `id`.
const updateTemplate = async (id, template) => {
  try {
    const { customizable } = await getKnex()(`${tables.user} as u`)
      .select(...selectTemplates)
      .join(`${tables.role} as r`, 'u.ROLE_roleId', 'r.roleId')
      .where('userId', id)
      .first();
    if (customizable === 1) {
      await getKnex()(tables.user).update({ template }).where('userId', id);
      return await findTemplate(id);
    }
    return null;
  } catch (error) {
    errorLog('Error in updateTemplate', { error });
  }
};

// Delete template of user with given `id`.
const deleteTemplate = async (id) => {
  try {
    await updateTemplate(id, null);
  } catch (error) {
    errorLog('Error in deleteTemplate', { error });
  }
};

module.exports = {
  findByUsername,
  findById,
  insertLoginLog,
  findTemplate,
  updateTemplate,
  deleteTemplate,
  parseTemplate
};
