// let myOutput = [
//   -10,
//   -10,
//   -10,
//   -10,
//   -9,
//   -9,
//   -9,
//   -9,
//   -9,
//   -8,
//   -8,
//   -8,
//   -8,
//   -8,
//   -8,
//   -7,
//   -7,
//   -7,
//   -7,
//   -7,
//   -7,
//   -7,
//   -6,
//   -6,
//   -6,
//   -6,
//   -5,
//   -5,
//   -5,
//   -5,
//   -5,
//   -5,
//   -5,
//   -5,
//   -4,
//   -4,
//   -4,
//   -4,
//   -4,
//   -4,
//   -4,
//   -3,
//   -3,
//   -3,
//   -3,
//   -3,
//   -3,
//   -3,
//   -2,
//   -2,
//   -2,
//   -2,
//   -2,
//   -1,
//   -1,
//   -1,
//   -1,
//   1,
//   0,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   2,
//   2,
//   2,
//   2,
//   3,
//   3,
//   3,
//   4,
//   4,
//   4,
//   4,
//   4,
//   5,
//   5,
//   5,
//   6,
//   6,
//   6,
//   6,
//   6,
//   6,
//   6,
//   7,
//   7,
//   7,
//   7,
//   7,
//   7,
//   7,
//   7,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   8,
//   9,
//   9,
//   9,
// ];

// let expected = [-10,-10,-10,-10,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,0,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,4,4,4,4,4,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9]

// console.log('myOutput length: ', myOutput.length);
// console.log('expected: ', expected.length);

/* Longest common Prefix */
// let lastCommonStr = ''
// console.log('lastCommonStr: ' , lastCommonStr );
// lastCommonStr += '';
// console.log('lastCommonStr: ' , lastCommonStr );

/* Longest Palindromic substring */
var arr = ['cats', 'giants', 'daughters', 'ice'];
var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
console.log(min); // 3