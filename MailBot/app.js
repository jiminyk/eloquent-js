// Meadowfield
// A town that consists of 11 places with 14 roads between them.

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// the network of roads creates a graph
// a graph is a collection of points with lines between them

// convert the list of roads to a *data structure* that for each place, 
// tells us what can be reached from there

// Given an array of edges, buildGraph(); creates a map object that, for each node
// stores an array of connected nodes

function buildGraph(edges) {
    // why Object.create(null)?
    // Reference: You can use Object.create to create an object with a 
    // specific prototype. 
    // In this case null - the intentional absence of any object properties
		let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null) {
          graph[from] = [to];
        } else {
          graph[from].push(to);
        }
		}
		for (let [from, to] of edges.map(r => r.split("-"))) {
			addEdge(from, to);
			addEdge(to, from);
		}
		return graph;
}

const roadGraph = buildGraph(roads);