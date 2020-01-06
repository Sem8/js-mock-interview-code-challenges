const removeKthLinkedListNode = (head, k) => {
    let list = [];
    let currentNode = head;
    while (currentNode.next !== null) {
        list.push(currentNode);
        currentNode = currentNode.next;
    };
    list.push(currentNode);

    // remove 2nd node to right before tail node
    if (list.length-k-1 >= 0 && list.length-k+1 < list.length) {
        list[list.length-k-1].next = list[list.length-k+1];
        return list[0];
    };

    // remove head node
    if (list.length-k === 0) {
        return list[1];
    };

    // for when k is larger than length of list or we only have 1 node
    if (list.length-k-1 < 0) {
        return list.length <= 1 ? [] : list[0];
    };

    // for removing tail node
    if (list.length - k + 1 === list.length) {
        list[list.length-k-1].next = null;
        return list[0];
    }
}



const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

let a1 = new SinglyLinkedList();
a1.insertNode(7);
a1.insertNode(3);
// console.log(a1.head);

let b1 = new SinglyLinkedList();
b1.insertNode('A');

let c1 = new SinglyLinkedList();
c1.insertNode('A');
c1.insertNode('B');
c1.insertNode('C');


// console.log(removeKthLinkedListNode(a1.head, 1));
// console.log(removeKthLinkedListNode(b1.head, 1));
// console.log(removeKthLinkedListNode(c1.head, 2));  // {A} remove middle node, normal case
// console.log(removeKthLinkedListNode(c1.head, 3));  // {B} remove head node, edge case
console.log(removeKthLinkedListNode(c1.head, 1));  // {A} remove tail node, edge case