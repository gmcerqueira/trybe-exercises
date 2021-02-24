// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas
// variáveis com os valores que serão comparados.

let number1 = 10;
let number2 = 40;

console.log(`Quem é maior? ${number1} ou ${number2}?`);
if (number1 > number2) {
  console.log(`${number1} é maior que ${number2}.`);
} else if (number2 > number1) {
  console.log(`${number2} é maior que ${number1}.`);
} else if (number1 == number2) {
  console.log(`${number1} é igual a ${number2}.`);
} else {
  console.log("***Valores inválidos!***");
}
