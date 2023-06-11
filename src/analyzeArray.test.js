import analyzeArray from './analyzeArray';

test('the average of the array', () => {
  expect(analyzeArray([2, 6]).average).toBe(4);
});

test('the min of the array', () => {
  expect(analyzeArray([5, 2]).min).toBe(2);
});

test('the max of the array', () => {
  expect(analyzeArray([5, 2]).max).toBe(5);
});

test('the length of the array', () => {
  expect(analyzeArray([5, 2]).length).toBe(2);
});
