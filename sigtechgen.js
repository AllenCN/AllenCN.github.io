//global javascript variables
var firstLimit = 10;
var xpCost = 10;
var kiCost = 5;
var sustainCost = 0;

function typeChanged(obj) {
	//if the radio buttons in techtype are affected, update relevant information.
	var blacklist = [], whitelist = [];
	
	//get where aura and shortrange are in the document
	var aura = document.getElementsByClassName("Aura")[0];
	var shortRange = document.getElementsByClassName("ShortRange")[0];
	//obj is a radio button
	if (obj.value == "Physical") {
		//update to physical attack-relevant fields
		kiCost = 5;
		sustainCost = 0;
		xpCost = 10;
		firstLimit = 10;
		aura.disabled = true;
		aura.checked = false;
		shortRange.disabled = true;
		shortRange.checked = false;
		whitelist = ['Accurate', 'Damaging', 'Homing', 'Penetration', 'Inaccurate', 'LowPenetration', 'SelfDestruct'];
		blacklist = ['Backblast'];
	}
	else if (obj.value == "Energy") {
		//update to energy attack-relevant fields
		kiCost = 4;
		sustainCost = 0;
		xpCost = 10;
		firstLimit = 10;
		aura.disabled = true;
		aura.checked = false;
		shortRange.disabled = false;
		whitelist = ['Accurate', 'Damaging', 'Homing', 'Penetration', 'Backblast', 'Inaccurate', 'LowPenetration', 'SelfDestruct'];
	}
	else if (obj.value == "Defensive") {
		//update to defensive relevant fields.
		kiCost = 0;
		sustainCost = 0;
		xpCost = 14;
		firstLimit = 6;
		aura.disabled = true;
		aura.checked = true;
		shortRange.disabled = true;
		shortRange.checked = false;
		blacklist = ['Accurate', 'Damaging', 'Homing', 'Penetration', 'Backblast', 'Inaccurate', 'LowPenetration', 'SelfDestruct'];
	}

	//enable and disable the required fields.
	enable(whitelist);
	disable(blacklist);
	
}

function checkboxChecked(obj) {
	//obj is a checkbox
	if (obj.className == "Dynamic")  {
		if (obj.name.includes("dis")) {
			document.getElementById("listDis").disabled = !document.getElementById("listDis").disabled;
		}
		else {
			document.getElementById("listAdv").disabled = !document.getElementById("listAdv").disabled;
		}
		return;
	}
	
	//special cases that would require additional enabling/disabling of controls.
	var specialCases = ['Accurate', 'Inaccurate', 'StatBoosting', 'StatDrain', 'Penetration', 'LowPenetration'];
	
	//if special cases has the relevant string, update the interface to match their input.
	if (specialCases.includes(obj.className)) {
		doSpecialCase(obj, obj.className);
	}
	
	//enable the relevant checkboxes if the checkbox has "multiple" levels.
	var allWithName = document.getElementsByClassName(obj.className);
	
	if (allWithName.length > 1) {
		for (i = 0; i < allWithName.length - 1; i++) {
			if (allWithName[i].checked) {
				allWithName[i+1].disabled = false;
			}
			else {
				allWithName[i+1].disabled = true;
				allWithName[i+1].checked = false;
			}
		}
	}
	
	//update the costs.
	updateTotalCost(obj);
}

function updateTotalCost(obj) {
	//update the relevant fields and return based on whether or not 
	//obj, a checkbox, is checked
	//all the advantage/disadvantage fields have an integer as their value.
	if (obj.checked) {
		xpCost += parseInt(obj.value);
		firstLimit -= parseInt(obj.value);
		return;
	}
	else {
		xpCost -= parseInt(obj.value);
		firstLimit += parseInt(obj.value);
		return;
	}

}

function updateExplain(obj) {
	//get the area where the explanation goes
	var explainSpace = document.getElementById("explanation");
	
	//erase everything if the object is disabled.
	if (obj.disabled)
	{
		explainSpace.innerHTML = "";
		return; //return immediately
	}
	if (obj.value == "sphere") { //update with the appropriate description otherwise.
		explainSpace.innerHTML = "<p>Energy Spheres are small or large balls of Ki that are thrown like a ball at a target. An Energy Sphere requires characters to spend three additional Ki Points than normal. Energy Sphere attacks can only target a single enemy and cause normal value damage plus two. In addition, if character has Combat Advantage over the target, an Energy Sphere attack gains Power Shot. Cost: 5 XP</p>";
	}
	else if (obj.value == "blast") {
		explainSpace.innerHTML = "<p>A Ki Blast in the shape of a cone which extends from the hands of the attacker. A Ki Blast calls for a character to spend four additional Ki Points than normal. Ki Blast energy attacks can damage multiple targets in a 90 degree arch in front of the attacker. If a Ki Blast is granted Power Shot against its target, it also gains combat advantage. Cost: 6 XP</p>";
	}
	else if (obj.value == "explosion") {
		explainSpace.innerHTML = "<p>Energy Explosions can be either a ball of Ki or a simple detonation of energy. Energy Explosions require characters to spend six additional Ki Points than normal. Energy Explosions can damage multiple targets all around the initial target, 360 degrees at a range equal to five yards multiplied by the number of dice in the energy attack pool. The attack is carried out normally against the intended target; if any other enemies are within the blast range they are struck with the attack if the number of successes rolled is greater than their defense. Cost: 8 XP</p>";
	}
	else if (obj.value == "beam") {
		explainSpace.innerHTML = "<p>A direct attack, an Energy Beam is a focused and controlled blast attack in the form of a sphere with a tail, like a comet, ending when coming in connect with its target. A beam requires a character to spend five additional Ki Points than normal. Energy Beam can only target a single enemy and have Advantage Penetration. Sometimes, multiple enemies might be nearby the impact of an Energy Beam if this happens those enemies close enough will also suffer damage from the attack, this is a splash damage effect. All targets within range will suffer one half of the total damage inflicted to the intended target. The attack is carried out normally against the intended target, if any other enemies are within the blast range they are stuck with the attack if the number of successes rolled is greater than their defense. Cost: 10 XP <b>Important: IF YOU SELECT THIS, PENENTRATION RANK 1 IS NOT OPTIONAL.</b></p>";		
	}
}

function updateEnergySelection() {
	//update whether or not the energy attack related controls should be shown.
	//if the user is making an energy attack, they should be enabled
	//otherwise, disable them.
	var energyOnly = document.getElementsByClassName("energyOnly");
	var enIsChecked = document.getElementById("enType").checked;
	for (i = 0; i < energyOnly.length; i++) {
		energyOnly[i].disabled = !enIsChecked;
	}
}

function updateEnergyType() {
	//get the type of energy attack selected
	var enType = document.getElementById("energyType");
	var isDisabled = enType.disabled; //get whether or not the control is disabled
	updateExplain(enType); //update the explanation regardless
	if (!isDisabled) { //if the control is not disabled, enable the appropriate controls based on the user's input value.
		var iqVal = parseInt(document.getElementById("int").value) - 1;
		
		for (i = 0; i < 4; i++)
		{
			if (i <= iqVal) {
				enType[i].disabled = false;
			}
			else {
				enType[i].disabled = true;
			}
		}
	}
}

//helper function to enable a list of the checkboxes based on user input changes
function enable(list) {
	if (list.length > 0) {
		for (i = 0; i < list.length; i++)
			var enableMe = document.getElementsByClassName(list[i])[0].disabled = false;
	}
}

//helper function to disable and clear any disabled checkboxes based on user input changes
function disable(list) {
	if (list.length > 0) {
		for (i = 0; i < list.length; i++) {
			var disableAllOfMe = document.getElementsByClassName(list[i]);
			for (j = 0; j < disableAllOfMe.length; j++) {
				disableAllOfMe.checked = false;
				disableAllOfMe.disabled = true;
			}
		}
	}
}

function doSpecialCase(obj, specCase) {
	//Depending on which box was ticked, get the "twin" class name.
	var other;
	
	if (specCase == 'Accurate') { //Accurate and Inaccurate are twins
		other = 'Inaccurate';
	}
	else if (specCase == 'Inaccurate') {
		other = 'Accurate';
	}
	else if (specCase == 'StatBoosting') { //Boosting and Draining are twins
		other = 'StatDrain';
	}
	else if (specCase == 'StatDrain') {
		other = 'StatBoosting'
	}
	else if (specCase == 'Penetration') { //High and Low Penetration are twins.
		other = 'LowPenetration';
	}
	else if (specCase == 'LowPenetration') {
		other = 'Penetration';
	}
	//get the number of check marks in the selected one and get the first element of its twin.
	var numEnabled = getNumberEnabled(specCase);
	var getTwinStart = document.getElementsByClassName(other)[0];
	
	//enable or disable the twin's first checkbox
	//if there is nothing marked, enable it, else, disable it.
	if (numEnabled == 0) {
		getTwinStart.disabled = false;
	}
	else if (numEnabled > 0) {
		getTwinStart.disabled = true;
	}
}

function getNumberEnabled(cName) {
	//helper function
	var allWithName = document.getElementsByClassName(cName);
	var count = 0;
	
	//iterate over the fields and count how many are checked.
	for (i = 0; i < allWithName.length; i++) {
		if (allWithName[i].checked) 
			count++;
	}
	
	return count;
}

function processInput() {
	
	//get all the fields from the form.
	var data = new FormData(document.getElementById("techgen"));
	
	//get all the fields marked as advantages
	var allAdvant = document.getElementsByName("advantage[]");
	
	//get the fields in the designated "landing spot".
	var sigName = document.getElementById("techname");
	var techCost = document.getElementById("techXPcost");
	var techKi = document.getElementById("techKicost");
	var techSustain = document.getElementById("techSustaincost");
	var advLst = document.getElementById("advList");
	var disLst = document.getElementById("disadvList");
	
	//store the first class name in a temp variable
	var lastClassName = allAdvant[0].className;
	
	//if the first one is checked, this becomes two, otherwise, 0.
	//this is not a running count of the advantages the user picked, but 
	//the increased Ki and sustain costs they pick up through the advantages.
	var totalAdvantages = (allAdvant[0].checked ? 2 : 0);
	
	for (i = 1; i < allAdvant.length; i++) {
		//iterate over the advantages. If the last class name is different than the current, increase totalAdvantages by two
		if (allAdvant[i].checked && lastClassName != allAdvant[i].className) {
			totalAdvantages += 2;
		} //else, by 1, but only if allAdvant[i] is checked
		else if (allAdvant[i].checked && lastClassName == allAdvant[i].className)  {
			totalAdvantages += 1;
		}
		lastClassName = allAdvant[i].className; //store the current class name as we iterate.
	}

	//Add the costs together.
	kiCost += totalAdvantages;
	sustainCost += totalAdvantages;
	
	//Get the data for the user's input here.
	var firstTech = data.get("isFirst");
	var techOption = data.get("techtype");
	
	//if they didn't pick Defensive, their attack has no Sustain Cost.
	if (techOption != "Defensive") {
		sustainCost = 0;
	}
	
	//if the user picked Energy, then we have one more operation to do.
	if (techOption == "Energy") {
		//get which energy attack type they selected and update the relevant fields.
		var enType = data.get("energyType");
		
		if (enType == "sphere") {
			xpCost += 5;
			firstLimit -= 5;
			kiCost += 3;
		}
		else if (enType == "blast") {
			xpCost += 6;
			firstLimit -= 6;
			kiCost += 4;
		}
		else if (enType == "explosion") {
			xpCost += 8;
			firstLimit -= 8;
			kiCost += 6;
		}
		else if (enType == "beam") {
			xpCost += 10;
			firstLimit -= 10;
			kiCost += 5;
		}
	}
	//Calculations done, show the user their completed technique
	//if it's their first, make a note if their input is okay (remaining points >= 0)
	//else, show their total xp cost and everything else, in the relevant fields.
	sigName.textContent = "Tech Name: " + data.get("techName");
	if (firstTech === "No") {
		techCost.textContent = "XP Cost: " + xpCost.toString();
	}
	else {
		techCost.textContent = "Points Left: " + firstLimit.toString() + (firstLimit >= 0 ? " Input OK" : " Input not OK");
	}
	techKi.textContent = "Ki Cost: " + kiCost.toString();
	techSustain.textContent = "Sustain Cost: " + sustainCost.toString();
	advLst.textContent = "List of dynamic advantages: " + data.get("listAdv");
	disLst.textContent = "List of dynamic disadvantages: " + data.get("listDis");

}

//update sections relating to choosing the energy attack regularly so the relevant info is surely displayed.
var energyOnlyFields = setInterval(updateEnergySelection, 100);
var energyType = setInterval(updateEnergyType, 100);