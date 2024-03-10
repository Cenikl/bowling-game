import promptSync from 'prompt-sync';
import {mainGame} from './gameLogic/bownlingGame.js';

const prompt = promptSync();

/**
 * Launch the interface of the game
 * Serves as a main menu, to enter the game or use another feature (todo)
 * @return {void} return nothing
 */
function showMainMenu() {
  console.clear()
  console.log(`
    Welcome to the Bowling game simulator !
    Choose one of the following command :`);

  while (true) {
    console.log(`
        1 - Start the game
        2 - Exit
        `);
    const input = prompt('Input : ');

    if (input == 1) {
      mainGame();
      console.clear();
    } else if (input == 2) {
      console.clear();
      return false;
    } else {
      console.clear();
      console.log('Please enter a valid command :');
    }
  }
}

showMainMenu();
