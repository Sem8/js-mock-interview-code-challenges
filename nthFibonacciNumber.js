// Starting 1st number with index of 1
// const fib = (n) => {
//     return n == 1 ? 0 :
//            n == 2 ? 1 :
//            fib(n-1) + fib(n-2);
// } 

// Labeling 1st number as 0 index
const fib = (n) => {
    let fibo = [0, 1];

    if (n <= 2) return 1;

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n]
}

console.log(fib(12));