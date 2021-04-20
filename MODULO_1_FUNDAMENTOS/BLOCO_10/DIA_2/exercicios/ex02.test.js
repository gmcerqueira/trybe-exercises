const getUserName = require('./ex02e03.js');

describe('Testes da função getUserName', () => {
  test('Teste de retorno do usuário encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((user) =>
      expect(user).toBe('Mark'));
  });
  test('Teste de retorno do usuário inválido', () => {
    expect.assertions(1);
    return getUserName(3)
      .catch((error) => 
        expect(error).toEqual(Error('User with 3 not found.')));
  });
});