/* You are given two non-empty linked lists representing two non-negative 
integers. The digits are stored in reverse order and each of their nodes contain 
a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

// My own solution: passes test case but not submission case
/* Pseudocode:
- Have a pointer for each input linked list, to go thru list
- Have an empty array for each linked list to prepend the Linked list's values 
to. 
- So now go through each list and prepend each node value to the resppective
arrays using unshift method so values are inserted in reversed order.
- Once all linked list values are inserted in array in reverse order use join
method to turn them into string and then parseInt method to turn them into 
a whole number
- Once we get a reversed number from each input linked list sum them up to get
the summed up digits, let's call it total and turn total into a string to make 
it iterable using toString() method.
- Have a pointer pointing to last index of the 'total' digit, make a linked 
list using the give ListNode function component and let's name it eachNode
- Also have a pointer to eachNode to be able to iterate through it, call it
placeHolder
- Have a while loop of while pointer to 'total' is more than 0, then decrement
pointer, then add the current value at the current pointer as the next node of
placeHolder then shift placeHolder to this latest next node by having 
placeHolder to equal placeHolder.next
- Outside while loop, return eachNode
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let val1 = [];
  let val2 = [];

  while (current1) {
    val1.unshift(current1.val);
    current1 = current1.next;
  }

  while (current2) {
    val2.unshift(current2.val);
    current2 = current2.next;
  }
  let val1RevNum = parseInt(val1.join(""));
  let val2RevNum = parseInt(val2.join(""));
  let total = (val1RevNum + val2RevNum).toString();

  let totalPointer = total.length - 1;
  let eachNode = new ListNode(parseInt(total[totalPointer]));
  let head = eachNode;

  while (totalPointer > 0) {
    totalPointer--;
    head.next = new ListNode(parseInt(total[totalPointer]));
    head = head.next;
  }
  return eachNode;
};

let l1a = new ListNode(2);
let l1b = new ListNode(4);
let l1c = new ListNode(3);
l1a.next = l1b;
l1b.next = l1c;

let l2a = new ListNode(5);
let l2b = new ListNode(6);
let l2c = new ListNode(4);
l2a.next = l2b;
l2b.next = l2c;

console.log(addTwoNumbers(l1a, l2a));
