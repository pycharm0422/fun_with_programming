const canIter = (number, listofnumbers) => {
    aray = Array(number+1).fill(false);
    aray[0] = true;

    for(let i=0; i<=number; i++){
        for(let j of listofnumbers){
            if(aray[i-j] === true){
                aray[i] = true;
            }
        }
    }
    // console.log(aray);
    return aray[number];
}

console.log(canIter(7, [5,3,4,7]));
console.log(canIter(8, [2,3,5]));
console.log(canIter(9, [2,4]));
console.log(canIter(300, [7,14]));