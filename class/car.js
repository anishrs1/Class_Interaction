const Accelerator = require("./accelerator");
const Brake = require("./brake");
const Door = require("./door");
const Engine = require("./engine");

class Car{
    constructor(){
        this.speed = 0;
        this.leftdoor = new Door();
        this.rightdoor = new Door();
        this.engine = new Engine();
        this.accelerator = new Accelerator(this.engine);
        this.engine.powerOn();
        this.brake = new Brake();
    }
}

module.exports = Car;
