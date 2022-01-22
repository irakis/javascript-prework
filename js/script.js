let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == "kamień" && playerInput == "nożyce") {
	printMessage("Teraz ja wygrałem")
} else if (computerMove == "papier" && playerInput == "kamień") {
	printMessage("Teraz ja wygrałem")
} else if (computerMove == "nożyce" && playerInput == "papier") {
	printMessage("Ja wygrałem")
} else if (computerMove == playerInput) {
	printMessage("Remis.")
} else { printMessage("Ty wygrywasz"); }