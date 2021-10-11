const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: true,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

const initPlant = ({id, breed, needsSun, origin, specialCare, size}) => {
  const waterFrequency = needsSun
    ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
    : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === parseInt(id));
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== parseInt(id));
  return newPlants
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === parseInt(id)) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });

  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === parseInt(plantId)) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant(plant);
  
  defaultPlants.push(mappedPlant);
  
  return defaultPlants;
};

module.exports = { getPlants,getPlantById,removePlantById,editPlant,createNewPlant,getPlantsThatNeedsSunWithId };
