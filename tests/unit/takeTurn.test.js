import {isGameCommandValid, isTurnValid} from '../../src/utils/turnHelpers.js';
import {bowlingGame} from '../../src/modules/bowlingStats.js';
import {InvalidInput} from '../../src/errors/invalidInputs.js';

describe('User takes turn with inputs', () => {
  bowlingGame.initialize();
  it('throws InvalidInput for non-number input', () => {
    expect(isTurnValid(3, bowlingGame)).toEqual(true);
  });

  it('throws InvalidInput for non-number input', () => {
    expect(() => {
      isTurnValid('abc');
    }).toThrow(InvalidInput);
    expect(() => {
      isTurnValid('abc');
    }).toThrow('Value should be number only!');
  });

  it('throws InvalidInput for blankInput', () => {
    expect(() => {
      isTurnValid('');
    }).toThrow(InvalidInput);
    expect(() => {
      isTurnValid('');
    }).toThrow('Value should be number only!');
  });

  it('throws InvalidInput if exceeding 15', () => {
    expect(() => {
      isTurnValid(20, bowlingGame);
    }).toThrow(InvalidInput);
    expect(() => {
      isTurnValid(20, bowlingGame);
    }).toThrow('There are only 15 pins left');
  });

  it('throws InvalidInput if pins are not enough', () => {
    bowlingGame.totalPins = 5;
    expect(() => {
      isTurnValid(6, bowlingGame);
    }).toThrow(InvalidInput);
    expect(() => {
      isTurnValid(6, bowlingGame);
    }).toThrow('There are only 5 pins left');
  });

  it('throws InvalidInput if ', () => {
    bowlingGame.totalPins = 5;
    expect(() => {
      isTurnValid(6, bowlingGame);
    }).toThrow(InvalidInput);
    expect(() => {
      isTurnValid(6, bowlingGame);
    }).toThrow('There are only 5 pins left');
  });
});

describe('Command after the total score', () => {
  bowlingGame.initialize();
  it('should be Y or N only', () => {
    expect(isGameCommandValid('y', bowlingGame)).toEqual(true);
    expect(isGameCommandValid('n', bowlingGame)).toEqual(false);
  });
  it('should be Y or N only', () => {
    expect(() => {
      isGameCommandValid(6, bowlingGame);
    }).toThrow(InvalidInput);
    expect(() => {
      isGameCommandValid(6, bowlingGame);
    }).toThrow('Invalid command, please try again !');
  });
});
