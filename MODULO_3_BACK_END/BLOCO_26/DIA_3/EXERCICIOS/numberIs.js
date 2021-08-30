const numberIs = (number) => {
  let response = "";
  if (typeof number !== "number") {
    response = null;
  } else if (number > 0) {
    response = "Número positivo";
  } else if (number < 0) {
    response = "Número negativo";
  } else {
    response = "Número neutro";
  }
  return response;
};

module.exports = numberIs;
