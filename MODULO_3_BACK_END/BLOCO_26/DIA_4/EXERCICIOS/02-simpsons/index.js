const express = require("express");
const bodyParser = require("body-parser");
const { getSimpsons, setSimpsons } = require("./auxFuncs.js");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/simpsons", async (req, res) => {
  const simpsonsList = await getSimpsons();
  res.status(200).json(simpsonsList);
});

app.get("/simpsons/:id", async (req, res) => {
  const { id } = req.params;
  const simpsonsList = await getSimpsons();
  const simpson = simpsonsList.find((s) => s.id === id);

  if (!simpson) return res.status(404).json({ message: "simpson not found" });

  res.status(202).json(simpson);
});

app.post("/simpsons", async (req, res) => {
  const { name } = req.body;
  const simpsonsList = await getSimpsons();
  const simpson = simpsonsList.find((s) => s.name === name);

  if (simpson)
    return res.status(409).json({ message: "Simpson already exists" });

  const nextId = (simpsonsList.length + 1).toString();

  simpsonsList.push({ id: nextId, name: name });

  await setSimpsons(simpsonsList);

  res.status(204).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
