var response = null;
var xml = null;
window.onload = function () {

	var xmlHTTP = new XMLHttpRequest();
	xmlHTTP.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			response = this.responseText;
			xml = this;
		}
	}
		
	xmlHTTP.open('GET', 'data/ygogames.xml', true);
	xmlHTTP.send();
}

function processInput() {
	
	//get all the fields from the form.
	var data = new FormData(document.getElementById("gameinfo"));
	
	var nameOfGame = data.get("roomName");
	var maxPlayers = String(data.get("maxPlayers"));
	var startLP = String(data.get("startLP"));
	var bPenalty = document.getElementById("penalty").checked;
	var penalty = bPenalty ? "yes" : "no";
	
	if (xml == null) {
		alert("Cannot access xml file!");
		return;
	}
	
	var xmlDoc = xml.responseXML;
	var rootElem = xmlDoc.documentElement;
	
	var newNode = xmlDoc.createElement("game");
	newNode.setAttribute("id", nameOfGame);
	newNode.setAttribute("startLP", startLP);
	newNode.setAttribute("maxPlayers", maxPlayers);
	newNode.setAttribute("penalty", penalty);
	newNode.setAttribute("status", "waiting");
	
}