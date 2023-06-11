import Calculator from './calculator';

test('the sum of a and b', () => {
  expect(Calculator.add(5, 2)).toBe(7);
});

test('the difference of a and b', () => {
  expect(Calculator.subtract(5, 2)).toBe(3);
});

test('the product of a and b', () => {
  expect(Calculator.multiply(5, 2)).toBe(10);
});

test('the quotient of a and b', () => {
  expect(Calculator.divide(5, 2)).toBeCloseTo(2.5);
});
