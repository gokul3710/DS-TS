"use strict";
class queueNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(val) {
        let newNode = new queueNode(val);
        if (this.front == null) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }
    dequeue() {
        if (this.front == null) {
            console.log("Empty");
            return;
        }
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
            console.log("Empty");
        }
    }
    display() {
        let front = this.front;
        while (front) {
            console.log(front.val);
            front = front.next;
        }
    }
}
let q = new queue();
q.enqueue(83);
q.enqueue(43);
q.enqueue(42);
q.display();
