/* Write recursive function to produce combination of rock, paper, scissors given an input number of combinations
ex. 
rockPaperScissor(2) -> [
    ['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'], 
    ['paper', 'rock'], ['paper', 'paper'], ['paper', 'scissors'], 
    ['scissors', 'rock'], ['scissors', 'paper'], ['scissors', 'scissors']
]
 */

/* Pseudocode:
- Declare an empty array called finalResult (to push the results to)
- Declare an array called options that contains the texts 'rock', 'paper', 'scissors'
- Declare an empty variable, newArr (new array to concatenate results of inner function looping of text combinations)
- Make an inner function called recursiveCombo that will take in an input array called arr and a 2nd input called roundsLeft 
which will be the number of rounds from parent function input minus 1
- Inside recursiveCombo function, make a base case of if roundsLeft is 0 then just push the input array arr (results containing text
    combination) into the finalResult array
- Still inner function, make an else of if roundsLeft is NOT 0, then make a for loop, looping through the options array to go through each text, rock, paper or scissors
- Inside for loop concatenate the input array arr to an array form of the current text element @ current index in the options array and save it to the previously declared variable newArr
- Still inside for loop make a recursive call of the recursiveCombo function passing in newArr for 1st parameter and roundsLeft minus 1 as the 2nd parameter
- Outside the recursiveCombo inner function, call the recursiveCombo function, passing in an empty array as the 1st parameter and rounds input from the outer function as the 2nd parameter
- return the finalResult array  

 */

const rockPaperScissor = (rounds) => {
  let finalResult = [];
  let options = ["rock", "paper", "scissors"];
  let newArr;

  let recursiveCombo = (arr, roundsLeft) => {
    if (roundsLeft === 0) {
      finalResult.push(arr);
    } else {
      for (let i = 0; i < options.length; i++) {
        newArr = arr.concat([options[i]]);
        recursiveCombo(newArr, roundsLeft - 1);
      }
    }
  };

  recursiveCombo([], rounds);

  return finalResult;
};

console.log("0", rockPaperScissor(0));
console.log("1", rockPaperScissor(1));
console.log("2", rockPaperScissor(2));
// console.log("3", rockPaperScissor(3));
