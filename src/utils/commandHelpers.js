import {InvalidInput} from '../errors/invalidInputs.js'

const isValidcommand = (input) => {
  if (input == 1) {
    mainGame();
    console.clear();
  } else if (input == 2) {
    console.clear();
    return false;
  } else {
    console.clear();
    throw new InvalidInput("Please enter a valid command ");
  }
    
}
export { isValidcommand }