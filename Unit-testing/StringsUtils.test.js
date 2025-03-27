const { default: expect } = require("expect")
const reverseString = require("./StringsUtils")


test ('reverseString "John" to equlal "nhonJ', () => {
   expect(reverseString("John")) .toBe ("nhoJ");

}
)