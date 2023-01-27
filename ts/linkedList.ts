type node = {
    data: number
    next: node|null
}


class linkedList{
    constructor(data:number,next: node|null){
        this.data = data;
        this.next = next;
    }
    data:number
    next: node|null
}

class execution{
    constructor(data: number){
        this.head = new linkedList(data,this.head)
        this.tail = this.head
    }
    
    head: any;
    tail: any;


    addFirst(data:number){
        this.head = new linkedList(data,this.head)
    }

    addLast(data:number,head: node = this.head){
        this.tail.next = new linkedList(data,null)
        this.tail = this.tail.next
    }

    display(){
        console.log(this.head);
    }

    displayOrder(){
        let head: node = this.head
        while(head){
            if(head.next ==null){
                console.log(head.data);
                return;
            }else{
                console.log(head.data);
                head=head.next
            }

        }
    }

    insertAfter(data: number,check: number){
        let head: node | null = this.head
        while(head){
            if( head.data === check){
                head.next = new linkedList(data,head.next)
                if(head.next?.next == null){
                    this.tail = head.next
                }
                return;
            }else{
                head = head.next
            }
        }
    }
    deleteOne(data: number){
        let head = this.head
        let prev: node = head
        
        if(head.data === data){
            this.head = head.next
            return;
        }

        while(head.data != data){
            prev = head
            console.log(prev);
            head = head.next
        }
        prev.next = head.next
    }

    displayTail(){
        console.log(this.tail);
    }

    displayHead(){
        console.log(this.head);
    }

    makeCircle(){
        this.tail.next = this.head
    }
}

let a = new execution(7)
a.addFirst(5)
a.addFirst(50)
a.addLast(10)
a.insertAfter(78,50)
a.addLast(11),
a.addLast(20)
a.addFirst(10)
// a.deleteOne(50)
// a.deleteOne(7)
// a.deleteOne(78)
a.insertAfter(78,11)
a.displayTail()
a.displayHead()
// a.makeCircle()
a.displayOrder()
a.display()
a.displayTail()
