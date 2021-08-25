const { questionFloat } = require("readline-sync");

const avgVelocity = () => {
  const distance = questionFloat("Distance traveled (meters): ");
  const time = questionFloat("Time taken (seconds): ");
  const avg = (distance/time).toFixed(2)
  console.log(`${avg} m/s`)
  return avg
};

avgVelocity();
