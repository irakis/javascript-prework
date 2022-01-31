function getMoveName(playerMove) {
	if (playerMove == 1) {
		return "kamień"
	} else if (playerMove == 2) {
		return "papier"
	} else if (playerMove == 3) {
		return "nożyce"
	} else {
		return "nieznany ruch";
	}
}

function displayResult(computerMove, playerMoveName) {

	console.log("co widzi funkcja disp?: ",	computerMove, playerMoveName)
	
	printMessage("Zagrałem " + computerMove + " a Ty " + playerMoveName)
	if (computerMove == "kamień" && playerMoveName == "nożyce") {
		printMessage("Teraz ja wygrałem");
	} else if (computerMove == "papier" && playerMoveName == "kamień") {
		printMessage("Teraz ja wygrałem");
	} else if (computerMove == "nożyce" && playerMoveName == "papier") {
		printMessage("Ja wygrałem");
	} else if (computerMove == playerMoveName) {
		printMessage("Remis.");
	} else { printMessage("Ty wygrywasz"); }
}

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}
