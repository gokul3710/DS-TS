"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let s = x + y + carry;
        carry = Math.floor(s / 10);
        current.next = new ListNode(s % 10);
        current = current.next;
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
}
;
