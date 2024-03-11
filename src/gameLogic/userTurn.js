import {
  normalThrow,
  makeSpare,
  isTurnValid,
  makeStrike,
} from '../utils/turnHelpers.js';
import {calculateScore} from './updateScore.js';

/**
 * Emulates the turn of the player by calculating scores based on input
 * Checks for incorrect or too much input too
 * @param {number} userPrompt the user's input value
 * @param {object} stats statisitics of the actual game
 * @return {void} returns nothing and clears console
 */
const takeTurn = (userPrompt, stats) => {
  try {
    isTurnValid(userPrompt, stats);
  } catch (error) {
    console.clear();
    console.error('Error:', error.message);
    return;
  }
  normalThrow(userPrompt, stats);
  makeStrike(userPrompt, stats);
  makeSpare(userPrompt, stats);

  if (stats.actualTries > 3) {
    stats.actualScore = calculateScore(stats).score;
    stats.actualTries = 1;
    stats.totalPins = 15;
    stats.actualFrames++;
    return;
  }
};

export {takeTurn};
