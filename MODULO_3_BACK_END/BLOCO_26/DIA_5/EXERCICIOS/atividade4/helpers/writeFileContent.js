const fs = require("fs/promises");
const { readFileContent } = require("./readFileContent.js");

const writeFileContent = async (path, toAdd) => {
  const content = await readFileContent(path);

  content.push(toAdd);

  await fs.writeFile(path, JSON.stringify(content));

  return content;
};

module.exports = { writeFileContent };
