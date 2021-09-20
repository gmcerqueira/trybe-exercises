const rescue = require("express-rescue");

module.exports = rescue(async (req, res, next) => {
  try {
    const { error } = joi
      .object({
        username: joi.string().min(5),
        password: joi.string().min(5),
      })
      .validate(req.body);

    if (error) return next(error);

    res.status(200).json(req.user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: err.message });
  }
});
