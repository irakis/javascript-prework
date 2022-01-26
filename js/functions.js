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
		printMessage("Zagrałem " + computerMove + " a Ty " + getMoveName(playerMove))
	if (computerMove == "kamień" && getMoveName(playerMove) == "nożyce") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "papier" && getMoveName(playerMove) == "kamień") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "nożyce" && getMoveName(playerMove) == "papier") {
		printMessage("Ja wygrałem")
	} else if (computerMove == getMoveName(playerMove)) {
		printMessage("Remis.")
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
