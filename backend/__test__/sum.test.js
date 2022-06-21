const sum = require("../sum")
test.only("2 + 2 to equal 4, add",()=>{
    expect(sum(2,2)).toBe(4);
});

test("add",()=>{
    expect(sum(2,4)).toBe(6);
});