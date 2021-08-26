const fs = require("fs").promises;

async function main() {
  try {
    await fs.writeFile("./meu-novo-arquivo.txt", "Meu textão", { flag: "wx" });
    console.log("Arquivo escrito com sucesso!");
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
