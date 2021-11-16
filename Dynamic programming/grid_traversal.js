// Done 


const gridTraversal = (m,n,memo) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;

    memo[key] = gridTraversal(m-1,n,memo) + gridTraversal(m, n-1,memo);
    return memo[key];
}

console.log(gridTraversal(32,23,memo={}));