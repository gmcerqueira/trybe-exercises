const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

/* 
  Aqui, importamos nossa função que valida se o usuário está ou não autenticado
*/
const validateJWT = require("./auth/validateJWT");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get("/api/posts", validateJWT, routes.getPosts);
apiRoutes.post("/api/users", routes.createUsers);
apiRoutes.post("/api/login", routes.login);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));


// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxNDhiZDE1YmZhZTcxNzZmYmRiMGIwMSIsInVzZXJuYW1lIjoiZ21jZXJxdWVpcmEiLCJwYXNzd29yZCI6IjEyMzQ1NiJ9LCJpYXQiOjE2MzIxNTc0ODEsImV4cCI6MTYzMjc2MjI4MX0.Kc2m0o22d1UHX-HSFH1H9O7OlJWbZdjG88JolMMLC3I"
// }