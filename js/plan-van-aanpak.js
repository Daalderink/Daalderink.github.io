const playButton = document.querySelector(".play-button");
const sound = document.querySelector(".victory-sound")

function playVictorySound(){
  sound.play()
}

playButton.addEventListener("click", playVictorySound)