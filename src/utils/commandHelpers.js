import {InvalidInput} from '../errors/invalidInputs.js';

/**
 * Checks if the command of the main menu is valid
 * @param {string} input a string which contains the user's command
 * @return {boolean} True or false or invalid input error
 */
const isValidcommand = (input) => {
  if (input == '1') {
    return true;
  } else if (input == '2') {
    return false;
  } else {
    console.clear();
    throw new InvalidInput('Please enter a valid command ');
  }
};
export {isValidcommand};
