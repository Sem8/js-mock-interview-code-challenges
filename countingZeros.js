const countingZeros = num => {
  let count = 0;
  while (num > 0) {
    count += Math.floor(num / 10);
    num = num / 10
  }
  return count;
}

console.log(countingZeros(100));