const Router = require('@koa/router');

const sdgService = require('../service/sdg');
const { requireAuthentication } = require('../core/auth');

const { idValidation } = require('./_validationSchemes');
const { validate } = require('./_validation');

/**
 * Get all SDGs linked to category with given `id`.
 *
 * @param {Object} ctx - Context.
 * @param {Number} ctx.params.id - Id of the category.
 */
const getByCategoryId = async (ctx) => {
  const result = await sdgService.getByCategoryId(ctx.params.id);
  ctx.body = result;

  if (result.data.length === 0) {
    ctx.body = {};
    ctx.status = 404; // 404: Not found.
  }
};
getByCategoryId.validationScheme = idValidation;

module.exports = (app) => {
  const router = new Router({
    prefix: '/sdgs'
  });

  // Routes with authentication/autorisation.
  router.get(
    '/category/:id',
    requireAuthentication,
    validate(getByCategoryId.validationScheme),
    getByCategoryId
  );

  app.use(router.routes()).use(router.allowedMethods());
};
