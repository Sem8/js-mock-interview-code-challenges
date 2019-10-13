// Solution: Uses 2 pointers, right pointer first walks down input number - 1 steps. Then left pointer keeps walking down by 1 then right
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

const kthToLastNode = (k, head) => {
    if (k < 1) {
        throw new Error("Can't remove from last with a negative number, can't remove less than 1st to last number")
    }
    rightNode = head;
    leftNode = head;

    for (let i = 1; i < k; i++) {
        rightNode = rightNode.next;
    }

    while(rightNode.next) {
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }

    return leftNode.value;
}

class ListNode {
    constructor(value) {
        this.value = value,
        this.next = null;
    }
}

let a = new ListNode('Australian Sheperd');
let b = new ListNode('Beagle');
let c = new ListNode('Cairne Terrier');
let d = new ListNode('Dobermann');
let e = new ListNode('English Mastiff');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Some console.log tests */
console.log(kthToLastNode(2, a));   // should print 'Dobermann'
console.log(kthToLastNode(5, a));   // should print 'Australian Sheperd'
console.log(kthToLastNode(3, c));   // should print 'Cairne Terrier'