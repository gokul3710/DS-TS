function heapSort(arr: number[]) {
    buildMaxHeap(arr);
  
    for (let i = arr.length - 1; i >= 1; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function buildMaxHeap(arr: number[]) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
  }
  
  function heapify(arr: number[], n: number, i: number) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  console.log(heapSort([21,24,324,325,435,46,546,5476,765,7657,658,4]));
  
  