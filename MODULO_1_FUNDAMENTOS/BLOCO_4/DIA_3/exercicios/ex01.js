// Faça um programa que, dado um valor n qualquer, 
// seja n > 1, imprima na tela um quadrado feito
// de asteriscos de lado de tamanho n.

const side = 5;

if (side > 1) {
  for (let lineIndex = 1; lineIndex <= side; lineIndex++) {
    let line = "";
    for (let columnIndex = 1; columnIndex <= side; columnIndex++) {
      line += "*";
    }
    console.log(line);
  }
}
