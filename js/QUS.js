class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    add(val){
        this.stack1.push(val)
    }

    pop(){
        if(this.stack2.length == 0){
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        console.log(this.stack2.pop());
    }
}

let a = new Queue()
a.add(32)
a.add(2)
a.add(3)
a.pop()
a.pop()
a.add(10)
a.pop()
a.pop()