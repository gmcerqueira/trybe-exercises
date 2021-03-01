// Imprima uma pirâmide com 5 asteriscos de base.

let base = 7;
base % 2 == 0 ? base++ : base;
let numSpaces = (base - (base % 2)) / 2;
let asterisk = "*";
const space = " ";
const lastLine = base / 2 + 0.5;

if (base > 1) {
  for (let lineIndex = 1; lineIndex <= lastLine; lineIndex++, numSpaces--) {
    let line = "";
    let endAsterisks = base - numSpaces;

    for (let spaceIndex = 0; spaceIndex < base; spaceIndex++) {
      if (spaceIndex >= numSpaces && spaceIndex < endAsterisks) {
        line += asterisk;
      } else {
        line += space;
      }
    }
    console.log(line);
  }
}

("   *");
("   *   ");
("  ***  ");
