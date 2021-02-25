// Imprima uma pirâmide com 5 asteriscos de base.

let base = 10;
let numSpaces = (base - (base % 2)) / 2;
const asterisk = "*";
const space = " ";

if (base%2 == 0) {
  base++
}

if (base > 1) {
  for (let lineIndex = 1; lineIndex <= base; lineIndex += 2) {
    let line = "";

    for (let spaceIndex = 0; spaceIndex <= numSpaces; spaceIndex++) {
      let endLine = base - numSpaces * 2;
      
      if (spaceIndex == numSpaces) {
        for (let i = 1; i <= endLine; i++) {
          if (i == 1 || i == endLine || lineIndex == base) {
            line += asterisk;
          } else {
            line += space;
          }
        }
      } else {
        line += space;
      }
    }

    numSpaces--;
    console.log(line);
  }
}
