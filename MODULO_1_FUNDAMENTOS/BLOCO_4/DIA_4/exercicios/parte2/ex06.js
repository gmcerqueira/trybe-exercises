// Crie uma função que receba um número inteiro N e retorne o
// somatório de todos os números de 1 até N.

function sum(number) {
  // let sum = 0;
  // for (let n = 0; n < number; n++) {
  //   sum += number -n
  // }
  let sum = (number / 2) * (number + 1);
  console.log(sum);
}

sum(5);
