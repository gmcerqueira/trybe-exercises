// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arithmeticAverage;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

arithmeticAverage = sum / numbers.length;

if (arithmeticAverage > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");

}
