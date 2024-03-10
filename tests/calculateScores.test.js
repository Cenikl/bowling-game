import {bowlingGame} from '../src/modules/bowlingStats.js'
import {calculateTotalScore,calculateScore} from '../src/gameLogic/updateScore.js'

describe('Calculate the score of the game', () => {
    it('should return an array with total score of each frame', () => {
      const scores = [15,0,0 ,15,0,0, 15,0,0, 15,0,0 ,15,15,15,15];
      const actual = calculateTotalScore(scores)
      const expected = [60,120,180,240,300]
      expect(actual).toEqual(expected);
    });
  

  });