const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.match(/^\w{12}$/g))
    res.status(400).json({ message: "invalid token" });
  next();
};

module.exports = { validateToken };
