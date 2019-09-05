// const log = () => {
//     let args = Array.prototype.slice.call(arguments);
//     args.unshift('(app)');
//     console.log.apply(console, args); 
// };
// Arrow function doesn't work here.

// function log(){
//     var args = Array.prototype.slice.call(arguments);
//     args.unshift('(app)');
//     console.log.apply(console, args);
//   }

// console.log(log('my message')); // (app) my message

var a = 1; 
function b() { 
    a = 10; 
    return; 
    // function a() {} 
} 
b(); 
console.log(a); 