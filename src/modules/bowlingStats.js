const createGameStats = () => {
  return {
    actualFrames: 1,
    totalPins: 15,
    actualTries: 1,
    actualScore: 0,
    strikesCount: 14,
    sparesCount: 14,
    bonusTry: 3,
    pins: [],

    initialize() {
      this.actualFrames = 1;
      this.totalPins = 15;
      this.actualTries = 1;
      this.actualScore = 0;
      this.strikesCount = 14;
      this.sparesCount = 14;
      this.bonusTry = 3;
      this.pins = [];
    },
  };
};

const bowlingGame = createGameStats();
export {bowlingGame};

