class BST {
    constructor(val) {
        this.val = val ? val : 0
        this.left = null
        this.right = null
    }
}

class tree {
    constructor() {
        this.root = null
    }

    add(data) {
        const newNode = new BST(data)
        if (!this.root) {
            this.root = newNode
            return
        }

        let current = this.root
        while (current) {
            if (current.val < newNode.val) {
                if (!current.right) {
                    current.right = newNode
                    break;
                }
                current = current.right
            } else {
                if (!current.left) {
                    current.left = newNode
                    break;
                }
                current = current.left
            }
        }
    }

    delete(data) {
        this.root = this.deleteHelper(this.root, data)
    }

    deleteHelper(node, val) {
        if (!node) {
            return null
        }

        if (node.val > val) {
            node.left = this.deleteHelper(node.left, val)
            return node
        }

        if (node.val < val) {
            node.right = this.deleteHelper(node.right, val)
            return node
        }

        if (!node.right) {
            return node.left
        }

        if (!node.left) {
            return node.right
        }

        node.val = this.findMinVal(node.right)
        node.right = this.deleteHelper(node.right, node.val)
        return node
    }

    traversal(current = this.root) {
        if (!current) {
            return
        }
        if(this.checkPrime(current.val)){
            console.log("The value is prime");
        }else{
            console.log("The value is not a prime");
        }
        this.traversal(current.left)
        this.traversal(current.right)
    }

    checkPrime(val){
        let isPrime = true
        for(let i=2;i<val/2;i++){
            if(val%i === 0){
                isPrime = false
                return isPrime
            }
        }

        return isPrime
    }

    findMinVal(node) {
        while (node.left) {
            node = node.left
        }
        return node.val
    }

    closestValue(data) {
        let root = this.root
        let closest = root.val
        while (root) {
            if (Math.abs(root.val - data) < Math.abs(closest - data)) {
                closest = root.val
            }

            if (root.val < data) {
                root = root.right;
            } else if (root.val > data) {
                root = root.left;
            } else {
                return closest;
            }


        }

        return closest
    }

    checkBST(root = this.root, min = -Infinity , max= Infinity){
        if(!root){
            return true
        }

        if(root.val < min || root.val > max){
            return false
        }

        return this.checkBST(root.left,min,root.val) && this.checkBST(root.right,root.val,max)
    }

}

let a = new tree()
a.add(20)
a.add(1)
a.add(34)
a.add(243)
a.add(4)
// a.delete(243)
a.traversal()
console.log(a.checkBST())
console.log(a.closestValue(243));
// console.log(a.root);