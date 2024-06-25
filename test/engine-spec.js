const assert = require("assert");
const Engine = require("../class/engine.js");

describe("powerOn()", function(){
    it("should return 'on' string.", ()=>{
        let engine1 = new Engine();
        let status = engine1.powerOn();
        assert.equal(status, "on");
    })
});
describe("powerOff()", function(){
    it("should return 'off' string.", () =>{
        let engine2 = new Engine();
        let status1 = engine2.powerOff();
        assert.equal(status1, "off");
    })
});