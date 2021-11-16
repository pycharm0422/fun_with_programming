const fib_iter = (num) => {
    result = Array(num+1).fill(0);
    result[1] = 1;
    for(let i=0 ; i<=num; i++){
        let j = i+1;
        result[i+2] = result[i] + result[j];
        // console.log(i);
    }
    return result[num];


}

console.log(fib_iter(8));
console.log(fib_iter(6));
console.log(fib_iter(60));