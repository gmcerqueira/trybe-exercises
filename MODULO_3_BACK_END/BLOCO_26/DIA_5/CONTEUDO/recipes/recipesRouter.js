const express = require("express");
const router = express.Router();
const authMiddleware = require("./auth-middleware");

router.use(authMiddleware);


const recipes = [
  { id: 1, name: "Lasanha", preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: "Macarrão com molho branco", preco: 35.0, tempoDePreparo: 25 },
];

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === "")
    return res.status(400).json({ message: "Invalid name!" });

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || price < 0 || typeof price !== "number")
    return res.status(400).json({ message: "Invalid price!" });

  next();
};

router.get("/recipes", (req, res) => {
  res.status(200).json(recipes);
});

router.get("/recipes/pesquisar", (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.preco < parseInt(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

router.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found!" });

  res.status(200).json(recipe);
});

router.post("/recipes", validateName, validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: "Recipe created successfully!" });
});

router.put("/recipes/:id", validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;
