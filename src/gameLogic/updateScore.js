/**
 * Calculate scores of each frame
 * @param {object} stats an object which contains the current games stats
 * @return {object} returns an object with the total score and the total of each frame
 */
const calculateScore = (stats) => {
  let sum = 0;
  const result = [];
  const pinsZero = stats.pins.filter((e) => e !== 'spare' && e !== 'strike');

  for (let i = 0; i < pinsZero.length; i++) {
    if (pinsZero[i] == 15 && stats.strikesCount > 0) {
      if (stats.pins.length >= 13 &&
        (i + 2 == pinsZero.length - 1 || i + 3 == pinsZero.length - 1)) {
        sum +=
          15 +
          (pinsZero[i + 1] || 0) +
          (pinsZero[i + 2] || 0) +
          (pinsZero[i + 3] || 0);
        i = pinsZero.length;
        result.push(sum);
        continue;
      }
      sum +=
        15 +
        (pinsZero[i + 1] || 0) +
        (pinsZero[i + 2] || 0) +
        (pinsZero[i + 3] || 0);
      result.push(sum);
      continue;
    }
    if (pinsZero[i] + pinsZero[i + 1] + pinsZero[i + 2] == 15) {
      if (
        stats.pins.length >= 13 &&
        (i + 3 == pinsZero.length - 1 || i + 4 == pinsZero.length - 1)
      ) {
        sum +=
          15 +
          (pinsZero[i + 3] || 0) +
          (pinsZero[i + 4] || 0);
        i = pinsZero.length;
        result.push(sum);
        break;
      }
      sum += 15 + (pinsZero[i + 3] || 0) + (pinsZero[i + 4] || 0);
      i = i + 2;
      result.push(sum);
      continue;
    }
    if (pinsZero[i] + pinsZero[i + 1] == 15) {
      if (
        stats.pins.length >= 13 &&
        (i + 2 == pinsZero.length - 1 || i + 3 == pinsZero.length - 1)
      ) {
        sum +=
          15 + (pinsZero[i + 2] || 0) + (pinsZero[i + 3] || 0);
        i = pinsZero.length;
        result.push(sum);
        break;
      }
      sum += 15 + (pinsZero[i + 2] || 0) + (pinsZero[i + 3] || 0);
      i = i + 1;
      result.push(sum);
      continue;
    } else {
      sum +=
        (pinsZero[i] || 0) + (pinsZero[i + 1] || 0) + (pinsZero[i + 2] || 0);
      i = i + 2;
      result.push(sum);
      continue;
    }
  }
  return {score: sum, total: result};
};

export {calculateScore};
