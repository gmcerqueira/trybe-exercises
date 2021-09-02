const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!id || id === "") res.status(400).json({ message: "post not found" });
  next();
};

module.exports = { validateId };
