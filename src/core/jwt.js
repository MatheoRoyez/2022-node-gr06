const config = require('config');
const jwt = require('jsonwebtoken');

const ServiceError = require('./serviceError');

const JWT_SECRET = config.get('auth.jwt.secret');
const JWT_AUDIENCE = config.get('auth.jwt.audience');
const JWT_ISSUER = config.get('auth.jwt.issuer');
const JWT_EXPIRATION_INTERVAL = config.get('auth.jwt.expirationInterval');

module.exports.generateJWT = (user) => {
  const tokenData = {
    id: user.id,
    roles: user.role
  };

  const signOptions = {
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    subject: 'auth',
    expiresIn: Math.floor(JWT_EXPIRATION_INTERVAL / 1000)
  };

  return new Promise((resolve) => {
    jwt.sign(tokenData, JWT_SECRET, signOptions, (err, token) => {
      if (err) {
        console.error('Error while signing new token', { error: err.message });
        return err;
      }
      return resolve(token);
    });
  });
};

module.exports.verifyJWT = (authToken) => {
  const verifyOption = {
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    subject: 'auth'
  };

  return new Promise((resolve, reject) => {
    jwt.verify(authToken, JWT_SECRET, verifyOption, (err, decodedToken) => {
      if (err || !decodedToken) {
        console.error('Error while verifying token', { error: err?.message });
        return reject(err || ServiceError.unauthorized('Token could not be parsed'));
      }
      return resolve(decodedToken);
    });
  });
};
