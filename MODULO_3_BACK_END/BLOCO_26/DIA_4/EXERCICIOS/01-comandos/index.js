const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.json("Hello World!"));

app.get("/ping", (req, res) => res.json({ message: "pong" }));

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  age > 17
    ? res.status(200).json({ message: `Hello, ${name}!` })
    : res.status(401).json({ message: "Unauthorized" });
});

app.put("/users/:name/:age", function (req, res) {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(port, () => console.log("ouvindo na porta 3000!"));
