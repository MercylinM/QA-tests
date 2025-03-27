const { add, subtract, divide } = require("./math");


test('add 10 + 20 to equal 30', () => {
    expect(add(10, 20)).toBe(30);
});

test('subtract 40-20 to equal 20', () => {
    expect(subtract(40, 20)).toBe(20);
});

test('divide 40/20 to equal 2', () => {
    expect(divide(40, 20)).toBe(2);

})