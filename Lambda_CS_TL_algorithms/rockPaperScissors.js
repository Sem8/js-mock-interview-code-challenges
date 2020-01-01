/*Write a function called `rockPaperScissors` that will take as input an integer `n`. Your function should output all of the possible 
combinations of the three plays 'rock', 'paper', or 'scissors' up to the given integer `n`. 

For example, for `n = 2`, your function should output: 

[[rock, rock], [rock, paper], [rock, scissors],
 [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
 [scissors, paper], [scissors, scissors]]

So your output should be an array of arrays, where the length of each inner array is `n`. */

// Wilfred solution:
// const recurse = (prev, n, allResults) => {
//     if (n === 0) {
//         allResults.push(prev);
//         return;
//     };
//     let moves = ['rock', 'paper', 'scissors'];
//     for (let move of moves) {
//         recurse(prev.concat([move]), n-1, allResults);
//     };
// };

// const rockPaperScissors = n => {
//     results = [];
//     recurse([], n, results);
//     return results;
// };


// Not so optimized suggested solution because it returns array within array nesting with n level deep nesting:
// const recurse = (prev, n) => {
//     if (n === 0) {
//         return prev;
//     };
    
//     let withRock = recurse(prev.concat(['rock']), n-1);
//     let withPaper = recurse(prev.concat(['paper']), n-1);
//     let withScissors = recurse(prev.concat(['scissors']), n-1);
//     return [withRock, withPaper, withScissors];
// };

// const rockPaperScissors = n => {
//     return recurse([], n);
// };

// console.log(rockPaperScissors(3));

// Suggested solution:
/* Pseudocode:
We need to have 2 functions: 1) recurse helper function which will take in 3 parameters, prev (previous value in array), n (number of moves) 
and allResults (final array with n number of different combinations)
2) rockPaperScissors function which takes in 1 parameter, n (the number of moves)

recurse helper function:
1. Make a base case of if n (number of play moves) is 0 then push prev onto allResults array then just return to end the function.
2. Otherwise (if number of play moves is more than 0) then recursively call the recurse function passing in as 1st parameter, 
prev.concat(['rock']), n-1 for 2nd parameter, allResults for 3rd parameter
3. Recursively call the recurse function a 2nd time passing in as 1st parameter, prev.concat(['paper']), n-1 for 2nd parameter, allResults for
3rd parameter
4. Recursively call the recurse function a  3rd time passing in as 1st parameter, prev.concat(['scissors']), n-1 for 2nd parameter, 
allResults for 3rd parameter

rockPaperScissors main function:
1. Initialize an empty array, call it results
2. Invoke the recurse function, passing in an empty array for prev the 1st parameter, pass in n as the 2nd parameter and pass in results for
the 3rd parameter
3. return the results array (will contain all combinations of the strings concatted to it as the final array).
 */
// const recurse = (prev, n, allResults) => {
//     if (n === 0) {
//         allResults.push(prev);
//         return;
//     };
//     recurse(prev.concat(['rock,']), n-1, allResults);
//     recurse(prev.concat(['paper']), n-1, allResults);
//     recurse(prev.concat(['scissors']), n-1, allResults);
// };

// const rockPaperScissors = n => {
//     result = [];
//     recurse([], n, result);
//     return result;
// };

// Suggested solution: slightly more optimized syntax
const recurse = (prev, n, allResults) => {
    if (n === 0) {
        allResults.push(prev);
        return;
    };
    let moves = ['rock', 'paper', 'scissors'];
    for (let move of moves) {
        recurse(prev.concat([move]), n-1, allResults);
    };
};
const rockPaperScissors = n => {
    let result = [];
    recurse([], n, result);
    return result;
};

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));