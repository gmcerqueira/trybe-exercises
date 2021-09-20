const User = require("../models/user");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const rescue = require("express-rescue");

/*
  Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
  Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela, pois só
  quem tem acesso a ela poderá criar ou alterar tokens JWT. 
*/
const secret = "seusecretdetoken";

const adminUser = {
  username: "admin",
  password: "s3nh4S3gur4???",
};

module.exports = rescue(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "É necessário usuário e senha para fazer login" });

    const { error } = joi
      .object({
        username: joi.string().min(5),
        password: joi.string().min(5),
      })
      .validate(req.body);

    if (error) return next(error);

    const user = await User.findUser(username);

    if (!user || user.password !== password)
      return res
        .status(401)
        .json({ message: "Usuário não existe ou senha inválida" });

    /* 
      Criamos uma config básica para o nosso JWT, onde:
      expiresIn -> significa o tempo pelo qual esse token será válido;
      algorithm -> algoritmo que você usará para assinar sua mensagem
      (lembra que falamos do HMAC-SHA256 lá no começo?). 
    
      A propriedade expiresIn aceita o tempo de forma bem descritiva.
      Por exemplo: '7d' = 7 dias. '8h' = 8 horas. 
    */
    const jwtConfig = {
      expiresIn: "1h",
      algorithm: "HS256",
    };

    /*
      Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
      Mensagem essa que contém dados do seu usuário e/ou demais dados que você
      quiser colocar dentro de "data".
    */
    const admin =
      adminUser.username === username && adminUser.password === password;

    const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro interno", error: err.message });
  }
});
