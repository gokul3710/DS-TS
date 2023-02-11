"use strict";
let arra = [21, 4, 3, 45, 47, 68, 7, 8];
for (let i = 0; i < arra.length; i++) {
    for (let j = i; j < arra.length; j++) {
        if (arra[i] > arra[j]) {
            [arra[i], arra[j]] = [arra[j], arra[i]];
        }
    }
}
console.log(arra);
