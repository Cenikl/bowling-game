import {InvalidInput} from '../errors/invalidInputs.js';
import {calculateScore} from '../gameLogic/updateScore.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
/**
 * Checks if a player throw is a strike.
 * @param {number} data - value of the player's throw.
 * @param {number} playerThrow - actual try of the player.
 * @return {boolean} True if strike, false otherwise.
 */
function isTurnStrike(data, playerThrow) {
  return data == 15 && playerThrow == 1;
}

/**
 * Checks if a player throw is a spare.
 * @param {number} data - value of the player's throw.
 * @param {number} playerThrow - actual try of the player.
 * @return {boolean} True if spare, false otherwise.
 */
function isTurnSpare(data, playerThrow) {
  return data == 0 && (playerThrow == 2 || playerThrow == 3);
}

/**
 * Checks if a player throw is valid.
 * @param {number} input - value of the player's throw.
 * @param {object} data - data of the ongoing game
 * @return {boolean} True if there are no errors
 */
function isTurnValid(input, data) {
  if (isNaN(input) || input == '') {
    throw new InvalidInput('Value should be number only!');
  }

  if (data.totalPins - input < 0) {
    throw new InvalidInput('There are only ' + data.totalPins + ' pins left');
  }
  return true;
}

/**
 * Checks if a player command is valid.
 * @param {number} input - value of the command.
 * @param {object} game - data of the ongoing game
 * @return {boolean} True or false depending on input
 */
function isGameCommandValid(input, game) {
  if (input.toString().toUpperCase() === 'Y') {
    game.initialize();
    console.clear();
    return true;
  } else if (input.toString().toUpperCase() === 'N') {
    game.initialize();
    return false;
  } else {
    console.clear();
    throw new InvalidInput('Invalid command, please try again !');
  }
}

/**
 * Checks if the input knocked down all pins, if yes then
 * Proceeds to calculate a spare
 * @param {number} input - value of the command.
 * @param {object} data - data of the ongoing game
 * @return {void} returns nothing
 */
function makeSpare(input, data) {
  if (isTurnSpare(data.totalPins - input, data.actualTries)) {
    data.pins.push(parseInt(input));
    if (data.actualFrames == 5) {
      while (data.bonusTry > 1) {
        const input = prompt('Bonus roll (' + data.bonusTry + '): ');
        try {
          isTurnValid(input, data);
        } catch (error) {
          console.clear();
          console.error('Error:', error.message);
          return;
        }
        data.pins.push(parseInt(input));
        data.bonusTry--;
      }
      data.actualScore = calculateScore(data).score;
      data.actualTries = 1;
      data.actualFrames++;
      return;
    }
    if (data.actualTries == 3) {
      data.actualScore = calculateScore(data).score;
      data.actualTries = 1;
      data.totalPins = 15;
      data.actualFrames++;
      return;
    }
    if (data.actualTries == 2) {
      data.pins.push('spare');
      data.actualScore = calculateScore(data).score;
      data.actualTries = 1;
      data.totalPins = 15;
      data.actualFrames++;
      return;
    }
  }
}

/**
 * Checks if the input is 15 and in the first try of the frame, if yes then
 * Proceeds to calculate a strike
 * @param {number} input - value of the command.
 * @param {object} data - data of the ongoing game
 * @return {void} returns nothing
 */
function makeStrike(input, data) {
  if (isTurnStrike(input, data.actualTries)) {
    data.pins.push(parseInt(input));
    if (data.actualFrames == 5) {
      while (data.bonusTry > 0) {
        const input = prompt('Bonus roll (' + data.bonusTry + '): ');
        try {
          isTurnValid(input, data);
        } catch (error) {
          console.clear();
          console.error('Error:', error.message);
          return;
        }
        data.pins.push(parseInt(input));
        data.bonusTry--;
      }
      data.actualScore = calculateScore(data).score;
      data.actualTries = 1;
      data.actualFrames++;
      return;
    }
    data.pins.push('strike');
    data.pins.push('strike');
    data.actualScore = calculateScore(data).score;
    data.actualTries = 1;
    data.actualFrames++;
    return;
  }
}

/**
 * Checks if the actual turn is a strike or spare, if no then
 * Proceeds to calculate the score
 * @param {number} input - value of the command.
 * @param {object} data - data of the ongoing game
 * @return {void} returns nothing
 */
function normalThrow(input, data) {
  if (
    !isTurnSpare(data.totalPins - input, data.actualTries) &&
    !isTurnStrike(input, data.actualTries)
  ) {
    data.pins.push(parseInt(input));
    data.totalPins -= parseInt(input);
    data.actualTries++;
    return;
  }
}

export {
  isTurnStrike,
  isTurnSpare,
  isTurnValid,
  isGameCommandValid,
  makeSpare,
  makeStrike,
  normalThrow,
};
