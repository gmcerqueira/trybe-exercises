/*
1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para 
    essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, 
    qual seu retorno e quantas vezes foi chamada.
*/

const service = require('./randomNumber');

describe('Testando função randomNumber', () => {
  test('Testando o mock de retorno padrão', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});