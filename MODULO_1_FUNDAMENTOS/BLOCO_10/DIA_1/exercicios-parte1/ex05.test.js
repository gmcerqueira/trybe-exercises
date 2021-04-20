const { obj1, obj2, obj3 } = require("./ex05.js");

describe('Verifica igualdade entre objetos', () => {
  test('obj1 = obj2', () => {
    expect(obj1).toMatchObject(obj2);
  });
  test('obj1 != obj3', () => {
    expect(obj1).not.toMatchObject(obj3);
  });
  test('obj2 != obj3', () => {
    expect(obj2).not.toMatchObject(obj3);
  });
});