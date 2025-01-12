
console.log("test");

// Click an item to remove
let myNodes;
myNodes = document.getElementById("content_list").children;
var i;
for (i = 0; i < myNodes.length; i++) {
  myNodes[i].onclick = function() { this.style.display = "none"; }
}



