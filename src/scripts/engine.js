const pianoKeys = document.querySelectorAll(".piano-keys .key")
let audio = new Audio("./src/tunes/a.wav") //new Audio(".src/tunes/a.wav")
const volumeSlider = document.querySelector(".volume-slider input")

let mapedKeys = [];
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key)
    }
})

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play(audio)
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => { clickedKey.classList.remove("active") }, 150)
};

const handleVolume = (e) => {
    audio.volume = e.target.value
}

volumeSlider.addEventListener("input", handleVolume)
