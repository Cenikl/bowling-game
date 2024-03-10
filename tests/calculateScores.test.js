import {calculateTotalScore,calculateScore} from '../src/gameLogic/updateScore.js';
import {bowlingGame} from '../src/modules/bowlingStats.js'

describe('Calculate the score of the game', () => {
    it('should return maximum points on frames', () => {
      const scores = [15,0,0 ,15,0,0, 15,0,0, 15,0,0 ,15,15,15,15];
      const actual = calculateTotalScore(scores)
      const expected = [60,120,180,240,300]
      expect(actual).toEqual(expected);
    });
    it('should return lowest points on frames', () => {
      const scores = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      const actual = calculateTotalScore(scores)
      const expected = [3,6,9,12,15]
      expect(actual).toEqual(expected);
    });
    it('should return normal points on frames', () => {
      const scores = [15,0,0,8,1,2,1,2,12,6,4,1,15,8,2,3];
      const actual = calculateTotalScore(scores)
      const expected = [26,37,62,73,101]
      expect(actual).toEqual(expected);
    });

    it('should return maximum points on total', () => {
      bowlingGame.pins = [15,0,0 ,15,0,0, 15,0,0, 15,0,0 ,15,15,15,15];
      const actual = calculateScore(bowlingGame)
      const expected = 300
      expect(actual).toEqual(expected);
    });
    it('should return lowest points on total', () => {
      bowlingGame.pins = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      const actual = calculateScore(bowlingGame)
      const expected = 15
      expect(actual).toEqual(expected);
    });
    it('should return normal points on frames', () => {
      bowlingGame.pins = [15,0,0,8,1,2,1,2,12,6,4,1,15,8,2,3];
      const actual = calculateScore(bowlingGame)
      const expected = 101
      expect(actual).toEqual(expected);
    });
    it('should return correct values on tries', () => {
      bowlingGame.initialize();
      bowlingGame.pins.push(...[15,0,0,8,1,2])
      //bowlingGame.pins = [15,0,0,8,1,2,1,2,12,6,4,1,15,8,2,3];
      let actual = calculateScore(bowlingGame)
      let expected = 37
      expect(actual).toEqual(expected);

      bowlingGame.pins.push(...[1,2,12,6,4,1])
      actual = calculateScore(bowlingGame);
      expected = 73
      expect(actual).toEqual(expected);
    });
});