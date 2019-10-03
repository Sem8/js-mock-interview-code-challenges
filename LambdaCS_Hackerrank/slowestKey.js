/*Return the slowest key. First element in each array in matrix represents letter a-z by index ex. 0 = a, 1 = b, 2 = c... 25 = z
the second element in each array in the matrix represents the time it takes to press a key from the previous key's time. 
ex 1: [[0, 2], [1, 5], [0, 9], [2, 15]] --> output c (because longest time is for [2, 15] where 2 represents c and 9 - 15 = 6 which is longer) 
time than all others. 
ex 2: [[0, 2], [1, 3], [0, 7]] --> a (because 7 - 3 = 4)
ex 3: [[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]] --> e (b/c 10 - 6 = 4 which is highest difference);
 */

 // console.log('z'.charCodeAt(0)); // returns the number from ascii character alphabet 'a' will return 97, z will return 122
// console.log(String.fromCharCode(122)) // returns the letter alphabet from ascii character of 97 - 122 , 97 being a and 122 being z
// a='abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(a[0]);

/*Pseudocode:
1. Create a variable that holds the letters a-z in string format, call the variable alphabets and split that string to return an array. 
2. Declare a variable called maxim and set it to the difference between 0 and the second element from the first array element in the matrix. 
3. Loop throuh the matrix, starting at index 1 and ending at length of matrix minus 1. 
4. Make an if statement check if the difference between the second element in each matrix array element at previous index of [i-1] - [i] is
greater than max. If so, return alphabet array with index from the first element from that current array in the matrix 
 */

const slowestKey = keyTimes => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let maxim = keyTimes[0][1] - 0;
    let slowestLetter = '';

    for (let i = 1; i < keyTimes.length; i++) {
        if ((keyTimes[i][1] - keyTimes[i-1][1]) > maxim) {
            maxim = keyTimes[i][1] - keyTimes[i-1][1];
            slowestLetter = alphabet[keyTimes[i][0]];
        }
    }
    return slowestLetter;
};

console.log(slowestKey([[0, 2], [1, 5], [0, 9], [2, 15]])); // c
console.log(slowestKey([[0, 2], [1, 3], [0, 7]])); // a
console.log(slowestKey([[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]])); // e

// slowestKey([[0, 2], [1, 5], [0, 9], [2, 15]])

