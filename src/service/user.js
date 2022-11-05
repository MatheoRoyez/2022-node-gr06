const { getChildLogger } = require('../core/logging');
const { verifyPassword } = require('../core/password');
const { generateJWT, verifyJWT } = require('../core/jwt');
const ServiceError = require('../core/serviceError');
const userRepository = require('../repository/user');
const roleRepository = require('../repository/role');

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getChildLogger('user-service');
  this.logger.debug(message, meta);
};

/**
 * Login user with given `username` and `password`.
 *
 * @param {String} username - Username of the user
 * @param {String} password - Password of the user
 * @throws {ServiceError} if login information is incorrect or user does not exist.
 */
const login = async (username, password) => {
  debugLog(`Fetching user with username ${username}`);
  const user = await userRepository.findByUsername(username);

  // No user exists in database.
  if (!user) {
    throw ServiceError.validationFailed('The given username and password do not match.');
  }

  if (user.status !== 'ACTIVE') {
    throw ServiceError.blocked('This user is blocked. Please contact the admin.');
  }

  // User is not blocked.
  const isPasswordValid = await verifyPassword(password, user.passwordHash, user.salt);

  if (!isPasswordValid) {
    userRepository.insertLoginLog(user, true);

    if (user.consecutive_failed_tries === 2) {
      throw ServiceError.blocked('This user is blocked. Please contact the admin.');
    }
    throw ServiceError.validationFailed('The given username and password do not match.');
  }

  // User correctly logged in.
  userRepository.insertLoginLog(user, false);
  return await makeLoginData(user);
};

/**
 * Get user by given `id`.
 *
 * @param {Number} id - Id of user.
 */
const getById = async (id) => {
  debugLog(`Fetching user with id ${id}`);
  const user = await userRepository.findById(id);
  return makeExposedUser(user);
};

/**
 * Get template of user with given `id`.
 *
 * @param {Number} id - Id of user.
 */
const getTemplate = async (id) => {
  debugLog(`Fetching template for user with ${id}`);
  const data = await userRepository.findTemplate(id);
  return { tiles: data.tiles, layout: data.layout };
};

/**
 * Update personalised `template` of user with given `id`.
 *
 * @param {Number} id - Id of user.
 * @param {String} template - Updated template.
 */
const updateTemplate = async (id, template) => {
  debugLog(`Updating template for user with ${id}`);
  return await userRepository.updateTemplate(id, template);
};

/**
 * Delete personalised template of user with given `id`.
 *
 * @param {Number} id - Id of user.
 * @param {String} roles - Name of the role of user.
 */
const deleteTemplate = async (id, roles) => {
  debugLog(`Deleting template for user with ${id}`);

  const customizable = await roleRepository.isCustomizable(roles);

  if (customizable === 0) {
    throw ServiceError.forbidden('User does not have the privileges to delete template');
  }
  await userRepository.deleteTemplate(id);
};

/**
 * Helper: Generates JWT token for `user` and packages it together with exposed user information.
 *
 * @param {Object} user - User who wants to log in.
 * @returns JWT token and exposed user.
 */
const makeLoginData = async (user) => {
  const token = await generateJWT(user);
  return { token, user: makeExposedUser(user) };
};

/**
 * Helper: Remove sensitive information from user.
 *
 * @param {Object} user - User who wants to log in.
 * @returns Exposed user.
 */
// eslint-disable-next-line no-unused-vars
const makeExposedUser = ({ passwordHash, salt, consecutive_failed_tries, ...user }) => user;

/**
 * Helper: Parses and validates session for authentication header.
 *
 * @param {String} authHeader - Authentication header in request.
 * @returns Object containing exposed user information and authentication token.
 */
const checkAndParseSession = async (authHeader) => {
  if (!authHeader) {
    throw ServiceError.unauthorized('You need to be signed in!');
  }

  if (!authHeader.startsWith('Bearer')) {
    throw new ServiceError.validationFailed('Authentication header is invalid!');
  }
  const authToken = authHeader.substr(7);

  try {
    const { roles, id } = await verifyJWT(authToken);
    return {
      id,
      roles,
      authToken
    };
  } catch (error) {
    const logger = getChildLogger('user-service');
    logger.error(error.message, {
      error
    });
    throw new Error(error.message);
  }
};

/**
 * Helper: Checks if user possess the correct role to access chosen endpoint.
 *
 * @param {String} userRole - Role of user.
 * @param {Array} roles - Required roles.
 */
const checkRole = (userRole, roles) => {
  const hasPermission = roles.includes(userRole);

  if (!hasPermission) {
    throw ServiceError.forbidden('You are not allowed to view this part of the application.');
  }
};

module.exports = {
  login,
  getById,
  getTemplate,
  updateTemplate,
  deleteTemplate,
  checkAndParseSession,
  checkRole
};
