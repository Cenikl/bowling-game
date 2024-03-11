import promptSync from 'prompt-sync';
import {takeTurn} from './userTurn.js';
import {bowlingGame} from '../modules/bowlingStats.js';
import {createGrid} from '../interfaces/createInterface.js';
import {calculateScore} from './updateScore.js';
import {isGameCommandValid} from '../utils/turnHelpers.js';

const prompt = promptSync();

/**
 * Gives an interface to view his score and input pins to be knocked.
 * Until the frame is above 5, the player need to input values, otherwise
 * Calculte scores and show results
 * @return {void} returns nothing, going back to main menu
 */
function mainGame() {
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
    const input = prompt('Number of pins struck: ');
    takeTurn(input, bowlingGame);
    while (bowlingGame.actualFrames >= 6) {
      const result = calculateScore(bowlingGame).total;
      createGrid(bowlingGame.pins, result);
      console.log('Final score : ' + bowlingGame.actualScore);
      console.log('--------------------------------------------');

      const answer = prompt('Start a new game ? (Y/N) : ');
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

export {mainGame};
