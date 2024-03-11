/**
 * Calculate scores of each frame
 * @param {object} stats an object which contains the current games stats
 * @return {object} returns an object with the total score and the total of each frame
 */
const calculateScore = (stats) => {
  let sum = 0;
  const result = [];
  const filteredData = stats.pins.filter((e) => e !== 'spare' && e !== 'strike');

  for (let i = 0; i < filteredData.length; i++) {
    if (filteredData[i] == 15 && stats.strikesCount > 0) {
      if (stats.pins.length >= 13 &&
        (i + 2 == filteredData.length - 1 || i + 3 == filteredData.length - 1)) {
        sum +=
          15 +
          (filteredData[i + 1] || 0) +
          (filteredData[i + 2] || 0) +
          (filteredData[i + 3] || 0);
        i = filteredData.length;
        result.push(sum);
        continue;
      }
      sum +=
        15 +
        (filteredData[i + 1] || 0) +
        (filteredData[i + 2] || 0) +
        (filteredData[i + 3] || 0);
      result.push(sum);
      continue;
    }
    if (filteredData[i] + filteredData[i + 1] + filteredData[i + 2] == 15) {
      if (
        stats.pins.length >= 13 &&
        (i + 3 == filteredData.length - 1 || i + 4 == filteredData.length - 1)
      ) {
        sum +=
          15 +
          (filteredData[i + 3] || 0) +
          (filteredData[i + 4] || 0);
        i = filteredData.length;
        result.push(sum);
        break;
      }
      sum += 15 + (filteredData[i + 3] || 0) + (filteredData[i + 4] || 0);
      i = i + 2;
      result.push(sum);
      continue;
    }
    if (filteredData[i] + filteredData[i + 1] == 15) {
      if (
        stats.pins.length >= 13 &&
        (i + 2 == filteredData.length - 1 || i + 3 == filteredData.length - 1)
      ) {
        sum +=
          15 + (filteredData[i + 2] || 0) + (filteredData[i + 3] || 0);
        i = filteredData.length;
        result.push(sum);
        break;
      }
      sum += 15 + (filteredData[i + 2] || 0) + (filteredData[i + 3] || 0);
      i = i + 1;
      result.push(sum);
      continue;
    } else {
      sum +=
        (filteredData[i] || 0) + (filteredData[i + 1] || 0) + (filteredData[i + 2] || 0);
      i = i + 2;
      result.push(sum);
      continue;
    }
  }
  return {score: sum, total: result};
};

export {calculateScore};
