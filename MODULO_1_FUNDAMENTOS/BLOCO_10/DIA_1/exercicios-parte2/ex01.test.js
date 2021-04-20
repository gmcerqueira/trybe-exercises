/* eslint-disable max-lines-per-function */
const { encode, decode } = require('./ex01.js');

describe('Testa funções encode e decode', () => {
  test('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Converte a,e,i,o,u em 1,2,3,4,5', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('Converte 1,2,3,4,5 em a,e,i,o,u', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('Converte b,c,a,e,i,o,u,y,z em b,c,1,2,3,4,5,y,z', () => {
    expect(encode('bcaeiouyz')).toEqual('bc12345yz');
  });
  test('Converte 0,1,2,3,4,5,6 em 0,a,e,i,o,u,6', () => {
    expect(decode('0123456')).toEqual('0aeiou6');
  });
  test('String retornada têm o mesmo tamanho que a string passada como parâmetro ', () => {
    expect(encode('Este é um teste').length).toEqual(15);
    expect(decode('2st2 é 5m t2st2').length).toEqual(15);
  });
});