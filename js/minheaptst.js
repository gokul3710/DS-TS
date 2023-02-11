class minHeap{
    constructor(array){
        this.data = array
        this.heapify()
        console.log(array);
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getRightChild(i){
        return Math.floor((i * 2) + 1);
    }

    getLeftChild(i){
        return Math.floor((i * 2) + 2);
    }

    heapify(){
        let array = this.data
        let lastParent = this.getParentIndex(array.length-1)
        for(let i=lastParent; i>=0;i--){
            this.shiftdown(i)
        }
    }

    shiftdown(i){
        let left =  this.getLeftChild(i)
        while(left <= this.data.length){
            let right = this.getRightChild(i)
            let lesser
            if(right < this.data.length && this.data[right] > this.data[left]){
                lesser = left
            }else{
                lesser = right
            }

            if(this.data[i]>this.data[lesser]){
                [this.data[i],this.data[lesser]] = [this.data[lesser],this.data[i]]
                i = lesser
                left = this.getLeftChild(i)
            }else{
                return;
            }
        }
    }

}

let a = new minHeap([3425,2,54,63,546,47,647,568,2])
