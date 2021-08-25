const { question, questionInt } = require("readline-sync");

const checkGuess = (randomNum, guess) => {
  if (guess === randomNum) {
    console.log("Congrats! Right guess!");
  } else {
    console.log(`Sorry not this time. The right number was ${randomNum}`);
  }
};

const playAgain = () => {
  const playAgain = question("Wanna play again? (y/n) ");
  if (playAgain === "y") {
    guessNumber();
  } else {
    console.log("Thanks for playing!");
  }
};

const guessNumber = () => {
  const randomNum = parseInt(Math.random() * 10);
  const guess = questionInt("Your guess: ");
  checkGuess(randomNum, guess);
  playAgain();
};

guessNumber();
