"use strict";
class BinaryHeap {
    constructor() {
        this.data = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    insert(value) {
        this.data.push(value);
        let currentIndex = this.data.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        while (parentIndex >= 0 && this.data[currentIndex] < this.data[parentIndex]) {
            [this.data[currentIndex], this.data[parentIndex]] = [this.data[parentIndex], this.data[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }
    extractMin() {
        if (this.data.length === 0) {
            return undefined;
        }
        if (this.data.length === 1) {
            return this.data.pop();
        }
        const result = this.data[0];
        this.data[0] = this.data.pop();
        let currentIndex = 0;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        while (leftChildIndex < this.data.length &&
            (this.data[currentIndex] > this.data[leftChildIndex] ||
                (rightChildIndex < this.data.length && this.data[currentIndex] > this.data[rightChildIndex]))) {
            let minChildIndex = leftChildIndex;
            if (rightChildIndex < this.data.length &&
                this.data[rightChildIndex] < this.data[leftChildIndex]) {
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
