const {add, subtract, sum} = require('./calculator.js');

test('adds 0 and 0', () => {
  const result = add(0, 0);

  expect(result).toEqual(0);
});

test('adds 2 and 2', () => {
  const result = add(2, 2);

  expect(result).toEqual(4);
});

test('adds positive numbers', () => {
  const result = add(2, 6);

  expect(result).toEqual(8);
});

test('subtracts numbers', () => {
  const result = subtract(10, 4);

  expect(result).toEqual(6);
});

test('computes sum of empty array', () => {
  const result = sum([]);

  expect(result).toEqual(0);
});

test('computes sum of single number', () => {
  const result = sum([7]);

  expect(result).toEqual(7);
});

test('computes sum of two numbers', () => {
  const result = sum([7, 11]);

  expect(result).toEqual(18);
});

test('computes sum of many numbers', () => {
  const result = sum([1,3,5,7,9]);

  expect(result).toEqual(25);
});