"use strict";
function romanToInt(s) {
    let y = s.split('');
    let number = 0;
    for (let i = 0; i < y.length; i++) {
        if (y[i] == "I") {
            y[i] = "1";
        }
        else if (y[i] == "V") {
            y[i] = '5';
        }
        else if (y[i] == "X") {
            y[i] = '10';
        }
        else if (y[i] == "L") {
            y[i] = '50';
        }
        else if (y[i] == "C") {
            y[i] = '100';
        }
        else if (y[i] == "D") {
            y[i] = '500';
        }
        else if (y[i] == "M") {
            y[i] = '1000';
        }
    }
    console.log(y);
    for (let i = 0; i < y.length; i++) {
        if (y[i] >= y[i + 1]) {
            number += Number(y[i]);
        }
        else {
            number -= Number(y[i]);
        }
    }
    return number;
    // return
}
;
