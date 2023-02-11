"use strict";
function mySqrt(x) {
    let left = 0;
    let right = x;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) >= x) {
            return mid;
        }
        else if (mid * mid < x) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
;
console.log(mySqrt(100));
