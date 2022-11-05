const crypto = require('crypto');

module.exports.verifyPassword = async (password, passwordHash, salt) => {
  const hash = crypto.createHash('sha512').update(salt).update(password).digest('hex');

  return passwordHash === hash;
};
