// check to see if all items from the first array are included in the second array

// Solution using every() and includes() method
const ifFirstArrayIsIncluded = (arr1, arr2) => {
    return arr1.every(eachElem => arr2.includes(eachElem));
}

// Solution using every() and indexOf() method
// const ifFirstArrayIsIncluded = (arr1, arr2) => {
//     return arr1.every(eachElem => arr2.indexOf(eachElem) !== -1);
// }

// using pure Javascript
const ifFirstArrayIsIncluded = (arr1, arr2) => {
    if (arr1.length <= arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) == -1) {
                return false;
            }
        }
    } else {
        return false
    }
    return true;
}


arrOne = [1, 2, 3, 4, 5]; // target array
arrTwo = [4, 5, 1, 2, 3, 9, 10]; // true
arrThree = [4, 5, 8, 9, 10]; // false
arrFour = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // false
arrFive = [10, 20, 30, 40, 50, 60, 70]; // false

console.log(ifFirstArrayIsIncluded(arrOne, arrThree));