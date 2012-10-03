/*
 *
 *
 * gets a random link from array and displays/links to the random URL
 ~ =========== ~ */

 window.onload = function() {

 	var linksArr = [ "http://www.google.com"
 				, "http://www.twitter.com"
 				, "http://baddreamsinc.com" 
 				, "http://www.yahoo.com"
 				, "http://www.linkedin.com"]

	  , link = document.getElementById("random_link")
	  , rand = Math.floor(Math.random() * linksArr.length);

	  link.setAttribute("href",linksArr[rand]);
	  link.innerHTML = linksArr[rand];
 }