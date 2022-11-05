const Router = require('@koa/router');

const roleService = require('../service/role');
const { requireAuthentication, requireMvoCoordinator } = require('../core/auth');

const { validate } = require('./_validation');
const {
  stringValidation,
  templateBodyValidation,
  customizableBodyValidation
} = require('./_validationSchemes');

/**
 * Get all roles.
 *
 * @param {Object} ctx - Context.
 */
const getAll = async (ctx) => {
  ctx.body = await roleService.getAll();
};

/**
 * Get template of role with given `name`.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.params.name - Name of role.
 */
const getTemplateByName = async (ctx) => {
  const data = await roleService.getTemplateByName(ctx.params.name);
  ctx.body = data;

  if (!data.template) {
    ctx.body = {};
    ctx.status = 204;
  }
};
getTemplateByName.validationScheme = stringValidation('name');

/**
 * Get template resources of role with given `name`.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.params.name - Name of role.
 */
const getTemplateResourcesByName = async (ctx) => {
  const data = await roleService.getTemplateResourcesByName(ctx.params.name);
  ctx.body = data;
};
getTemplateResourcesByName.validationScheme = stringValidation('name');

/**
 * Update template of role with given `name`.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.params.name - Name of role.
 * @param {String} ctx.request.body.template - Updated template (Stringified JSON).
 */
const updateTemplateByName = async (ctx) => {
  ctx.body = await roleService.updateTemplateByName(ctx.params.name, ctx.request.body.template);
};
updateTemplateByName.validationScheme = {
  ...stringValidation('name'),
  ...templateBodyValidation
};

/**
 * Delete template of role with given `name`.
 *
 * @param {Object} ctx - Context.
 * @param {String} ctx.params.name - Name of role.
 */
const deleteTemplateByName = async (ctx) => {
  await roleService.deleteTemplateByName(ctx.params.name);
  ctx.status = 204;
};
deleteTemplateByName.validationScheme = stringValidation('name');

const updateCustomizable = async (ctx) => {
  ctx.body = await roleService.updateCustomizable(ctx.params.name, ctx.request.body.customizable);
};
updateCustomizable.validationScheme = customizableBodyValidation;

module.exports = (app) => {
  const router = new Router({
    prefix: '/roles'
  });

  // Routes with authentication/autorisation.
  router.get('/', requireAuthentication, getAll);
  router.get(
    '/:name/template',
    requireAuthentication,
    requireMvoCoordinator,
    validate(getTemplateByName.validationScheme),
    getTemplateByName
  );
  router.get(
    '/:name/template/resources',
    validate(getTemplateResourcesByName.validationScheme),
    requireAuthentication,
    getTemplateResourcesByName
  );
  router.put(
    '/:name/template',
    requireAuthentication,
    requireMvoCoordinator,
    validate(updateTemplateByName.validationScheme),
    updateTemplateByName
  );
  router.delete(
    '/:name/template',
    requireAuthentication,
    requireMvoCoordinator,
    validate(deleteTemplateByName.validationScheme),
    deleteTemplateByName
  );

  router.put(
    '/:name/template/customizable',
    requireAuthentication,
    requireMvoCoordinator,
    validate(updateCustomizable.validationScheme),
    updateCustomizable
  );

  app.use(router.routes()).use(router.allowedMethods());
};
