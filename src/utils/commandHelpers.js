import {InvalidInput} from '../errors/invalidInputs.js'

const isValidcommand = (input) => {
  if (input == "1") {
    return true;
  } else if (input == "2") {
    return false;
  } else {
    console.clear();
    throw new InvalidInput("Please enter a valid command ");
  }
    
}
export { isValidcommand }