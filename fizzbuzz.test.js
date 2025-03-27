
const fizzBuzz = require("./fizzbuzz")
test ('bring Fizz when its divided by 3', ()=>{
    expect(fizzBuzz(12)).toBe("Fizz");
}

)
test('bring Buzz when its divided by 5',()=>{
    expect(fizzBuzz(50)).toBe("Buzz");
}
)
test('bring FizzBuzz when it is both', ()=>{
    expect(fizzBuzz(90)).toBe("FizzBuzz")
}

)