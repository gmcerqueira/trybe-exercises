/*
5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
    Após repetir a implementação, restaure a implementação original e crie os testes necessários 
    para validar.
*/

const service = require('./strings');

describe('Alterando implementação das funções', () => {
  test('stringUpperCase', () => {
    service.stringUpperCase = jest.spyOn(service, 'stringUpperCase')
      .mockImplementation((a) => a.toLowerCase());
      
    expect(service.stringUpperCase('TEST1')).toBe('test1');
    expect(service.stringUpperCase).toHaveBeenCalled();
    expect(service.stringUpperCase).toHaveBeenCalledTimes(1);
    expect(service.stringUpperCase).toHaveBeenCalledWith('TEST1');
  });
  test('Restaurando a função stringUpperCase', () => {
    service.stringUpperCase.mockRestore();
      
    expect(service.stringUpperCase('test2')).toBe('TEST2');
  });
});