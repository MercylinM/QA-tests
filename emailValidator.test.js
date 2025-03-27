const isValidEmail = require("./emailValidator.js");

test('valid email should return true', () => {
    expect(isValidEmail('pheobe@example.com')).toBe(true);
})