const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  // console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};
let sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113
sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "10"
console.log(sumNumbers); // 123
