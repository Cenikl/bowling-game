import promptSync from "prompt-sync";
import {actualFrames,actualScore,actualTries,turn,initialize,pins} from './TakeTurn.js'

const prompt = promptSync();


function mainGame(){
    console.clear();
    console.log("Game started !")
    while(true){
        console.log("Frame number : " + actualFrames)
        console.log("Current try : "+ actualTries)
        console.log("Total score : " + actualScore)
        let input = prompt("Number of pins struck: " )
        turn(input);
    
        while(actualFrames >= 6) {
            console.log(pins)
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