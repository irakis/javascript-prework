{
    function playGame(playerMove) {
        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log ("wylosowana liczba: ",randomNumber);

        const computerMove = getMoveName(randomNumber);

        console.log('Nazwa ruchu komputera: ' + computerMove);

        const playerMoveName = getMoveName(playerMove);

        printMessage('Mój ruch to: ' + computerMove);

        printMessage('Twój ruch to: ' + playerMoveName);

        console.log("ruch gracza do displaya to: " + playerMoveName);

        displayResult(computerMove, playerMoveName);

        console.log("widzi argumenty do wyświetlania?" + computerMove + "," + playerMoveName);
    }
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    })
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    })
    document.getElementById('play-scissor').addEventListener('click', function () {
        playGame(3);
    });
}