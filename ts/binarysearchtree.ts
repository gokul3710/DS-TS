class Bstree{
    val:number
    left: Bstree | null = null
    right: Bstree | null = null
    constructor(val?: number){
        this.val = val ? val : 0
    }
}

class Bslist{
    root : Bstree | null
    constructor(){
        this.root = null
    }

    insert(data: number){
        const newNode = new Bstree(data)

        if(!this.root){
           this.root = newNode
           return;
        }

        let current = this.root
        while(current){
            if(current.val > newNode.val){
                if(!current.left){
                    current.left = newNode
                    return;
                }
                current = current.left 
            }else{
                if(!current.right){
                    current.right = newNode
                    return;
                }
                current = current.right
            }
        }
    }

    find(data: number){
        let current = this.root
        while(current){
            if(current.val > data){
                current = current.left
            }else if(current.val < data){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }

    traversal(current: Bstree | null = this.root, values: number[] = []){
        if(!current){
            return
        }
        this.traversal(current.left,values)
        values.push(current!.val)
        this.traversal(current.right,values)
        return values
    }
}

let an = new Bslist()
an.insert(50)
an.insert(23)
an.insert(54)
an.insert(2)
an.insert(4)
an.insert(32)
an.insert(23)
an.find(32)
console.log(an.root);
console.log(an.traversal());

