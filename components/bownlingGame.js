import promptSync from "prompt-sync";
import {actualFrames,actualScore,actualTries,turn,initialize,pins} from './TakeTurn.js'
import {createGrid} from './createInterface.js'
import {calculate} from './calculateTotalScore.js'

const prompt = promptSync();

function mainGame(){
    console.clear();
    console.log("Game started !")
    while(true){
        console.log(
            `Frame number : `+actualFrames+'\n'+
            `Current try : `+actualTries+'\n'+
            `Total score : `+actualScore)
        let input = prompt("Number of pins struck: " )
        turn(input);

        while(actualFrames >= 6) {
            let result = calculate(pins);
            createGrid(pins,result)
            console.log("Final score : " + actualScore)
            let answer = prompt("Start a new game ? (Y/N) : ");
            if(answer.toUpperCase() === "Y"){
                initialize();
                console.clear()
            } else if(answer.toUpperCase() === "N"){
                initialize();
                return false;
            }
            else {             
                console.clear();
                console.log("Invalid command, please try again !")
            }
        }
    }
}

export {mainGame};