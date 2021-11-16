

const canSum = (target, numbers, memo={}) => {
    if(target in memo) return memo[target];
    if(target === 0) return true;
    for (let num of numbers){
        if(target >= num){
            let is_that_true = canSum(target-num, numbers, memo);
            if(is_that_true === true){
                memo[target] = true;
                return true;
            }

        } 
    }
    memo[target] = false;
    return false;
}

console.log(canSum(7, [5,3,4,7]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(9, [2,4]));
console.log(canSum(300, [7,14]));