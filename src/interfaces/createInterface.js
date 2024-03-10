import {createLine, createSequenceRow, createSequenceTitle} from '../utils/interfaceHelpers.js';

const titles = ['1', '2', '3', '4', '5'];

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
