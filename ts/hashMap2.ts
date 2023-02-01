class MyHashMap {
    private bucket: { [key: number]: number };
  
    constructor() {
        this.bucket = {}
    }

    put(key: number, value: number): void {
        this.bucket[key] = value;
    }

    get(key: number): number {
        if(this.bucket.hasOwnProperty(key)){
            return this.bucket[key]
        }
        return -1
    }

    remove(key: number): void {
        delete this.bucket[key];
    }
  }

  let  ks= new HashSet();
  A.add("jgfdgd")
  A.add("kjhfhgd")
  A.add("hgfhgdh")
  A.remove('jgfdgd')
console.log(  A.contains("jgfdgd"))
  