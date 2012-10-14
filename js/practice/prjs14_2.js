/*
 * Build a Select Box Navigation Script
 * Redirects User to selected start up upon from submission
 ~ =========== ~ */

 window.onload = function() {

 	  var form = document.forms[0];


 	  form.onsubmit = function() {


 	  	var select = this.sel;


 	  	window.location = select.options[select.selectedIndex].value;


 	  	return false; //prevent default and event propagation

 	  }
 }