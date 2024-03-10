const titles = ["1", "2", "3", "4", "5"];

function createLine(length) {
    return '-'.repeat(length);
}
function createBlank(length) {
    return ' '.repeat(length);
}

function createSequenceRow(data) {
    let result = ``
    data.forEach(e => {
        if(e.toString().length == 2){
            result += `|${createBlank(1)}${e} ${createBlank(1)}`
        }
        else{   
            result += `|${createBlank(1)} ${e} ${createBlank(1)}`
        }
    });
    return result+`|`;
}
function createSequenceTitle(data) {
    let result = ``
    data.forEach(e => {
        if(e.toString().length == 3 ){
            result += `|${createBlank(6)} ${e} ${createBlank(6)}`
        }
        else if(e.toString().length == 2){
            result += `|${createBlank(6)} ${e} ${createBlank(7)}`
        }
        else{   
            result += `|${createBlank(7)} ${e} ${createBlank(7)}`
        }
    });
    return result + `|`
}

function createGrid(data,result){
    const totalLength = (data.length * 4) + (titles.length * 4) + (titles.length + 1);
    const line = createLine(totalLength + 7)
    const titleRow = createSequenceTitle(titles)
    const sequenceRow = createSequenceRow(data);
    const sequenceResult = createSequenceTitle(result)
    const output = `${line}\n${titleRow}\n${line}\n${sequenceRow}\n${line}\n${sequenceResult}\n${line}`;
    console.log(output)
}

export {createGrid};
