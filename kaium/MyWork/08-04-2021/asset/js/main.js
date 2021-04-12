// function bfs(graph, root){
//     var node={};
//     for (var i = 0; i<graph.length; i++) {
//         node[i]=Infinity;
        
//     }
//     node[root]=0;
//     var queue =[root];
//     var current;
//     while (queue.length != 0) {
//         current=queue.shift();
//         var curConnected=graph[current];
//         var neighbor=[];
//         var idx =curConnected.Indexof(1);
//         while (idx != -1) {
//             neighbor.push(idx);
//             idx = curConnected.Indexof(1, idx + 1);
//         }
//         for(var j=0; j<neighbor.length;  j++){
//             if(node[neighbor[j]]==Infinity){
//                 node[neighbor[j]] = node[current] + 1;
//                 queue.push(neighbor[j]);
//             }
//         }
//     } 
//     return node;
// };

// var exBfs=[
//     [0, 1, 1, 1, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0]
// ];
// console.log(bfs(exBfs, 1));


function Graph(v){
    this.vertices =v;
    this.edges=0;
    this.adj=[];
    for(var i=0; i<this.vertices; i++){
        this.adj[i]=[];
        this.adj[i].push("");
    }
    this.addEdge=this.addEdge;
    this.showGraph=showGraph;
    this.bfs=bfs;
    this.marked =[];
    for(var i=0;i<this.vertices; i++){
        this.marked[i]=false;
    }
}
function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;

}

function showGraph(){
    for(i=0; i<this.vertices; i++){
        console.log(i + " -> ");
        for(var j=0; j<this.vertices; j++){
            if(this.adj[i][j]!=undefined)
            console.log(this.adj[i][j]+ '');
        }
        console.log();

    }
}
function dfs(v){
    this.marked[v]=true;
    if(this.adj[v] !=undefined){
        console.log("visited Vertex :" +v);
    }
    var w ="";
    foreach( w in this.aj[v]){
        if(this.marked[w]){
            this.dfs(w);
        }
    }
}
g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);