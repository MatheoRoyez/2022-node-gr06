const Router = require('@koa/router');

const userService = require('../service/user');
const { requireAuthentication } = require('../core/auth');

const { validate } = require('./_validation.js');
const { loginValidation, idValidation, templateBodyValidation } = require('./_validationSchemes');

/**
 * Login user with given `username` and `password`.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.request.body.username - Username of the user
 * @param {String} ctx.request.body.password - Password of the user
 */
const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  const response = await userService.login(username, password);
  ctx.body = response;
};
login.validationScheme = loginValidation;

/**
 * Get user by given `id`.
 *
 * @param {Object} ctx - Context.
 * @param {Object} ctx.params.id - Id of user.
 */
const getUserById = async (ctx) => {
  ctx.body = await userService.getById(ctx.params.id);

  if (!ctx.body.username) {
    ctx.status = 404; // Not found.
  }
};
getUserById.validationScheme = idValidation;

/**
 * Get template of logged-in user. If no personalised template exists,
 * return template configured by CSR-coordinator. If this configured template does
 * not exist, return all categories visible for role of user.
 *
 * @param {Object} ctx  - Context.
 * @param {Number} ctx.state.session.id - Id of user.
 */
const getTemplate = async (ctx) => {
  ctx.body = await userService.getTemplate(ctx.state.session.id);
};

/**
 * Update personalised template of logged-in user.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.request.body.template - Updated template.
 */
const updateTemplate = async (ctx) => {
  const { template } = ctx.request.body;
  ctx.body = await userService.updateTemplate(ctx.state.session.id, template);
  if (!ctx.body){
    ctx.status = 403;
  }
};
updateTemplate.validationScheme = templateBodyValidation;

/**
 * Delete personalised template of logged-in user.
 *
 * @param {Object} ctx - Context.
 */
const deleteTemplate = async (ctx) => {
  await userService.deleteTemplate(ctx.state.session.id, ctx.state.session.roles);
  ctx.status = 204;
};

module.exports = (app) => {
  const router = new Router({
    prefix: '/users'
  });

  // Routes with authentication/autorisation.
  router.get('/template', requireAuthentication, getTemplate);
  router.put(
    '/template',
    requireAuthentication,
    validate(updateTemplate.validationScheme),
    updateTemplate
  );
  router.delete('/template', requireAuthentication, deleteTemplate);

  // Public routes.
  router.post('/login', validate(login.validationScheme), login);
  router.get('/:id', validate(getUserById.validationScheme), getUserById);

  app.use(router.routes()).use(router.allowedMethods());
};
