module.exports = {
  port: 9000,
  database: {
    client: 'mysql2',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root'
  },
  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60 // sec (3 hours)
  },
  auth: {
    jwt: {
      secret: 'vnmzknfanfi156343vzjkm56ezgvkmz5',
      expirationInterval: 3 * 60 * 60 * 1000,
      issuer: 'hogent-groep6',
      audience: 'hogent-groep6'
    }
  }
};
