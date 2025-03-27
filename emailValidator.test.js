const isValidEmail = require("./emailValidator")

test('should return false if the email is invalid', () => {
  expect(isValidEmail("Mercylin@gmail")).toBe(false)
})

test('should return true if the email is valid', () => {
    expect(isValidEmail("mercylin@gmail.com")).toBe(true)
})
