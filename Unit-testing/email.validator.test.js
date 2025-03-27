 const { default: expect } = require('expect')
const {} = require ('./email.Validator.js');
const isValidEmail = require('./email.Validator.js');

 test('valid email should return true', () =>{
   expect(isValidEmail('pheobe@example.com')) .toBe (true);
 }
)