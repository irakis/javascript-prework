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

function displayResult(computerMove, playerMove) {

	let computerMove = getMoveName(randomNumber);

		printMessage("Zagrałem " + computerMove + " a Ty " + playerMove)
	if (computerMove == "kamień" && playerMove == "nożyce") {
		printMessage("Teraz ja wygrałem");
	} else if (computerMove == "papier" && playerMove == "kamień") {
		printMessage("Teraz ja wygrałem");
	} else if (computerMove == "nożyce" && playerMove == "papier") {
		printMessage("Ja wygrałem");
	} else if (computerMove == playerMove) {
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
