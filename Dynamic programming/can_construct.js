// Done


const canConstruct = (theWord, listOfWords) => {
    if(theWord === '') return [];
    for(let word of listOfWords){
        if(theWord.indexOf(word) === 0){

            const combination = canConstruct(theWord.slice(word.length), listOfWords);
            return [ word, ...combination];
        }    
    }
    return null;

}

console.log(canConstruct('faraz', ['a', 'far', 'az', 'z']));
