const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

const userRepository = require('./user');

// Logger for errors.
const errorLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('role-repository');
  }
  this.logger.debug(message, meta);
};

// Formatter for function `findAll`.
const formatRole = ({ roleId, name, customizable }) => {
  const role = { id: roleId, name, customizable };
  //return Object.assign(role, template === null ? null : { ...role, template });
  return role;
};

// Fetch role by given `name`.
const findByName = async (name) => {
  try {
    const role = await getKnex()(tables.role).select().where('name', name).first();
    return role;
  } catch (error) {
    errorLog('Error in findAll', { error });
    throw error;
  }
};

// Fetch all roles.
const findAll = async () => {
  try {
    const roles = await getKnex()(tables.role).select('*');
    return roles.map(formatRole);
  } catch (error) {
    errorLog('Error in findAll', { error });
    throw error;
  }
};

// Fetch template of role with given `name`.
const findTemplateByName = async (name) => {
  try {
    const template = await getKnex()(tables.role)
      .select('template', 'customizable')
      .where('name', name)
      .first();

    return {
      template: template.template ? await userRepository.parseTemplate(template.template) : null,
      customizable: template.customizable
    };
  } catch (error) {
    errorLog('Error in findTemplateByName', { error });
    throw error;
  }
};
  
const parseTemplateResources = (cats, csrs) => {
  const data = {
    categories: cats,
    csrs: csrs
  };
  return data;
};

const formatCsr = (csr) => {
  return {
    cat_id: csr.categoryId,
    id: csr.csrComponentId,
    icon: csr.icon,
    name: csr.name,
    unit: csr.unit,
    sdgNumber: csr.number,
    value: csr.value,
    threshold: {
      id: csr.thresholdId,
      behaviour: csr.behaviour,
      value: csr.thresholdValue
    }
  };
};
const findTemplateResourcesByName = async (name) => {
  try {
    // Find the current role of the user
    const role = await findByName(name);

    // All the categories of the role
    const categories = await getKnex()(tables.category_role)
      .select('categoryId', 'name', 'icon')
      .join(tables.category, 'category_role.Category_categoryId', 'category.categoryId')
      .where('category_role.roles_roleId', role.roleId);

    // All csrs with extra id of the category
    const csrs = await getKnex()(tables.csr)
      .select(
        'category.categoryId',
        'csrComponent.csrComponentId',
        'csrComponent.icon',
        'csrComponent.name',
        'csrComponent.unit',
        'sdg.number',
        'csrhistory.value',
        'threshold.thresholdId',
        'threshold.value as thresholdValue',
        'threshold.behaviour'
      )
      .join(
        tables.csr_role,
        'csrcomponent_role.CSR_Component_csrComponentId',
        'csrComponent.csrComponentId'
      )
      .join(tables.sdg, 'sdg.sdgId', 'csrComponent.sdgId')
      .join(tables.category, 'sdg.categoryId', 'category.categoryId')
      .join(tables.csrhistory, 'csrComponent.csrComponentId', 'csrhistory.csrId')
      .join(tables.threshold, 'csrComponent.thresholdId', 'threshold.thresholdId')
      .where('csrComponent_role.roles_roleId', role.roleId)
      .where(
        'csrhistory.date',
        getKnex().raw(
          '(SELECT MAX(`date`) FROM csrhistory WHERE csrId = csrComponent.csrComponentId)'
        )
      ).orderBy('csrComponent.csrComponentId');
    const data_csrs = csrs.map(formatCsr);

    const data = parseTemplateResources(categories, data_csrs);
    return data;
  } catch (error) {
    errorLog('Error in findTemplateResourcesByName', { error });
    throw error;
  }
};
// Update template of role with given `name`.
const updateTemplateByName = async (name, template) => {
  try {
    await getKnex()(tables.role)
      .update({
        template
      })
      .where('name', name);

    return await findTemplateByName(name);
  } catch (error) {
    errorLog('Error in updateTemplateByName', { error });
    throw error;
  }
};

// Delete template of role with given `name`.
const deleteTemplateByName = async (name) => {
  try {
    await updateTemplateByName(name, null);
  } catch (error) {
    errorLog('Error in deleteTemplateByName', { error });
    throw error;
  }
};

const updateCustomizable = async (name, customizable) => {
  try {
    return await getKnex()(tables.role)
      .update({
        customizable
      })
      .where('name', name);
  } catch (error) {
    errorLog('Error in updateCustomizable', { error });
    throw error;
  }
};

const isCustomizable = async (name) => {
  try {
    const role = await getKnex()(tables.role).select().where('name', name).first();
    return role.customizable;
  } catch (error) {
    errorLog('Error in isCustomizable', { error });
    throw error;
  }
};

module.exports = {
  findByName,
  findAll,
  findTemplateByName,
  findTemplateResourcesByName,
  updateTemplateByName,
  deleteTemplateByName,
  updateCustomizable,
  isCustomizable
};
