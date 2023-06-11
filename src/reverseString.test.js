import reverseString from './reverseString';

test('the string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});
