const isValidEmail = require("./emailValidator")

test ('It should return false when the email is invalid', ()=>{
    expect(isValidEmail("umutonikevine@gmail")).toBe(false);
})

test('It should return true when the email is valid', ()=>{
    expect(isValidEmail("umutonikevine2004@gmail.com")).toBe(true)
}

)
//email