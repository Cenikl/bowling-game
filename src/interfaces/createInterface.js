import {createLine, createSequenceRow, createSequenceTitle} from '../utils/interfaceHelpers.js';

const titles = ['1', '2', '3', '4', '5'];

/**
 * Create a table-like interface that shows the result of the game
 * @param {Array} data an array which contains all user's input 
 * @param {Array} result an array which contains all frame's values
 * @return {void} return nothing, outputs the table
 */
const createGrid = (data, result) => {
  const totalLength = (data.length * 4) + (titles.length * 4) + (titles.length + 1);
  const line = createLine(totalLength + 7);
  const output = `${line}\n`+
                 `${createSequenceTitle(titles)}\n`+
                 `${line}\n${createSequenceRow(data)}\n`+
                 `${line}\n${createSequenceTitle(result)}\n`+
                 `${line}`;
  console.log(output);
};

export {createGrid};
