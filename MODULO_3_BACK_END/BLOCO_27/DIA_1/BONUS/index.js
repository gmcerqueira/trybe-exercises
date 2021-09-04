const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const User = require("./models/UserModel.js");

app.use(bodyParser.json());

app.get("/user", async (_req, res) => {
  const users = (await User.getAll()) || [];

  res.status(200).json(users);
});

app.post("/user", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const invalid = User.isValid(firstName, lastName, email, password);

  if (invalid)
    return res.status(401).json({
      error: true,
      message: invalid,
    });

  const userCreated = await User.create(firstName, lastName, email, password);

  res.status(201).json(userCreated);
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user)
    return res.status(404).json({
      error: true,
      message: "Usuário não encontrado",
    });

  res.status(200).json(user);
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const invalid = User.isValid(firstName, lastName, email, password);

  if (invalid)
    return res.status(401).json({
      error: true,
      message: invalid,
    });

  const updatedUser = await User.update(
    id,
    firstName,
    lastName,
    email,
    password
  );

  res.status(200).json(updatedUser);
});

app.get("/test", async(req, res) => {
  res.status(200).json({message:"Page for testing"});
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
