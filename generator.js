function resetBoxesA() {
	//resetBoxesB does the same thing
	//get the elements from the page
	var physA = document.getElementById("physAOption");
	var enA = document.getElementById("enAOption");
	var menA = document.getElementById("menAOption");
	var proA = document.getElementById("proAOption");
	
	//set them all to N/A
	physA.selectedIndex = "0";
	document.getElementById("physAAllowed").textContent = "0";
	enA.selectedIndex = "0";
	document.getElementById("enAAllowed").textContent = "0";
	menA.selectedIndex = "0";
	document.getElementById("menAAllowed").textContent = "0";
	proA.selectedIndex = "0";
	document.getElementById("proAAllowed").textContent = "0";
	var i;
	//re-enable all four options
	for (i = 1; i <= 4; i++) {
		physA[i].disabled = false;
		enA[i].disabled = false;
		menA[i].disabled = false;
		proA[i].disabled = false;
	}
	
}

function PhysAChanged() {
	//PhysAChanged, EnAChanged, MenAChanged, ProAChanged - all basically the same thing
	//PhysBChanged, EnBChanged, MenBChanged, ProBChanged - also do the same thing.
	//first, get the object and the index that was selected.
	var obj = document.getElementById("physAOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		//as all of the other objects are identical, the index will be the same.
		//Make sure the user can't select the same option for the other three
		document.getElementById("enAOption")[index].disabled = true;
		document.getElementById("menAOption")[index].disabled = true;
		document.getElementById("proAOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		//Reset the affected boxes (boxes A)
		resetBoxesA();
	}
}

function EnAChanged() {
	var obj = document.getElementById("enAOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("physAOption")[index].disabled = true;
		document.getElementById("menAOption")[index].disabled = true;
		document.getElementById("proAOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesA();
	}
}

function MenAChanged() {
	var obj = document.getElementById("menAOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enAOption")[index].disabled = true;
		document.getElementById("physAOption")[index].disabled = true;
		document.getElementById("proAOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesA();
	}
}

function ProAChanged() {
	var obj = document.getElementById("proAOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enAOption")[index].disabled = true;
		document.getElementById("menAOption")[index].disabled = true;
		document.getElementById("physAOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesA();
	}
}

function setNumberAllowed(obj) {
	
	//get the id of the thing.
	//options A refer to the player's attributes, which can be no higher than 4.
	//options B refer to the player's skills, which can be no higher than 7.
	if (obj.id === "physAOption") {
		document.getElementById("physAAllowed").textContent = (5 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "enAOption") {
		document.getElementById("enAAllowed").textContent = (5 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "menAOption") {
		document.getElementById("menAAllowed").textContent = (5 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "proAOption") {
		document.getElementById("proAAllowed").textContent = (5 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "physBOption") {
		document.getElementById("physBAllowed").textContent = (8 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "enBOption") {
		document.getElementById("enBAllowed").textContent = (8 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "menBOption") {
		document.getElementById("menBAllowed").textContent = (8 - parseInt(obj.selectedIndex)).toString();
	}
	else if (obj.id === "proBOption") {
		document.getElementById("proBAllowed").textContent = (8 - parseInt(obj.selectedIndex)).toString();
	}
}

function physAttrChange() {
	//each of the AttrChange() methods do the same things on different fields
	var strValue = parseInt(document.getElementById("str").value);
	var dexValue = parseInt(document.getElementById("dex").value);
	var stamValue = parseInt(document.getElementById("stam").value);
	
	var total = strValue + dexValue + stamValue;
	
	//show the user the total
	document.getElementById("physATotal").textContent = total.toString();
	
	checkAttrAssigned("physical");
}

function enAttrChange() {
	var powValue = parseInt(document.getElementById("pow").value);
	var preValue = parseInt(document.getElementById("pre").value);
	var manValue = parseInt(document.getElementById("man").value);
	
	var total = powValue + preValue + manValue;
	
	document.getElementById("enATotal").textContent = total.toString();
	
	checkAttrAssigned("energy");
}

function menAttrChange() {
	var perValue = parseInt(document.getElementById("per").value);
	var witsValue = parseInt(document.getElementById("wits").value);
	var intValue = parseInt(document.getElementById("int").value);
	
	var total = perValue + witsValue + intValue;
	
	document.getElementById("menATotal").textContent = total.toString();
	
	checkAttrAssigned("mental");
}

function proAttrChange() {
	var consValue = parseInt(document.getElementById("cons").value);
	var refValue = parseInt(document.getElementById("ref").value);
	var endValue = parseInt(document.getElementById("end").value);
	
	var total = consValue + refValue + endValue;
	
	document.getElementById("proATotal").innerHTML = total.toString();
	
	checkAttrAssigned("protection");
}

function checkAttrAssigned(tree) {
	//get the error field so the user can be updated
	var err = document.getElementById("attrErr");
	err.textContent = "";
	
	//get relevant fields
	var physAllowed = document.getElementById("physAAllowed");
	var physTotal = document.getElementById("physATotal");
	
	var enAllowed = document.getElementById("enAAllowed");
	var enTotal = document.getElementById("enATotal");
	
	var menAllowed = document.getElementById("menAAllowed");
	var menTotal = document.getElementById("menATotal");
	
	var proAllowed = document.getElementById("proAAllowed");
	var proTotal = document.getElementById("proATotal");
	
	if (tree == "physical") {
		//convert the relevant ints
		var physPtsAllow = parseInt(physAllowed.textContent);
		var physPtsAssigned = parseInt(physTotal.textContent);
		
		//the user must exactly equal the "Allowed" number.
		if (physPtsAllow > physPtsAssigned) {
			err.textContent = "You still have some physical points to spend!\n";
		}
		else if (physPtsAllow < physPtsAssigned) {
			err.textContent = "You don't have that many points for physical!\n";
		}
	}
	else if (tree == "energy") {
		var enPtsAllow = parseInt(enAllowed.textContent);
		var enPtsAssigned = parseInt(enTotal.textContent);
		
		if (enPtsAllow > enPtsAssigned) {
			err.textContent = "You still have some energy points to spend!\n";
		}
		else if (enPtsAllow < enPtsAssigned) {
			err.textContent = "You don't have that many points for energy!\n";
		}
	}
	else if (tree == "mental") {
		var menPtsAllow = parseInt(menAllowed.textContent);
		var menPtsAssigned = parseInt(menTotal.textContent);
		
		if (menPtsAllow > menPtsAssigned) {
			err.textContent = "You still have some mental points to spend!\n";
		}
		else if (menPtsAllow < menPtsAssigned) {
			err.textContent = "You don't have that many points for mental!\n";
		}
	}
	else if (tree == "protection") {
		var proPtsAllow = parseInt(proAllowed.textContent);
		var proPtsAssigned = parseInt(proTotal.textContent);
		
		if (proPtsAllow > proPtsAssigned) {
			err.textContent = "You still have some protection points to spend!\n";
		}
		else if (proPtsAllow < proPtsAssigned) {
			err.textContent = "You don't have that many points for protection!\n";
		}
	}
	
}

function getStaminaTotal() {
	//getStaminaTotal, getManipTotal, getIQTotal, and getEUDTotal all do the same thing
	//return the value of the relevant attribute
	var stamValue = parseInt(document.getElementById("stam").value) + 1;
	
	return stamValue;
}

function getManipTotal() {
	var manValue = parseInt(document.getElementById("man").value) + 1;
	
	return manValue;
}

function getIQTotal() {
	var intValue = parseInt(document.getElementById("int").value) + 1;
	
	return intValue;
}

function getEUDTotal() {
	var endValue = parseInt(document.getElementById("end").value) + 1;
	
	return endValue;
}

function writeMaxSkills() {
	//update the relevant fields using the above 4 getter methods.
	document.getElementById("physBMax").textContent = 'Stamina: '+ (getStaminaTotal().toString());
	
	document.getElementById("enBMax").textContent = 'Manipulation: '+getManipTotal().toString();
	
	document.getElementById("menBMax").textContent = 'Intelligence: '+ getIQTotal().toString();
	
	document.getElementById("proBMax").textContent = 'Endurance: ' + getEUDTotal().toString();
}

function resetBoxesB() {
	var physB = document.getElementById("physBOption");
	var enB = document.getElementById("enBOption");
	var menB = document.getElementById("menBOption");
	var proB = document.getElementById("proBOption");

	physB.selectedIndex = "0";
	document.getElementById("physBAllowed").textContent = "0";
	enB.selectedIndex = "0";
	document.getElementById("enBAllowed").textContent = "0";
	menB.selectedIndex = "0";
	document.getElementById("menBAllowed").textContent = "0";
	proB.selectedIndex = "0";
	document.getElementById("proBAllowed").textContent = "0";
	var i;
	for (i = 1; i <= 4; i++) {
		physB[i].disabled = false;
		enB[i].disabled = false;
		menB[i].disabled = false;
		proB[i].disabled = false;
	}
	
}

function PhysBChanged() {
	var obj = document.getElementById("physBOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enBOption")[index].disabled = true;
		document.getElementById("menBOption")[index].disabled = true;
		document.getElementById("proBOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesB();
	}
}

function EnBChanged() {
	var obj = document.getElementById("enBOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("physBOption")[index].disabled = true;
		document.getElementById("menBOption")[index].disabled = true;
		document.getElementById("proBOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesB();
	}
}

function MenBChanged() {
	var obj = document.getElementById("menBOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enBOption")[index].disabled = true;
		document.getElementById("physBOption")[index].disabled = true;
		document.getElementById("proBOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesB();
	}
}

function ProBChanged() {
	var obj = document.getElementById("proBOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enBOption")[index].disabled = true;
		document.getElementById("menBOption")[index].disabled = true;
		document.getElementById("physBOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
		resetBoxesB();
	}
}

function physSkillChange() {
	//the SkillChange methods are the same, just different fields queried
	var acroValue = parseInt(document.getElementById("acro").value);
	var athValue = parseInt(document.getElementById("ath").value);
	var finValue = parseInt(document.getElementById("fin").value);
	var stlhValue = parseInt(document.getElementById("stlh").value);
	var survValue = parseInt(document.getElementById("surv").value);
	
	var total = acroValue + athValue + finValue + stlhValue + survValue;
	//show the user their current allocated totals
	document.getElementById("physBTotal").textContent = total.toString();
	
	checkSkillAssigned("physical");
}

function enSkillChange() {
	var accumValue = parseInt(document.getElementById("accum").value);
	var cnlmValue = parseInt(document.getElementById("cnlm").value);
	var flhtValue = parseInt(document.getElementById("flht").value);
	var empwValue = parseInt(document.getElementById("empw").value);
	var accrValue = parseInt(document.getElementById("accr").value);
	
	var total = accumValue + cnlmValue + flhtValue + empwValue + accrValue;
	
	document.getElementById("enBTotal").textContent = total.toString();
	
	checkSkillAssigned("energy");
}

function menSkillChange() {
	var knowValue = parseInt(document.getElementById("know").value);
	var lstValue = parseInt(document.getElementById("lst").value);
	var srchValue = parseInt(document.getElementById("srch").value);
	var snsValue = parseInt(document.getElementById("sns").value);
	var spotValue = parseInt(document.getElementById("spot").value);
	
	var total = knowValue + lstValue + srchValue + snsValue + spotValue;
	
	document.getElementById("menBTotal").textContent = total.toString();
	
	checkSkillAssigned("mental");
}

function proSkillChange() {
	var defyValue = parseInt(document.getElementById("defy").value);
	var brirValue = parseInt(document.getElementById("brir").value);
	var resValue = parseInt(document.getElementById("res").value);
	var thrtValue = parseInt(document.getElementById("thrt").value);
	var willValue = parseInt(document.getElementById("will").value);
	
	var total = defyValue + brirValue + resValue + thrtValue + willValue;
	
	document.getElementById("proBTotal").textContent = total.toString();
	
	checkSkillAssigned("protection");
}

function checkSkillAssigned(tree) {
	//if there are any errors, add them to that field.
	var err = document.getElementById("skillErr");
	
	//erase the current contents
	err.textContent = "";
	var errString = "";
	
	//get the relevant fields
	var physAllowed = document.getElementById("physBAllowed");
	var physTotal = document.getElementById("physBTotal");
	
	var enAllowed = document.getElementById("enBAllowed");
	var enTotal = document.getElementById("enBTotal");
	
	var menAllowed = document.getElementById("menBAllowed");
	var menTotal = document.getElementById("menBTotal");
	
	var proAllowed = document.getElementById("proBAllowed");
	var proTotal = document.getElementById("proBTotal");
	
	//confirm the highest skill (none can be higher than a given Attribute)
	var highestStat = maxInTree(tree);
	
	if (tree == "physical") {
		//dependent on the tree, get the ints of the relevant fields
		var physPtsAllow = parseInt(physAllowed.textContent);
		var physPtsAssigned = parseInt(physTotal.textContent);
		//get the relevant attribute
		var stam = getStaminaTotal();

		if (physPtsAllow > physPtsAssigned) {
			errString = "You still have some physical points to spend!\n";
		}
		else if (physPtsAllow < physPtsAssigned) {
			errString = "You don't have that many points for physical!\n";
		}
		
		if (highestStat > stam) {
			errString += "You cannot have a skill greater than your stamina attribute!";
		}
	}
	else if (tree == "energy") {
		var enPtsAllow = parseInt(enAllowed.textContent);
		var enPtsAssigned = parseInt(enTotal.textContent);
		var manip = getManipTotal();
		if (enPtsAllow > enPtsAssigned) {
			errString = "You still have some energy points to spend!\n";
		}
		else if (enPtsAllow < enPtsAssigned) {
			errString = "You don't have that many points for energy!\n";
		}
		
		if (highestStat > manip) {
			errString += "You cannot have a skill greater than your manipulation attribute!";
		}
	}
	else if (tree == "mental") {
		var menPtsAllow = parseInt(menAllowed.textContent);
		var menPtsAssigned = parseInt(menTotal.textContent);
		var IQ = getIQTotal();
		if (menPtsAllow > menPtsAssigned) {
			errString = "You still have some mental points to spend!\n";
		}
		else if (menPtsAllow < menPtsAssigned) {
			errString = "You don't have that many points for mental!\n";
		}
		
		if (highestStat > IQ) {
			errString += "You cannot have a skill greater than your intelligence attribute!";
		}
	}
	else if (tree == "protection") {
		var proPtsAllow = parseInt(proAllowed.textContent);
		var proPtsAssigned = parseInt(proTotal.textContent);
		var eud = getEUDTotal();
		if (proPtsAllow > proPtsAssigned) {
			errString = "You still have some protection points to spend!\n";
		}
		else if (proPtsAllow < proPtsAssigned) {
			errString = "You don't have that many points for protection!\n";
		}
		
		if (highestStat > eud) {
			errString += "You cannot have a skill greater than your endurance attribute!";
		}
	}
	
	err.textContent = errString;
}

function maxInTree(tree) {
	
	//use Math.max to get the highest skill in the given tree.
	if (tree == "physical") {
		var acroValue = parseInt(document.getElementById("acro").value);
		var athValue = parseInt(document.getElementById("ath").value);
		var finValue = parseInt(document.getElementById("fin").value);
		var stlhValue = parseInt(document.getElementById("stlh").value);
		var survValue = parseInt(document.getElementById("surv").value);

		return Math.max(acroValue, athValue, finValue, stlhValue, survValue);
	}
	else if (tree == "energy") {
		var accumValue = parseInt(document.getElementById("accum").value);
		var cnlmValue = parseInt(document.getElementById("cnlm").value);
		var flhtValue = parseInt(document.getElementById("flht").value);
		var empwValue = parseInt(document.getElementById("empw").value);
		var accrValue = parseInt(document.getElementById("accr").value);
		
		return Math.max(accumValue, cnlmValue, flhtValue, empwValue, accrValue);
	}
	else if (tree == "mental") {
		var knowValue = parseInt(document.getElementById("know").value);
		var lstValue = parseInt(document.getElementById("lst").value);
		var srchValue = parseInt(document.getElementById("srch").value);
		var snsValue = parseInt(document.getElementById("sns").value);
		var spotValue = parseInt(document.getElementById("spot").value);
		
		return Math.max(knowValue, lstValue, srchValue, snsValue, spotValue);
	}
	else if (tree == "protection") {
		var defyValue = parseInt(document.getElementById("defy").value);
		var brirValue = parseInt(document.getElementById("brir").value);
		var resValue = parseInt(document.getElementById("res").value);
		var thrtValue = parseInt(document.getElementById("thrt").value);
		var willValue = parseInt(document.getElementById("will").value);
		return Math.max(defyValue, brirValue, resValue, thrtValue, willValue);
	}
}

function generateSheet() {
	
	//check if all user input is valid!
	if (!validateAllInput()) {
		//if it's not valid, alert the user and exit the function IMMEDIATELY.
		alert("one or more forms does not have valid data in it!");
		return;
	}
	//Get the form data from the page.
	var genData = new FormData(document.getElementById("generator"));
	
	//basic information
	var charName = genData.get("charname");
	var userName = genData.get("uname");
	var charSize = genData.get("size");
	var charRace = genData.get("race");
	var charGender = genData.get("gender");
	
	//physical tree
	var strValue = parseInt(genData.get("str")) + 1;
	var dexValue = parseInt(genData.get("dex")) + 1;
	var stamValue = parseInt(genData.get("stam")) + 1;
	var acroValue = genData.get("acro");
	var athValue = genData.get("ath");
	var finValue = genData.get("fin");
	var stlhValue = genData.get("stlh");
	var survValue = genData.get("surv");

	//energy tree
	var powValue = parseInt(genData.get("pow")) + 1;
	var preValue = parseInt(genData.get("pre")) + 1;
	var manValue = parseInt(genData.get("man")) + 1;
	var accumValue = genData.get("accum");
	var cnlmValue = genData.get("cnlm");
	var flhtValue = genData.get("flht");
	var empwValue = genData.get("empw");
	var accrValue = genData.get("accr");
	
	//mental tree
	var perValue = parseInt(genData.get("pre")) + 1;
	var witsValue = parseInt(genData.get("wits")) + 1;
	var intValue = parseInt(genData.get("int")) + 1;
	var knowValue = genData.get("know");
	var lstValue = genData.get("lst");
	var srchValue = genData.get("srch");
	var snsValue = genData.get("sns");
	var spotValue = genData.get("spot");
	
	//protection tree
	var consValue = parseInt(genData.get("cons")) + 1;
	var refValue = parseInt(genData.get("ref")) + 1;
	var endValue = parseInt(genData.get("end")) + 1;
	var defyValue = genData.get("defy");
	var brirValue = genData.get("brir");
	var resValue = genData.get("res");
	var thrtValue = genData.get("thrt");
	var willValue = genData.get("will");
	
	//selected merit
	var merit = genData.get("firstmerit");
	
	//There will be some extra things here or there if they have specific merits
	var extraInstruc = "";
	if (merit == "Vitality") {
		extraInstruc = "<p>Edit cell C34 to =(C8+L8)*10</p>";
	}
	if (merit == "Vigor") {
		extraInstruc = "<p>Edit cell C37 to =(L6+F8)*8</p>";
	}
	
	//Build the html manually.
	var htmlString = "<html><head><title>Your Character</title><link rel=\"stylesheet\" href=\"dbz.css\" /></head><body>";
	
	htmlString += "<p>Character Name: " + charName + "</p>";
	htmlString += "<p>Username: " + userName + "</p>";
	htmlString += "<p>Campaign: Beta II</p>";
	htmlString += "<p>Race: " + charRace + "</p>";
	htmlString += "<p>Size: " + charSize + "</p>";
	htmlString += "<p>Stats: </p>";
	
	htmlString += "<table border=\"1\">";
	htmlString += "<tr>";
	htmlString += "<td>Physical</td><td>Energy</td><td>Mental</td><td>Protection</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Strength: " + strValue + "</td>";
	htmlString += "<td>Power: " + powValue + "</td>";
	htmlString += "<td>Perception: " + perValue + "</td>";
	htmlString += "<td>Constitution: " + consValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Dexterity: " + dexValue + "</td>";
	htmlString += "<td>Precision: " + preValue + "</td>";
	htmlString += "<td>Wits: " + witsValue + "</td>";
	htmlString += "<td>Reflex: " + refValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Stamina: " + stamValue + "</td>";
	htmlString += "<td>Manipulation: " + manValue + "</td>";
	htmlString += "<td>Intelligence: " + intValue + "</td>";
	htmlString += "<td>Endurance: " + endValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Acrobatics: " + acroValue + "</td>";
	htmlString += "<td>Accumulation: " + accumValue + "</td>";
	htmlString += "<td>Knowledge: " + knowValue + "</td>";
	htmlString += "<td>Defy: " + defyValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Athletics: " + athValue + "</td>";
	htmlString += "<td>Concealments: " + cnlmValue + "</td>";
	htmlString += "<td>Listen: " + lstValue + "</td>";
	htmlString += "<td>Barrier: " + brirValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Finesse: " + finValue + "</td>";
	htmlString += "<td>Flight: " + flhtValue + "</td>";
	htmlString += "<td>Search: " + srchValue + "</td>";
	htmlString += "<td>Resilience: " + resValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Stealth: " + stlhValue + "</td>";
	htmlString += "<td>Empower: " + empwValue + "</td>";
	htmlString += "<td>Sense: " + snsValue + "</td>";
	htmlString += "<td>Threat: " + thrtValue + "</td>";
	htmlString += "</tr>";
	htmlString += "<tr>";
	htmlString += "<td>Survival: " + survValue + "</td>";
	htmlString += "<td>Accuracy: " + accrValue + "</td>";
	htmlString += "<td>Spot: " + spotValue + "</td>";
	htmlString += "<td>Willpower: " + willValue + "</td>";
	htmlString += "</tr>";
	htmlString += "</table>";
	htmlString += "<p>First Merit (write in cell G29): " + merit + "</p>";
	htmlString += extraInstruc;
	htmlString += "<p>Game Path: Heroic</p><p>Game Difficulty: Easy</p><p>Campaign Type: Homebrew</p>";
	htmlString += "</body></html>";
	
	//open a new window and populate it with the html above.
	var tempWindow = open("", "Your Character", "height=800,width=800");
	tempWindow.document.write(htmlString);
}

function validateAllInput() {
	
	//get all the input fields
	var allInputs = document.getElementsByTagName("input");
	
	//iterate over the fields
	var i;
	for (i = allInputs.length - 1; i >= 0; i--) {
		//send it to helper function, if one chokes automatic fail
		if (!validateInput(allInputs[i])) {
			return false;
		}
	}
	
	return true;
}

function validateInput(field) {
	
	//numbers only
	var numRegExp = new RegExp('^[0-9]+$', 'g');
	
	//letters, spaces, dashes only (what you'd expect in a name) 
	var charRegExp = new RegExp('^[a-zA-Z -]+$', 'g');
	
	//numbers, letters, spaces, dashes, underscores (what you'd expect in an online screen name)
	var uidRegExp = new RegExp('^[0-9a-zA-Z -_]+$', 'g');
	
	//check using the appropriate field
	if (field.tagName == "INPUT") {
		if (field.type == "submit") {
			return true;
		}
		else if (field.type == "text" && field.name == "uname") { //username might have digits in it
			return uidRegExp.test(field.value);
		}
		else if (field.type == "text") { //character's name generally should not have digits in it.
			return charRegExp.test(field.value);
		}
		else if (field.type == "number") { //Any of the number-based fields should only have digits in it.
			return numRegExp.test(field.value);
		}
		else { //field is not text-based (radio, checkbox)
			return true;
		}
	}
}

function checkNumbers() {

	var warning = document.getElementById("waitasec");
	var allInputs = document.getElementsByTagName("input");
	var submitButton = allInputs[allInputs.length-1]; //should be the submit button.
	
	var disable = false;
	
	var keys = ['phys', 'en', 'men', 'pro'];
	var k;
	for (k = 0; k < 4; k++) {
		if (!checkAssigns(keys[k])) {
			disable = true;
			break;
		}
	}
	disable = disable || checkMaxes();
	submitButton.disabled = disable;
	if (disable) {
		warning.textContent = "Wait a second!\nYou must spend all your points in Attributes and Skills. Else, one or more of your Skills are higher than the indicated attribute!\n Fix that and the generate button will unlock!";
	}
	else {
		warning.textContent = "";
	}
}

function checkMaxes() {
	var stamValue = getStaminaTotal();
	var manipValue = getManipTotal();
	var intValue = getIQTotal();
	var endValue = getEUDTotal();
	var values = [stamValue, manipValue, intValue, endValue];
	var keys = ['physical', 'energy', 'mental', 'protection'];
	var k;
	for (k = 0; k < 4; k++) {
		if (values[k] < maxInTree(keys[k])) {
			return true;
		}
	}
	return false;
}

function checkAssigns(key) {
	var attrAssign = parseInt(document.getElementById(key + "ATotal").textContent);
	var attrMax = parseInt(document.getElementById(key + "AAllowed").textContent);
	
	var skillAssign = parseInt(document.getElementById(key + "BTotal").textContent);
	var skillMax = parseInt(document.getElementById(key + "BAllowed").textContent);
	
	var biggerThanZero = skillMax > 0 && attrMax > 0;
	
	return ((attrAssign == attrMax) && (skillAssign == skillMax)) && biggerThanZero;
}

//Automatically update the max value a Skill can be from the tree.
var writeMaxes = setInterval(writeMaxSkills, 100);

//Automatically ensures the user's numeric input is correct and disallows "Generate" to ensure input is valid.
var checkNums = setInterval(checkNumbers, 100);