/*
 *
 *
 * iterates over a sorted array and append unordered list to DOM
 ~ =========== ~ */

window.onload = function() {
	var computer = ["monitor","motherboard","chip","hard drive","CD-RW drive","power supply"].sort();

	var list = document.createElement('ul');

	computer.forEach(function(e) {

		var item = document.createElement("li");
		    item.innerHTML = e;

		list.appendChild(item);
	});

	document.getElementsByTagName('body')[0].appendChild(list);
}