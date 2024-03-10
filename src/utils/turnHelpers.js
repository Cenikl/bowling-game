/**
 * Checks if the provided value is a strike.
 * @param {number} data - value of the strike.
 * @returns {boolean} True if a spare, false otherwise.
 */

function isStrike(data){
    return data == 15;
}

function isTurnStrike(data,playerThrow){
    return data == 15 && playerThrow == 1
}
function isTurnSpare(data,playerThrow){
    return data == 0 && (playerThrow == 2 || playerThrow == 3)
}

/**
 * Checks if the provided values is a spare
 * @param {number} firstValue - The first value.
 * @param {number} secondValue - The second value.
 * @param {number} thirdValue - The third value
 * @returns {boolean} True if a spare, false otherwise.
 */

function isSpare(firstValue,secondValue,thirdValue){
    return firstValue + secondValue == 15 || firstValue + secondValue +thirdValue == 15
}

function isTurnValid(input, stats){
    let result = "";

    if(isNaN(input) || input == ""){
        result += "Please enter a number only!"
    }

    if(stats.totalPins - input < 0){
        result += "There are only "+stats.totalPins+" pins left";

    }
    return result;
}

export { isStrike, isSpare, isTurnStrike,isTurnSpare,isTurnValid}