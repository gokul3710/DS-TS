"use strict";
class ListNodee {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    addToTail(val) {
        if (!this.head) {
            this.head = new ListNodee(val);
        }
        else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = new ListNodee(val);
        }
    }
    display(head = this.head) {
        while (head) {
            console.log(head.val);
            head = head.next;
        }
    }
}
const quickSortList = (head) => {
    if (!head || !head.next)
        return head;
    const pivot = head.val;
    let leftDummy = new ListNodee(0);
    let rightDummy = new ListNodee(0);
    let equalDummy = new ListNodee(0);
    let left = leftDummy;
    let right = rightDummy;
    let equal = equalDummy;
    let node = head;
    while (node) {
        if (node.val < pivot) {
            left.next = node;
            left = node;
        }
        else if (node.val === pivot) {
            equal.next = node;
            equal = node;
        }
        else {
            right.next = node;
            right = node;
        }
        node = node.next;
    }
    left.next = equal.next = right.next = null;
    const leftHead = quickSortList(leftDummy.next);
    const rightHead = quickSortList(rightDummy.next);
    equal.next = rightHead;
    left.next = equalDummy.next;
    return leftHead;
};
const lists = new LinkedList();
lists.addToTail(4);
lists.addToTail(2);
lists.addToTail(7);
lists.addToTail(1);
lists.addToTail(3);
lists.addToTail(50);
lists.head = quickSortList(lists.head);
lists.display();
