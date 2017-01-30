class GuessingGame {
    constructor() {
      this.result = null;
      this.min = null;
      this.max = null;       
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      
      return this;
    }

    guess() {
        this.result = Math.round((this.min + this.max) / 2);

        return this.result;
    }

    lower() {
        this.max = this.result;

        return this;
    }

    greater() {
        this.min = this.result;

        return this;
    }
}

module.exports = GuessingGame;

        const number = 409;
        const game = new GuessingGame();
        game.setRange(0, 4048);
        game.guess()
        