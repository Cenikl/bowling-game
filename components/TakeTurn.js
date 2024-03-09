import promptSync from "prompt-sync";

const prompt = promptSync();

let actualFrames = 1;
let totalPins = 15;
let actualTries = 1;
let actualScore = 0;
let strikesCount = 5;
let bonusTry = 3;
let pins = []


function turn(userPrompt){

    if(isNaN(userPrompt) || userPrompt == ""){
        console.clear()
        console.log("Please enter a number only!")
        return ;
    }
    if(totalPins - userPrompt < 0){
        console.log('There are only ${totalPins} left')
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
    if(totalPins == 0 && (actualTries == 2 || actualTries == 3)){
        pins.push(parseInt(userPrompt));
        if(actualTries == 2){
            pins.push(0);
            actualScore = calculateScore();
            actualTries = 1;
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
            actualFrames++;
            return ;
        }
    }

    if(userPrompt < 15 && userPrompt > 0){
        pins.push(parseInt(userPrompt));
        actualTries++;
    }

    if(actualTries > 3){
        actualScore = calculateScore();
        actualTries = 1 ;
        actualFrames++;
    }

}
function calculateScore(){
    let sum = 0;
    let pinsZero = pins.filter(e => e !== 0);
    for(let i = 0; i < pinsZero.length; i++){
        console.log(sum);
        if(pinsZero[i] == 15 && i < 4){
            console.log(i)
            sum += 15 + (pinsZero[i+1] || 0) + (pinsZero[i+2] || 0) + (pinsZero[i+3] || 0)
            continue;
        }
        sum += pinsZero[i];
    }
    return sum;
}

function initialize(){
    actualFrames = 1;
    totalPins = 15;
    actualTries = 1;
    actualScore = 0;
    bonusTry = 3;
    strikesCount = 5;
    pins = [];
}

export {actualFrames,actualScore,actualTries,turn,initialize,pins}