let validParen = str => {
    if (str.length % 2 == 1) {
      return false;
    }
    
    let count = {};
    
    let len = str.length;
    
    for (let i = 0; i < len; i++) {
      let currentChar = str[i];
      
      if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
        if (count[currentChar] == undefined ) {
        count[currentChar] = 1;
      } else {
      count[currentChar]++;
      }
      } else { 
        if (currentChar == ')'){
          count['(']--;
        } else if (currentChar == '}') {
          count['{']--;
        } else if (currentChar == ']') {
          count['[']--;
        }      
        
        if (count['('] == -1 || count['{'] == -1 || count['['] == -1) {
        return false;
        }
      }
  
    }
    
    //   for (let eachKey in count) {
    //       if (count[eachKey] !== 0) {
    //         return false;
    //       }
    //     }
    
    // if (count['('] == 0) {
    //   return true
    // }
    
    return true;
  }
  
  console.log('1: ', validParen("()")); // true
  console.log('2: ', validParen("()()()")); // true
  console.log('3: ', validParen("(()")); // false
  console.log('4: ', validParen("((()))")); // true
  console.log('5: ', validParen(")()(")); // false
  console.log('6: ', validParen("())(")); // false
  console.log('7: ', validParen("(){}[]")); // true
  console.log('8: ', validParen("{[()]}")); // true
  console.log('9: ', validParen("([)]")); // false