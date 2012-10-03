
/*
	appends a node as a child of div1
	appends a clone of the node after div1

*/
window.onload = function() {

	var divOne = document.getElementById("div1");
	window.alert(divOne.title);

	var node = document.createElement("div");
		node.innerHTML = "See you!";

	console.log(divOne.nextSibling); //text node

	divOne.parentNode.insertBefore(node,divOne.nextSibling);

	divOne.appendChild(node.cloneNode(true)); //makes a deep copy of the node
	
	/* Insert AFter
	function insertAfter(referenceNode, newNode) {
   	 referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}
	*/
}