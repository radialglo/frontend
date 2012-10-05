/*
 *
 *
 * utilizes the Date Object to greate a digital watch and displays date formateted mm/dd/yyyy
 ~ =========== ~ */

 window.onload = function() {


    //setInterval(startClock,1000); //alernatively set Interval
        startClock();

        function startClock() {

            var d = new Date()
              , hours = d.getHours() /*0-23*/
              , mins = convertToDoubleDigit(d.getMinutes()) /*0-59*/
              , secn =  convertToDoubleDigit(d.getSeconds()) /*0-59*/
              , ap = (hours >= 12) ? "p.m." : "a.m"
              , date = [d.getMonth(), convertToDoubleDigit(d.getDate()) , d.getFullYear()].join("/");

            if(hours >= 13) {
                hours -= 12;
            }
            if(hours < 1) {
                hours = 12;
            }
            

           var  clock = document.getElementById("my_clock"),
                dateDiv = document.getElementById("my_date");

           clock.innerHTML = hours + ":" + mins + ":" + secn + " " + ap;
           dateDiv.innerHTML = date;
           

            function convertToDoubleDigit(num) {
                  return  num.toString().replace(/^(\d)$/,"0$1");
            }

            setTimeout(startClock,1000); //recursively calls function
        }

   
 }