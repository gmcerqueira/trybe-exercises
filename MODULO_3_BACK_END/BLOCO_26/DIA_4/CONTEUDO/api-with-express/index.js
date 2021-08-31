const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let langs = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JS" },
  { id: 4, name: "React" },
];

app.get("/", (req, res) => {
  res.json("hello world!");
});

app.get("/langs", (req, res) => {
  res.json(langs);
});

app.post("/langs", (req, res) => {
  const { name } = req.body;
  langs.push({ id: langs.length + 1, name: name });
  res.status(201).json(`Linguagem ${name} adicionada com sucesso!`);
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

app.listen(3000, () => {
  console.log("Aplicação ouvindo na porta 3000");
});
