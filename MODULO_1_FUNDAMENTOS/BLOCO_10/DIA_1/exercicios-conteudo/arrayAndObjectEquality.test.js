const { arr, obj } = require('./arrayAndObjectEquality.js');

test('array and object equality', () => {
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});