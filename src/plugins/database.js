const fp = require('fastify-plugin');
//const { nextTick } = require('process');
const pgp = require('pg-promise')(); // http://vitaly-t.github.io/pg-promise/ () = init options     

const appConfig = require('../config/appConfig');

module.exports = fp(function (fastify, opts, next) {   
    const db = pgp(appConfig.postgresUri);

    fastify.decorate('db', db);

    next()
  });