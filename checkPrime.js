const isPrime = (n) => {
    let divisor = 2;

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++;
        }
    }

    return true;    
}

// console.log(isPrime(137)); // true
// console.log(isPrime(237)); // false

// Optimized solution
const isPrimeII = (n) => {
    let divisor = 3;
    let limit = Math.sqrt(n);

    if ( n === 2 || n == 3) {
        return true;
    } 
    if (n % 2 == 0) {
        return false;        
    }

    while (divisor <= limit) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor += 2;
        }        
    }
    return true;
}

console.log(isPrimeII(137)); // true
console.log(isPrimeII(237)); // false