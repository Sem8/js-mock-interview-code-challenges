// let name = {
//     firstName: 'Sem',
//     lastName: 'Limi',
//     printFullName: function() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// name.printFullName();

let name = {
    firstName: 'Sem',
    lastName: 'Limi',
}

function printFullName(hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
} 

// printFullName.call(name, 'Queens', 'New York');

let name2 = {
    firstName: 'Maahi',
    lastName: 'Syeda',
}

// Function 'call' method == function borrowing
// name.printFullName.call(name2)

// Use call method with a global function instead of a function inside one specific object. (Doesn't work with arrow function)

// printFullName.call(name2, 'Hyderbad', 'Not sure');

// Apply method --> Only difference between call and apply method is apply method takes function parameters as an array of arguments
// printFullName.apply(name, ['Queens, New York']);

// 'bind' method --> binds the printFullName to an object and returns us the copy of that method
// difference between call and bind is, with bind we create a copy of the method which can be invoked later
let printMyName = printFullName.bind(name, 'Queens', 'New York');
// console.log(printMyName);
printMyName();
