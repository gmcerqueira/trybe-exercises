// Imprima um triângulo retângulo espelhado com 5 asteriscos de base.


const side = 5;
let numSpaces = side;
let numAsterisks = 1;

if (side > 1) {
  for (let lineIndex = 1; lineIndex <= side; lineIndex++) {
    let line = "";

    for (let spaceIndex = 1; spaceIndex < numSpaces; spaceIndex++) {
      line += " ";
    }

    for (let asteriskIndex = 0; asteriskIndex < numAsterisks; asteriskIndex++) {
      line += "*";
    }

    numSpaces--;
    numAsterisks++;
    console.log(line);
  }
}
