/* eslint-disable max-lines-per-function */
/*
3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que
    receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, reset 
    sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
    Faça os testes necessários.
*/

const service = require('./randomNumber');

describe('Testando implementações função randomNumber', () => {
  test('Função recebe 3 parâmetros e retornar a multiplicação dos mesmos', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((a, b, c) => a * b * c);
    
    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test('Reset do mock para a função receber 1 parâmetro e retornar seu dobro', () => {
    service.randomNumber.mockReset();

    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    
    service.randomNumber = jest.fn()
      .mockImplementation((a) => a * 2);
        expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });
});