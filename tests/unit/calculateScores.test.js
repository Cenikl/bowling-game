import {calculateScore} from '../../src/gameLogic/updateScore.js';
import {makeSpare, makeStrike, normalThrow} from '../../src/utils/turnHelpers.js';
import {bowlingGame} from '../../src/modules/bowlingStats.js';

describe('Calculate the score of the game', () => {
  beforeEach(() => {
    bowlingGame.initialize();
  });
  it('should make a normal throw', () => {
    normalThrow(1, bowlingGame);
    expect(bowlingGame.pins.length).toEqual(1);
    expect(bowlingGame.pins).toEqual([1]);
    expect(bowlingGame.totalPins).toEqual(14);
  });
  it('should not make a normal throw', () => {
    normalThrow(15, bowlingGame);
    expect(bowlingGame.pins.length).toEqual(0);
  });
  it('should make a strike', () => {
    makeStrike(15, bowlingGame);
    expect(bowlingGame.pins.length).toEqual(3);
    expect(bowlingGame.pins).toEqual([15, 'strike', 'strike']);
  });
  it('should make a spare', () => {
    bowlingGame.pins.push(...[1, 2]);
    bowlingGame.actualTries = 3;
    bowlingGame.totalPins = 12;
    makeSpare(12, bowlingGame);
    expect(bowlingGame.pins.length).toEqual(3);
    expect(bowlingGame.pins).toEqual([1, 2, 12]);
    bowlingGame.initialize();
    bowlingGame.pins.push(8);
    bowlingGame.actualTries = 2;
    bowlingGame.totalPins = 7;
    makeSpare(7, bowlingGame);
    expect(bowlingGame.pins.length).toEqual(3);
    expect(bowlingGame.pins).toEqual([8, 7, 'spare']);
  });
  it('should return maximum points on frames', () => {
    const scores = [15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 15, 15, 15];
    bowlingGame.pins.push(...scores);
    const actual = calculateScore(bowlingGame).total;
    const expected = [60, 120, 180, 240, 300];
    expect(actual).toEqual(expected);
  });
  it('should return lowest points on frames', () => {
    const scores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    bowlingGame.pins.push(...scores);
    const actual = calculateScore(bowlingGame).total;
    const expected = [3, 6, 9, 12, 15];
    expect(actual).toEqual(expected);
  });
  it('should return normal points on frames', () => {
    const scores = [15, 'strike', 'strike', 8, 1, 2, 1, 2, 12, 6, 4, 1, 15, 8, 2, 3];
    bowlingGame.pins.push(...scores);
    const actual = calculateScore(bowlingGame).total;
    const expected = [26, 37, 62, 73, 101];
    expect(actual).toEqual(expected);
  });
  it('should return normal points 2 on frames', () => {
    bowlingGame.pins = [15, 'strike', 'strike', 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1];
    const actual = calculateScore(bowlingGame).score;
    const expected = 27;
    expect(actual).toEqual(expected);
  });
  it('should return maximum points on total', () => {
    bowlingGame.pins = [15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 'strike', 'strike',
      15, 15, 15, 15];
    const actual = calculateScore(bowlingGame).score;
    const expected = 300;
    expect(actual).toEqual(expected);
  });
  it('should return lowest points on total', () => {
    bowlingGame.pins = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const actual = calculateScore(bowlingGame).score;
    const expected = 15;
    expect(actual).toEqual(expected);
  });
  it('should return normal points on frames', () => {
    bowlingGame.pins = [15, 'strike', 'strike', 8, 1, 2, 1, 2, 12, 6, 4, 1, 15, 8, 2, 3];
    const actual = calculateScore(bowlingGame).score;
    const expected = 101;
    expect(actual).toEqual(expected);
  });
  it('should return correct values on each frame', () => {
    bowlingGame.initialize();
    bowlingGame.pins.push(...[15, 'strike', 'strike', 8, 1, 2]);
    let actual = calculateScore(bowlingGame).score;
    let expected = 37;
    expect(actual).toEqual(expected);

    bowlingGame.pins.push(...[1, 2, 12, 6, 4, 1]);
    actual = calculateScore(bowlingGame).score;
    expected = 73;
    expect(actual).toEqual(expected);
  });
});
