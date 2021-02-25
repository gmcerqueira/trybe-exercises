// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = -999999999999999;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i]
  }
}

console.log(higherNumber);