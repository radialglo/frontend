/*
 *
 * Use indexOf() to Test an Address
 * Prompts user for email address and does a naive check using indexOf
 ~ =========== ~ */


 window.onload = function() {

        var btn = document.getElementsByTagName('button')[0];

            btn.onclick = get_add; //assign click handler
 }

 function get_add() {

        var email = window.prompt("What is your email address?");

        if(email.indexOf("@")!== -1 && email.indexOf(".") !==-1 ) {

                alert("Thanks for your email address!");

        } else {
                alert("Please include a '@' and '.' in your email address");
        }
                
 }
