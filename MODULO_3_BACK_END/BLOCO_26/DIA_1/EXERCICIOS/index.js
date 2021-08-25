const { questionInt } = require("readline-sync");

const choseScript = () => {
  const scripts = [
    { name: "Body Mass Index", path: "./bmi.js" },
    { name: "Average velocity", path: "./avgVelocity.js" },
    { name: "Guess number", path: "./guessNumber.js" },
    { name: "Factorial", path: "./factorial.js" },
    { name: "Fibonacci sequence", path: "./fibonacci.js" },
  ];

  let initialMsg = scripts.map(({ name }, i) => `${i + 1} - ${name}`);

  initialMsg.unshift("Which script you want to run?");
  initialMsg.push("-> ");
  initialMsg = initialMsg.join("\n");

  const choice = questionInt(`${initialMsg}`) - 1;

  if (choice <= 0 || choice >= scripts.length) {
    console.log("!!!Invalid option!!!");
    return choseScript();
  }

  const chosenScript = scripts[choice].path;

  require(chosenScript);
};

choseScript();
