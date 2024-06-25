
const assert = require("assert");
const Accelerator = require("../class/accelerator.js");
const Engine = require("../class/engine.js");

describe("push(speed)", function(){
    it("should increase speed by 5 and accelerator should be pushed after engine is turned on.", ()=>{
        let engine = new Engine();
        let accelerator = new Accelerator(engine);
        engine.powerOn();
        let newSpeed = accelerator.push(10);
        assert.equal(newSpeed, 15);
    })
    it("cannot accelerate if engine is off", ()=>{
        let engine = new Engine();
        let accelerator = new Accelerator(engine);
        let newSpeed = accelerator.push(10);
        assert.equal(newSpeed, 0);
    })
});