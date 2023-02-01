class HashSet {
    private bucket: { [key: string]: boolean };
  
    constructor() {
      this.bucket = {};
    }
  
    add(key: string): void {
      this.bucket[key] = true;
    }
  
    remove(key: string): void {
      delete this.bucket[key];
    }
  
    contains(key: string): boolean {
      return this.bucket.hasOwnProperty(key);
    }
  }

  let  A= new HashSet();
  A.add("jgfdgd")
  A.add("kjhfhgd")
  A.add("hgfhgdh")
  A.remove('jgfdgd')
console.log(  A.contains("jgfdgd"))
  