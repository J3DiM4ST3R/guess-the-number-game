let randomNumber;
let minNumber = 1;
let maxNumber = 100;

function startGame() {
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    document.getElementById('min-number').textContent = minNumber;
    document.getElementById('max-number').textContent = maxNumber;
    document.getElementById('result-message').textContent = '';
    document.getElementById('play-again').style.display = 'none';
}

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const guess = Number(guessInput.value);
    const resultMessage = document.getElementById('result-message');

    if (guess < minNumber || guess > maxNumber) {
        resultMessage.textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
        return;
    }

    if (guess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        document.getElementById('play-again').style.display = 'block';
    } else if (guess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
    } else {
        resultMessage.textContent = 'Too high! Try again.';
    }
}

function resetGame() {
    document.getElementById('guess-input').value = '';
    startGame();
}

// Start the game on page load
startGame();
