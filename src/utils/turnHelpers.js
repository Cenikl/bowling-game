/**
 * Checks if the provided value is a strike.
 * @param {number} data - value of the strike.
 * @return {boolean} True if a spare, false otherwise.
 */
function isStrike(data) {
  return data == 15;
}

/**
 * Checks if a player throw is a strike.
 * @param {number} data - value of the player's throw.
 * @param {number} playerThrow - actual try of the player.
 * @return {boolean} True if strike, false otherwise.
 */
function isTurnStrike(data, playerThrow) {
  return data == 15 && playerThrow == 1;
}

/**
 * Checks if a player throw is a spare.
 * @param {number} data - value of the player's throw.
 * @param {number} playerThrow - actual try of the player.
 * @return {boolean} True if spare, false otherwise.
 */
function isTurnSpare(data, playerThrow) {
  return data == 0 && (playerThrow == 2 || playerThrow == 3);
}

/**
 * Checks if the provided values is a spare
 * @param {number} firstValue - The first value.
 * @param {number} secondValue - The second value.
 * @param {number} thirdValue - The third value
 * @return {boolean} True if a spare, false otherwise.
 */
function isSpare(firstValue, secondValue, thirdValue) {
  return firstValue + secondValue == 15 ||
        firstValue + secondValue +thirdValue == 15;
}

/**
 * Checks if a player throw is valid.
 * @param {number} input - value of the player's throw.
 * @param {object} stats - stats of the ongoing game
 * @return {String} a string which holds all the errors.
 */
function isTurnValid(input, stats) {
  let result = '';

  if (isNaN(input) || input == '') {
    result += 'Please enter a number only!';
  }

  if (stats.totalPins - input < 0) {
    result += 'There are only '+stats.totalPins+' pins left';
  }
  return result;
}

export {isStrike, isSpare, isTurnStrike, isTurnSpare, isTurnValid};
