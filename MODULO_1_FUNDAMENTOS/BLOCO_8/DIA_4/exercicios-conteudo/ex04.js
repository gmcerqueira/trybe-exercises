//  faça uma função que some todos os números pares do array

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = numbers.reduce((result, number) =>
  number % 2 === 0 ? result + number : result
);

console.log(sumEvens);
