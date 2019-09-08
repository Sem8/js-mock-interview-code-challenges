const mergeSortedArray = (arr1, arr2) => {
    let merged = [];
    let arr1FirstElem = arr1[0];
    let arr2FirstElem = arr2[0];
    let i = 1;
    let j = 1;

    if (arr1.length == 0) {
        return arr2;
    }
    if (arr2.length == 0) {
        return arr1;
    }

    while (arr1FirstElem || arr2FirstElem) {
        if ((arr1FirstElem && !arr2FirstElem) || arr1FirstElem < arr2FirstElem) {
            merged.push(arr1FirstElem);
            arr1FirstElem = arr1[i++];
        } else {
            merged.push(arr2FirstElem);
            arr2FirstElem = arr2[j++];
        }
    }
    return merged;
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));