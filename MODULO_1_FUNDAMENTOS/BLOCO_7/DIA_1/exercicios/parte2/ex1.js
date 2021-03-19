const factorial = (number) => {
  if(number < 0) return "Valor invalido"
  if (number == 0 || number == 1) return 1
  let fact = 1;
  for (let i = 2; i <= number; i += 1) {
    fact *= i
  }
  return fact;
};

console.log(factorial(5));
