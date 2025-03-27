const reverseString = require("./stringUtils");

test('reverseString "John" to equlal "nhonJ', () => {
    expect(reverseString("John")).toBe("nhoJ");

})