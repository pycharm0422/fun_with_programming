
const bestSum = (targetSum, numbers, memo={}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    let shortestArray = null;

    for(let num of numbers){
        
        const is_that_true = bestSum(targetSum - num, numbers, memo);
        if(is_that_true !== null){
            const combination = [ ...is_that_true, num ];
            if(shortestArray === null || shortestArray.length > combination.length){
                shortestArray = combination;
            }

        }

    }
    memo[targetSum] = shortestArray;
    return memo[targetSum];
}

console.log(bestSum(8, [2,3,5]));
console.log(bestSum(9, [2,4]));
console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(100, [1,23,4,25]));













const bestConstruct = (target, lstOfNums) => {
    if(target === 0) return [];
    if(target < 0) return null;

    for(let num of lstOfNums){

        const combination = bestConstruct(target-num, lstOfNums);
        
    }
}