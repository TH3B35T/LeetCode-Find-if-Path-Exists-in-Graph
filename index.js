/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, dest) {
    if(source === dest){
        return true;
    }

    // Build graph
    const graph = {};
    for(let [a,b] of edges){
        graph[a] = graph[a] || [];
        graph[b] = graph[b] || [];

        graph[a].push(b);
        graph[b].push(a);
    }
// using dfs with stack
    // let stack = [source];
    // let visited = new Set();

    // while(stack.length != 0){
    //     let v = stack.pop();
    //     if(v === dest){
    //         return true;
    //     }

    //     if(!visited.has(v)){
    //         visited.add(v);
    //         for(let neighbor of graph[v]){
    //             if(!visited.has(neighbor)){
    //                 stack.push(neighbor);
    //             }
    //         }
    //     }
        
       
    // }
    // return false;
// using dfs with recursive
    
    const marked = new Array(n).fill(false);
    const dfs = (node) =>{
        if(node === dest){
            return true;
        }

        if(!marked[node]){
            marked[node] = true;
            for(let neighbor of graph[node]){
                if(!marked[neighbor]){
                    if(dfs(neighbor)){
                        return true;
                    }
                }
            }
        }
        return false;

    }
    return dfs(source);
};
