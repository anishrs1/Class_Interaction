const {expect} = require('chai');
const assert = require("assert");
const Car = require("../class/car.js");

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

