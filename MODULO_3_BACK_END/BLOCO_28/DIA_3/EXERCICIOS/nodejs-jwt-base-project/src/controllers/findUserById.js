const Model = require("../models/user");
const { ObjectId } = require("mongodb");

module.exports = async (req, res) => {
  if (req.params.userId !== req.user.id) {
    res.status(401).json({ error: "Acesso negado" });
  }
  const user = await Model.findUser(req.user.username);

  res.status(200).json(user);
};
