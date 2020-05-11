// Good enough solution
const removeDuplicate = (arr) => {
  let hashTable = {};
  let arrChecker = [];

  for (let i = 0; i < arr.length; i++) {
    if(!hashTable[arr[i]]) {
      arrChecker.push(arr[i]);
      hashTable[arr[i]] = true;
    }
  }
  return arrChecker;
}

// For maximal performance:
const removeDuplicate = (arr) => {
  let hashTable = {};
  let arrChecker = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if(hashTable[arr[i]] !== 1) {
      hashTable[arr[i]] = 1;
      arrChecker[j++] = arr[i]
    }
  }
  return arrChecker;
}

// Short and concise one liner solution using set
const removeDuplicate = (arr) => {
  return [...new Set(arr)];
}

// Using filter
const removeDuplicate = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Using reduce method
const removeDuplicate = (arr) => {
  return arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
};

// Using indexOf method: 
const removeDuplicate = arr => {
  let noDupArr = [];
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (noDupArr.indexOf(arr[i]) === -1) {
      noDupArr.push(arr[i]);
    }
  }
  return noDupArr;
}

// Using sort method. 
// 1) array sort with sort method to put duplicate values next to each other, initialize an empty array let's call it noDupArray.
// 2) initilize a variable called temp.
// 3) Loop through the array elements and if an element does not equal temp, push it into the noDupArray. 
// 4) set temp variable to that current element so that the next duplicate value does not get pushed to the new noDupArray.
// 5) return noDupArray

const removeDuplicate = arr => {
  let noDupArr = [];
  let temp;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (temp != arr[i]) {
      noDupArr.push(arr[i]);
      temp = arr[i];
    }
  }
  return noDupArr;
}



  console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1])); // [1, 3, 5, 6, 7, 8]