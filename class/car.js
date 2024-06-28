const Accelerator = require("./accelerator");
const Brake = require("./brake");
const Door = require("./door");
const Engine = require("./engine");

class Car {
    

    constructor(engineStatus) {
        this.speed = 0;
        this.leftdoor = new Door();
        this.rightdoor = new Door();
        this.engine = new Engine();
        this.accelerator = new Accelerator(this.engine);
        //engineStatus = this.engine.powerOn();
        this.brake = new Brake();
        this.engineStatus = "off";
    }
   

    start() {
        this.engineStatus = this.engine.powerOn();
    }

    stop() {
        this.engineStatus = this.engine.powerOff();
        this.speed = 0;
    }

    accelerate() {
        if(this.engineStatus != "on"){
        this.engine.powerOn();
        }
        this.speed = this.accelerator.push(this.speed);

    }

    applyBrake() {
        this.speed = this.brake.push(this.speed);
    }
}

module.exports = Car;
