const assert = require("assert");
const Brake = require("../class/brake.js");

describe("push(speed)", function(){
    it("should return speed reduced by 5.", ()=>{
        let brake = new Brake();
        let result1 = brake.push(15);
        assert.equal(result1, 10);
    })

    it("if speed less than 5, should return 0.", ()=>{
        let brake1 = new Brake();
        let result2 = brake1.push(4);
        assert.equal(result2, 0);
    })
});