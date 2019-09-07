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
  console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1])); // [1, 3, 5, 6, 7, 8]