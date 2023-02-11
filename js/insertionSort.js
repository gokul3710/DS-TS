"use strict";
let array = [9, 3, 1, 5, 2, 4, 8];
for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > cur) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = cur;
}
console.log(array);
