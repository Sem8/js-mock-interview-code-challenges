/* Determine if a number is prime or not */

let isPrime = (n) => {
    if (n === 1 || n === 2) {
        return true;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

// console.log(isPrime(2)); // true
// console.log(isPrime(5)); // true
// console.log(isPrime(10)); // false

/* Determine prime numbers up to a given number */

let primes = (n) => {
    let primesList = [2];

    for (let i = 3; i < n; i++ ) {
        if (isPrime(i)) {
            primesList.push(i);
        }
    }
    return primesList.length;

}

console.log(primes(2));
console.log(primes(5));
console.log(primes(10));
console.log(primes(100));