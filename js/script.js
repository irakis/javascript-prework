function playGame(computerMove, playerMove) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);


    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove)
}
document.getElementById('play-rock').addEventListener('click', function(){
    printMessage('Wybrałeś 1');
  })
  document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('wybrałeś 2');
  })
  document.getElementById('play-scissor').addEventListener('click', function(){
    printMessage('wybrałeś 3');
  });