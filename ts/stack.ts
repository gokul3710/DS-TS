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
        let pop= this.top.val
        this.top = this.top.next
        return pop
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
// s.push(4)
// s.push(3)
// s.push(21)
// s.pop()
// s.display()

function isPalindrome(arr: number[]){
    let count = 0
    while(count){
        if(count<=arr.length){
            s.push(arr[count])
            count++
        }else{
           if(arr[arr.length-count] === s.pop()){
                count--
           }else{
            return false
           }
        }
    }
    return true
}

console.log(isPalindrome([1,2,3,4,5,8,6,5,4,3,2,1]));
