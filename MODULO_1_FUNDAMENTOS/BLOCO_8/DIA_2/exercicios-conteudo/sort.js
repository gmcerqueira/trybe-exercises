const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
console.log("-----------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
