const { writeFile, readFile } = require("fs/promises");

const createFiles = async () => {
  const filesContent = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];
  await Promise.all(
    filesContent.map((content, i) => writeFile(`./file${i + 1}.txt`, content))
  );
};

const concatFiles = async () => {
  const filesName = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];
  const allFiles = await Promise.all(
    filesName.map((file) => readFile(file, "utf-8"))
  );
  const newContent = allFiles.join(" ");

  await writeFile("fileAll.txt", newContent);
};

try {
  // createFiles();
  // concatFiles();
} catch (error) {
  console.log(error);
}
