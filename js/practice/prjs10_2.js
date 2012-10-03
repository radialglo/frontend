/*
 *
 *
 * Redirects user to Google home page if not confirmed
 ~ =========== ~ */
window.onload = function() {

	setTimeout(function() {

		if(!confirm("Do you want to continue using this web page?")) {
			window.location = "http://www.google.com";
			//window.open("http://www.google.com","cool","menubar=yes,scrollbars=yes,resizable=yes");
		}

	},20*1000)
}