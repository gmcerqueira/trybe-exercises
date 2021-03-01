// Imprima uma pirâmide com 5 asteriscos de base.

let base = 7;
let startSpaces = (base - (base % 2)) / 2;
const symbol = "*";
const space = " ";
const lastLine = base / 2 + .5;

if (base % 2 == 0) {
  base++;
}

if (base > 1) {
  for (let lineIndex = 1; lineIndex <= lastLine; lineIndex ++, startSpaces--) { // 2 por ser metade da altura da pirâmide
    let line = "";

    for (let spaceIndex = 0; spaceIndex <= startSpaces; spaceIndex++) {
      let drawSymbol = base - startSpaces * 2;

      if (spaceIndex == startSpaces) {
        for (let i = 1; i <= drawSymbol; i++) {

          if (i == 1 || i == drawSymbol || lineIndex == lastLine) {
            line += symbol;
          } else {
            line += space;
          }
        }

      } else {
        line += space;
      }
    }
    console.log(line);
  }
}
