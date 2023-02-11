class Node{
    constructor(val,next){
        this.val = val
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.top = null;
    }

    push(data){
        let newNode = new Node(data)
         if(!this.top){
            this.top = newNode
            return 
         }

         if(this.top){
            newNode.next = this.top
            this.top = newNode
         }
    }

    pop(){

        if(this.top == null){
            console.log("Stack empty");
            return
        }
        let top = this.top
        this.top = this.top.next
        return top.val
    }

    display(){
        let top = this.top
        while(top){
            console.log(top.val);
            top = top.next
        }
    }


}

let a = new linkedList()
a.push(3)
a.push(5)
a.push(6)
a.pop()
a.pop()
a.pop()
a.pop()
a.display()