const fizzBuzz = require("./fizzbuzz")
test ('Buzz and return an output', ()=>{
    expect(fizzBuzz(40)).toBe("Buzz")
})

test('fizz and return an output', ()=>{
    expect(fizzBuzz(12)).toBe("Fizz")
}

)
