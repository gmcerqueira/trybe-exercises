// Faça um programa que retorne o maior de três números. Defina no começo do programa
// três variáveis com os valores que serão comparados.

let number1 = 30;
let number2 = 20;
let number3 = 10;

console.log(`Quem é maior? ${number1}, ${number2} ou ${number3}?`);
if (number1 > number2 && number1 > number3) {
  console.log(`${number1} é maior que ${number2} e ${number3}.`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`${number2} é maior que ${number1} e ${number3}.`);
} else if (number3 > number1 && number3 > number2) {
  console.log(`${number3} é maior que ${number1} e ${number2}.`);
} else if (number1 == number2 && number1 == number3) {
  console.log(`Todos os números são iguais!`);
} else {
  console.log("***Valores inválidos!***");
}
