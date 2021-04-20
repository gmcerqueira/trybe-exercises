// EN - Change vowel to number
// PT-BR - Troca vogal por número
const changeLetter = (letter) => {
  let newLetter = letter;
  const pairs = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  const keys = Object.keys(pairs);

  if (keys.includes(newLetter)) newLetter = pairs[newLetter];

  return newLetter;
};

// EN - Encodes message with changeLetter function
// PT-BR - Codifica mensagem com a função changeLetter
const encode = (string) => {
  const stringToChange = string.toLowerCase().split('');
  for (let char = 0; char < stringToChange.length; char += 1) {
    stringToChange[char] = changeLetter(stringToChange[char]);
  }
  return stringToChange.join('');
};

// EN - Change number to vowel
// PT-BR - Troca número por vogal
const changeNumber = (number) => {
  let newNumber = number;
  const pairs = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const keys = Object.keys(pairs);

  if (keys.includes(newNumber)) newNumber = pairs[newNumber];

  return newNumber;
};

// EN - Decodes message with changeNumber function
// PT-BR - Decodifica mensagem com a função changeLetter
const decode = (string) => {
  const stringToChange = string.toLowerCase().split('');
  for (let char = 0; char < stringToChange.length; char += 1) {
    stringToChange[char] = changeNumber(stringToChange[char]);
  }
  return stringToChange.join('');
};

module.exports = {
  encode,
  decode,
};