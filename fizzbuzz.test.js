const fizzBuzz = require('./fizzbuzz.js');

test('returns FizzBuzz for multiple of 3 and 5', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
})
test('returns Fizz for multipmes of 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('returns Buzz for multipmes of 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})

test('returns number as astring for non multiples of 3 and 5', () => {
   expect(fizzBuzz(7)).toBe("7");
})