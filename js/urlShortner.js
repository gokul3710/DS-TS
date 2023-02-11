"use strict";
class Solution {
    constructor() {
        this.bucket = {};
    }
    encode(longUrl) {
        let shortUrlStr = '';
        let shortUrl = '';
        for (let i = 0; i < longUrl.length; i++) {
            shortUrlStr += longUrl.charCodeAt(i);
        }
        for (let i = 0; i < 10; i++) {
            shortUrl += String.fromCharCode(Number(shortUrlStr[i]) * 10 + Number(shortUrlStr[i + 1]) + 50);
        }
        console.log(shortUrl);
        shortUrl = 'https://tinyurl.com/' + shortUrl;
        this.bucket[shortUrl] = longUrl;
        console.log(shortUrl);
        return shortUrl;
    }
    ;
    decode(tinyUrl) {
        return this.bucket[tinyUrl];
    }
    ;
    display() {
        console.log(this.bucket);
    }
}
let sol = new Solution();
console.log(sol.encode("https://gokul3710.github.io/Dr-Granny/index.html#parentHorizontalTab1"));
console.log(sol.decode('https://tinyurl.com/<6[=Bo=Bo='));
sol.display();
