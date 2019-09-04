function isTwoPassed(){
    var args = Array.prototype.slice.call(arguments);
    return args.indexOf(2) != -1;
  }

console.log(isTwoPassed(1,4));
console.log(isTwoPassed(5,3,1,2));

// Why .1+.2 != .3
console.log(.1+.2);


// 'in' in an array returns the index numbers 0, 1 of this array
for (let x in [1, 2]) {
  console.log(x);
}

