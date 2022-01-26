function playGame(playerMove) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    //let playerMove = getMoveName(playerInput);
   
    printMessage('Twój ruch to: ' + getMoveName(playerMove));

    displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
playGame(1);
})
document.getElementById('play-paper').addEventListener('click', function(){
playGame(2);
})
document.getElementById('play-scissor').addEventListener('click', function(){
playGame(3);
});