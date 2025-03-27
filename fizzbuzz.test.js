const fizzBuzz = require("./fizzbuzz")

test('should display buzz if the number is a multiple of 5', () => {
  expect(fizzBuzz(40)).toBe("Buzz")
})

test('should display fizz if the number is a multiple of 3', () => {
  expect(fizzBuzz(39)).toBe("Fizz")
})

test('should display fizzbuzz if the number is a multiple of both 5 and 3', () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz")
})



