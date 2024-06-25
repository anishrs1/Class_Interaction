
class Engine {
    constructor(){
        this.power = "off";
    }
    powerOn() { 
        this.power = "on";
        return this.power;
    }
    powerOff() { 
        this.power = "off";
        return this.power;
    }
}
module.exports = Engine;