/*
 *
 *
 * Changes the text and background color once anchor is clicked
 ~ =========== ~ */
window.onload = function() {

	var mywin_width = "100"; //arbitrary default

	mywin_width = window.innerWidth || document.body.clientWidth;

	window.location = (mywin_width >= 1000 ) ? "http://www.pageresource.com" : "http://www.javascriptcity.com" 

}