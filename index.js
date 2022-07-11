const { createAsyncRouter } = require('./src/createAsyncRouter.js');
const { notFoundHandler } = require('./src/handlers/notFoundHandler.js');
const { logRequest } = require('./src/handlers/logRequest');
const { parseBodyParams } = require('./src/handlers/parseBodyParams');
const { parseSearchParams } = require('./src/handlers/parseSearchParamsHandler');
const { serveFileContent } = require('./src/handlers/serveFileContent');
const { server } = require('./src/server.js');
const { createRouter } = require('./src/createRouter.js');

const startServer = (port = 8000, handler = notFoundHandler) => {
  server(port, handler);
};

module.exports = { startServer, createAsyncRouter, createRouter, logRequest, parseBodyParams, parseSearchParams, serveFileContent };
