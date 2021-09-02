const routeNotFound = (err, _req, res, _next) => {
  return res.status(err.statusCode).json({ message: err.message });
};

module.exports = { routeNotFound };
