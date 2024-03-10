import {isSpare, isStrike} from '../utils/turnHelpers.js';
const calculateTotalScore = (data) => {
  const filteredData = data.filter((e) => e !== 0);
  const result = [];
  let sum = 0;

  for (let i = 0; i < filteredData.length; i++) {
    if (isStrike(filteredData[i])) {
      // If it scores strike, on the 1st try of the 5th frame
      if ( data.length >= 13 && (i+2 == filteredData.length-1 || i+3 == filteredData.length-1) ) {
        sum += 15 + filteredData[i+1] + filteredData[i+2] + filteredData[i+3];
        result.push(sum);
        i = filteredData.length;
        continue;
      }
      sum += 15 + filteredData[i+1] + filteredData[i+2] + filteredData[i+3];
      result.push(sum);
      continue;
    } else if ( isSpare(filteredData[i], filteredData[i+1], filteredData[i+2])) {
      sum += 15 + filteredData[i+3] + filteredData[i+4];
      result.push(sum);
      i = i+2;
      continue;
    } else if ( isSpare(filteredData[i] + filteredData[i+1] ) ) {
      sum += 15 + filteredData[i+2] + filteredData[i+3];
      result.push(sum);
      i = i+1;
      continue;
    } else {
      sum += filteredData[i] + filteredData[i+1] + filteredData[i+2];
      result.push(sum);
      i = i + 2;
      continue;
    }
  }

  return result;
};

const calculateScore = (stats) => {
  let sum = 0;
  const pinsZero = stats.pins.filter((e) => e !== 0);

  for (let i = 0; i < pinsZero.length; i++) {
    if (pinsZero[i] == 15 && stats.strikesCount > 0) {
      if ( stats.pins.length >= 13 && (i+2 == pinsZero.length-1 || i+3 == pinsZero.length-1) ) {
        sum += 15 + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0);
        i = pinsZero.length;
        continue;
      }
      sum += 15 + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0);
      stats.strikesCount--;
      continue;
    }
    if (pinsZero[i] + pinsZero[i+1] + pinsZero[i+2] == 15) {
      sum += 15 +( pinsZero[i+3] || 0) + (pinsZero[i+4] || 0);
      stats.sparesCount--;
      i = i+2;
      continue;
    }
    if (pinsZero[i] + pinsZero[i+1] == 15) {
      sum += 15 + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0);
      stats.sparesCount--;
      i = i+1;
      continue;
    } else {
      sum += (pinsZero[i] || 0) + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0);
      i = i + 2;
      continue;
    }
  }
  return sum;
};

export {calculateScore, calculateTotalScore};
