

const isValidEmail = require("./emailValidator")

test("valid email should return true ",() => {
    expect(isValidEmail("esther@gmail.com")).toBe(true)
})