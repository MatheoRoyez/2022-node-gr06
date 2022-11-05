const roles = require('../core/roles');
const userService = require('../service/user');

const requireAuthentication = async (ctx, next) => {
  const { authorization } = ctx.header;
  const { authToken, ...session } = await userService.checkAndParseSession(authorization);
  ctx.state.session = session;
  ctx.state.authToken = authToken;

  return next();
};

const makeRequireRole =
  (requiredRoles = []) =>
    async (ctx, next) => {
      const { roles } = ctx.state.session;
      userService.checkRole(roles, requiredRoles);
      return next();
    };

const requireMvoCoordinator = makeRequireRole([roles.MVO_COORDINATOR]);
const requireManager =  makeRequireRole([roles.MANAGER]);

module.exports = { requireAuthentication, makeRequireRole, requireMvoCoordinator, requireManager };
