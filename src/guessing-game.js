class GuessingGame {
    constructor() {
        this.result = null;
      this.min = null;
      this.max = null;
        
    }

    setRange(min, max) {
//        var self = this;

//        console.log(this.number)
      this.min = min;
      this.max = max;
      
      return this;
    }

    guess() {
        
            this.result = ((function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
                rand = Math.round(rand);
                return rand;
        })(this.min, this.max));
//        console.log(this.result)
        return this.result;
//        console.log(this.number)
    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;

        const number = 409;
        const game = new GuessingGame();
        game.setRange(0, 4048);
        game.guess()
        