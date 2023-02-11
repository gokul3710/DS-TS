class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(...vertices){
        vertices.forEach(vertex => {
            if(!this.adjacencyList.has(vertex)){
                this.adjacencyList.set(vertex,[])
            }
        });
    }

    addEdge(v1,v2){
        this.addVertex(v1,v2)
        if(!this.adjacencyList.get(v1).includes(v2))this.adjacencyList.get(v1).push(v2)
        if(!this.adjacencyList.get(v2).includes(v1))this.adjacencyList.get(v2).push(v1)
    }

    removeEdge(v1,v2){
        if(this.adjacencyList.has(v1) && this.adjacencyList.has(v2)){
            let v1Index = this.adjacencyList.get(v1).indexOf(v2)
            if(v1Index != -1){
                this.adjacencyList.get(v1).splice(v1Index,1)
            }
            let v2Index = this.adjacencyList.get(v2).indexOf(v1)
            if(v2Index != -1){
                this.adjacencyList.get(v2).splice(v2Index,1)
            }
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList.has(vertex)){
            for(let v of this.adjacencyList.get(vertex)){
                this.removeEdge(vertex,v)
            }
            this.adjacencyList.delete(vertex)
        }
    }

    DFS(start,marked = {}){
        
        if(this.adjacencyList.has(start)){
            marked[start] = true
            console.log(start);
            for(let v of this.adjacencyList.get(start)){
                if(!marked[v]){
                    this.DFS(v,marked)
                }
            }
        }

        // for(let key of this.adjacencyList.keys()){
        //     if(!marked[key]){
        //         marked[key] = true
        //         this.DFS(key,marked)
        //     }
        // }

    }

    BFS(start,marked = {}){
        let queue = [start]
        marked[start] = true
        while(queue.length > 0){
            let vertex = queue.shift()
            console.log(vertex);
            for(let v of this.adjacencyList.get(vertex)){
                if(!marked[v]){
                    marked[v] = true
                    queue.push(v)
                }
            }
        }
    
        // for(let key of this.adjacencyList.keys()){
        //     if(!marked[key]){
        //         this.BFS(key, marked)
        //     }
        // }
    }

    DFSiter(start,marked = {}){
        let stack = [start]
        marked[start] = true
        while(stack.length > 0){
            let vertex = stack.pop()
            console.log(vertex);
            for(let v of this.adjacencyList.get(vertex)){
                if(!marked[v]){
                    marked[v] = true
                    stack.push(v)
                }
            }
        }
    
        // for(let key of this.adjacencyList.keys()){
        //     if(!marked[key]){
        //         this.DFSiter(key, marked)
        //     }
        // }
    }


    
    

}

let g = new Graph()
g.addVertex(1,5,7,8)
g.addEdge(5,7)
g.addEdge(7,8)
g.addEdge(1,5)
g.addEdge(1,8)
g.BFS(7)
console.log(g.adjacencyList);
// g.DFS(7)
// g.DFSiter(7)

// console.log(g.adjacencyList);

















































// g.addEdge(2,4)
// g.addEdge(2,6)
// g.addEdge(9,3)
// g.addEdge(2,4)
// g.addEdge(2,7)