class BinaryHeap {
    private data: number[];
  
    constructor() {
      this.data = [];
    }
  
    getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    insert(value: number): void {
      this.data.push(value);
  
      let currentIndex = this.data.length - 1;
      let parentIndex = this.getParentIndex(currentIndex);
  
      while (parentIndex >= 0 && this.data[currentIndex] < this.data[parentIndex]) {
        [this.data[currentIndex], this.data[parentIndex]] = [this.data[parentIndex], this.data[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    extractMin(): number | undefined {
      if (this.data.length === 0) {
        return undefined;
      }
  
      if (this.data.length === 1) {
        return this.data.pop();
      }
  
      const result = this.data[0];
      this.data[0] = this.data.pop()!;
  
      let currentIndex = 0;
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
  
      while (
        leftChildIndex < this.data.length &&
        (this.data[currentIndex] > this.data[leftChildIndex] ||
          (rightChildIndex < this.data.length && this.data[currentIndex] > this.data[rightChildIndex]))
      ) {
        let minChildIndex = leftChildIndex;
        if (
          rightChildIndex < this.data.length &&
          this.data[rightChildIndex] < this.data[leftChildIndex]
        ) {
          minChildIndex = rightChildIndex;
        }
  
        [this.data[currentIndex], this.data[minChildIndex]] = [this.data[minChildIndex], this.data[currentIndex]];
        currentIndex = minChildIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      }
  
      return result;
    }
  }
  