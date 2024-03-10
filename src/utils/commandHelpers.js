

function isCommandValid(input){
    if (input.toUpperCase() === 'Y') {
        bowlingGame.initialize();
        console.clear();
      } else if (answer.toUpperCase() === 'N') {
        bowlingGame.initialize();
        return false;
      } else {
        console.clear();
        console.log('Invalid command, please try again !');
      }
}