// Imprima um triângulo retângulo com 5 asteriscos de base.

const side = 5;
let line = "";

if (side > 1) {
  for (let lineIndex = 1; lineIndex <= side; lineIndex++) {
      line += "*";
    console.log(line);
  }
}
