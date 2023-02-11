"use strict";
class Nodee {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(val) {
        const newNodee = new Nodee(val);
        if (!this.head) {
            this.head = newNodee;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNodee;
        }
    }
    sort() {
        if (!this.head)
            return;
        this.head = this.mergeSort(this.head);
    }
    mergeSort(head) {
        if (!head.next)
            return head;
        let prev = null, slow = head, fast = head;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        const left = this.mergeSort(head);
        const right = this.mergeSort(slow);
        return this.sortList(left, right);
    }
    sortList(left, right) {
        let dummy = new Nodee(-1);
        let tail = dummy;
        while (left && right) {
            if (left.val < right.val) {
                tail.next = left;
                left = left.next;
            }
            else {
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
        }
        tail.next = left ? left : right;
        return dummy.next;
    }
}
