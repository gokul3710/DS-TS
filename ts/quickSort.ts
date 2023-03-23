// function quickSort(array: number[], left: number=0, right: number=array.length-1): void {
//     let pivot: number, partitionIndex: number;

//     if (left < right) {
//         pivot = right;
//         partitionIndex = partition(array, pivot, left, right);

//         //sort left and right
//         quickSort(array, left, partitionIndex - 1);
//         quickSort(array, partitionIndex + 1, right);
//     }
// }
// // 
// function partition(array: number[], pivot: number, left: number, right: number): number {
//     let pivotValue = array[pivot],
//         partitionIndex = left;

//     for (let i = left; i < right; i++) {
//         if (array[i] < pivotValue) {
//             swap(array, i, partitionIndex);
//             partitionIndex++;
//         }
//     }
//     swap(array, right, partitionIndex);
//     return partitionIndex;
// }

// function swap(array: number[], firstIndex: number, secondIndex: number): void {
//     let temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
// }

// //initial call to quickSort
// let arr1 = [43,46,346,34];
// quickSort(arr1);
// console.log(arr1);
