const myRemoveWithoutCopy = require('./ex03.js');

describe('Teste da função myRemoveWithoutCopy', () => {
  test('Verifica se retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
  });

  test('Verifica se NÂO retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Faz a chamada da função e verifica se o array passado sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1, 2, 4]);
  });
  
  test('Faz a chamada da função e verifica se o array passado sofreu alteração', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});