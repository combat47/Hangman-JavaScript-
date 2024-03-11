const input = require('sync-input');

const words = ["python", "java", "swift", "javascript"];

function chooseRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function playHangman() {
    const selectedWord = chooseRandomWord();

    console.log("H A N G M A N");

    let userAnswer = input("Guess the word: ");

    console.log(userAnswer === selectedWord ? "You survived!" : "You lost!");
}

playHangman();
