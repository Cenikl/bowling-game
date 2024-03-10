import promptSync from "prompt-sync";
import {isTurnStrike,isTurnSpare,isTurnValid} from '../utils/turnHelpers.js'
import {calculateScore} from './updateScore.js'

const prompt = promptSync();

const takeTurn = (userPrompt,stats) => {
    let error = isTurnValid(userPrompt,stats)

    if(error.length > 0){
        console.clear()
        console.log(error);
        return;
    }

    if( isTurnStrike(userPrompt,stats.actualTries)){
        stats.pins.push(parseInt(userPrompt));
        if(stats.actualFrames == 5){
            while(stats.bonusTry > 0){
                let input = prompt("Bonus roll ("+ stats.bonusTry +"): ")
                stats.pins.push(parseInt(input));
                stats.bonusTry--;
            }
            stats.actualScore = calculateScore(stats);
            stats.actualTries = 1;
            stats.actualFrames++;
            return ;
        }
        stats.pins.push(0);
        stats.pins.push(0);
        stats.actualScore = calculateScore(stats);
        stats.actualTries = 1;
        stats.actualFrames++;
    }

    if(userPrompt < 15 && userPrompt > 0){
        stats.pins.push(parseInt(userPrompt));
        stats.totalPins -= parseInt(userPrompt);
        stats.actualTries++;
    }

    if(isTurnSpare(stats.totalPins,stats.actualTries )){
        stats.pins.push(parseInt(userPrompt));
        if(stats.actualTries == 2){
            stats.pins.push(0);
            stats.actualScore = calculateScore(stats);
            stats.actualTries = 1;
            stats.totalPins = 15;
            stats.actualFrames++;
        }
        if(stats.actualFrames == 5){
            stats.bonusTry -= 1 ; 
            while(stats.bonusTry > 0){
                let input = prompt("Bonus roll ("+ stats.bonusTry +"): ")
                stats.pins.push(parseInt(input));
                stats.bonusTry--;
            }
            stats.actualScore = calculateScore(stats);
            stats.actualTries = 1;
            stats.totalPins = 15;
            stats.actualFrames++;
            return ;
        }
    }

    if(stats.actualTries > 3){
        stats.actualScore = calculateScore(stats);
        stats.actualTries = 1 ;
        stats.totalPins = 15;
        stats.actualFrames++;
    }
    console.clear()
}

export {takeTurn}