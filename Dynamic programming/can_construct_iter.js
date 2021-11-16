const canConstruct = (targetString, listOfStr) => {
    aray = Array(targetString.length + 1).fill(false);
    aray[0] = true;

    for(let i=0; i<=targetString.length; i++){
        for(let word of listOfStr){
            if(targetString.slice(i,i+word.length) === word){
                // console.log(aray);
                aray[i+word.length] = true;
            }
        }
    }
    return aray[targetString.length];
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'ard', 'ate', 't', 'sta', 'sk', 'bear']));
