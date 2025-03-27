const {add, subtract, multiply, divide}= require("./math")

test ('bring an output of 20 when i add', ()=>{
    expect(add(20, 10)).toBe(30);
});

test('bring an output of 10 when i subtract', ()=>{
    expect(subtract(20, 10)).toBe(10);
});

test('bring an output of 200 when I multiply', ()=>{

    expect(multiply(20,10)).toBe(200);
});

test('bring an output of 2 when i divide', ()=>{
    expect(divide(20, 10)).toBe(2);
});