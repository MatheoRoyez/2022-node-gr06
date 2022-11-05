const Router = require('@koa/router');

const csrService = require('../service/csr');
const { requireAuthentication } = require('../core/auth');

const { idValidation } = require('./_validationSchemes');
const { validate } = require('./_validation.js');

/**
 * Get CSR goal by given `id`.
 *
 * @param {Object} ctx - Context.
 * @param {Number} ctx.params.id - Id of CSR goal.
 */
const getById = async (ctx) => {
  ctx.body = await csrService.getById(ctx.params.id);
  ctx.status = ctx.body.id ? 200 : 204;
};
getById.validationScheme = idValidation;

module.exports = (app) => {
  const router = new Router({
    prefix: '/csrs'
  });

  // Routes with authentication/autorisation.
  router.get('/:id', requireAuthentication, validate(getById.validationScheme), getById);

  app.use(router.routes()).use(router.allowedMethods());
};
