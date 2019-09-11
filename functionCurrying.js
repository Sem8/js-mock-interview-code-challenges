// Function currying using closure

// const addBase = base => {
//     return num => {
//         return base + num;
//     }
// }

// let addTen = addBase(10);
// addTen(5) // 15
// addTen(9) // 19
// console.log(addTen(5));

// Function currying using bind:
let multiply = (x, y) => {
    console.log(x * y);
}

// 2 will be the first parameter
// let multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(5));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));

// Pass both parameters into the bind method
// let multiplyByTwo = multiply.bind(this, 2, 3);
// console.log(multiplyByTwo());

// Can also not pass anything to the bind method and only pass parameters onto the second function call
let multiplyByTwo = multiply.bind(this);
console.log(multiplyByTwo(2, 3));

// currying using function closure
