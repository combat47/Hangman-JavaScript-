const input = require('sync-input')
console.log(`H A N G M A N`);
const correctAnswer = "python";
let userAnswer = input("Guess the word: ");
console.log(userAnswer === correctAnswer ? "You survived!" : "You lost!");
