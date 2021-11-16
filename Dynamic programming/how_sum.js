const howSum = (number, listOfNumber) => {

    if(number === 0) return [];
    // if(number < 0) return null;
    for(let num of listOfNumber){
        if((number - num) >= 0){
            const combination = howSum(number-num, listOfNumber);
            if(combination !== null){
                return [ ...combination, num ];

            }
        }
    }
    return null;
}


console.log(howSum(8, [2,3,5]));
console.log(howSum(56, [12,4]));
console.log(howSum(7, [5,3,4,7]));

// console.log(canSum(300, [6,14]));