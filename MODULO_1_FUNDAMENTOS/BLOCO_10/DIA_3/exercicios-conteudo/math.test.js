/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const math = require('./math');

describe('Testes das funções de math.js', () => {
  test('Faça o mock da função subtrair e teste sua chamada', () => {
    math.subtrair = jest.spyOn(math, 'subtrair');
    expect(math.subtrair(2, 1)).toBe(1);
    math.subtrair.mockClear();
  });
  test('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar(2, 1);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 1)).toBe(10);
  });
  test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar = jest.fn((a, b) => a + b);
    math.somar(5, 9);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(5, 9)).toBe(14);
    expect(math.somar).toHaveBeenCalledWith(5, 9);
  });
  test('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada. ', () => {
    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
    expect(math.dividir).toHaveBeenCalledTimes(0);
    expect(math.dividir(2, 4)).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir(5, 2)).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir(15, 3)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  });
  test('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    math.subtrair = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a + b)
      .mockReturnValue(20);
    expect(math.subtrair).toHaveBeenCalledTimes(0);
    expect(math.subtrair(2, 4)).toBe(20);
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    math.subtrair.mockRestore();
    expect(math.subtrair(5, 3)).toBe(2);
  });
});