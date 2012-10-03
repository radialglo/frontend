function computer(speed,hdspace,ram) {
	this.speed = speed;
	this.hdspace = hdspace;
	this.ram = ram;
	this.price = get_price; //function
}

function get_price() {
	var the_price = 500;
	the_price += (this.speed === "2GHz") ? 200 : 100;
	the_price += (this.hdspace === "80GB") ? 50 : 25;
	the_price += (this.ram === "1GB") ? 150 : 75;
	return the_price; 
}


window.onload = function() {
	var work_computer = new computer("2GHz","80GB","1GB")
	  , home_computer = new computer("1.5GHz","40GB","512MB")
	  , laptop_computer = new computer("1GHZ","20GB","256MB")

	  	//prices
	 
	  , work_computer_price = work_computer.price()
	  , home_computer_price = home_computer.price()
	  , laptop_computer_price = laptop_computer.price();

	  console.log(work_computer_price);
	  console.warn(work_computer_price);


	  for(var prop in work_computer) {
	  	document.write( "<strong>" + prop[0].toUpperCase() + prop.slice(1) + "</strong>: ");

	  	if (typeof(work_computer[prop]) === "string" ) {

	  		document.write(work_computer[prop]  + "<br/>" );

		} else if ( typeof(work_computer[prop]) === "function") {

			document.write( work_computer[prop]() + "<br />");

		}
	  }

}