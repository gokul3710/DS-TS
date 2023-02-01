class reverseGrp{
    arr = [1,2,3,4,5]

    reverseVal(n:number,k:number){

        if(k>=n){
            this.reverse(0,n-1)
            return this.arr;
        }

        if(n/k >1 && n/k < 2){
            this.reverse(0,k-1)
            this.reverse(k,n-1)
            return this.arr;
        }else{
            let start = 0
            while(n-start>1){
                if(n-start<k){
                    this.reverse(start,n-1)
                }
                this.reverse(start,start+k-1)
                start+=k
            }
            return this.arr
        }
    }

    reverse(start : number,end : number){
        while(start<end){
            this.arr[start] = this.arr[end] + this.arr[start]
            this.arr[end] = this.arr[start] - this.arr[end]
            this.arr[start] = this.arr[start] - this.arr[end]
            start++
            end--
        }
    }
}

let n = new reverseGrp()
console.log(n.reverseVal(5,2));
