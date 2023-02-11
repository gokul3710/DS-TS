class minHeap {
    constructor(array) {
        this.heap = null;
            console.log(this.buildHeap(array));
    }
    buildHeap(array) {

        this.heap = array;
        let sort = [];

        while (array.length>=1) {
            for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
                this.shiftDown(i);
            }
            sort.push(array.shift())
        }
        return sort
    }
    shiftDown(i) {
        let leftIdx = this.leftChild(i);
        while (leftIdx < this.heap.length) {
            let rightIdx = this.rightChild(i);
            let idxTo;
            if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]) {
                idxTo = rightIdx;
            } else {
                idxTo = leftIdx;
            }
            if (this.heap[i] > this.heap[idxTo]) {
                [this.heap[i], this.heap[idxTo]] = [this.heap[idxTo], this.heap[i]];
                i = idxTo;
                leftIdx = this.leftChild(i);
            } else {
                return;
            }
        }
    }
    shiftUp(i) {
        let parentIdx = this.parent(i);
        while (i > 0 && this.heap[parentIdx] > this.heap[i]) {
            [this.heap[i], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[i]];
            i = parentIdx;
            parentIdx = this.parent(i);
        }
    }
    remove() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop()
        this.shiftDown(0);
    }
    insert(data) {
        this.heap.push(data);
        this.shiftUp(this.heap.length - 1);
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
        return Math.floor((i * 2) + 1);
    }
    rightChild(i) {
        return Math.floor((i * 2) + 2);
    }
    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }

    findDuplicates(val){
        let root = this.root 
        
        while(root){
    
            if(root.val > val){
                root = root.leftChild
            }else if(root.val < val){
                root = root.rightChild
            }else{
                
            }

        }

        return false
        
        
    }
}
const min = new minHeap([8, 3, 1, 9, 2, 0]);
// min.remove();
min.display();