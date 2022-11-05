const { join } = require('path');

const config = require('config');
const knex = require('knex');

const { getChildLogger } = require('../core/logging');

const NODE_ENV = config.get('env');
const isDevelopment = NODE_ENV === 'development';

const {
  name: DATABASE_NAME,
  client: DATABASE_CLIENT,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD
} = config.get('database');

let knexInstance;

const getKnexLogger = (logger, level) => (message) => {
  if (message.sql) {
    logger.log(level, message.sql);
  } else if (message.length && message.forEach) {
    message.forEach((innerMessage) =>
      logger.log(level, innerMessage.sql ? innerMessage.sql : JSON.stringify(innerMessage))
    );
  } else {
    logger.log(level, JSON.stringify(message));
  }
};

async function initializeData() {
  const logger = getChildLogger('database');
  logger.info('Initializing connection to the database');

  const knexOptions = {
    client: DATABASE_CLIENT,
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      insecureAuth: isDevelopment
    },
    debug: isDevelopment,
    log: {
      debug: getKnexLogger(logger, 'debug'),
      error: getKnexLogger(logger, 'error'),
      warn: getKnexLogger(logger, 'warn'),
      deprecate: (method, alternative) =>
        logger.warn('Knex reported something deprecated', {
          method,
          alternative
        })
    },
    migrations: {
      tableName: 'knex_meta',
      directory: join('src', 'data', 'migrations')
    },
    seeds: {
      directory: join('src', 'data', 'seeds')
    }
  };

  knexInstance = knex(knexOptions);

  // Check the connection, create the database and then reconnect
  try {
    await knexInstance.raw('SELECT 1+1 AS result');
    //seeding probleem oplossen - kerem

    if (isDevelopment) {
      await knexInstance.raw(`DROP DATABASE IF EXISTS ${DATABASE_NAME}`);
    }
    await knexInstance.raw(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);

    // We need to update the Knex configuration and reconnect to use the created database by default
    // USE ... would not work because a pool of connections is used
    await knexInstance.destroy();

    knexOptions.connection.database = DATABASE_NAME;
    knexInstance = knex(knexOptions);
    await knexInstance.raw('SELECT 1+1 AS result');
  } catch (error) {
    logger.error(error.message, { error });
    throw new Error('Could not initialize the data layer');
  }

  // // Run migrations
  let migrationsFailed = true;
  try {
    await knexInstance.migrate.latest();
    migrationsFailed = false;
  } catch (error) {
    logger.error('Error while migrating the database', {
      error
    });
  }

  // Undo last migration if something failed
  if (migrationsFailed) {
    try {
      await knexInstance.migrate.down();
    } catch (error) {
      logger.error('Error while undoing last migration', {
        error
      });
    }

    // No point in starting the server
    throw new Error('Migrations failed');
  }

  //Run seeds in development
  if (isDevelopment) {
    try {
      await knexInstance.seed.run();
    } catch (error) {
      logger.error('Error while seeding database', {
        error
      });
    }
  }

  logger.info('Succesfully connected to the database');

  return knexInstance;
}

async function shutdownData() {
  const logger = getChildLogger('database');

  logger.info('Shutting down database connection');

  await knexInstance.destroy();
  knexInstance = null;

  logger.info('Database connection closed');
}

function getKnex() {
  if (!knexInstance)
    throw new Error('Please initialize the data layer before getting the Knex instance');
  return knexInstance;
}

const tables = {
  user: 'user', //DONE
  role: 'role', //DONE
  category: 'category', //DONE
  category_role: 'category_role', //DONE
  sdg: 'sdg', //DONE
  threshold: 'threshold', //DONE
  csr_behaviour: 'csraggregatebehaviour', //DONE
  csr: 'csrcomponent', //DONE
  csrcomposite: 'csrcomposite',
  csrobjective: 'csrobjective',
  csrhistory: 'csrhistory',
  csr_role: 'csrcomponent_role', //DONE
  datasource: 'datasource',
  loginlog: 'loginLog', //DONE
  csr_sourceBehaviour: 'csrobjective_sourceaggregatebehaviour',
  datasource_behaviour: 'sourceaggregatebehaviour',
  datasouce_notification: 'datasourcenotification'
};

module.exports = {
  tables,
  getKnex,
  initializeData,
  shutdownData
};
