const sum = require('./ex01.js');

describe('Testa soma de dois números', () => {
  test('Soma de 4 e 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Soma de 0 e 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Lança erro se parâmetros não forem números', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  test('Lança mensagem de erro "parameters must be numbers" se parâmetros não forem números',
    () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});