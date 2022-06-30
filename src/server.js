const { createServer } = require('http');

const server = (PORT, handler) => {
  const server = createServer(handler);

  server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
};

module.exports = { server };
