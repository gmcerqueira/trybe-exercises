// Imprima uma pirâmide com 5 asteriscos de base.

const base = 5;
let numSpaces = base - (base % 2);
let asterisk = "*";
const space = " ";

if (base > 1) {
  for (let lineIndex = 1; lineIndex <= base; lineIndex += 2) {
    let line = "";

    for (let spaceIndex = 0; spaceIndex <= numSpaces; spaceIndex++) {
      if (spaceIndex == numSpaces / 2) {
        line += asterisk;
      } else {
        line += space;
      }
    }

    numSpaces -= 2;
    asterisk += "**";
    console.log(line);
  }
}
