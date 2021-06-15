/* Pseudocode:
- If the string is of odd length then immediately return false because it is not balanced 
- Otherwise (string is of even length), loop throug the string
   - If we encounter an open bracket then store the open bracket as key in an object and the count of the number of times
   it's appeared in the string and store that count as corresponding vlaue in that object
   - Also, if current character is an open bracket, push it into an array to keep track of the balance in our string
   
   - Else, if current character is a closed bracket:       
      - Pop off the last open bracket character from the array to check if that open bracket corresponds to the current
      closed bracket character - If that popped off open bracket character doesn't correspond to the current closed bracket
      character, we immediately return false  
      - Also, Decrement the count value of it's corresponding open bracket from the object
      
- After looping through input string, now loop through the open bracket count object and check to see that all values are 0 or not
All values of 0 will mean the string has balanced number of brackets, and value greater than or less than 0 will mean the 
input string has an unbalanced number of brackets
 */

/* Code with comments */
let validParen = (str) => {

// If the string is of odd length then immediately return false because it is not balanced
  if (str.length % 2 == 1) {
    return false;
  }

  let count = {};

  let balanceHolder = [];

  let len = str.length;

// If string is of even length, loop throug the string
  for (let i = 0; i < len; i++) {
    let currentChar = str[i];

/* If we encounter an open bracket then store the open bracket as key in an object and the count of the number of times
it's appeared in the string and store that count as corresponding value in that object */
    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {

      if (count[currentChar] == undefined) {
        count[currentChar] = 1;
      } else {
        count[currentChar]++;
      }

// if current character is an open bracket, push it into an array to keep track of the balance in our string
      balanceHolder.push(currentChar);

// if current character is a closed bracket
    } else {

/*  Pop off the last open bracket character from the array to check if that open bracket corresponds to the current
closed bracket character */
      let lastBalance = balanceHolder.pop();

      if (currentChar == ")") {
// Decrement the count value of it's corresponding open bracket from the object to keep balance
        count["("]--;

/* If that popped off open bracket character doesn't correspond to the current closed bracket
character, we immediately return false */
        if (lastBalance !== "(") {
            return false;
          }

      } else if (currentChar == "}") {
// Decrement the count value of it's corresponding open bracket from the object to keep balance
        count["{"]--;

/* If that popped off open bracket character doesn't correspond to the current closed bracket
character, we immediately return false */
        if (lastBalance !== "{") {
          return false;
        }

      } else if (currentChar == "]") {
// Decrement the count value of it's corresponding open bracket from the object to keep balance
        count["["]--;

/* If that popped off open bracket character doesn't correspond to the current closed bracket
character, we immediately return false */
        if (lastBalance !== "[") {
          return false;
        }

      }
    }
  }

/* Loop through the open bracket count object and check to see that all values are 0 or not
All values of 0 will mean the string has balanced number of brackets, and value greater than or less than 0 will mean the
input string has an unbalanced number of brackets */

  for (let eachKey in count) {
    if (count[eachKey] !== 0) {
      return false;
    }
  }

  return true;
};

/* Code without all the comments */
let validParen = (str) => {
  if (str.length % 2 == 1) {
    return false;
  }

  let count = {};

  let balanceHolder = [];

  let len = str.length;

  for (let i = 0; i < len; i++) {
    let currentChar = str[i];

    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      if (count[currentChar] == undefined) {
        count[currentChar] = 1;
      } else {
        count[currentChar]++;
      }
      balanceHolder.push(currentChar);
    } else {
      let lastBalance = balanceHolder.pop();

      if (currentChar == ")") {
        count["("]--;
        if (lastBalance !== "(") {
          return false;
        }
      } else if (currentChar == "}") {
        count["{"]--;
        if (lastBalance !== "{") {
          return false;
        }
      } else if (currentChar == "]") {
        count["["]--;
        if (lastBalance !== "[") {
          return false;
        }
      }
    }
  }

  for (let eachKey in count) {
    if (count[eachKey] !== 0) {
      return false;
    }
  }

  return true;
};

let validParen = (s) => {
  if (s.length % 2 == 1) {
    return false;
  }

  let count = {};

  let balanceHolder = [];

  let len = s.length;

  for (let i = 0; i < len; i++) {
    let currentChar = s[i];

    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      if (count[currentChar] == undefined) {
        count[currentChar] = 1;
      } else {
        count[currentChar]++;
      }
      balanceHolder.push(currentChar);
    } else {
      let lastBalance = balanceHolder.pop();

      if (currentChar == ")") {
        count["("]--;
        if (lastBalance !== "(") {
          return false;
        }
      } else if (currentChar == "}") {
        count["{"]--;
        if (lastBalance !== "{") {
          return false;
        }
      } else if (currentChar == "]") {
        count["["]--;
        if (lastBalance !== "[") {
          return false;
        }
      }
    }
  }

  for (let eachKey in count) {
    if (count[eachKey] !== 0) {
      return false;
    }
  }

  return true;
};

/* Test cases: */
console.log("1: ", validParen("()")); // true
console.log("2: ", validParen("()()()")); // true
console.log("3: ", validParen("(()")); // false
console.log("4: ", validParen("((()))")); // true
console.log("5: ", validParen(")()(")); // false
console.log("6: ", validParen("())(")); // false
console.log("7: ", validParen("(){}[]")); // true
console.log("8: ", validParen("{[()]}")); // true
console.log("9: ", validParen("([)]")); // false
