/* eslint-disable max-lines-per-function */
const { findAnimalByName, findAnimalByAge } = require('./ex06.js');

describe('Testando promise - findAnimalByName e findAnimalByAge', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch((error) =>
        expect(error).toEqual(Error('Nenhum animal com esse nome!')));
    });
  });

    describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByAge(1).then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByAge(7).catch((error) =>
        expect(error).toEqual(Error('Nenhum animal com essa idade!')));
    });
  });
});
