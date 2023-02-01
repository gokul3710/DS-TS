class Link {
    data: number
    next: Link|null
    constructor(data? : number,next? : Link|null){
        this.data = (data === undefined) ? 0 : data
        this.next = (next === undefined) ? null : next
    }
}

class createList {

    head: Link | null
    tail: Link


    constructor(data: number){
        let newNode = new Link(data)
        this.head = newNode
        this.tail = newNode
    }

    insertHead(data: number){
        let newNode = new Link(data)
        newNode.next = this.head
        this.head = newNode
    }

    insertTail(data: number){
        let newNode = new Link(data)
        this.tail.next = newNode
        this.tail = newNode
    }

    display(){
        let head = this.head
        while(head){
            console.log(head.data);
            head = head.next
        }
    }

    reverseList(){
        let prev: Link | null = null
        let current = this.head
        let next: Link | null
        
    
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
    
        this.head = prev
    }

    printRev(head = this.head ){
        if(head){
            let temp : Link | null= head
            head = head.next
            this.printRev(head)
            console.log(temp.data);
        }
    }


    // printMiddle(head = this.head){
    //     let mid = this.head
    //     while(head){
    //         head = head.next?.next
    //         mid = mid?.next
    //     }

    //     console.log(mid?.data);
        
    // }
}

let list = new createList(2)
list.insertTail(3)
list.insertTail(3)
list.insertTail(4)
list.insertTail(4)
list.insertTail(5)
list.display()

