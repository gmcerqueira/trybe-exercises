const fs = require("fs");

const writeOnFile = (content, fileName) => {
  fs.writeFileSync(`${__dirname}/${fileName}.txt`, content);
  return "ok";
};
module.exports = writeOnFile;
