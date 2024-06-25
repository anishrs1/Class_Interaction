const assert = require("assert");
const Door = require("../class/door.js");
const { describe } = require("mocha");

describe("open()", function(){
    it("should return 'open' string.", ()=>{
        let door = new Door();
        let result1 = door.open();
        assert.equal(result1, "open");
    })
    
});
describe("close()", function(){
    it("should return 'close' string.", () =>{
        let door1 = new Door();
        let result2 = door1.close();
        assert.equal(result2, "close");
    })
});
