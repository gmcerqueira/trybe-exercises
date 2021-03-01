// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function smallerIndex(array) {
  let smallerIndex = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[smallerIndex]) {
      smallerIndex = i;
    }
  }
  console.log(smallerIndex);
}

let numbers = [2, 4, 6, 7, 10, 0, -3]

smallerIndex(numbers)