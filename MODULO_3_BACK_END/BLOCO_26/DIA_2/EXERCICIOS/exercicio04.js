const { readFile, writeFile } = require("fs/promises");

const fileToArray = (file) =>
  readFile(file, "utf8").then((res) => JSON.parse(res));

const printSimpsonsList = () => {
  readFile("./simpsons.json", "utf8")
    .then((res) => JSON.parse(res))
    .then((res) => res.map(({ id, name }) => `${id} - ${name}`))
    .then((res) => res.map((character) => console.log(character)))
    .catch((e) => console.log(e));
};

const getSimpsonById = async (simpsonId) => {
  const simpsons = await fileToArray("./simpsons.json");
  const searchSimpson = simpsons.find(({ id }) => id == simpsonId);

  if (!searchSimpson) throw new Error("Id não encontrado");
  return searchSimpson;
};

const removeCharacters = async () => {
  const oldList = await fileToArray("./simpsons.json");
  const newList = oldList.filter(({ id }) => id != 6 && id != 10);

  await writeFile("./simpsons.json", JSON.stringify(newList));
};

const createSimpsonFamily = async () => {
  const oldList = await fileToArray("./simpsons.json");
  const newList = oldList.filter(({ id }) => id <= 4);

  await writeFile("./simpsonsFamily.json", JSON.stringify(newList));
};

const addNelsonToFamily = async () => {
  const list = await fileToArray("./simpsonsFamily.json");

  list.push({ id: `${list.length + 1}`, name: "Nelson Muntz" });

  await writeFile("./simpsonsFamily.json", JSON.stringify(list));
};

const changeNelsonToMaggie = async () => {
  const list = await fileToArray("./simpsonsFamily.json");
  const index = list.findIndex(({ name }) => name == "Nelson Muntz");
  const id = list[index].id;
  list.splice(index, 1);
  list.push({ id: id, name: "Maggie Simpson" });
  await writeFile("./simpsonsFamily.json", JSON.stringify(list));
};

try {
  // printSimpsonsList();
  // getSimpsonById(1);
  // removeCharacters();
  // createSimpsonFamily();
  // addNelsonToFamily();
  // changeNelsonToMaggie();
} catch (e) {
  console.log(e);
}
