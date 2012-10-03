
window.onload = function() {
	window.alert("Hi! You are viewing my page with " + navigator.appCodeName);

	(navigator.javaEnabled()) ? alert("You have Java enabled, that is cool!") : alert("No Java? Well, no fun stuff here then");

	window.alert("You are using " + navigator.platform + " machine");
}