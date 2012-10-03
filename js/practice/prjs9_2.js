/*
 *
 *
 * Changes the text and background color once anchor is clicked
 ============= */
window.onload = function() {
	var divOne = document.getElementById("div1")
	  , link = document.getElementById("c_link");

	link.onclick = function() {
		divOne.style.backgroundColor = "#CCC";
		divOne.innerHTML = "<strong>Right now!</strong> Was that quick or what?";
		return false;
	}
}