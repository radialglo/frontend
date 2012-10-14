/*
 *
 * Request a Telephone Number
 * Prompts user telephone number and validates that number
 ~ =========== ~ */

 window.onload = function() {
        var form = document.forms[0];

         form.onsubmit = validate_phoneNumber;
 }

 function validate_phoneNumber() {


        var phoneNumber= this.phone.value, //refers to value of input name="phone" 
            patt = /\d\d\d\-\d\d\d\-\d\d\d\d/; //(111-222-3333)

            console.log(phoneNumber);

            if(patt.test(phoneNumber)) {

                alert("Phone number validated");

            } else {

                alert("Invalid number entered. Valid format is 111-222-3333");

            }
        
    

        return false; //stop propagation and default

 }
