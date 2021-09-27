const jwt = require('jsonwebtoken');
const secret = "super-senha"

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token)
        return res.status(400).json({ error: "Token não encontrado ou informado" });

    try {
        const payload = jwt.verify(token, secret);
        
        req.user = payload.data;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Erro: Seu token é inválido.' });
    }

}


module.exports = validateJWT;