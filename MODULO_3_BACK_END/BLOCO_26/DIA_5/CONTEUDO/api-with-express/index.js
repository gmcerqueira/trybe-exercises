const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const port = 3000;

let langs = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JS" },
  { id: 4, name: "React" },
];

const logMiddleware = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.status(401).json({ message: "Invalid token!" });
  req.token = token;
  next();
};

app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

app.get("/langs", logMiddleware, (req, res) => {
  res.json(langs);
});

app.post("/langs", logMiddleware, (req, res) => {
  const { name } = req.body;
  const token = req.token;
  if (!name)
    return res
      .status(404)
      .json({ message: "Name deve estar presente no body" });
  langs.push({ id: langs.length + 1, name: name, token: token });
  res
    .status(201)
    .json({ message: `Linguagem ${name} adicionada com sucesso!` });
});

app.get("/langs/:id", (req, res) => {
  const { id } = req.params;
  const lang = langs.find((r) => r.id === parseInt(id));
  if (!lang) return res.status(404).json({ message: "Language not found!" });
  res.status(200).json(lang);
});

app.put("/langs/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const langIndex = langs.findIndex((r) => r.id === parseInt(id));
  if (!langIndex)
    return res.status(404).json({ message: "Language not found!" });

  langs[langIndex] = { ...langs[langIndex], id: parseInt(id), name };
  res.status(204).end();
});

app.delete("/langs/:id", (req, res) => {
  const { id } = req.params;
  const langIndex = langs.findIndex((r) => r.id === parseInt(id));
  if (!langIndex)
    return res.status(404).json({ message: "Language not found!" });

  langs.splice(langIndex, 1);
  res.status(204).end();
});

app.all("*", (req, res) => {
  return res
    .status(404)
    .json({ message: `Route '${req.path}' does not exist!` });
});

app.listen(port, () => {
  console.log(`Aplicação ouvindo na porta ${port}`);
});
