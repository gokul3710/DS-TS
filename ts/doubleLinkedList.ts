class Nodes {
    public data: number;
    public next: Nodes | null;
    public prev: Nodes | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    public head: Nodes | null;
    public tail: Nodes | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new Nodes to the end of the list
    public push(data: any) {
        let newNodes = new Nodes(data);

        if (!this.head) {
            this.head = newNodes;
            this.tail = newNodes;
        } else {
            this.tail!.next = newNodes;
            newNodes.prev = this.tail;
            this.tail = newNodes;
        }
    }

    // Remove the last Nodes from the list
    public pop() {
        if (!this.tail) {
            return;
        }

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        }
    }

    // Add a new Nodes to the beginning of the list
    public unshift(data: any) {
        let newNodes = new Nodes(data);

        if (!this.head) {
            this.head = newNodes;
            this.tail = newNodes;
        } else {
            this.head!.prev = newNodes;
            newNodes.next = this.head;
            this.head = newNodes;
        }
    }

    // Remove the first Nodes from the list
    public shift() {
        if (!this.head) {
            return;
        }

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head!.next;
            this.head!.prev = null;
        }
    }

    public display(){
        console.log(this.head);
    }
}

let obj = new DoublyLinkedList()
obj.unshift(23)
obj.push(23)
obj.push(23)
obj.push(23)
obj.display()
