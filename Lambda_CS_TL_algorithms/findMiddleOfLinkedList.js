// Solution 1: O(n) time complexity, O(2n) space complexity. Walk through the linked list chain, push each node into an array and 
// return the node from the middle index of the array. For even number of arrays return the 1st node in the middle. 

/*Pseudocode:
1. Function parameter takes in head so set a variable called current equal to head which will be the pointer.
2. Initialize a variable called count and set it to 0
3. Initialize an empty array and call it nodeList.
4. Make a while loop of while current is not null
5. Inside while loop, push current (current node) into the nodeList array, then move the pointer to the next node by setting current to 
current.next. While loop will continue as long as linked list node is there and exit once we reach end of linked list chain
6. Increment count by 1.  
7. return the node from the nodeList array at the middle index by doing nodeList[Math.floor(nodeList.length / 2)]
 */

const findMiddleLinkedList = (sllHead) => {
    let current = sllHead;
    let count = 0;
    let nodeList = [];

    while (current != null) {
        nodeList.push(current);
        current = current.next;
        count++;
        // console.log(current.value, count);
    };
    // nodeList.forEach(eachNode => console.log(eachNode.value));
    // console.log(count);
    return nodeList[Math.ceil(nodeList.length / 2) - 1].value;
};

// Solution 2: O(n) time complexity, O(1) space complexity. Have 2 pointers, fast pointer jumps ahead by 2 nodes, slow pointer jumps ahead
// by 1 node. When fast pointer reaches end, slow pointer will be at halfway point. Return the node slow pointer is at.
/*Pseudocode:
 */

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



console.log(findMiddleLinkedList(a1)); // 4;
console.log(findMiddleLinkedList(a2)); // 7;
console.log(findMiddleLinkedList(a3)); // 3;


// Python codes:
/*
def find_middle_node(sll):
  count = 0
  node_list = []

  current = sll.head
  while current != None:
    node_list.append(current)
    current = current.next
    count += 1

  return node_list[(round(count/2))]
 */

/* 
def findMiddle(listHead):
    slow = listHead
    fast = listHead
    while fast:
        fast = fast.next.next
        slow = slow.next

    return slow
*/