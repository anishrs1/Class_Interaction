
class Brake {
    push(speed) {
        if (speed < 5) {
            return 0;
        }
        else {
            return speed - 5;
        }
    }
}
module.exports = Brake;