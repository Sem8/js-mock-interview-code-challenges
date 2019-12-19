// Suggested solution (github combined w/ my own logic):

/*Pseudocode:

isObjectHelper function:
1. Make a helper function to check to see if something is a dictionary or not, call the function isObjectHelper which takes in an item as input
parameter
2. Inside, isObjectHelper function, return Object.prototype.toString.call(item) and see if it is equal to '[object Object]', it'll return true if
input item is an object and false otherwise

flattenDictionary main function:
1. Takes in an object called dict as an input parameter.
2. Declare an empty object call it finalObj
3. Loop through the input dict, with for in loop to get each key in the object, call each key objKey.
4. Inside for in loop make an if statement of if value of objKey from input dict object is a an object using the isObjectHelper helper function 
returns true (the value of objKey is an object) then recursively call the flattenDictionary function passing in the object value of the objKey 
key from input dict object (dict[objKey]) and set it to a variable called recursedInnerObj
5. Still inside for in loop and if statement, make another for in loop to go throug the recursedInnerObj object and setting it's keys to variable
called nestedKey.
6. Inside inner for in loop above, make an if statement, check if nestedKey is an empty string ('') then set the value of nestedKey key from 
inner object (recursedInnerObj) to value of objKey in the finalObj object (finalObj[objKey] = recursedInnerObj[nestedKey]).
7. Outside previous if statement, but still inside inner for in loop above get the value of nestedKey key from the recursedInnerObj and set it to 
input dict object with string literal join of objKey, followed by dot followed by nested key like so: finalObj[`${objKey},${nestedKey}`]
8. Outside inner for in loop and outside if statement but still inside the 1st for in loop, else (if value of objKey from input dict object is not 
    an object) then just set finalObj object with key of objKey equal to value of objKey from input dict object.
9. Return finalObj dictionary at end.
 */

const isObjectHelper = item => {
  return Object.prototype.toString.call(item) === "[object Object]";
};

function flattenDictionary(dict) {
  // your code goes here
  let finalObj = {};

  for (let objKey in dict) {    

    if (isObjectHelper(dict[objKey]) == true) {

      let recursedInnerObj = flattenDictionary(dict[objKey]);

      for (let nestedKey in recursedInnerObj) {
        if (nestedKey === '') {
            finalObj[`${objKey}`] = recursedInnerObj[nestedKey];        
        } else {
          if (objKey === '') {            
            finalObj[nestedKey] = recursedInnerObj[nestedKey];
          } else {
            finalObj[`${objKey}.${nestedKey}`] = recursedInnerObj[nestedKey];            
          }
            
        }
        
      }
    } else {
      finalObj[objKey] = dict[objKey];
    }
  }
  return finalObj;
}


/* Some console.log tests */

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

let inputDictII = {
  "": { a: "1" },
  b: "3"
};

console.log(flattenDictionary(inputDict));
console.log(flattenDictionary(inputDictII));



/*function flattenDictionary(dict):
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
