class GuessingGame {
    constructor() {
        this.number;
    }

    setRange(min, max) {
//        var self = this;
        return this.number = ((function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
                rand = Math.round(rand);
                return rand;
        })(min, max));
//        console.log(this.number)
    }

    guess() {

    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;

        const number = 409;
        const game = new GuessingGame();
        game.setRange(0, 4048)