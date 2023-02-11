"use strict";
function myPow(x, n) {
    if (n > 1) {
        return x * myPow(x, n - 1);
    }
    return 1;
}
;
console.log(myPow(2, 10));
