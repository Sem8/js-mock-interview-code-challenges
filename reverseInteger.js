// Given an integer, return an integer that is the reverse

/* Examples

 */

//  const reverseInt = n => {
//      n = n.toString();

//      nArr = [];

//      for (let i of n) {
//          nArr = i + nArr;
//      }

//      nArr = nArr.toString();

//      if (nArr.includes('-')) {
//          nArr = nArr.replace(nArr[nArr.length - 1], '');

//          nArr = '-' + nArr;
//      }

//      nArr = parseInt(nArr);

//      return nArr;
//  }

const reverseInt = n => {
    n = n.toString();

    let pointer = n.length - 1;
    let reverseStr = '';

    while (pointer >= 0) {
        if (isNaN(n[pointer]) === false) {
            reverseStr += n[pointer];
        }
        pointer--;
    }
    if (n[0] == '-') {
        return parseInt(-reverseStr);
    } else {
        return parseInt(reverseStr);
    }

}


 console.log(reverseInt(15))  // 51
 console.log(reverseInt(981))  // 189
 console.log(reverseInt(500))  // 5
 console.log(reverseInt(-15))  // -51
 console.log(reverseInt(-90))  // -9

// console.log('testing', parseInt('005'));
// console.log('testing', isNaN('1'));
// console.log('testing', isNaN(1));
// console.log('testing', isNaN('0'));
// console.log('testing', isNaN(0));
// console.log('testing', isNaN('-'));
// let aStr = '1';
// console.log('testing', parseInt(-aStr));
