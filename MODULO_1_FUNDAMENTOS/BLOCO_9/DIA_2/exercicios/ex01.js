const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const jokeContainer = document.querySelector("#jokeContainer");

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (jokeContainer.innerHTML = data.joke))
    .catch((err) => console.log(err));
};

const sumRandomNumbers = (numberOfElements = 10) => {
  const sum = Array.from(
    { length: numberOfElements },
    () => Math.floor(Math.random() * 50) + 1
  )
    .map((item) => item ** 2)
    .reduce((result, acc) => result + acc, 0);
  if (sum > 8000)
    throw new Error("É mais de oito mil! Essa promise deve estar quebrada!");

  return sum;
};

const arrayFromSum = (sum) => [2, 3, 5, 10].map((num) => sum / num);
const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await arrayFromSum(sum);

    console.log(sum, array);
  } catch (err) {
    console.log(err);
  }
};
window.onload = () => {
  setTimeout(() => fetchJoke(), 1000);
  fetchPromise();
};
