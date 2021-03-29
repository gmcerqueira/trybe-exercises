const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I
// 1 - Crie uma função que retorna o dano do dragão.
//     - O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo
//       strength(dano máximo).
const dragonAttack = () => {
  const { strength } = dragon;
  const minDmg = 15;
  const maxDmg = strength - minDmg;
  const dragonDmg = Math.floor(Math.random() * maxDmg + minDmg);
  return dragonDmg;
};

// 2 - Crie uma função que retorna o dano causado pelo warrior .
//     - O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
//       e o valor de strength * weaponDmg(dano máximo).
const warriorAttack = () => {
  const { strength } = warrior;
  const { weaponDmg } = warrior;
  const minDmg = strength;
  const maxDmg = strength * weaponDmg;
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
  return warriorDmg;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e
//     a mana gasta pelo mago em um turno.
//     - O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
//       e o valor de intelligence * 2(dano máximo).
//     - A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso
//       o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem(Ex: "Não possui
//       mana suficiente") e a mana gasta é 0.

const mageAttack = () => {
  const { intelligence } = mage;
  let { mana } = mage;
  const minDmg = intelligence;
  const maxDmg = intelligence * 2;
  const turnStats = {
    manaSpent: 0,
    mageDmg: "Não possui mana suficiente",
  };

  if (mana > 15) {
    const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
    turnStats.mageDmg = mageDmg;
    turnStats.manaSpent = 15;
  }
  return turnStats;
};

// Parte I
const gameActions = {
  // Crie as HOFs neste objeto.
  // 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o
  //     turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula
  //     o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon.
  //     Além disto ela também deve atualizar o valor da chave damage do warrior.
  warriorTurn: (action) => {
    warrior.damage = action();
    dragon.healthPoints -= warrior.damage;
  },

  // 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o
  //     turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano
  //     deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além
  //     disto ela também deve atualizar o valor das chaves damage e mana do mage.

  mageTurn: (action) => {
    const attackStats = action();
    mage.damage = attackStats.mageDmg;
    mage.mana -= attackStats.manaSpent;
    dragon.healthPoints -= mage.damage;
  },

  // 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o
  //     turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano
  //     deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e
  //     warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
  dragonTurn: (action) => {
    const attack = action();
    dragon.damage = attack;
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },

  // 4 - Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto
  //     battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  turnResults: () => battleMembers,
};

console.log(gameActions.turnResults());

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
