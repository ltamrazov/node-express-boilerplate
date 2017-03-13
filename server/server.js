'use strict';

/**
 * App server. Configures the server with all the middleware and mounts
 * the global router.
 */

const express = require('express');
const http = require('http');
const helmet = require('helmet');
const expressLogger = require('./lib/express-logger');
const errorHandler = require('./lib/error-util').handler;
const router = require('./router');

const app = express();
const server = http.Server(app);

/**
 * Secure the server
 */
app.use(helmet());

/**
 * Logging middleware will log every request
 */
app.use(expressLogger());

/**
 * Mount global router with all routes
 */
app.use('/', router);

/**
 * Catch and handle all errors
 */
app.use(errorHandler());

/**
 * Export app
 */
module.exports = server;
