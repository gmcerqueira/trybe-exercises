/*
2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
    que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
    Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

const service = require('./randomNumber');

describe('Testando função randomNumber', () => {
  test('Testando o mock de nova implementação', () => {
    service.randomNumber = jest.fn()
      .mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
  });
});
