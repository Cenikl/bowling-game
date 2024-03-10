import promptSync from "prompt-sync";
import {takeTurn} from './userTurn.js'
import {bowlingGame} from '../modules/bowlingStats.js'
import {createGrid} from '../interfaces/createInterface.js'
import {calculateTotalScore} from './updateScore.js'

const prompt = promptSync();

function mainGame(){
    console.clear();
    console.log("Game started !")

    while(true){
        console.log(
            `Frame number : `+bowlingGame.actualFrames+'\n'+
            `Current try : `+bowlingGame.actualTries+'\n'+
            `Total score : `+bowlingGame.actualScore+'\n'+
            `--------------------------------------------`)
        let input = prompt("Number of pins struck: " )
        takeTurn(input,bowlingGame);

        while(bowlingGame.actualFrames >= 6) {
            console.clear()
            const result = calculateTotalScore(bowlingGame.pins);
            createGrid(bowlingGame.pins,result)
            console.log("Final score : " + bowlingGame.actualScore)
            console.log("--------------------------------------------")
            let answer = prompt("Start a new game ? (Y/N) : ");
            if(answer.toUpperCase() === "Y"){
                bowlingGame.initialize();
                console.clear()
            } else if(answer.toUpperCase() === "N"){
                bowlingGame.initialize();
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