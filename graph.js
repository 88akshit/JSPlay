class Graph{
  constructor(){
    this.nodes = {}
  }
  addNode(node){
    this.nodes[node] = []
  }
  addEdge(source, destination){
    if(!this.nodes[source] || !this.nodes[destination]){
      return false;
    }
    if(!this.nodes[source].includes(destination)){
      this.nodes[source].push(destination);
    }
    //  if(!this.nodes[destination].includes(source)){
    //   this.nodes[destination].push(source);
    // }
  }
  printGraph(){
    console.log(this.nodes);
  }

  dfs(source,destination){

    let stack = []
    stack.push(source);
    let visited = []
    while(stack.length){
          let node = stack.pop();
          if(visited.includes(node)){
            continue;
          }
          if(node==destination){
             console.log("found "+destination)
             return
          }
          visited.push(node);
          let childNodes = this.nodes[node];
          for(let child of childNodes){
              stack.push(child)
          }
          console.log("stack "+stack)
    }
  }

  bfs(source,destination){

    let queue = []
    let level = 0;
    let visited = []
    queue.push(source);
    while(queue.length){

      let level_size = queue.length; // Adding level size to track level

      while(level_size!=0){
          console.log("Queue "+queue)  
          level_size--;
          let currentNode = queue.shift();
          if(visited.includes(currentNode)){
            console.log("level size "+level_size)
            continue
          }
          visited.push(currentNode)
          if(currentNode==destination){
            console.log("found "+destination+" at level "+level)
            return
          }
          let currentNodeList = this.nodes[currentNode];
          for(let childNode of currentNodeList){
                queue.push(childNode);
          }
     
          console.log("level size "+level_size)
      }
      
      level++;
      console.log("increasing level "+level)
      
    }
    
  }
  
}

graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(3,5);
// graph.addEdge(3,4);
graph.addEdge(2,4);
graph.addEdge(5,6);
graph.addEdge(6,7);

graph.printGraph();
// graph.bfs(1,7);
graph.dfs(1,6);