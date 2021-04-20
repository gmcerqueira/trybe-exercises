const myFizzBuzz = require('./ex04.js');

describe('Testa função myFizzBuzz', () => {
  test('Verifica o retorno de número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  
  test('Verifica o retorno de número é divisível por 3', () => {
    expect(myFizzBuzz(12)).toEqual('fizz');
  });

  test('Verifica o retorno de número é divisível por 5', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });

  test('Verifica o retorno de número não divisível por 3 e 5', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  test('Verifica o retorno de um parâmetro que não é um número', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});