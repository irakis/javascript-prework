function getMoveName(randomNumber) {
	if (randomNumber == 1) {
		return 'kamień'
	} else if (randomNumber == 2) {
		return "papier"
	} else if (randomNumber == 3) {
		return "nożyce"
	} else {
		printMessage('Nie znam ruchu o id ' + randomNumber + '.');
		return 'nieznany ruch';
	}
}

function getMoveName(playerInput) {
	if (playerInput == 1) {
		return "kamień"
	} else if (playerInput == 2) {
		return "papier"
	} else if (playerInput == 3) {
		return "nożyce"
	} else {
		return "nieznany ruch";
	}
}

function displayResult(computerMove, playerMove) {
	printMessage("Zagrałem " + computerMove + " a Ty " + playerMove);
	if (computerMove == "kamień" && playerMove == "nożyce") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "papier" && playerMove == "kamień") {
		printMessage("Teraz ja wygrałem")
	} else if (computerMove == "nożyce" && playerMove == "papier") {
		printMessage("Ja wygrałem")
		} else if (computerMove == playerMove) {
		printMessage("Remis.")
	} else if (computerMove == "kamień" && playerMove == "nieznany ruch") {
		printMessage("Nieznany ruch")
	} else if (computerMove == "papier" && playerMove == "nieznany ruch") {
		printMessage("Nieznany ruch")
	} else if (computerMove == "nożyce" && playerMove == "nieznany ruch") {
		printMessage("Nieznany ruch")
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
