const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const authMiddleware = require("../middlewares/validateJWT");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.post("/api/users", routes.createUsers);
apiRoutes.post("/api/login", routes.login);
apiRoutes.post("/api/products", authMiddleware, routes.createProduct);
apiRoutes.get("/api/users/:userId", authMiddleware, routes.findUserById);

app.use(apiRoutes);

module.exports = app;
