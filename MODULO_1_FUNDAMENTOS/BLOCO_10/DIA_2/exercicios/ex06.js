const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.age === age);
      if (animalFound) {
        return resolve(animalFound);
      }
      return reject(Error('Nenhum animal com essa idade!'));
    }, 100);
  }));

  // Animals.find((animal) => animal.name === name)

const findAnimalByName = (name) => (new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.name === name);
      if (animalFound) {
        return resolve(animalFound);
      }
      return reject(Error('Nenhum animal com esse nome!'));
    }, 100);
  }));
// ---------------------
module.exports = {
  findAnimalByName,
  findAnimalByAge,
};