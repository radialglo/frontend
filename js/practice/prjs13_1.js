/*
 *
 *
 * prompts user for Name and  displays messages depending on first character
 ~ =========== ~ */

window.onload = function() {

        var name = window.prompt("What is your name? ")
          , firstChar = name.charAt(0)
          , msg = ""
          , span = document.createElement('span')
          , body = document.getElementsByTagName('body')[0];

          if(firstChar === "S") {

                msg = "Yay! " + name + " , your name starts with an S.";

          } else {

                msg = "Boo :( " + name + ", your name should start with an uppercase S."

          }

          span.innerHTML = msg;
          body.appendChild(span);

}
