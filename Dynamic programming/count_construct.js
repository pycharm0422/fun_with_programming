const countConstruct = (targetString, wordBank) => {
    table = Array(targetString.length + 1).fill(0);
    table[0] = 1;

    for(let i=0; i<=targetString.length; i++){
        for(let word of wordBank){
            if(targetString.slice(i, i+word.length) === word){
                table[i+word.length] += table[i];
            }
        }
    }
    return table[targetString.length];
}


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'abcdef']));
console.log(countConstruct('skateboard', ['bo', 'ard', 'ate', 't', 's','k','a','k','e','board','sta', 'sk', 'bear']));
