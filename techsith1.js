// // Question 1: Return values of the object x in an array ex. [1, 2]
// let x = {
//     a: 1,
//     b: 2
// };

// const xArr = Object.values(x);
// console.log(xArr);


// // Question 2: Be able to return the values with obj.getA().getB(); 
// const obj = {
//     a: 1,
//     b: 2, 
//     getA() {        
//         console.log(this.a);
//         return this;      
//     },
//     getB() {        
//         console.log(this.b);
        
//     }
// };
// obj.getA().getB();

// // Question 3: Have a method called print so [1, 2].print(); will print: 1, 2
// Array.prototype.print = () => {
//     let result = '';
//     for (let [i, elem] of this) {
//         if (i === this.length) {
//             result += elem;
//         } else {
//             result += `${elem},`
//         }
//     }
//     console.log(result);
// }


// Question 4: a should have a getter method for getting x and b should have a getter method to get y in the functions below so 
// newB.getX() should give the value x and newB.getY() should give y - solution gives error
// const a = function(x) {
//     this.x = x;
// }
// const b = function(x, y) {
//     this.y = y;
// }
// const newB = new b('x', 'y');

// const a = function(x) {
//     this.x = x;
// };
// a.prototype = {
//     getX() {
//         return this.x
//     }
// }
// const b = function(x, y) {
//     this.y = y;
//     a.call(this, x);

//      function getY() {
//         return this.y;
//     }
// }
// const newB = new b('x', 'y');
// console.log(newB.getX());

// // Question 5: Deep clone an object that contains other objects as values so,
// // clone.a.b.c = 2, then obj.a.b.c = 1
// let obj = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// };

// let clone = JSON.parse(JSON.stringify(obj));
// obj.a.b.c = 2
// console.log(obj.a.b.c);
// console.log(clone.a.b.c);

// // Question 6: Merge 2 sorted arrays and return a newly sorted merged array with optimal time complexity:
// const a = [1, 2, 5, 7, 9];
// const b = [2, 5, 7, 12,];

// Question 7: What will obj.getX() return? 
// Answer: it'll return undefined because 'this' does not have access to parent obj inside the inner function. 
// const obj = {
//     x: 1,
//     getX() {        
//         const inner = function() {            
//             console.log(this.x);
//         }
//         inner();
//     }
// }
// console.log(obj.getX()); // will return undefined

// // Solution 1: To make it work so x will return 1 in the inner function use arrow function
// const obj = {
//     x: 1,
//     getX() {        
//         const inner = () => {            
//             console.log(this.x);
//         }
//         inner();
//     }
// };
// obj.getX(); // will return 1

// Solution 2: To make it work so x will return 1 in the inner function use bind
// const obj = {
//     x: 1,
//     getX() {
//         const that = this;        
//         const inner = function() {            
//             console.log(that.x);
//         }
//         inner();
//     }
// };
// obj.getX(); // will return 1

// Solution 3: use bind method to bind this to inner
const obj = {
    x: 1,
    getX() {       
        const inner = function() {            
            console.log(this.x);
        }
        inner.bind(this)();
    }
};
obj.getX(); // will return 1


