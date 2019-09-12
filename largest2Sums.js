const largestTwoSums = arr => {
    let biggest = arr[0];
    let secondBiggest = arr[1];
    let len = arr.length;
    let i = 2;
    if (arr.length < 2) return null;

    if (biggest < secondBiggest) {
        biggest = arr[1];
        secondBiggest = arr[0];
    }

    for (; i < len; i++ ) {
        if (arr[i] > biggest) {
            secondBiggest = biggest;
            biggest = arr[i];
        }
        else if (arr[i] > secondBiggest) {
            secondBiggest = arr[i];
        }
    }
    return biggest + secondBiggest
}

console.log(largestTwoSums([2, 3, 1, 6, 4, 1, 7])); // 13
