// helper function to insert an input value into an input string at an input index:
function insertHelper(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }
  
  function solution(N) {
    let pointer;
    let max = -100000;
    let strN = N.toString();
  
    if (N >= 0) {
      pointer = 0;
      while (pointer < strN.length) {
        if (parseInt(insertHelper(strN, pointer, 5)) > max) {
          max = parseInt(insertHelper(strN, pointer, 5));
        }
        pointer++;
      }
    }
    pointer = 1;
    while (pointer < strN.length) {
      if (parseInt(insertHelper(strN, pointer, 5)) > max) {
        max = parseInt(insertHelper(strN, pointer, 5));
      }
      pointer++;
    }
    return max;
  }
  
  console.log(solution(268)); // 5268
  console.log(solution(0)); // 50
  console.log(solution(650)); // 6550
  console.log(solution(670));
  console.log(solution(-999)); // -5999
  