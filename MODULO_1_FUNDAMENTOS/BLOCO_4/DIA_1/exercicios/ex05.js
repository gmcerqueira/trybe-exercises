// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let angle1 = 60;
let angle2 = 59;
let angle3 = 60;
let anglesSum = angle1 + angle2 + angle3;

console.log(`É um triângulo? ${anglesSum == 180}`);