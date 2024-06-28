const {expect} = require('chai');
const assert = require("assert");
const Car = require("../class/car.js");
const { captureRejectionSymbol } = require('events');

describe("checks if left door is created.", function(){
    it("should check that left door exists.", ()=>{
        let car = new Car();
        expect(car.leftdoor).to.exist;
    })
});

describe("checks if right door is created.", function(){
    it("should check that right door exists.", ()=>{
        let car = new Car();
        expect(car.rightdoor).to.exist;
    })
});

describe("checks if left door is open or close.", function(){
    it("should check that left door is open or close.", ()=>{
        let car = new Car();
        let leftdoor1 = car.leftdoor.open();
        assert.equal(leftdoor1,"open");
        let leftdoor2 = car.leftdoor.close();
        assert.equal(leftdoor2,"close");
    })
});

describe("checks if right door is open or close.", function(){
    it("should check that right door is open or close.", ()=>{
        let car = new Car();
        let rightdoor1 = car.rightdoor.open();
        assert.equal(rightdoor1,"open");
        let rightdoor2 = car.rightdoor.close();
        assert.equal(rightdoor2,"close");
    })
});

describe("should test car's acceleration.", function(){
    it("should accelerate speed by 5.", ()=>{
        let car = new Car();
        car.start();
        let speed1 = car.speed;
        car.speed = car.accelerator.push(car.speed);
        let speed2 = car.speed;
        assert.equal(speed2, speed1 + 5);
        car.speed = car.brake.push(car.speed);
        let speed3 = car.speed;
        assert.equal(speed3, speed1);
    })

});
describe("cannot accelerate if car engine is off", function(){
    it("car starts running and then afterwards cannot accelerate because engine is turned off.", ()=>{
        let car1 = new Car();
        car1.start();
        let speed1 = car1.speed;
        car1.speed = car1.accelerator.push(car1.speed);
        let speed2 = car1.speed;
        assert.equal(speed2, speed1 + 5);
        car1.engine.powerOff();
        car1.speed = car1.accelerator.push(car1.speed);
        let speed3 = car1.speed;
        assert.equal(speed3,0);
    })
});

describe("start function should turn on the engine.", function(){
    it("should turn on car's engine.", ()=>{
        let car = new Car();
        car.start();
        assert.equal(car.engineStatus, "on");
    })
});

describe("stop function should turn off the engine and set speed equal to zero.", function(){
    it("should turn off car's engine.", ()=>{
        let car = new Car();
        if(car.engineStatus === "off") {
            car.start();
        }
        car.stop();
        assert.equal(car.engineStatus,"off");
        assert.equal(car.speed, 0);

    })
});

describe("accelerate function should turn on the engine if it's off and increase speed by 5.", function(){
    it("should turn on car's engine if it's off.", ()=>{
        let car = new Car();
        if(car.engineStatus === "off") {
            car.start();
        }
        assert.equal(car.engineStatus,"on");
        let prevSpeed = car.speed;
        car.accelerate();
        assert.equal(car.speed, prevSpeed+5);
    })
});

describe("brake function should decrease speed by 5.", function(){
    it("should decrease speed by 5.", ()=>{
        let car = new Car();
        if(car.engineStatus === "off") {
            car.start();
        }
        assert.equal(car.engineStatus,"on");
        
        car.accelerate();
        car.accelerate();
        car.accelerate();
        let prevSpeed = car.speed;
        car.applyBrake();
        assert.equal(car.speed, prevSpeed-5);
    })
});

