"use strict";
class MyHashMap {
    constructor() {
        this.bucket = {};
    }
    put(key, value) {
        this.bucket[key] = value;
    }
    get(key) {
        if (this.bucket.hasOwnProperty(key)) {
            return this.bucket[key];
        }
        return -1;
    }
    remove(key) {
        delete this.bucket[key];
    }
}
let ks = new HashSet();
A.add("jgfdgd");
A.add("kjhfhgd");
A.add("hgfhgdh");
A.remove('jgfdgd');
console.log(A.contains("jgfdgd"));
