/* eslint-disable max-len */
const myRemove = require('./ex02.js');

describe('Testa função myRemove', () => {
  const originalArray = [1, 2, 3, 4];
  test('Testa se o número 3 foi retirado do array retornado', () => {
    expect(myRemove(originalArray, 3)).not.toContain(3);
  });
  
  test('Testa se o número 3 foi retirado do array retornado', () => {
    expect(myRemove(originalArray, 3)).not.toEqual([1, 2, 3, 4]);
  });
  
  test('Testa se o array original passado nos testes anteriores não sofreu alteração', () => {
    expect(originalArray).toEqual([1, 2, 3, 4]);
  });
  
  test('Testa se um item passado como parâmetro não existe no array é retornado a copia do original', () => {
    expect(myRemove(originalArray, 5)).toEqual([1, 2, 3, 4]);
  });
});