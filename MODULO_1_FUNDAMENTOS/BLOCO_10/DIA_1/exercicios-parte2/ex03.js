const hydrate = (string) => {
  const reg = /\d+/g;
  const cups = string.match(reg);
  let sum = 0;
  for (let cup = 0; cup < cups.length; cup += 1) {
    sum += parseInt(cups[cup], 10);
  }
  if (sum === 1) return `${sum} copo de água`;
  return `${sum} copos de água`;
};

module.exports = hydrate;