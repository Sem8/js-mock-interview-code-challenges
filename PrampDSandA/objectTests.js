let arr1 = ['tuna', 'chicken', 'pb&j'];
let obj1 = {sandwich: 'tuna', chips: 'cape cod'};
let func1 = n => {
    return n + 2;
}

// console.log('typeof arr1: ', typeof arr1); // object
// console.log('typeof obj1', typeof obj1); // object
// console.log('typeof func1', typeof func1); // function

// console.log('arr1 instanceof Object', arr1 instanceof Object);  // true
// console.log('obj1 instanceof Object', obj1 instanceof Object);  // true 
// console.log('func1 instanceof Object', func1 instanceof Object);    // true

// console.log('arr1 === Object(arr1)', arr1 === Object(arr1)); // true
// console.log('obj1 === Object(obj1)', obj1 === Object(obj1)); // true
// console.log('func1 === Object(func1)', func1 === Object(func1)); // true

// console.log(Object.getPrototypeOf(arr1)); // []
// console.log(Object.getPrototypeOf(obj1)); // {}
// console.log(Object.getPrototypeOf(func1)); // [Function]

const isObject = item => {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
};

// console.log('isObject(arr1): ', isObject(arr1)); // false
// console.log('isObject(obj1): ', isObject(obj1)); // true
// console.log('isObject(func1): ', isObject(func1)); // false

const isObjectII = item => {
    return item instanceof Object && item.constructor === Object;
};

// console.log('isObjectII(arr1): ', isObjectII(arr1)); // false
// console.log('isObjectII(obj1): ', isObjectII(obj1)); // true
// console.log('isObjectII(func1): ', isObjectII(func1)); // false
// console.log('arr1.constructor', arr1.constructor);  // [Function: Array]
// console.log('func1.constructor', func1.constructor);    // [Function: Function] 

const isObjectIII = item => {
    return Object.prototype.toString.call(item) === '[object Object]';
};

// console.log('isObjectIII(arr1): ', isObjectIII(arr1)); // false
// console.log('isObjectIII(obj1): ', isObjectIII(obj1)); // true
// console.log('isObjectIII(func1): ', isObjectIII(func1)); // false
// console.log('Object.prototype.toString.call(arr1): ', Object.prototype.toString.call(arr1)); // [object Array]
// console.log('Object.prototype.toString.call(func1): ', Object.prototype.toString.call(func1)); // [object Function]
