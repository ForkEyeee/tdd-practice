import capitalize from './capitalize';

test('first letter of keyboard is capitalized', () => {
  expect(capitalize('keyboard')).toBe('Keyboard');
});
