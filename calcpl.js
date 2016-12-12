function validateInput() {
	//get all the input fields
	var allInputs = document.getElementsByTagName("input");
	
	//iterate over the fields
	for (i = allInputs.length - 1; i >= 0; i--) {
		//if any of the four text fields have an invalid value, it is an automatic fail.
		if (allInputs[i].type == "text") {
			var tmp = Number(allInputs[i].value)
			if (isNaN(tmp) || tmp < 0) {
				return false;
			}
		}
	}
	return true;
}

function calcPL() {
	if (!validateInput()) {
		alert("Please use positive real numbers only!");
		return;
	}
	
	//get all the input fields
	var allInputs = document.getElementsByTagName("input");
	
	//var sum to hold the summation of the four fields.
	var sum = 0.0;
	
	//as there are only five input fields, the fifth of which is the submit button,
	//iterating over just the four fields will give me what I want.
	for (i = 0; i < 4; i++) {
		sum += Number(allInputs[i].value);
	}
	
	//divide the sum by 50
	sum /= 50.0;
	
	//round to 3 decimal places
	document.getElementById("num").textContent = sum.toFixed(3).toString();
	
	//give the rank
	document.getElementById("statement").textContent = getStatement(sum.toFixed(3));
}

function getStatement(sum) {
	
	//we pick the statement from a "library" of sorts.
	if (sum == 0.0) {
		return "Congrats, you are without parallel the weakest creature in all known universes.";
	}
	if (sum > 0.0 && sum <= 0.001) {
		return "Even Master Roshi's pet turtle could take you down.";
	}
	if (sum > 0.001 && sum <= 1) {
		return "Never mind humans, most insects could take you.";
	}
	if (sum >= 1 && sum < 2) {
		return "You've graduated from the realm of insects, but small woodland creatures could probably still defeat you.";
	}
	if (sum >= 2 && sum < 3) {
		return "Don't go into a forest unattended.";
	}
	if (sum >= 3 && sum < 4) {
		return "Keep at the push-ups, you'll eventually get there.";
	}
	if (sum >= 4 && sum < 5) {
		return "Even Yamcha could take you.";
	}
	if (sum >= 5 && sum <= 8) {
		return "You're average, at the very least."
	}
	if (sum > 8 && sum <= 10) {
		return "You're above average, up there with some of the upper humans.";
	}
	if (sum > 10 && sum <= 12) {
		return "We are sure you're still human, right?";
	}
	if (sum > 12 && sum <= 15) {
		return "You're...a Super Saiyan!?";
	}
	if (sum > 15 && sum <= 20) {
		return "Super Saiyan 2??"
	}
	if (sum > 20 && sum <= 40) {
		return "Super Saiyan 3!??";
	}
	if (sum > 40 && sum <= 60) {
		return "Super Saiyan 4? Are you sure you're not lying?"
	}
	if (sum > 60 && sum <= 75) {
		return "Assuming you're not lying, you are up there with the gods.";
	}
	if (sum > 75 && sum <= 90) {
		return "Are you telling me you're a Super Saiyan Blue? Come on!";
	}
	if (sum > 90 && sum <= 100) {
		return "You are officially on par with the Gods of Destruction, if you're not lying to me.";
	}
	if (sum > 100) {
		return "STOP LYING TO ME, FACELESS INTERNET USER!!";
	}
	
}