const jwt = require("jsonwebtoken");
const model = require("../models/user.js");

/* 
  Mesma chave privada que usamos para criptografar o token.
  Agora, vamos usá-la para descriptografá-lo.
  Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
  e muitos menos de forma duplicada, mas aqui só estamos interessados em
  ilustrar seu uso ;) 
*/
const segredo = "seusecretdetoken";

module.exports = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      error: {
        message: "Token not found",
      },
    });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await model.findUser(decoded.data.username);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Erro ao procurar usuário do token." });
    }

    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ error: { message: err.message } });
  }
};
