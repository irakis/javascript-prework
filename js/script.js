let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let computerMove ="nieznany ruch"


/*if(randomNumber == 1){
computerMove = 'kamień';
}*/

/*	else if(randomNumber == 2){
cmputerMove = "papier";
}
else if (randomNumber == 3){
computerMove = "nożyce"
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput)

let playerMove = 'nieznany ruch';


/* if(playerInput == '1'){
playerMove = 'kamień';
}

else if (playerInput == "2") {
playerMove = "papier"
}

else if (playerInput == "3") {
playerMove = "nożyce"
} */


printMessage('Twój ruch to: ' + playerMove);

if (computerMove =="kamień" && playerMove== "papier"){
	printMessage("Ty wygrywasz!")
}	else if (playerMove == "nożyce") {
		printMessage("Ja wygrywam!")
}	else if(playerMove== "kamień"){
	printMessage("Remis.")
}	else {
	printMessage("nieznany ruch")
}
if (computerMove== "nożyce" && playerMove=="papier") {
	printMessage("Ja wygrywam")
}	else if (playerMove== "nożyce"){
	printMessage("Remis")
}	else if(playerMove== "kamień"){
	printMessage("Ty wygrywasz")
}	else {
	printMessage("nieznany ruch")
}
if (computerMove== "papier" && playerMove=="papier") {
	printMessage("Remis")
}	else if (playerMove== "nożyce") {
	printMessage("Ty wygrywasz!")
}	else if(playerMove== "kamień"){
	printMessage("Ja wygrywam")
} else {
	printMessage ("nieznany ruch")
}
