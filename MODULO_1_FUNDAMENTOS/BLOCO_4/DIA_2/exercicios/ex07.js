// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = 999999999999999;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallerNumber) {
    smallerNumber = numbers[i];
  }
}

console.log(smallerNumber);
