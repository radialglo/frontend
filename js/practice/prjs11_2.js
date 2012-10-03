/*
 *
 *
 * creates an associative array and appends list to DOM
 ~ =========== ~ */

 window.onload = function() {

 var cars = [];

 cars["cool"]  = "Mustang";
 cars["small"] = "Bug";
 cars["long"] = "Station Wagon";


var list = document.createElement("ol");

	for(var i in cars) {

	 	var item = document.createElement("li");
	 		item.innerHTML = cars[i];
	 		list.appendChild(item);
 	}


 document.getElementsByTagName("body")[0].appendChild(list);

}