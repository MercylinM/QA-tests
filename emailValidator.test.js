const isValidEmail = require("./emailValidator.js");

test('valid email should return true', () => {
    expect(isValidEmail('pheobe@example.com')).toBe(true);
    expect(isValidEmail('pheobe@examplecom')).toBe(false);
    expect(isValidEmail('pheobeexample.com')).toBe(false);
    expect(isValidEmail('pheobeexamplecom')).toBe(false);
})