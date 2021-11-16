const allConstruct = (word, lst) => {
    if(word === '') return [[]];
    const result = [];
    for(let str of lst){

        if(word.indexOf(str) === 0){

            const answer = allConstruct(word.slice(str.length), lst);
            if(answer !== null){
                const sing_answ = answer.map(way => [str, ...way]);
                // const sing_answ = [str, ...answer];
                result.push(...sing_answ);
            }
        }
    }
    return result;
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('faraz', ['far', 'ra', 'z', 'fa', 'a']));
