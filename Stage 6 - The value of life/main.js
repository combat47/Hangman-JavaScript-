const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]
const word = words[Math.floor(Math.random() * words.length)]
let guessed = ""
const mask = (w) => [...w].reduce((acc, ch) => acc + (guessed.includes(ch) ? ch : '-'), "");

console.log("H A N G M A N")
let nAttempts = 8
while (nAttempts) {
    const ch = input(`\n${mask(word)}\nInput a letter: `)
    if (guessed.includes(ch)) {
        console.log("No improvements.")
        nAttempts--
    } else if (word.includes(ch)) {
        guessed += ch
        if (!mask(word).includes('-')) break;
    } else {
        console.log("That letter doesn't appear in the word.")
        nAttempts--
    }
}
console.log(nAttempts ? "You guessed the word!\nYou survived!" : "You lost!")
