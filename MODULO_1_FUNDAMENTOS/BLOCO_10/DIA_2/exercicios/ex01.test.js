const uppercase = require('./ex01.js');

describe('Teste função uppercase', () => {
  test('Testa retorno para "teste"', (done) => {
    expect.assertions(1);
    uppercase('teste', ((result) => {
      expect(result).toEqual('TESTE');
      done();
    }));
  });
});