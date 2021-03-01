// Crie uma função que receba um array de inteiros e 
// retorne o índice do maior valor.

function higherIndex(array) {
  let higherIndex = 0;
  for (let i in numbers) {
    if (numbers[i] > numbers[higherIndex]) {
      higherIndex = i
    }
  }
  console.log(higherIndex);
}

let numbers = [2, 3, 6, 7, 10, 1]
higherIndex(numbers)