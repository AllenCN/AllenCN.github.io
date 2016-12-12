//Corey Allen
//December 7, 2016
//Countdown to Christmas timer for psuedo-website thing
//Counts down to Christmas on the given year.

//padWithZeroes is a helper function that 
//pads a number with leading zeroes
function padWithZeroes(num, width) {
	var str = "" + num;
	while (str.length < width)
		str = "0" + str;
	
	return str;
}

function getString() {
	//get current time
	var now = new Date();
	var timerField = document.getElementById("timer");
	//get this year's christmas, months are zero-based
	var target = new Date(now.getFullYear(), 11, 25);
	
	//Calculate the difference between the two dates
	var diff = target - now;
	
	//if the difference is 0, return the appropriate string
	if (diff <= 0) {
		timerField.innerHTML = "Merry Christmas!";
	}
	else {
		//divide up the section of time
		var ms = Math.floor(diff % 1000);
		var sec = Math.floor(diff / 1000 % 60);
		var min = Math.floor(diff / 1000 / 60 % 60);
		var hr = Math.floor(diff / 1000 / 60 / 60 % 24);
		var days = Math.floor(diff / 1000 / 60/ 60 / 24);
		
		//convert them to strings
		var strMs  = padWithZeroes(ms, 3);
		var strSec = padWithZeroes(sec, 2);
		var strMin = padWithZeroes(min, 2);
		var strHr = padWithZeroes(hr, 2);
		var strDays = "" + days;
		
		//update the countdown
		timerField.innerHTML = strDays + " " + strHr + ":" + strMin + ":" + strSec + "." + strMs;
	}
}

//accuracy to the millisecond
var myCount = setInterval(getString, 1);
