"use strict";
function quickSort(array, left = 0, right = array.length - 1) {
    let pivot, partitionIndex;
    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);
        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
}
function partition(array, pivot, left, right) {
    let pivotValue = array[pivot], partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
//initial call to quickSort
let arr1 = [43, 46, 346, 34];
quickSort(arr1);
console.log(arr1);
