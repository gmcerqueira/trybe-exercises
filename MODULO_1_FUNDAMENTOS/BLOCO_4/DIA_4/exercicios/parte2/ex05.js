// Crie uma função que receba um array de inteiros e
// retorne o inteiro que mais se repete.

function repetitions(numbers) {
  let greaterRepetitions = 0;
  let mostRepeatedNumber = 0;

  for (const number in numbers) {
    let repetitionCounter = 0;
    for (let r = 0; r < numbers.length; r++) {
      if (numbers[number] == numbers[r]) {
        repetitionCounter++;
      }
    }
    if (repetitionCounter > greaterRepetitions) {
      mostRepeatedNumber = numbers[number];
      greaterRepetitions = repetitionCounter;
    }
  }
  console.log(`O número ${mostRepeatedNumber} é o que mais se repete no array sendo repetido ${greaterRepetitions}`);
}

let numbers = [2, 3, 2, 5, 8, 2, 3];

repetitions(numbers);
