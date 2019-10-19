/*Given a linked list, the problem is to delete all the nodes from the list that are greater than the specified value x. Takes in head
as first input parameter and x as 2nd input parameter where you have to delete all numbers greater than x.

Examples:
Input : list: 7->3->4->8->5->1
        x = 6
Output : 3->4->5->1

Input : list: 1->8->7->3->7->10
        x = 7
Output : 1->7->3->7
 */

/*Pseudocode:
1. Make an if statement of if input head node is equal to null then return head (I can't understand why).
2. Make an if statement of if value of input head node (head.value) is greater than the input number x and there are no other nodes after head 
node (if head.next is null) then return null.
3. Initialize a variable called current and set it equal to the input head. 
4. Initialize a variable called previous and set it equal to null for now. 
5. Make a while loop of while current is not null and value of current (current.value) is greater than x then set previous to current and continue
onto the next node by setting current to current.next. This will get rid of 1 node or few consecutive nodes with values greater than input number x
that comes before the new head is updated. While loop will exit once we reach a node whose value is less than x. 
6. Make an if statement check if previous is not null then set next pointer of previous (previous.next) equal to null to break the linked list 
chain for any node or consecutive nodes whose value was greater than x. 
7. Initialize a variable called newHead and set it equal to current to update the new head node as the first node whose value is less than x in
the given linked list. 
8. Make a while loop to loop through the entire linked list by stating while current.next is not null.
9. Inside while loop make an if statement of if current.next.value is greater than x then set the current.next to current.next.next to skip the 
node that has a value greater than x 
10. Else, (if the value of the node next to the current node is not greater than x) then go to the next node by setting current to current.next.
11. at the end, return newHead.  
 */

const deleteNodesGreaterThanX = (head, x) => {
    if (head == null) {
        return head;
    };
    // If there's only one node in the linked list and it has a value of greater than x then just return null
    if (head.value > x && head.next == null) {
        return null;
    };
    let current = head;
    let previous = null;

    // Find the first node with a value of less than x in the linked list and update it as the new head. 
    // Get rid of any 1 or multiple consecutive nodes in the initial linked list chain that has a value of greater than x.
    while(current != null && current.value > x) {
        previous = current;
        current = current.next;
    };
    // Break the linked list chain with any initial node or nodes with values greater than x.
    if (previous != null) {
        previous.next = null
    };

    // Update the new head node as the initial node that has a value of less than x if the linked list started off with nodes with values greater
    // than x.
    let newHead = current;

    // Get rid of any nodes in the middle with values greater than x by skipping over them, and traverse through the linked list till the end
    while(current.next != null) {
        // console.log(`-> ${current.value}`)        
        if (current.next.value > x) {
            current.next = current.next.next;
            // console.log(current.next.value);            
        } else {            
            current = current.next;
        };                
    };
    
    return newHead.value;
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


console.log(deleteNodesGreaterThanX(a1, 6)); // 3
console.log(deleteNodesGreaterThanX(a2, 7)); // 1
