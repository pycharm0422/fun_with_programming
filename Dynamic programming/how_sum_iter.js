const howIter = (number, listOfNumbers) => {
    aray = Array(number+1).fill(null);
    // result = [];
    aray[0] = [];
    for(let i=0; i<=number; i++){
        if(aray[i] !== null){
            for(let j of listOfNumbers){
                aray[i+j] = [ j, ...aray[i]];
            }
        }
    }
    return aray[number];
}

console.log(howIter(7, [5,3,4,7]));
console.log(howIter(8, [2,3,5]));
console.log(howIter(9, [2,4]));
console.log(howIter(300, [7,14]));