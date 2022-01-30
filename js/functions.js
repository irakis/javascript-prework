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

function displayResult(randomNumber, playerMoveName) {

	console.log("co widzi funkcja disp?: ",	randomNumber, playerMoveName)

	printMessage("Zagrałem " + randomNumber + " a Ty " + playerMoveName)
	if (randomNumber == "kamień" && playerMoveName == "nożyce") {
		printMessage("Teraz ja wygrałem");
	} else if (randomNumber == "papier" && playerMoveName == "kamień") {
		printMessage("Teraz ja wygrałem");
	} else if (randomNumber == "nożyce" && playerMoveName == "papier") {
		printMessage("Ja wygrałem");
	} else if (randomNumber == playerMoveName) {
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
