// Reverse singly Linked list, return the new head. Also print the reversed linked list

const printList = sllHead => {
    let current = sllHead;
    while (current) {
        console.log(current.value);
        current = current.next;
    };
    return;
};

// My solution modified: Iterative
    // Make 3 pointers 1st pointer, pointer1 is just null, next 2 pointers, pointer2 & pointer3 will be 1st 2 nodes    
    // While pointer3 is not null:
        // Set pointer3 to pointer2.next
        // set pointer2.next to pointer1
        // set pointer1 to pointer2
        // set pointer2 to pointer3
        // After while loop, set input head equal to pointer1 and return value of new head

// const reverseLinkedList = sllHead => {
//     let pointer1 = null;
//     let pointer2 = sllHead;
//     let pointer3;    

//     while (pointer3 !== null) {
//         pointer3 = pointer2.next;
//         pointer2.next = pointer1;
//         pointer1 = pointer2;
//         pointer2 = pointer3;

//     };
//     sllHead = pointer1;
//     return sllHead.value;
// };

// Suggested solution: Recursive
    // Set 1st pointer, pointer1 to null
    // Set 2nd pointer, pointer2 to input head
    // set 3rd pointer, pointer3 to pointer2.next (right after pointer2)
    // set pointer2.next to pointer1 to reverse the arrow pointing of pointer2
    // set pointer1 to pointer2
    // set pointer2 to pointer3
    // Make base case of if pointer2 is null then set pointer1 equal to input head and return value of input head
    // Otherwise, (if pointer2 is not null) recuresively call the reverseLinkedListRecursive function, passing in pointer2 as the
    // parameter 

// const reverseLinkedListRecursive = sllHead => {
//     let pointer1 = null;
//     let pointer2 = sllHead;
//     let pointer3 = pointer2.next;
//     pointer2.next = pointer1;
//     pointer1 = pointer2
//     pointer2 = pointer3
//     // base case:
//     if (pointer2 == null) {
//         sllHead = pointer1;
//         return sllHead.value;
//     } else {
//         reverseLinkedListRecursive(pointer2);
//     };
// };

// Suggested solution 2: Recursive (Doesn't return the reversed head only reverses and shows whole reversed list)
    // set 1st pointer, pointer1 to input head
    // Make a base case, if pointer1.next is equal to null then set pointer1 to input head then return value of input head
    // Recursively call the function, pass in pointer1.next as the parameter (function stops at last node and goes back up the call stack)
    // after recursive call, initialize a variable called pointer2 and set it equal to pointer1.next (pointer1 is 2nd to last node right
    // after function stopped and returned the 1st time. pointer2 is the last node)
    // set the now pointer2.next to pointer1
    // set pointer1.next to null to end this function call so it can go back up to the next call stack

// const reverseLinkedListRecursive = sllHead => {
//     let pointer1 = sllHead

//     if (pointer1.next == null) {
//         sllHead = pointer1;
//         return sllHead.value;
//     };
//     reverseLinkedListRecursive(pointer1.next);
    
//     let pointer2 = pointer1.next;
//     pointer2.next = pointer1;
//     pointer1.next = null;
// };


// Print linked list in reversed order, recursively (doesn't reverse the list itself just prints reversely):
// My solution: 
    // Set a variable pointer called pointer1 to input head
    // Make a base case of if pointer1 is null then just return
    // Otherwise (if pointer1 is not null) recursively call the function passing in pointer1.next as the parameter
    // after recursive call, print out the pointer1 value

// const printReversedLinkedListRecursive = sllHead => {
//     let pointer1 = sllHead

//     if (pointer1 == null) {
//         return;
//     };
//     printReversedLinkedListRecursive(pointer1.next);
//     console.log(pointer1.value);
// };


// Print linked list recursively
// My solution:
    // set a pointer variable called pointer1 to input head
    // Make a base case of if pointer1 node is null then just return to end the function
    // Otherwise (if current pointer1 node is not null) then print value of current pointer1 node then recursively call the function passing
    // in pointer1.next as the current head as the parameter now.
const printListRecursive = sllHead => {
    let pointer1 = sllHead; 
    
    // base case:
    if (pointer1 == null) {
        return;
    };
    console.log(pointer1.value);
    printListRecursive(pointer1.next);
};

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }    
};

let a1 = new ListNode(7);
let b1 = new ListNode(3);
let c1 = new ListNode(4);
let d1 = new ListNode(8);
let e1 = new ListNode(5);
let f1 = new ListNode(1);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;

// console.log(printList(a1));
// console.log(reverseLinkedList(a1));
// console.log(reverseLinkedListRecursive(a1));
// console.log(printList(f1));

// console.log(printReversedLinkedListRecursive(a1));
console.log(printListRecursive(a1));