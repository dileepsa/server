const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.setHeader('content-type', 'text/plain');
  res.end('Not found');
  return true;
}

module.exports = { notFoundHandler };
