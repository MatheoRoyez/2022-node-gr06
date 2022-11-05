const Router = require('@koa/router');

const installSdgRouter = require('./_sdg');
const installCategoryRouter = require('./_category');
const installCsrRouter = require('./_csr');
const installDatasourceRouter = require('./_datasource');
const installRoleRouter = require('./_role');
const installUserRouter = require('./_user');

/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
  const router = new Router({
    prefix: '/api'
  });

  installSdgRouter(router);
  installCategoryRouter(router);
  installCsrRouter(router);
  installDatasourceRouter(router);
  installRoleRouter(router);
  installUserRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
