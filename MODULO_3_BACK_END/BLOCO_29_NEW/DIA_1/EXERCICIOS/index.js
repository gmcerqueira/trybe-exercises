const bodyParser = require("body-parser");
const express = require("express");
const {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
} = require("./plants.js");


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/plants", (req, res) => {
  const plants = getPlants();
  res.send(plants);
});

app.get("/plants/:id", (req, res) => {
  const { id } = req.params;
  const plant = getPlantById(id);

  return res.send(plant);
});

app.delete("/plants/:id", (req, res) => {
  const { id } = req.params;
  const plants = removePlantById(id);

  return res.send(plants);
});

app.post("/plants/:id", (req, res) => {
  const { id } = req.params;
  const plants = editPlant(id, req.body);

  return res.send(plants);
});


app.post("/plants", (req, res) => {
  const plants = createNewPlant(req.body);
  
  return res.send(plants);
});

app.get("/sunny/:id", (req, res) => {
  const { id } = req.params;
  const plant = getPlantsThatNeedsSunWithId(id);

  return res.send(plant);
});



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
