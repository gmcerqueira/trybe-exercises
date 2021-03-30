const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

let fullNames = [];
for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

console.log("----------------------------------------------------------------");

const numbers = [1, 2, 3, 4, -5];

let negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}

console.log(numbers); // [ 1, 2, 3, 4, -5 ]
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]

negativeNumbers = numbers.map((number) => (number > 0 ? number * -1 : number));

console.log(numbers); // [ 1, 2, 3, 4, -5 ]
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]

console.log("----------------------------------------------------------------");

const products = ["Arroz", "Feijao", "Alface", "Tomate"];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) =>
  listProducts.map((product, index) => ({ [product]: listPrices[index] }));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]
