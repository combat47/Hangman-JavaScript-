const input = require('sync-input');

const words = ["python", "java", "swift", "javascript"];

function chooseRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function createMaskedWord(word) {
    return word.slice(0, 3) + "-".repeat(word.length - 3);
}

function playHangman() {
    const selectedWord = chooseRandomWord();

    const maskedWord = createMaskedWord(selectedWord);

    console.log(`H A N G M A N\nGuess the word ${maskedWord}:`);

    let userAnswer = input("> ");

    console.log(userAnswer === selectedWord ? "You survived!" : "You lost!");
}

playHangman();
