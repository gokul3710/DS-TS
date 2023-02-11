"use strict";
function longestCommonPrefix(strs) {
    let b = 1;
    let a = "";
    if (strs.length == 1) {
        return strs[0];
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j] == "") {
                return "";
            }
            if (strs[j][i] !== strs[0][i]) {
                return `${a}`;
            }
        }
        a = strs[0].slice(0, b);
        b++;
    }
    return `${a}`;
}
;
console.log(longestCommonPrefix(["ower", "ower", "ower"]));
