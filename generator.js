function resetBoxesA() {
	var physA = document.getElementById("physAOption");
	var enA = document.getElementById("enAOption");
	var menA = document.getElementById("menAOption");
	var proA = document.getElementById("proAOption");
	physA.selectedIndex = "0";
	document.getElementById("physAAllowed").textContent = "0";
	enA.selectedIndex = "0";
	document.getElementById("enAAllowed").textContent = "0";
	menA.selectedIndex = "0";
	document.getElementById("menAAllowed").textContent = "0";
	proA.selectedIndex = "0";
	document.getElementById("proAAllowed").textContent = "0";
	
	for (i = 1; i <= 4; i++) {
		physA[i].disabled = false;
		enA[i].disabled = false;
		menA[i].disabled = false;
		proA[i].disabled = false;
	}
	
}

function PhysAChanged() {
	var obj = document.getElementById("physAOption");
	var index = obj.selectedIndex;
	if (index != "0" && index != "-1") {
		document.getElementById("enAOption")[index].disabled = true;
		document.getElementById("menAOption")[index].disabled = true;
		document.getElementById("proAOption")[index].disabled = true;
		setNumberAllowed(obj);
	}
	else if (index == "0") {
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

	var strValue = parseInt(document.getElementById("str").value);
	var dexValue = parseInt(document.getElementById("dex").value);
	var stamValue = parseInt(document.getElementById("stam").value);
	
	var total = strValue + dexValue + stamValue;
	
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
	var err = document.getElementById("attrErr");
	err.textContent = "";
	
	var physAllowed = document.getElementById("physAAllowed");
	var physTotal = document.getElementById("physATotal");
	
	var enAllowed = document.getElementById("enAAllowed");
	var enTotal = document.getElementById("enATotal");
	
	var menAllowed = document.getElementById("menAAllowed");
	var menTotal = document.getElementById("menATotal");
	
	var proAllowed = document.getElementById("proAAllowed");
	var proTotal = document.getElementById("proATotal");
	
	if (tree == "physical") {
		var physPtsAllow = parseInt(physAllowed.textContent);
		var physPtsAssigned = parseInt(physTotal.textContent);
		
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
	document.getElementById("physBMax").textContent = getStaminaTotal().toString();
	
	document.getElementById("enBMax").textContent = getManipTotal().toString();
	
	document.getElementById("menBMax").textContent = getIQTotal().toString();
	
	document.getElementById("proBMax").textContent = getEUDTotal().toString();
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
	var acroValue = parseInt(document.getElementById("acro").value);
	var athValue = parseInt(document.getElementById("ath").value);
	var finValue = parseInt(document.getElementById("fin").value);
	var stlhValue = parseInt(document.getElementById("stlh").value);
	var survValue = parseInt(document.getElementById("surv").value);
	
	var total = acroValue + athValue + finValue + stlhValue + survValue;
	
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

	var err = document.getElementById("skillErr");
	
	err.textContent = "";
	var errString = "";

	var physAllowed = document.getElementById("physBAllowed");
	var physTotal = document.getElementById("physBTotal");
	
	var enAllowed = document.getElementById("enBAllowed");
	var enTotal = document.getElementById("enBTotal");
	
	var menAllowed = document.getElementById("menBAllowed");
	var menTotal = document.getElementById("menBTotal");
	
	var proAllowed = document.getElementById("proBAllowed");
	var proTotal = document.getElementById("proBTotal");

	var highestStat = maxInTree(tree);
	
	if (tree == "physical") {
		var physPtsAllow = parseInt(physAllowed.textContent);
		var physPtsAssigned = parseInt(physTotal.textContent);

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
	var htmlString = "<html><head><title>Your Character</title><link rel=\"stylesheet\" href=\"dbz.css\"></head><body>";
	
	htmlString += "<p>Character Name: " + charName + "</p>";
	htmlString += "<p>Username:" + userName + "</p>";
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

//Automatically update the max value a Skill can be from the tree.
var writeMaxes = setInterval(writeMaxSkills, 100);