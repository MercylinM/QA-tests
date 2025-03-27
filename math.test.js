const  {add, subtract,multiply,divide} = require('./math')
test('add 2+3 to equal  5',() => {
    expect (add (2,3)).toBe(5);
})
test('subtract 4-1 to equal 3',() =>{
    expect(subtract(4,1)).toBe(3);
})
test('multiply 2*3 to equal 6',()=> {
    expect(multiply(2,3)).toBe(6);
})
test ('throws error when dividing by zero',() => {
    expect(()=> divide(4,0)).toThrow('Cannot divide by zero');
  });
