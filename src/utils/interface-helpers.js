/**
 * Create lines of '-' which depends on length provided
 * @param {number} length - total length of the line
 * @return {String} a string of lines
 */
const createLine = (length) => '-'.repeat(length);

/**
 * Create blank spaces which depends on length provided
 * @param {number} length - total length of the blank space
 * @return {String} a string of blank spaces
 */
const createBlank = (length) => ' '.repeat(length);

/**
 * Create the sequence of all the user's input
 * @param {Array} data - An array of numbers which holds all user's input
 * @return {String} a string with all the numbers
 */
const createSequenceRow = (data) => {
  let result = ``;
  data.forEach((e) => {
    if (e.toString() === 'strike') {
      result += `|${createBlank(1)} X ${createBlank(1)}`;
    } else if (e.toString() === 'strike') {
      result += `|${createBlank(1)} / ${createBlank(1)}`;
    } else if (e.toString().length === 2) {
      result += `|${createBlank(1)}${e} ${createBlank(1)}`;
    } else {
      result += `|${createBlank(1)} ${e} ${createBlank(1)}`;
    }
  });
  return result + `|`;
};

/**
 * Create the sequence the title and user's input result on each frame
 * @param {Array} data - An array of numbers
 * @return {String} a string of numbers
 */
const createSequenceTitle = (data) => {
  let result = ``;
  data.forEach((e) => {
    if (e.toString().length === 3) {
      result += `|${createBlank(6)} ${e} ${createBlank(6)}`;
    } else if (e.toString().length === 2) {
      result += `|${createBlank(6)} ${e} ${createBlank(7)}`;
    } else {
      result += `|${createBlank(7)} ${e} ${createBlank(7)}`;
    }
  });
  return result + `|`;
};

export {createLine, createSequenceRow, createSequenceTitle};
