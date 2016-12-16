//Corey Allen
//December 7, 2016
//Countdown to Christmas timer for psuedo-website thing
//Counts down to Christmas on the given year.
//Count resets on January 1 of the following year.

//accuracy to the millisecond
var myCount = setInterval(function(){ getString() }, 1);

window.onload = function() {changeTitle(false)};


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
		timerField.textContent = "Merry Christmas!";
		changeTitle(true);
		clearInterval(myCount);
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
		timerField.textContent = strDays + " " + strHr + ":" + strMin + ":" + strSec + "." + strMs;
	}
}

function changeTitle(isAfterXmas) {
	var now = new Date();
	var thisYear = now.getFullYear();
	var field = document.getElementById("titleHeader");
	
	if (isAfterXmas) {
		field.textContent = "Wait until next year!";
	}
	else {
		field.textContent = "How long until Christmas " + thisYear.toString() + "?";
	}
	
}

