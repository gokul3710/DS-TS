"use strict";
class Link {
    constructor(data, next) {
        this.data = (data === undefined) ? 0 : data;
        this.next = (next === undefined) ? null : next;
    }
}
class createList {
    constructor(data) {
        let newNode = new Link(data);
        this.head = newNode;
        this.tail = newNode;
    }
    insertHead(data) {
        let newNode = new Link(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertTail(data) {
        let newNode = new Link(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }
    display() {
        let head = this.head;
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    }
    reverseList() {
        let prev = null;
        let current = this.head;
        let next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    printRev(head = this.head) {
        if (head) {
            let temp = head;
            head = head.next;
            this.printRev(head);
            console.log(temp.data);
        }
    }
}
let list = new createList(2);
list.insertTail(3);
list.insertTail(3);
list.insertTail(4);
list.insertTail(4);
list.insertTail(5);
list.display();
