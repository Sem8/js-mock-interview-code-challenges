/* Find nth fibonacci */

let fib = n => {
    let arr = [0, 1]

    if ( n <= 2) {
        return 1;
    }

    for (let i = 2 ; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log(fib(10));