import caesarCipher from './caesarCipher';

test('shifts lowercase letters', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('maintains the same case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
  expect(caesarCipher('XyZ', 1)).toBe('YzA');
});

test('does not shift punctuation', () => {
  expect(caesarCipher('abc!', 1)).toBe('bcd!');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles large shift values', () => {
  expect(caesarCipher('abc', 27)).toBe('bcd');
});

test('handles negative shift values', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
  expect(caesarCipher('YzA', -1)).toBe('XyZ');
});
