"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.adjacencymatrix = new Array();
    }
    

    intialize(n){
        for (let i = 0; i < n; i++) {
            let array = []
            for (let j = 0; j < n; j++) {
                array[j] = 0
            }
            this.adjacencymatrix.push(array)
        }
    }

    addEdgeMatrix(v1,v2){
        let array = this.adjacencymatrix
        if(v1<array.length && v2<array.length){
            if(v1===v2){
                array[v1][v2]++
            }else{
                array[v1][v2]++
                array[v2][v1]++
            }
        }
    }

    display(){
        this.adjacencymatrix.forEach((val => {
            console.log(...val);
        }))
    }


    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, []);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, []);
        }
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            let index1 = this.adjacencyList.get(vertex1).indexOf(vertex2);
            this.adjacencyList.get(vertex1).splice(index1, 1);
            let index2 = this.adjacencyList.get(vertex2).indexOf(vertex1);
            this.adjacencyList.get(vertex2).splice(index2, 1);
        }
    }
    removeVertex(vertex) {
        if (this.adjacencyList.has(vertex)) {
            for (const v of this.adjacencyList.get(vertex)) {
                this.removeEdge(vertex, v);
            }
            this.adjacencyList.delete(vertex);
        }
    }
    printGraph() {
        console.log(this.adjacencyList);
    }
    BFS(start) {
        const queue = [start];
        const visited = new Set();
        visited.add(start);
        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);
            for (const v of this.adjacencyList.get(vertex)) {
                if (!visited.has(v)) {
                    visited.add(v);
                    queue.push(v);
                }
            }
        }
    }
    DFSRecursive(vertex, visited) {
        visited.add(vertex);
        console.log(vertex);
        array.forEach(element => {
            
        });{
            if (!visited.has(v)) {
                this.DFSRecursive(v, visited);
            }
        }
    }
    DFS(start) {
        const visited = new Set();
        this.DFSRecursive(start, visited);
    }
}
const graph = new Graph();
graph.intialize(7)
graph.addEdgeMatrix(2,3)
graph.addEdgeMatrix(1,3)
graph.addEdgeMatrix(4,3)
graph.addEdgeMatrix(1,1)
graph.addEdgeMatrix(2,3)
graph.addEdgeMatrix(2,3)
graph.addEdgeMatrix(0,0)
graph.addEdgeMatrix(1,0)
graph.addEdgeMatrix(5,6)
graph.display()





// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.removeEdge('A','B')
// graph.printGraph();
// graph.DFS('D');
// let arr = [12,3,124,42,42,42,24,4]
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if(count%3 == 0 && count > 0  || count%3 ==1){
//         for (let j = i; j <arr.length; j++) {
//             arr[i] = arr[i+1]           
//         }
//         arr.length = arr.length-1
//     }
// }
// function deleteAlternate(arr: number[]): number[] {
//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 !== 0) {
//         arr[count] = arr[i];
//         count++;
//       }
//     }
//     arr.length = count;
//     return arr;
//   }
//   console.log(deleteAlternate(arr));
