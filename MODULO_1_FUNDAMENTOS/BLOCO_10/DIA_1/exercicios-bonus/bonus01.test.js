const searchEmployee = require('./bonus01.js');

describe('Testes da função searchEmployee', () => {
  test('Testa se função é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('Testa retornos válidos da função', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('8579-6', 'specialties')).toEqual(['UX', 'Design']);
  });
  test('Testa retorno de ID inválido', () => {
    expect(() => {
      searchEmployee('1234-5', 'firstName');
    }).toThrow('ID não identificada');
  });
  test('Testa retorno de especialidade inválido', () => {
    expect(() => {
      searchEmployee('8579-6', 'birthday');
    }).toThrow('Informação indisponível');
  });
});