"use strict";
class HashSet {
    constructor() {
        this.bucket = {};
    }
    add(key) {
        this.bucket[key] = true;
    }
    remove(key) {
        delete this.bucket[key];
    }
    contains(key) {
        return this.bucket.hasOwnProperty(key);
    }
}
let A = new HashSet();
A.add("jgfdgd");
A.add("kjhfhgd");
A.add("hgfhgdh");
A.remove('jgfdgd');
console.log(A.contains("jgfdgd"));
