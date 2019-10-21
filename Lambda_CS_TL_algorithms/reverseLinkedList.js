// Reverse Linked list, return the new head. Also print the reversed linked list
/*Pseudocode:
1. Initialize a variable called prev, set it equal to null initially which will be a pointer for the node right before our current node.
2. Initialize a variable called current which will be a pointer for our current node, which is initially equal to the input head node.
3. Initialize a variable called nextToCurrent which will be a pointer for the node right after our current node.
4. Make a while loop of while current exists and is not null, set nextToCurrent equal to current.next so that there is a pointer variable 
saved for a pointer for the node right after current 
5. Set current.next equal to prev so that the initial head now points to null for next and for subsequent iterations, the next arrow will 
point to previous node instead of next node of current node. 
6. Set prev equal to current so that the (previous) prev pointer now moves to the right by 1 and points to the current node.
7. Finally set current pointer equal to nextToCurrent so that the current pointer moves to the right by 1. 
8. In the next iteration still in the while loop, since nextToCurrent is set equal to current.next, the nextToCurrent pointer will now shift
to the right by 1.
9. The loop will repeat itself again so that the arrow will shift at current from pointing to next node to instead point to previous node
since current.next is set equal to previous.
10. Again, since prev is set equal to current, prev will move over to the right by 1 and since after that current is set equal to 
nextToCurrent, current pointer will now move to the right by 1. 
11. This will continue till current is at the last node, but once current moves to the right after the last node, while loop ends.
12. At the end, prev is left at the last node so reset input head to prev and return the value of the new head.      
 */
// const reverseLinkedList = sllHead => {
//   let prev = null;
//   let current = sllHead;
//   let nextToCurrent;

//   while (current) {
//     nextToCurrent = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextToCurrent;
//   }

//   sllHead = prev;
//   return sllHead.value;
// };

// Reverse linked list recursively:
const reverseLinkedListRecursive = sllHead => {
  let prev = null;
  let current = sllHead;

  let nextToCurrent = current.next;
  current.next = prev;
  prev = current;
  current = nextToCurrent;

  // base case:
  if (current == null) {
    sllHead = prev;
    return sllHead.value;
  } else {
    reverseLinkedListRecursive(current);
  }
};

// Function to print the linked list
// const printList = sllHead => {
//   let current = sllHead;

//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

// Function to print the linked list recursively
const printListRecursive = sllHead => {
  let current = sllHead;
  console.log("-> ", current.value);
  current = current.next;

  // base case: if current becomes null exit the function to end the recursive call
  // otherwise recursively call the function
  if (current == null) {
    return;
  } else {
    printListRecursive(current);
  }
};

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

let a2 = new ListNode(1);
let b2 = new ListNode(8);
let c2 = new ListNode(7);
let d2 = new ListNode(3);
let e2 = new ListNode(7);
let f2 = new ListNode(10);

a2.next = b2;
b2.next = c2;
c2.next = d2;
d2.next = e2;
e2.next = f2;

let a3 = new ListNode(1);
let b3 = new ListNode(2);
let c3 = new ListNode(3);
let d3 = new ListNode(4);
let e3 = new ListNode(5);

a3.next = b3;
b3.next = c3;
c3.next = d3;
d3.next = e3;
// e3.next = null;

// console.log(reverseLinkedList(a1)); // 1;
// console.log(reverseLinkedList(a2)); // 10;
// console.log(reverseLinkedList(a3)); // 5;
// printList(a1);
// printList(a2);
// printList(a3);
// printListRecursive(a3);

// console.log(reverseLinkedListRecursive(a1)); // 1;
// printListRecursive(f1);
// console.log(reverseLinkedListRecursive(a2)); // 10;
// printListRecursive(f2);
console.log(reverseLinkedListRecursive(a3)); // 5;
printListRecursive(e3);
