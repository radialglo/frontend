/*
 *
 *
 * creates a document.cookie if one does not exists; otherwise reads generated cookie
 ~ =========== ~ */

 window.onload = function() {

        if(!document.cookie) {
                createCookie();
        } else {
                readCookie();
        }

 }

 function createCookie() {

        var name = prompt("What is your full name?")
          , d = new Date()
          , path = "/"

                d.setUTCDate( d.getUTCDate() + 1);

                document.cookie = "name=" + name + "; " + "expires=" + d.toUTCString() + "; " + "path=" + path;

                //console.log(document.cookie);

 }


function readCookie() {

        if(document.cookie) {


                var nameEQ = "name="
                  , c = document.cookie.split(";")[0];

                if(c.indexOf(nameEQ) != -1) {
                                        //start index //index to stop extraction
                        c = c.substring(nameEQ.length,c.length);

                        alert("Welcome, " + unescape(c) + "!");
                }



        }

}

function eraseCookie() {

        if(document.cookie) {

                var d = new Date();
                        d.setUTCDate(d.getUTCDate() - 1); //Set to date that has already expired

                document.cookie.replace(/(?=expires=)[^;]+/, "expires=" + d.toUTCString() );
        }
}
