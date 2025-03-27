const isEven = require("./numbers.js");


test("isEven 30%2 is equal to 0", () => {
    expect(isEven(30)).toBe(true);
})