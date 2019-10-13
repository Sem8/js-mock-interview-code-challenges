// Solution 1: Uses 2 pointers, right pointer first walks down input number - 1 steps. Then left pointer keeps walking down by 1 then right
// pointer keeps walking down by 1 till right pointer reaches end. And wherever left pointer has stopped once right pointer has reached
// end that's the kth to last index.

/* Pseudocode:
1. Make an if statement, check if k is less than 1 then throw an error.
2. Otherwise, set a variable called leftNode and rightNode, both to the input head.
3. Make a for loop starting at 1 and ending at less than input k (the number from last index number)
4. Increment rightNode for as long as the iteration from last for loop goes on, so the iteration will be for the number of times the k is
minus 1. rightNode is incremented by setting rightNode to rightNode.next
5. Outside for loop, make a while loop of while rightNode.next still exists (so while rightNode has not reached the end of the linked
list) and increment leftNode by 1 by setting leftNode to leftNode.next 
6. Then, still inside while loop, increment rightNode by 1 by setting rightNode to rightNode.next. When the rightNode reaches end of 
linked list, while loop will break, and leftNode will be left at the last position it incremented to.
7. Outside while loop 
 */

// const kthToLastNode = (k, head) => {
//   if (k < 1) {
//     throw new Error(
//       "Can't remove from last with a negative number, can't remove less than 1st to last number"
//     );
//   }
//   rightNode = head;
//   leftNode = head;

//   for (let i = 1; i < k; i++) {
//     rightNode = rightNode.next;
//   }

//   while (rightNode.next) {
//     leftNode = leftNode.next;
//     rightNode = rightNode.next;
//   }

//   return leftNode.value;
// };

// Solution 2: Walk down the list from the head to the end to count the list length. Subtract k from the list length. Then walk down
// from head to that new updated length to return the value.

/*Pseudocode:
1. set a variable called counter to 1.
2. set a variable called pointer1 to head, and a variable called pointerToReturn to head also
3. Make a while loop of while pointer1.next (while pointer1 hasn't reached end of index) increment pointer1 by 1 each time by setting
pointer1 to pointer1.next then incrementing count by 1 each time as well. This will return the length of the linked list indicated by
counter.
4. Get kth to last node index by subtracting total length (we get from counter) minus k and set it to a variable called lengthMinusK
5. Make an if statement to check if lengthMinusK is more than or equal to 1.
6. Inside if statement, make a for loop, starting at index 0 and ending at index less than lengthMinusK. 
7. Inside for loop, increment pointerToReturn by 1 for each iteration by setting pointerToReturn to pointerToReturn.next.
8. Outside for loop, return pointerToReturn.value.  
 */

const kthToLastNode = (k, head) => {
    let counter = 1;
    let pointer1 = head;
    let pointerToReturn = head;

    while(pointer1.next) {
        pointer1 = pointer1.next;        
        counter++;
    }

    let lengthMinusK = counter - k;

    if (lengthMinusK >= 1) {
        for (let i = 0; i < lengthMinusK; i++) {
            pointerToReturn = pointerToReturn.next;
        }
    };
    return pointerToReturn.value;
};

class ListNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Some console.log tests */
console.log(kthToLastNode(2, a)); // should print 'Dobermann'
console.log(kthToLastNode(5, a)); // should print 'Australian Sheperd'
console.log(kthToLastNode(3, c)); // should print 'Cairne Terrier'
console.log(kthToLastNode(3, a)); // should print 'Cairne Terrier'
