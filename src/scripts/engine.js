const pianoKeys = document.querySelectorAll(".piano-keys .key")
let audio = new Audio("./src/tunes/a.wav") //new Audio(".src/tunes/a.wav")


pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play(audio)
}