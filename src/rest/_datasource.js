const Router = require('@koa/router');

const datasourceService = require('../service/datasource');
const { requireManager, requireAuthentication } = require('../core/auth');

const { idValidation } = require('./_validationSchemes');
const { validate } = require('./_validation');


const getById = async (ctx) => {
  ctx.body = await datasourceService.getById(ctx.params.id);
  if (!ctx.body) {
    ctx.status = 404; // Not found.
  }
};
getById.validationScheme = idValidation;

module.exports = (app) => {
  const router = new Router({
    prefix: '/datasources'
  });


  router.get('/:id', requireAuthentication, requireManager, validate(getById.validationScheme), getById);

  app.use(router.routes()).use(router.allowedMethods());
};
