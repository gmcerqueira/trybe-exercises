const express = require("express");
const bodyParser = require("body-parser");

const CepController = require("./controllers/CepController.js");
const errorMiddleware = require("./middlewares/error.js");

const app = express();

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.get("/cep/:cep", CepController.getCep);

app.post("/cep", CepController.create);

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
