class stackNode{
    val: number
    next: stackNode | null
    constructor(val?: number, next?: stackNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class stack {
    top: stackNode | null

    constructor(){
        this.top = null
    }


    push(data: number){
        let newNode = new stackNode(data)

        if(this.top == null){
            this.top = newNode
            return;
        }

        newNode.next = this.top
        this.top = newNode

    }

    pop(){
        if(this.top == null){
            return
        }

        this.top = this.top.next
    }

    display(){
        let top = this.top
        while(top){
            console.log(top.val);
            top = top.next
        }
    }
}

let s = new stack()
s.push(4)
s.push(3)
s.push(21)
// s.pop()
s.display()