import promptSync from 'prompt-sync';
import {gameMenu} from './gameLogic/bownlingGame.js';
import {isValidcommand} from './utils/commandHelpers.js';
const prompt = promptSync();

/**
 * Launch the interface of the game
 * Serves as a main menu, to enter the game or use another feature (todo)
 * @return {void} return nothing
 */
function showMainMenu() {
  console.clear();
  console.log(`
    Welcome to the Bowling game simulator !
    Choose one of the following command :`);

  while (true) {
    console.log(`
        1 - Start the game
        2 - Exit
        `);
    const input = prompt('Input : ');

    try {
      if (isValidcommand(input)) {
        console.clear();
        gameMenu();
      } else if (!isValidcommand(input)) {
        return false;
      }
    } catch (error) {
      console.clear();
      console.error('Error:', error.message);
    }
  }
}

showMainMenu();
