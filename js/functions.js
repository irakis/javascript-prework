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

function displayResults(argComputerMove, argplayerInput) {
	printMessage("Zagrałem " + argComputerMove + "a Ty" + argplayerInput)
	if (argComputerMove == "kamień" && argplayerInput == "nożyce") {
		printMessage("Teraz ja wygrałem")
	} else if (argComputerMove == "papier" && argplayerInput == "kamień") {
		printMessage("Teraz ja wygrałem")
	} else if (argComputerMove == "nożyce" && argplayerInput == "papier") {
		printMessage("Ja wygrałem")
	} else if (argComputerMove == argplayerInput) {
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
