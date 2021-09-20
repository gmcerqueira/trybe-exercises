module.exports = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user.admin)
      return res.status(403).json({
        error: {
          message: "Restricted access",
        },
      });

    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: err.message });
  }
};
