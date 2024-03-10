const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const titles = ["1", "2", "3", "4", "5"];

function createLine(length) {
    return '='.repeat(length);
}

function createSequenceRow(numbers) {
    return `|  ${numbers.join('  |  ')}  |`;
}

const totalLength = (numbers.length * 4) + (titles.length * 4) + (titles.length + 1);


const titleRow = `${createLine(totalLength + 14)}\n|${' '.repeat((totalLength - 32) / 2)}Sequence${' '.repeat((totalLength - 25))}|\n${createLine(totalLength +14)}`;

const sequenceRow = createSequenceRow(numbers);

const output = `${titleRow}\n${sequenceRow}\n${createLine(totalLength+14)}`;

console.log(output);
