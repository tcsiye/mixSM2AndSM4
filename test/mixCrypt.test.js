const {mixCrypt} = require('../index.js')

test('mix crypt', () => {
  expect(mixCrypt(1, 2)).toBe(3);
});
