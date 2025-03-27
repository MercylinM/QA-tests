// const fizzBuzz =require('./fizzbuzz.js')

// test('if 15%3===0 && 15%5===0 equal to fuzzbuzz',() => {
//     expect(fizzBuzz (15)).toBe("Fizz") ;
//     expect(fizzBuzz (15)).toBe("Buzz");
//     expect (fizzBuzz(45)).toBe("Fizz");
// })
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