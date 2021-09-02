const fs = require("fs/promises");

const readFileContent = async (path) => {
  const content = await fs.readFile(path);

  return JSON.parse(content);
};

module.exports = { readFileContent };
