const fs = require("fs").promises;

async function getSimpsons() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  return JSON.parse(fileContent);
}

async function setSimpsons(newSimpsons) {
  return await fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };
