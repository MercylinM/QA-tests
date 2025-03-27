const { default: expect } = require("expect")
const reverseString = require("./stringUtils")

test('should reverse a string', () => {
  expect(reverseString("mercy")).toBe("ycrem");
});
