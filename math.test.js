const { add, subtract, multiply, divide } = require("./math")

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplys 2 * 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});
