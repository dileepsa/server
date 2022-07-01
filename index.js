const { createAsyncRouter } = require('./src/createAsyncRouter.js');
const { notFoundHandler } = require('./src/notFoundHandler.js');
const { server } = require('./src/server.js');
const { createRouter } = require('./src/createRouter.js');

const startServer = (port = 8000, handler = notFoundHandler) => {
  server(port, handler);
};

module.exports = { startServer, createAsyncRouter, createRouter };
