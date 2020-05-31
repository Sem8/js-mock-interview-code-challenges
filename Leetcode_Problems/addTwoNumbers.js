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

// My own solution: passes test case but not all submission cases
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

// let addTwoNumbers = function (l1, l2) {
//   let current1 = l1;
//   let current2 = l2;
//   let val1 = [];
//   let val2 = [];

//   while (current1) {
//     val1.unshift(current1.val);
//     current1 = current1.next;
//   }

//   while (current2) {
//     val2.unshift(current2.val);
//     current2 = current2.next;
//   }

//   let val1RevNum = parseInt(val1.join(""));
//   let val2RevNum = parseInt(val2.join(""));
//   let total = (val1RevNum + val2RevNum).toString();

//   console.log("total: ", total);

//   let totalPointer = total.length - 1;
//   let eachNode = new ListNode(parseInt(total[totalPointer]));
//   let head = eachNode;

//   while (totalPointer > 0) {
//     totalPointer--;
//     head.next = new ListNode(parseInt(total[totalPointer]));
//     head = head.next;
//   }
//   console.log(printLinkedListValInArr(eachNode));
//   return eachNode;
// };

/* Pseudocode: Suggested Solution
- Declare a variable called finalLinkedList (it'll serve as the linked list we'll return) and let it equal to new ListNode (to create 
  a linked list) and passing in a value of 0 for now. 
- Declare another variable called placeHolder and let it equal to finalLinkedList. placeHolder will serve as pointer to finalLinkedList
- Initialize a variable called sum and let it equal 0 for now
- Initialize a variable called carryOver and let it equal 0 for now
- while input linked list 1 (l1) is not null or linked list 2 (l2) is not null
- Inside while loop, let sum += l1 value then move onto next node by letting l1 eual l1.next
- Still inside while loop, let sum += l2 value then move onto next node in l2 by getting l2 to equal l2.next
- Make an if statement of sum is more than or equal to 10 then get sume to equal sum - 10 and carry to equal 1
- Let placeHolder.next equal to new ListNode passing in the value of sum then get placeHolder to equal placeHolder.next to move the placeHolder
pointer to this next most recent node
- Re-set sum to equal 0 and re-set carryOver to equal 0 to do the calculation on the next linked list node.
- Outside while loop, return finalLinkedList.next (because we started at 0 and the actual linked list of sum values start at 2nd node)
*/

let addTwoNumbers = (l1, l2) => {
  let finalLinkedList = new ListNode(0);
  let placeHolder = finalLinkedList;
  let sum = 0;
  let carryOver = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum =+ l1.val;
      l1 = l1.next;
    }    

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum = sum - 10;
      carryOver = 1;
    }

    placeHolder.next = new ListNode(sum);
    placeHolder = placeHolder.next;

    sum = 0;
    sum += carryOver;
    carryOver = 0;
  }

  console.log(printLinkedListValInArr(finalLinkedList.next));
  return finalLinkedList.next;
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

let m1a = new ListNode(1);
let m1b = new ListNode(0);
let m1c = new ListNode(0);
let m1d = new ListNode(0);
let m1e = new ListNode(0);
let m1f = new ListNode(0);
let m1g = new ListNode(0);
let m1h = new ListNode(0);
let m1i = new ListNode(0);
let m1j = new ListNode(0);
let m1k = new ListNode(0);
let m1l = new ListNode(0);
let m1m = new ListNode(0);
let m1n = new ListNode(0);
let m1o = new ListNode(0);
let m1p = new ListNode(0);
let m1q = new ListNode(0);
let m1r = new ListNode(0);
let m1s = new ListNode(0);
let m1t = new ListNode(0);
let m1u = new ListNode(0);
let m1v = new ListNode(0);
let m1w = new ListNode(0);
let m1x = new ListNode(0);
let m1y = new ListNode(0);
let m1z = new ListNode(0);
let m1za = new ListNode(0);
let m1zb = new ListNode(0);
let m1zc = new ListNode(0);
let m1zd = new ListNode(0);
let m1ze = new ListNode(1);
m1a.next = m1b;
m1b.next = m1c;
m1c.next = m1d;
m1d.next = m1e;
m1e.next = m1f;
m1f.next = m1g;
m1g.next = m1h;
m1h.next = m1i;
m1i.next = m1j;
m1j.next = m1k;
m1k.next = m1l;
m1l.next = m1m;
m1m.next = m1n;
m1n.next = m1o;
m1o.next = m1p;
m1p.next = m1q;
m1q.next = m1r;
m1r.next = m1s;
m1s.next = m1t;
m1t.next = m1u;
m1u.next = m1v;
m1v.next = m1w;
m1w.next = m1x;
m1x.next = m1y;
m1y.next = m1z;
m1z.next = m1za;
m1za.next = m1zb;
m1zb.next = m1zc;
m1zc.next = m1zd;
m1zd.next = m1ze;

let m2a = new ListNode(5);
let m2b = new ListNode(6);
let m2c = new ListNode(4);
m2a.next = m2b;
m2b.next = m2c;

let a1a = new ListNode(5);

let a2a = new ListNode(5);

let printLinkedListValInArr = (ll) => {
  let finalArr = [];

  let pointer = ll;
  while (pointer) {
    finalArr.push(pointer.val);
    pointer = pointer.next;
  }
  return finalArr;
};

// console.log(printLinkedListValInArr(m1a));
// console.log(printLinkedListValInArr(m2a));

console.log(addTwoNumbers(l1a, l2a));
// console.log(addTwoNumbers(m1a, m2a));
// console.log(addTwoNumbers(a1a, a2a));
