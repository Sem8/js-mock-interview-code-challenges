/* For this exercise assume that values are either an integer, a string or another dictionary.
Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it. For example:

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
*/

// My solution: logic similar to suggested solution but didn't work 
/*Pseudocode:
Write a helper method to determine whether an input is an object or not (non objects can be arrays or functions) and call it isObjectHelper:

isObjectHelper function:
1. isObjectHelper function takes in a single parameter called item.
2. return Object.prototype.toString.call(item) === '[object Object]' which will return true if it's an object and false otherwise

1. Function takes in dictionary as an input
2. Declare an empty object, call it finalObj.
3. Loop through the input object with for in loop, call each key objKey.
4. Make an if statement, check if value of input dict with objKey key (dict[objKey]) passed into the isObjectHelper function returns false (the 
value is not an object) then pass the objKey as a key in the finalObj dictionary, and it's value as objkey's value into the finalObj dictionary.
5. Still inside for loop, make another if statement of if input dict with objKey key (dict[objKey]) passed into the isObjectHelper function 
return true (value is an object) then pass the objecKey from parent input dict as a key, put a dot after objKey using string literal then the key
from 
 */

const isObjectHelper = item => {
  return Object.prototype.toString.call(item) === "[object Object]";
};

// const flattenDictionary = dict => {
//   let finalObj = {};

//   for (let objKey in dict) {
//     if (!dict.hasOwnProperty(objKey)) {
//       continue;
//     }
//     if (typeof dict[objKey] == "object") {
//       let recursiveFlatten = flattenDictionary(dict[objKey]);
//       for (let nestedKey in recursiveFlatten) {
//         if (!recursiveFlatten.hasOwnProperty(nestedKey)) {
//           continue;
//         }
//         finalObj[`${objKey}.${nestedKey}`] = recursiveFlatten[nestedKey];
//       }
//     } else {
//       finalObj[objKey] = dict[objKey];
//     }
//   }
//   //   console.log(finalObj);
//   return finalObj;
// };

const flattenDictionary = dict => {
  let finalObj = {};

  for (let objKey in dict) {
    if (isObjectHelper(dict[objKey]) == false) {
      finalObj[`${objKey}`] = dict[objKey];
    };

    if (isObjectHelper(dict[objKey]) == true) {
      let recursedInnerObj = flattenDictionary(dict[objKey]);

      for (let nestedKey in recursedInnerObj) {
        finalObj[`${objKey}.${nestedKey}`] = recursedInnerObj[nestedKey];
      };
    };
  };

  return finalObj;
};

/* Pramp suggested solution:
function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): # the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)
 */

let testObj = { sandwich: "tuna", chips: "cape cod" };

let inputDict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1"
      }
    }
  }
};

// console.log(isObjectHelper(inputDict));
// console.log(inputDict['Key2']['a']);
// console.log('flattenDictionary(testObj)', flattenDictionary(testObj));
// console.log(isObjectHelper(inputDict['Key2']));
// console.log(inputDict['Key2']['c']['e'].hasOwnProperty('')); // true

// flattenDictionary(inputDict)
console.log(flattenDictionary(inputDict));
