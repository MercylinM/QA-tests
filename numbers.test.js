

const isEven = require("./numbers");

test ('isEven to equal to num % 2===0' , () =>{
    expect(isEven(8)).toBe(true);
});
