const getUserName = require('./ex02e03.js');

describe('Testes da função getUserName', () => {
  test('Teste de retorno do usuário encontrado com async/await', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });
  test('Teste de retorno do usuário inválido com async/await', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual(Error('User with 3 not found.'));
    }
  });
});