function bubbleSort(arr: number[]){
    if(arr.length<1){
        return arr
    }

    let n = arr.length-1

    for (let i = 0; i < n; i++) {
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }

        if (i===n-1) {
            i=-1;
            n--;
        }
    }

    return arr
}

console.log(bubbleSort([23,51,5,6,4,6,12,76,7,8]));
