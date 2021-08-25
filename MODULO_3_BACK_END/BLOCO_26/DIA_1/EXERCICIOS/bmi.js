const { questionFloat } = require("readline-sync");

const calculateBMI = () => {
  const weight = questionFloat("Your weight: ");
  const height = questionFloat("Your height in meters: ");
  const bmi = (weight / height ** 2).toFixed(1);
  let textResponse;
  
  if (bmi < 18.5) {
    textResponse = "Abaixo do peso (magreza)";
  } else if (18.5 <= bmi < 25) {
    textResponse = "Peso normal";
  } else if (25 <= bmi < 30) {
    textResponse = "Acima do peso (sobrepeso)";
  } else if (30 <= bmi < 35) {
    textResponse = "Obesidade grau I";
  } else if (35 <= bmi < 40) {
    textResponse = "Obesidade grau II";
  } else if (bmi >= 40) {
    textResponse = "Obesidade grau III e IV";
  }
  
  console.log(bmi);
  console.log(textResponse);
  return bmi;
};

calculateBMI();
