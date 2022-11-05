const Router = require('@koa/router');

const categoryService = require('../service/category');
const { requireAuthentication } = require('../core/auth');

const { idValidation } = require('./_validationSchemes');
const { validate } = require('./_validation.js');

/**
 * Get all categories. Categorie must be visible to role of user.
 *
 * @param {Object} ctx - Context.
 */
const getAll = async (ctx) => {
  ctx.body = await categoryService.getAll(ctx.state.session.roles);
};

/**
 * Get all CSR goals linked to category with given `id`. CSR goal must be visible to role of user.
 *
 * @param {Object} ctx - Context.
 * @param {Number} ctx.params.id - Id of the category.
 */
const getCsrGoalsById = async (ctx) => {
  const result = await categoryService.getCsrGoalsById(ctx.params.id, ctx.state.session.roles);
  ctx.body = result;
  if (result.data.length === 0) {
    ctx.body = {};
    ctx.status = 404; // 404: Not found.
  }
};
getCsrGoalsById.validationScheme = idValidation;

module.exports = (app) => {
  const router = new Router({
    prefix: '/categories'
  });

  // Routes with authentication/autorisation.
  router.get('/', requireAuthentication, getAll);
  router.get(
    '/:id/csrs',
    requireAuthentication,
    validate(getCsrGoalsById.validationScheme),
    getCsrGoalsById
  );

  app.use(router.routes()).use(router.allowedMethods());
};
