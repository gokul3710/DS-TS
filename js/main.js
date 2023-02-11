"use strict";
var arr = [6, 1, 6, 34, 7, 6, 568, 6, 74, 78, 6, 8, 6];
let val = 6;
function check(array, num) {
    for (let i = 0; i <= array.length / 2; i++) {
        if (array[i] === num) {
            for (let j = array.length - 1; j >= i; j--) {
                if (array[i] !== array[j]) {
                    array[i] = array[i] + array[j];
                    array[j] = array[i] - array[j];
                    array[i] = array[i] - array[j];
                }
            }
        }
    }
    return array;
}
check(arr, val);
console.log(...arr);
