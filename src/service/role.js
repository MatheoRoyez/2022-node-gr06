const roleRepository = require('../repository/role');
const { getChildLogger } = require('../core/logging');
const ServiceError = require('../core/serviceError');

const debugLog = (message, meta = {}) => {
  if (!this.logger) {
    this.logger = getChildLogger('role-service');
  }
  this.logger.debug(message, meta);
};

/**
 * Get all roles.
 */
const getAll = async () => {
  debugLog('Fetching all roles');
  const data = await roleRepository.findAll();

  return { data, count: data.length };
};

/**
 * Get template of role with given `name`.
 *
 * @param {String} name - Name of role.
 */
const getTemplateByName = async (name) => {
  debugLog(`Fetching template for role with ${name}`);
  await roleExists(name);
  return await roleRepository.findTemplateByName(name);
};

/**
 * Get template resouces of role with given `name`.
 *
 * @param {String} name - Name of role.
 */
const getTemplateResourcesByName = async (name) => {
  debugLog(`Fetching template resources for role with ${name}`);
  await roleExists(name);
  return await roleRepository.findTemplateResourcesByName(name);
};

/**
 * Update template of role with given `name`.
 *
 * @param {String} name - Name of role.
 * @param {String} template - Updated template (Stringified JSON).
 */
const updateTemplateByName = async (name, template) => {
  debugLog(`Updating template for role with ${name}`, { template });
  await roleExists(name);
  return await roleRepository.updateTemplateByName(name, template);
};

/**
 * Delete template of role with given `name`.
 *
 * @param {String} name - Name of role.
 */
const deleteTemplateByName = async (name) => {
  debugLog(`Deleting template for role with ${name}`);
  await roleExists(name);
  await roleRepository.deleteTemplateByName(name);
};

const updateCustomizable = async (name, customizable) => {
  debugLog(`Updating customizable for role with ${name}`, { customizable });
  await roleExists(name);
  return await roleRepository.updateCustomizable(name, customizable);
};

/**
 * Checks if role with given `name` exists.
 *
 * @param {String} name - Name of role.
 * @throws {ServiceError} if role with given `name` does not exist.
 */
const roleExists = async (name) => {
  const role = await roleRepository.findByName(name);
  if (!role) {
    throw ServiceError.validationFailed(`Role with name ${name} does not exist`);
  }
};

module.exports = {
  getAll,
  getTemplateByName,
  getTemplateResourcesByName,
  updateTemplateByName,
  deleteTemplateByName,
  updateCustomizable
};
