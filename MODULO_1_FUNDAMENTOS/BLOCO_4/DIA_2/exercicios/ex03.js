// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arithmeticAverage;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

arithmeticAverage = sum / numbers.length;

console.log(arithmeticAverage);