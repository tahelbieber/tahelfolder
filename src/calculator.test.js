
const { add, subtract, multiply, divide } = require('./calculator');

test('Test addition', () => {
  expect(add(1, 2)).toBe(3);
});

test('Test subtraction', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('Test multiplication', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('Test division', () => {
  expect(divide(10, 2)).toBe(5);
});
