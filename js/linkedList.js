"use strict";
class linkedList {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class execution {
    constructor(data) {
        this.head = new linkedList(data, this.head);
        this.tail = this.head;
    }
    addFirst(data) {
        this.head = new linkedList(data, this.head);
    }
    // addLast(data:number,head: node = this.head){
    //     this.tail.next = new linkedList(data,null)
    //     this.tail = this.tail.next
    // }
    addLast(data) {
        let head = this.head;
        let prev;
        while (head != null) {
            prev = head;
            head = head.next;
        }
        prev.next = new linkedList(data, null);
    }
    display() {
        console.log(this.head);
    }
    displayOrder() {
        let head = this.head;
        while (head) {
            if (head.next == null) {
                console.log(head.data);
                return;
            }
            else {
                console.log(head.data);
                head = head.next;
            }
        }
    }
    insertAfter(data, check) {
        var _a;
        let head = this.head;
        while (head) {
            if (head.data === check) {
                head.next = new linkedList(data, head.next);
                if (((_a = head.next) === null || _a === void 0 ? void 0 : _a.next) == null) {
                    this.tail = head.next;
                }
                return;
            }
            else {
                head = head.next;
            }
        }
    }
    deleteOne(data) {
        let head = this.head;
        let prev = head;
        if (head.data === data) {
            this.head = head.next;
            return;
        }
        while (head.data != data) {
            prev = head;
            console.log(prev);
            head = head.next;
        }
        prev.next = head.next;
    }
    displayIndex(index) {
        let count = 0;
        let head = this.head;
        while (count < index) {
            head = head.next;
            count++;
        }
        console.log(head.data);
        return;
    }
    displayTail() {
        console.log(this.tail);
    }
    displayHead() {
        console.log(this.head);
    }
    makeCircle() {
        this.tail.next = this.head;
    }

    sumskipmid(){
        let slow = this.head
        let fast = this.head
        let sum = 0
        while(fast && fast.next){
            sum += slow.data
            console.log(slow.data);
            fast = fast.next.next
            slow = slow.next
        }

        slow = slow.next
    
        
        while(slow){
            sum+= slow.data
            console.log(slow.data);
            slow = slow.next
        }

        console.log(sum);
    }
}
let a = new execution(1);
a.addLast(2)
a.addLast(3)
a.addLast(4)
a.addLast(5)
a.addLast(6)
a.addLast(7)
a.addLast(8)
a.addLast(9)
a.addLast(10)
// a.displayOrder()
a.sumskipmid()
// a.deleteOne(50)
// a.deleteOne(7)
// a.deleteOne(78)
// a.insertAfter(78, 11);
// a.displayOrder()
// a.displayOrder();
// a.makeCircle()
