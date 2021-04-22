/* eslint-disable max-lines-per-function */
/*
4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em
    caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve
    receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a 
    primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova
    implementação deve retornar a última letra de uma string. A terceira deve receber três strings e 
    concatená-las.
*/

const service = require('./strings');

describe('Alterando implementação das funções', () => {
  test('stringUpperCase', () => {
    service.stringUpperCase = jest.fn()
      .mockImplementation((a) => a.toLowerCase());
      
    expect(service.stringUpperCase('TEST1')).toBe('test1');
    expect(service.stringUpperCase).toHaveBeenCalled();
    expect(service.stringUpperCase).toHaveBeenCalledTimes(1);
    expect(service.stringUpperCase).toHaveBeenCalledWith('TEST1');
  });
  test('firstLetter', () => {
    service.firstLetter = jest.fn()
      .mockImplementation((a) => a[a.length - 1]);
      
    expect(service.firstLetter('TEST2')).toBe('2');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('TEST2');
  });
  test('concatString', () => {
    service.concatString = jest.fn()
      .mockImplementation((a, b, c) => a.concat(b, c));
      
    expect(service.concatString('TEST3', 'test3', 'tEsT3')).toBe('TEST3test3tEsT3');
    expect(service.concatString).toHaveBeenCalled();
    expect(service.concatString).toHaveBeenCalledTimes(1);
    expect(service.concatString).toHaveBeenCalledWith('TEST3', 'test3', 'tEsT3');
  });
});