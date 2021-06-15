/* Pseudocode:
- If the string is of odd length then immediately return false because it is not balanced 
- Otherwise (string is of even length), loop throug the string
   - If current character is an open bracket, push it into an array to keep track of the balance in our string
   
   - Else, if current character is a closed bracket:       
      - Pop off the last open bracket character from the array to check if that open bracket corresponds to the current
      closed bracket character - If that popped off open bracket character doesn't correspond to the current closed bracket
      character, we immediately return false
      
- Outside for loop, if all conditions for unbalanced brackets in the for loop were not met then return true
 */


/* Code with comments */
let validParen = (str) => {
// If the string is of odd length then immediately return false because it is not balanced
  if (str.length % 2 == 1) {
    return false;
  }

  let balanceHolder = [];

  let len = str.length;

// If string is of even length, loop throug the string
  for (let i = 0; i < len; i++) {
    let currentChar = str[i];

    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {

// If current character is an open bracket, push it into an array to keep track of the balance in our string
      balanceHolder.push(currentChar);
    } else {
/* If current character is a closed bracket:
pop off the last open bracket character from the array to check if that open bracket corresponds to the current
closed bracket character */
      let lastBalance = balanceHolder.pop();

      if (currentChar == ")") {

/* If that popped off open bracket character doesn't correspond to the current closed bracket
character, we immediately return false */
        if (lastBalance !== "(") {
          return false;
        }
      } else if (currentChar == "}") {
        if (lastBalance !== "{") {
          return false;
        }
      } else if (currentChar == "]") {
        if (lastBalance !== "[") {
          return false;
        }
      }
    }
  }

// if all conditions for unbalanced brackets in the for loop were not met then return true
  return true;
};


/* Code without all the comments */
let validParen = (str) => {
  if (str.length % 2 == 1) {
    return false;
  }

  let balanceHolder = [];

  let len = str.length;
  for (let i = 0; i < len; i++) {
    let currentChar = str[i];

    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      balanceHolder.push(currentChar);
    } else {
      let lastBalance = balanceHolder.pop();

      if (currentChar == ")") {
        if (lastBalance !== "(") {
          return false;
        }
      } else if (currentChar == "}") {
        if (lastBalance !== "{") {
          return false;
        }
      } else if (currentChar == "]") {
        if (lastBalance !== "[") {
          return false;
        }
      }
    }
  }
  return true;
};


console.log("1: ", validParen("()")); // true
console.log("2: ", validParen("()()()")); // true
console.log("3: ", validParen("(()")); // false
console.log("4: ", validParen("((()))")); // true
console.log("5: ", validParen(")()(")); // false
console.log("6: ", validParen("())(")); // false
console.log("7: ", validParen("(){}[]")); // true
console.log("8: ", validParen("{[()]}")); // true
console.log("9: ", validParen("([)]")); // false
