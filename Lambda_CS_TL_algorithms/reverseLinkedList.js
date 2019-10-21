// Reverse Linked list, return the new head. Also print the reversed linked list
/*Pseudocode:
1. Initialize a variable called prev, set it equal to null initially which will be a pointer for the node right before our current node.
2. Initialize a variable called current which will be a pointer for our current node, which is initially equal to the input head node.
3. Initialize a variable called nextToCurrent which will be a pointer for the node right after our current node.
4. Make a while loop of while current.next exists, set nextToCurrent equal to current.next so that there is a pointer variable saved for 
a pointer for the node right after current 
5. Set current.next equal to prev so that the initial head now points to null for next.
6. Set prev equal to current so that the (previous) prev pointer now points to the current node.   
 */
const reverseLinkedList = sllHead => {
    let prev = null;
    let current = sllHead;
    let nextToCurrent;

    while (current) {
        nextToCurrent = current.next;
        current.next = prev;
        prev = current;
        current = nextToCurrent;
    };

    sllHead = prev;
    return sllHead.value;    
}


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



console.log(reverseLinkedList(a1)); // 1;
console.log(reverseLinkedList(a2)); // 10;
console.log(reverseLinkedList(a3)); // 5;