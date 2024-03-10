export function calculate(data){
    let filteredData = data.filter(e => e !== 0);
    let result = []
    let sum = 0;

    for(let i = 0; i < filteredData.length; i++){  
        if(filteredData[i] == 15){
            if( data.length >= 13 && (i+2 == filteredData.length-1 || i+3 == filteredData.length-1) ){
                sum += 15 + (filteredData[i+1] || 0) + (filteredData[i+2] || 0) + (filteredData[i+3] || 0)
                result.push(sum);
                i = filteredData.length;
                continue;
            }
            sum += 15 + filteredData[i+1] + filteredData[i+2] + filteredData[i+3]
            result.push(sum);
            continue;
        }
        else if(filteredData[i] + filteredData[i+1] + filteredData[i+2] == 15){
            sum += 15 + filteredData[i+3] + filteredData[i+4]
            result.push(sum)
            i = i+2;
            continue;
        }
        else if(filteredData[i] + filteredData[i+1] == 15){
            sum += 15 + filteredData[i+2] + filteredData[i+3]
            result.push(sum)
            i = i+1;
            continue;
        }
        else {
            sum += filteredData[i] + filteredData[i+1] + filteredData[i+2]
            result.push(sum)
            i = i + 2;
            continue;
        }
    }

    return result;
}