class Accelerator {
    constructor(engine){
        this.engine = engine;
    }
    push(speed) {
        if(this.engine.power === "on"){
            return speed + 5;
        }
        else{
            return 0;
        }
    }

}

module.exports = Accelerator;