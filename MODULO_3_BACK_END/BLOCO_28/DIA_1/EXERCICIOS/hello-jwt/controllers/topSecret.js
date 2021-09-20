const rescue = require("express-rescue");
const joi = require("joi");

module.exports = rescue(async (_req, res, _next) => {
  try {
    res.status(200).json({
      secretInfo: "Peter Parker é o Homem-Arannha",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: err.message });
  }
});
