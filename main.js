import promptSync from "prompt-sync";
import {mainGame} from './components/bownlingGame.js'

const prompt = promptSync();

function start(){
    console.log(`
    Welcome to the Bowling game simulator !
    Choose one of the following command :`);
    while(true){
        console.log(`
        1 - Start the game
        2 - Exit
        `);
        let input = prompt("Input : ");
        if(input == 1){
            mainGame()
            console.clear()
        }
        else if(input == 2){
            return false
        }
        else {
            console.clear();
            console.log("Please enter a valid command :")
        }
    }
}

start()
