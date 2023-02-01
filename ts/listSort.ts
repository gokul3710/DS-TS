// class Nodee {
//     val: number;
//     next: Nodee | null;
  
//     constructor(val: number) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     head: Nodee | null;

//     constructor() {
//         this.head = null;
//     }

//     add(val: number): void {
//         const newNodee = new Nodee(val);
//         if (!this.head) {
//             this.head = newNodee;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNodee;
//         }
//     }

//     sort(): void {
//         if (!this.head) return;
//         this.head = this.mergeSort(this.head);
//     }

//     mergeSort(head: Nodee): Nodee {
//         if (!head.next) return head;

//         let prev = null, slow: Nodee|null = head, fast: Nodee|null = head;
//         while (fast && fast.next) {
//             prev = slow;
//             slow = slow!.next;
//             fast = fast.next.next;
//         }
//         prev!.next = null;

//         const left: Nodee|null = this.mergeSort(head);
//         const right: Nodee|null = this.mergeSort(slow);

//         return this.sortList(left, right);
//     }

//     sortList(left: Nodee|null, right: Nodee|null): Nodee {
//         let dummy: Nodee|null = new Nodee(-1);
//         let tail = dummy;
//         while (left && right) {
//             if (left.val < right.val) {
//                 tail.next = left;
//                 left = left.next;
//             } else {
//                 tail.next = right;
//                 right = right.next;
//             }
//             tail = tail.next;
//         }
//         tail.next = left ? left : right;
//         return dummy.next;
//     }
// }
