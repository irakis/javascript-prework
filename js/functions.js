function getMoveName(randomNumber) {
	if (randomNumber == 1) {
		return "kamień"
	} else if (randomNumber == 2) {
		return "papier"
	} else if (randomNumber == 3) {
		return "nożyce"
	} else {
		printMessage('Nie znam ruchu o id ' + randomNumber + '.');
		return 'nieznany ruch';
	}
}

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
	if (computerMove == "kamień" && playerMove == "nożyce") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "papier" && playerMove == "kamień") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "nożyce" && playerMove == "papier") {
		printMessage("Ja wygrałem")
	} else if (computerMove == playerMove) {
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
