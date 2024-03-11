const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]
const nAttempts = 8
const word = words[Math.floor(Math.random() * words.length)]
let guessed = ""
const mask = (w) => [...w].reduce((acc, ch) => acc + (guessed.includes(ch) ? ch : '-'), "");

console.log("H A N G M A N")
for (let i = 0; i < nAttempts; i++) {
    const ch = input(`\n${mask(word)}\nInput a letter: `)
    if (word.includes(ch)) {
        guessed += ch
    } else {
        console.log("That letter doesn't appear in the word.")
    }
}
console.log("Thanks for playing!")
