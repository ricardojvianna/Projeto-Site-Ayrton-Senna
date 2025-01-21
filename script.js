
const cardFrame = document.querySelector("iframe")
const cardMask = document.querySelector(".card-mask")

function visibleFrame() {
     cardFrame.style.left = "480px"
     cardMask.style.visibility = "visible"
}

cardMask.addEventListener("click", function () {
     cardFrame.style.left = "-560px"
     cardMask.style.visibility = "hidden"

})

// javascript do frame e botão

const songButton = document.querySelector(".song-button")
let songAudio = document.querySelector(".song-f1")

function songPlay() {
     songAudio.play();
}

songButton.addEventListener("click", songPlay)

