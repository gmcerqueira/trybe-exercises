const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./auth-middleware");
const errorMiddleware = require("./errorMiddleware");

const app = express();

app.get("/:fileName", [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString("utf-8"));
  }),
  (err, req, res, next) => {
    if (err.code == -"ENOENT") {
      const newError = new Error(err.message);
      newError.code = "file_not_found";
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

app.use(bodyParser.json());

const port = 3001;

// Esta rota não passa pelo middleware de autenticação!
app.get("/open", function (req, res) {
  res.send("open!");
});

// Esta rota passa pelo middleware de autenticação!
app.get("/fechado", authMiddleware, function (req, res) {
  res.send("closed!");
});

const recipesRouter = require("./recipesRouter");

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use("/recipes", recipesRouter);

app.all("*", (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(port, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
