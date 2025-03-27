
const {} = require ("./StringsUtils")
const { default: expect } = require("expect");
const isEven = require("./numbers");


test ("isEven 30%2 is equal to 0",  () =>{
   expect(isEven(30)) .toBe (true);

}
)


