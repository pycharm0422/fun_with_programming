const bestSumIter = (targetNumber, listOfNumbers) =>{
    table = Array(targetNumber+1).fill(null);
    table[0] = [];
    for(let i=0; i<=targetNumber; i++){
        if(table[i] !== null){
            for(let num of listOfNumbers){
                const curr_pos_array = [ ...table[i], num ];
                if(!table[i+num] || table[i+num].length > curr_pos_array.length){
                    table[i+num] = curr_pos_array;
                }
                
                
            }
        }
    }
    return table[targetNumber];
}


console.log(bestSumIter(7, [5,3,4,7]));
console.log(bestSumIter(8, [2,3,5]));
console.log(bestSumIter(8, [2,4]));
console.log(bestSumIter(651, [7,14]));