const sum = require('./sum');

test('addition of two number', () => {
    expect(sum(1, 2)).toBe(3);
})