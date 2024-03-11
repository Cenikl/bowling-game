import promptSync from 'prompt-sync';
import {takeTurn} from './user-turn.js';
import {bowlingGame} from '../modules/bowling-stats.js';
import {createGrid} from '../interfaces/create-interface.js';
import {calculateScore} from './update-score.js';
import {isGameCommandValid} from '../utils/turn-helpers.js';

const userInput = promptSync();

/**
 * Gives an interface to view his score and input pins to be knocked.
 * Until the frame is above 5, the player need to input values, otherwise
 * Calculte scores and show results
 * @return {void} returns nothing, going back to main menu
 */
function gameMenu() {
  console.clear();
  console.log('Game started !');

  while (true) {
    console.log(
        `Frame number : ` +
        bowlingGame.actualFrames +
        '\n' +
        `Current try : ` +
        bowlingGame.actualTries +
        '\n' +
        `Total score : ` +
        bowlingGame.actualScore +
        '\n' +
        `--------------------------------------------`,
    );
    const input = userInput('Number of pins struck: ');
    takeTurn(input, bowlingGame);
    while (bowlingGame.actualFrames >= 6) {
      const result = calculateScore(bowlingGame).total;
      createGrid(bowlingGame.pins, result);
      console.log('Final score : ' + bowlingGame.actualScore);
      console.log('--------------------------------------------');

      const answer = userInput('Start a new game ? (Y/N) : ');
      try {
        if (!isGameCommandValid(answer, bowlingGame)) {
          console.clear();
          return false;
        }
      } catch (error) {
        console.error('Error :', error.message);
      }
    }
  }
}

export {gameMenu};
