/* eslint-disable max-lines-per-function */
/*
6 - Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes.
    O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo 
    deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que 
    achar necessário.
*/

const service = require('./dogPictures');

describe('Testando a função getDogPicture', () => {
  test('Promise resolvida', async () => {
    service.getDogPicture = jest.fn()
      .mockResolvedValue('request success');

    service.getDogPicture();
    expect(service.getDogPicture).toHaveBeenCalled();
    expect(service.getDogPicture).toHaveBeenCalledTimes(1);
    expect(service.getDogPicture()).resolves.toBe('request success');
    expect(service.getDogPicture).toHaveBeenCalledTimes(2);
  });

  test('Promise rejeitada', async () => {
    service.getDogPicture.mockReset();
    service.getDogPicture
      .mockRejectedValue('request failed');

    expect(service.getDogPicture).toHaveBeenCalledTimes(0);
    expect(service.getDogPicture()).rejects.toMatch('request failed');
    expect(service.getDogPicture).toHaveBeenCalledTimes(1);
  });
});