function convertToBinary1(number) {
  let num = number;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  console.log(binary);
}

convertToBinary1(60)
convertToBinary1(61)
convertToBinary1(86)
convertToBinary1(89)
convertToBinary1(18)