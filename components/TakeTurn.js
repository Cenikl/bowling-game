import promptSync from "prompt-sync";

const prompt = promptSync();

let actualFrames = 1;
let totalPins = 15;
let actualTries = 1;
let actualScore = 0;
let strikesCount = 14;
let sparesCount = 14;
let bonusTry = 3;
let pins = []


function turn(userPrompt){

    if(isNaN(userPrompt) || userPrompt == ""){
        console.clear()
        console.log("Please enter a number only!")
        return ;
    }
    if(totalPins - userPrompt < 0){
        console.log("There are only"+totalPins+"left");
        return ;
    }
    if(userPrompt == 15 && actualTries == 1){
        pins.push(parseInt(userPrompt));
        if(actualFrames == 5){
            while(bonusTry > 0){
                let input = prompt("Bonus roll ("+ bonusTry +"): ")
                pins.push(parseInt(input));
                bonusTry--;
            }
            actualScore = calculateScore();
            actualTries = 1;
            actualFrames++;
            return ;
        }
        pins.push(0);
        pins.push(0);
        actualScore = calculateScore();
        actualTries = 1;
        actualFrames++;
    }

    if(userPrompt < 15 && userPrompt > 0){
        pins.push(parseInt(userPrompt));
        totalPins -= parseInt(userPrompt);
        actualTries++;
    }

    if(totalPins == 0 && (actualTries == 2 || actualTries == 3)){
        pins.push(parseInt(userPrompt));
        if(actualTries == 2){
            pins.push(0);
            actualScore = calculateScore();
            actualTries = 1;
            totalPins = 15;
            actualFrames++;
        }
        if(actualFrames == 5){
            bonusTry -= 1 ; 
            while(bonusTry > 0){
                let input = prompt("Bonus roll ("+ bonusTry +"): ")
                pins.push(parseInt(input));
                bonusTry--;
            }
            actualScore = calculateScore();
            actualTries = 1;
            totalPins = 15;
            actualFrames++;
            return ;
        }
    }

    if(actualTries > 3){
        actualScore = calculateScore();
        actualTries = 1 ;
        totalPins = 15;
        actualFrames++;
    }

}
function calculateScore(){
    let sum = 0;
    let pinsZero = pins.filter(e => e !== 0);

    for(let i = 0; i < pinsZero.length; i++){  
        if(pinsZero[i] == 15 && strikesCount > 0){
            if( pins.length >= 13 && (i+2 == pinsZero.length-1 || i+3 == pinsZero.length-1) ){
                sum += 15 + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0)
                console.log(i+2)
                console.log(pinsZero.length-1)
                console.log(sum)
                i = pinsZero.length;
                continue;
            }
            sum += 15 + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0)
            strikesCount--;
            continue;
        }
        if(pinsZero[i] + pinsZero[i+1] + pinsZero[i+2] == 15){
            sum += 15 +( pinsZero[i+3] || 0) + (pinsZero[i+4] || 0)
            sparesCount--;
            i = i+2;
            continue;
        }
        if(pinsZero[i] + pinsZero[i+1] == 15){
            sum += 15 + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0)
            sparesCount--;
            i = i+1;
            continue;
        }
        else {
            sum += (pinsZero[i] || 0) + (pinsZero[i+1]  || 0) + (pinsZero[i+2]  || 0)
            console.log(pinsZero[i])
            console.log(pinsZero[i+1])
            console.log(pinsZero[i+2])
            i = i + 2;
            continue;
        }

    }
    return sum;
}

function initialize(){
    actualFrames = 1;
    totalPins = 15;
    actualTries = 1;
    actualScore = 0;
    bonusTry = 3;
    strikesCount = 14;
    sparesCount = 14;
    pins = [];
}

export {actualFrames,actualScore,actualTries,turn,initialize,pins}