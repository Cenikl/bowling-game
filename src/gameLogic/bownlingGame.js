import promptSync from 'prompt-sync';
import {takeTurn} from './userTurn.js';
import {bowlingGame} from '../modules/bowlingStats.js';
import {createGrid} from '../interfaces/createInterface.js';
import {calculateTotalScore} from './updateScore.js';

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
        `Frame number : `+bowlingGame.actualFrames+'\n'+
            `Current try : `+bowlingGame.actualTries+'\n'+
            `Total score : `+bowlingGame.actualScore+'\n'+
            `--------------------------------------------`);
    const input = prompt('Number of pins struck: ' );
    takeTurn(input, bowlingGame);

    while (bowlingGame.actualFrames >= 6) {
      console.clear();
      const result = calculateTotalScore(bowlingGame.pins);
      createGrid(bowlingGame.pins, result);
      console.log('Final score : ' + bowlingGame.actualScore);
      console.log('--------------------------------------------');
      
      const answer = prompt('Start a new game ? (Y/N) : ');
      if (answer.toUpperCase() === 'Y') {
        bowlingGame.initialize();
        console.clear();
      } else if (answer.toUpperCase() === 'N') {
        bowlingGame.initialize();
        return false;
      } else {
        console.clear();
        console.log('Invalid command, please try again !');
      }
    }
  }
}

export {mainGame};
