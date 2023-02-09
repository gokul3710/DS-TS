class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map<string, string[]>();
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, []);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, []);
        }
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }

    removeEdge(vertex1: string, vertex2: string) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            let index1 = this.adjacencyList.get(vertex1)!.indexOf(vertex2);
            this.adjacencyList.get(vertex1)!.splice(index1, 1);
            let index2 = this.adjacencyList.get(vertex2)!.indexOf(vertex1);
            this.adjacencyList.get(vertex2)!.splice(index2, 1);
        }
    }

    removeVertex(vertex: string) {
        if (this.adjacencyList.has(vertex)) {
            for (const v of this.adjacencyList.get(vertex)!) {
                this.removeEdge(vertex, v);
            }
            this.adjacencyList.delete(vertex);
        }
    }

    printGraph() {
        console.log(this.adjacencyList);
    }

    BFS(start: string) {
        const queue = [start];
        const visited: Set<string> = new Set();
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            console.log(vertex);
            for (const v of this.adjacencyList.get(vertex)!) {
                if (!visited.has(v)) {
                    visited.add(v);
                    queue.push(v);
                }
            }
        }
    }

    DFSRecursive(vertex: string, visited: Set<string>) {
        visited.add(vertex);
        console.log(vertex);
        for (const v of this.adjacencyList.get(vertex)!) {
            if (!visited.has(v)) {
                this.DFSRecursive(v, visited);
            }
        }
    }

    DFS(start: string) {
        const visited: Set<string> = new Set();
        this.DFSRecursive(start, visited);
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.printGraph();
graph.DFS('D')


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
  