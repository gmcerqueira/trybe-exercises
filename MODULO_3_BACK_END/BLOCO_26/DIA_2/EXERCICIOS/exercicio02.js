const somaMultiplicacao = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    )
      reject("Informe apenas números");
    const result = (num1 + num2) * num3;
    if (result < 50) reject("Valor muito baixo");
    resolve(result);
  });

  return promise;
};

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const numbers = Array.from({ length: 3 }).map(randomNum);

somaMultiplicacao(...numbers)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
